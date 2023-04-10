import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { User } from '../users/users.entity';
// import { Movie } from '../movies/movies.entity';
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

  // async favoriteMovie(user: User, movie: Movie): Promise<Favorite> {
  //   const favorite = new Favorite();
  //   favorite.user = user;
  //   favorite.movie = movie;
  //   return this.favoriteRepository.save(favorite);
  // }
}
