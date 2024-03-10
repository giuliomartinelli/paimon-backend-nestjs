import { MigrationInterface, QueryRunner } from "typeorm";

export class User1709857527803 implements MigrationInterface {
    name = 'User1709857527803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`taxId\` varchar(32) NOT NULL, \`email\` varchar(255) NOT NULL, \`firstName\` varchar(128) NOT NULL, \`lastName\` varchar(128) NOT NULL, \`password\` varchar(128) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
