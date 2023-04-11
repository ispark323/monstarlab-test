import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../movies/movies.entity';
import { Favorite } from './favorites.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepository: Repository<Favorite>,
  ) {}

  async getFavorites(userId: number): Promise<Movie[]> {
    const favorites = await this.favoriteRepository.find({ where: { user: { id: userId } }, relations: ['movie'] });

    return favorites.map((favorite) => favorite.movie);
  }

  async create(userId: number, movieId: number): Promise<Favorite> {
    const favorite = new Favorite();
    favorite.user = { id: userId } as any;
    favorite.movie = { id: movieId } as any;

    return await this.favoriteRepository.save(favorite);
  }
}
