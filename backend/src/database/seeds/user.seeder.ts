import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../users/users.entity';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(User);
    await repository.insert([
      {
        username: 'john',
      },
      {
        username: 'maria',
      },
    ]);
  }
}
