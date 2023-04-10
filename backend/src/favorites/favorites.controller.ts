import { Controller, Get, Post, Param, Req, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MoviesService } from '../movies/movies.service';
import { FavoritesService } from './favorites.service';
import { User } from '../users/users.entity';
import { Movie } from '../movies/movies.entity';

@Controller('api/favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getFavorites() {
    return [{ title: 'Monsters, Inc.' }];
  }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async favoriteMovie(@Param('id', ParseIntPipe) id: number, @Req() req): Promise<void> {
    const userId = req.user.userId;
    const movieId = id;

    await this.favoritesService.create(userId, movieId);
  }
  // @Post(':id')
  // @UseGuards(JwtAuthGuard)
  // async favoriteMovie(@Param('id', ParseIntPipe) id: number, @Req() req): Promise<void> {
  //   // const userId = req.user.userId;
  //   const movie: Movie = await this.moviesService.findOne(+id);
  //   const user: User = req.user;

  //   await this.favoritesService.favoriteMovie(user, movie);
  // }

  // @Post(':movieId')
  // @UseGuards(JwtAuthGuard)
  // async create(@Req() req, @Param('movieId') movieId: string) {
  //   const userId = req.user.userId;
  //   const user = await this.usersService.findOne(userId);
  //   const movie = await this.moviesService.findOne(parseInt(movieId));
  //   return this.favoritesService.create(user, movie);
  // }
}
