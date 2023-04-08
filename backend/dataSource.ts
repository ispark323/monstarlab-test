import { User } from 'src/users/users.entity';
import { Movie } from 'src/movies/movies.entity';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'monstar',
  username: 'test',
  password: 'password',
  entities: [User, Movie],
  migrations: ['src/migration/**/*.ts'],
  synchronize: true,
});

export default dataSource;
