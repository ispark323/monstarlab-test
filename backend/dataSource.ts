import { User } from './src/users/users.entity';
import { Movie } from './src/movies/movies.entity';
import { Favorite } from 'src/favorites/favorites.entity';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  // type: 'postgres',
  host: 'localhost',
  port: 3306,
  // port: 5432,
  database: 'monstar',
  username: 'test',
  // username: 'postgres',
  password: 'password',
  entities: [User, Movie, Favorite],
  migrations: ['src/database/migration/**/*.ts'],
  synchronize: true,
});

export default dataSource;
