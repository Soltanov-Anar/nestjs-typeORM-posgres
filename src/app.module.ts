import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { AppDataSource } from './data-source';
import { PersonModule } from './person/person.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      sortSchema: true
    }),
    TypeOrmModule.forRoot(AppDataSource.options),
    UsersModule,
    PersonModule,
    CarModule,
  ],
  providers: [],
})
export class AppModule { }
