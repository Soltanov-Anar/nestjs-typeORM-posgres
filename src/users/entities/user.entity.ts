import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from "typeorm"
import { Field, ID, ObjectType } from "@nestjs/graphql"

enum Gender { MALE, FEMALE }

@ObjectType()
@Entity({ name: "users" })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updateAt: Date

  @Field()
  @Column()
  email: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string

  @Field({ nullable: true })
  @Column({ name: "enum", enum: Gender, nullable: true })
  gender: string
}