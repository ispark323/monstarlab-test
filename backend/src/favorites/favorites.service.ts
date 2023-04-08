import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './favorites.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepository: Repository<Favorite>,
  ) {}

  async create(userId: number, movieId: number): Promise<Favorite> {
    const favorite = new Favorite();
    favorite.user = { id: userId } as any;
    favorite.movie = { id: movieId } as any;

    return await this.favoriteRepository.save(favorite);
  }
}
