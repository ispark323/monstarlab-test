import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { FavoritesModule } from './favorites/favorites.module';
import { User } from './users/users.entity';
import { Movie } from './movies/movies.entity';
import { Favorite } from './favorites/favorites.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 3306),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      entities: [User, Movie, Favorite],
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    UsersModule,
    MoviesModule,
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
