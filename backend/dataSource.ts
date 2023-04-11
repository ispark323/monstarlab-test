import { User } from './src/users/users.entity';
import { Movie } from './src/movies/movies.entity';
import { Favorite } from './src/favorites/favorites.entity';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'monstar',
  username: 'test',
  password: 'password',
  entities: [User, Movie, Favorite],
  migrations: ['src/database/migration/**/*.ts'],
  synchronize: false, // change to false in production
});

export default dataSource;
