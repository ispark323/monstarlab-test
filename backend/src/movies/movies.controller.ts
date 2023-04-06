import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('api/movies')
export class MoviesController {
  @Get()
  getMovies(@Query() params: any): any {
    if (params.search) {
      return { search: params.search };
    } else {
      return [{ title: 'Monsters, Inc.' }, { title: 'Matrix' }];
    }
  }

  @Get(':id')
  getOneMovie(@Param('id') id: string) {
    return {
      id,
    };
  }
}
