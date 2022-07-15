import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: 'admin',
  password: '123456',
  database: 'pgdata',
  entities: ['dist/**/*.entity.js'],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  migrations: ['dist/**/path-to-migrations-dir/*.js'],
  migrationsTableName: 'history'
});
