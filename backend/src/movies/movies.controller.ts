import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movies.entity';

@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getMovies(@Query() params: any): Promise<Movie[]> {
    if (params.search) {
      // return { search: params.search };
    } else {
      return await this.moviesService.findAll();
    }
  }

  @Get(':id')
  async getOneMovie(@Param('id') id: number): Promise<Movie> {
    return await this.moviesService.findOne(id);
  }
}
