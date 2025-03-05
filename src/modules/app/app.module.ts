import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import mikroOrmConfig from "../../configs/mikro-orm.config";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "../user/user.module";
import { PostModule } from "../post/post.module";
import { CategoryModule } from "../category/category.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MikroOrmModule.forRoot(mikroOrmConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    UserModule,
    PostModule,
    CategoryModule,
  ],
})
export class AppModule { }
