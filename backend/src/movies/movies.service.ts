import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findOne(id: number): Promise<Movie> {
    return await this.movieRepository.findOne({ where: { id: id } });
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async findBySearch(search: string): Promise<Movie[]> {
    return await this.movieRepository
      .createQueryBuilder('movie')
      .where('movie.title LIKE :search', { search: `%${search}%` })
      .getMany();
  }
}
