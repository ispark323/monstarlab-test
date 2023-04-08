import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1680796827417 implements MigrationInterface {
    name = 'CreateTables1680796827417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`movie\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(100) NOT NULL, \`desc\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`favorite\` (\`movieId\` int NOT NULL, \`userId\` int NOT NULL, INDEX \`IDX_c2e2781471d2bcdea6c55845d1\` (\`movieId\`), INDEX \`IDX_83b775fdebbe24c29b2b5831f2\` (\`userId\`), PRIMARY KEY (\`movieId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`favorite\` ADD CONSTRAINT \`FK_c2e2781471d2bcdea6c55845d11\` FOREIGN KEY (\`movieId\`) REFERENCES \`movie\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`favorite\` ADD CONSTRAINT \`FK_83b775fdebbe24c29b2b5831f2d\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`favorite\` DROP FOREIGN KEY \`FK_83b775fdebbe24c29b2b5831f2d\``);
        await queryRunner.query(`ALTER TABLE \`favorite\` DROP FOREIGN KEY \`FK_c2e2781471d2bcdea6c55845d11\``);
        await queryRunner.query(`DROP INDEX \`IDX_83b775fdebbe24c29b2b5831f2\` ON \`favorite\``);
        await queryRunner.query(`DROP INDEX \`IDX_c2e2781471d2bcdea6c55845d1\` ON \`favorite\``);
        await queryRunner.query(`DROP TABLE \`favorite\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`movie\``);
    }

}
