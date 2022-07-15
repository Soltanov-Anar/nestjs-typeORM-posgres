import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1657800322861 implements MigrationInterface {
  name = 'FirstMigration1657800322861'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "car" ("id" SERIAL NOT NULL, "model" character varying NOT NULL, "make" character varying NOT NULL, "year" integer, "color" character varying, "personId" integer, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "name" character varying, "enum" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "surname"`);
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "person" ADD "firstName" character varying NOT NULL`);
    await queryRunner.query(`ALTER TABLE "person" ADD "lastName" character varying NOT NULL`);
    await queryRunner.query(`ALTER TABLE "person" ADD "age" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "car" ADD CONSTRAINT "FK_682034da8e53ef1bd0c679d63e0" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "car" DROP CONSTRAINT "FK_682034da8e53ef1bd0c679d63e0"`);
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "age"`);
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "lastName"`);
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "firstName"`);
    await queryRunner.query(`ALTER TABLE "person" ADD "name" character varying(255)`);
    await queryRunner.query(`ALTER TABLE "person" ADD "surname" character varying(255)`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "car"`);
  }

}
