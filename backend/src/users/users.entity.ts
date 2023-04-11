import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Favorite } from '../favorites/favorites.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  username: string;

  @OneToMany(() => Favorite, (favorite) => favorite.user, { onDelete: 'SET NULL' })
  favorites: Favorite[];
}
