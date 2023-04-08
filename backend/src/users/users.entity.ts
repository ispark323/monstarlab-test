import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Movie } from '../movies/movies.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  username: string;

  @ManyToMany(() => Movie)
  @JoinTable({ name: 'favorite' })
  favorites: Movie[];
}
