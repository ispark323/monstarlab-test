import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Movie } from '../movies/movies.entity';
import { Favorite } from '../favorites/favorites.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  username: string;

  // @ManyToMany(() => Movie)
  // @JoinTable({
  //   name: 'favorite',
  //   joinColumn: { name: 'user_id', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'movie_id', referencedColumnName: 'id' },
  // })
  // favorites: Favorite[];

  @OneToMany(() => Favorite, (favorite) => favorite.user, { onDelete: 'SET NULL' })
  favorites: Favorite[];
}
