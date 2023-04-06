import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('api/favorites')
export class FavoritesController {
  @Get()
  getFavorites() {
    return [{ title: 'Monsters, Inc.' }];
  }

  @Post(':id')
  favoriteMovie(@Param('id') id: string) {
    return {
      id,
    };
  }
}
