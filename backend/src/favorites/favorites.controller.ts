import { Controller, Get, Post, Param, Req, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FavoritesService } from './favorites.service';
import { Movie } from '../movies/movies.entity';

@Controller('api/favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getFavorites(@Req() req): Promise<Movie[]> {
    const userId = req.user.userId;

    return this.favoritesService.getFavorites(userId);
  }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async favoriteMovie(@Param('id', ParseIntPipe) id: number, @Req() req): Promise<void> {
    const userId = req.user.userId;
    const movieId = id;

    await this.favoritesService.create(userId, movieId);
  }
}
