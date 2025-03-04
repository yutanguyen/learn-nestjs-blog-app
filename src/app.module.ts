import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './mikro-orm.config';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';
import { Category } from './entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MikroOrmModule.forRoot(mikroOrmConfig),
    MikroOrmModule.forFeature([User, Post, Category]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
