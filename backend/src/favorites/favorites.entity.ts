import { Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Movie } from '../movies/movies.entity';

@Entity('favorite')
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.favorites)
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.favorites)
  movie: Movie;
}
