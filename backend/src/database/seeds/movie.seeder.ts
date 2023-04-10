import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Movie } from '../..//movies/movies.entity';

export default class MovieSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Movie);
    await repository.insert([
      {
        title: 'Monsters, Inc.',
        desc: 'Monsters, Inc. is a 2001 American computer-animated comedy film produced by Pixar Animation Studios for Walt Disney Pictures.',
      },
      {
        title: 'Interstellar',
        desc: 'Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan.',
      },
    ]);
  }
}
