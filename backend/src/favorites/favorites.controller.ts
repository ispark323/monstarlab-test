import { Controller, Get, Post, Param, Req, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FavoritesService } from './favorites.service';

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
}
