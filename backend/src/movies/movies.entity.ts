import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 100 })
  title: string;

  @Column('text', { nullable: true })
  desc: string;

  @ManyToMany(() => User, (user) => user.favorites)
  @JoinTable({ name: 'favorite' })
  users: User[];
}
