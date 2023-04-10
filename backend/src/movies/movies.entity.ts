import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Favorite } from '..//favorites/favorites.entity';

@Entity('movie')
export class Movie {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 100 })
  title: string;

  @Column('text', { nullable: true })
  desc: string;

  // @ManyToMany(() => User, (user) => user.favorites)
  // @JoinTable()
  // favorites: Favorite[];

  @OneToMany(() => Favorite, (favorite) => favorite.movie, { onDelete: 'SET NULL' })
  favorites: Favorite[];
}
