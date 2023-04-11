import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Favorite } from '../favorites/favorites.entity';

@Entity('movie')
export class Movie {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 100 })
  title: string;

  @Column('text', { nullable: true })
  desc: string;

  @OneToMany(() => Favorite, (favorite) => favorite.movie, { onDelete: 'SET NULL' })
  favorites: Favorite[];
}
