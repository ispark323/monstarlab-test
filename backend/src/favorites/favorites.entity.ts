import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Movie } from '../movies/movies.entity';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.favorites)
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.favorites)
  movie: Movie;
}
