import { Module } from "@nestjs/common";
import { PostResolver } from "./post.resolver";
import { PostService } from "./post.service";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Post } from "../../entities/post.entity";

@Module({
	imports: [MikroOrmModule.forFeature([Post])],
	providers: [PostResolver, PostService],
	exports: [PostService],
})
export class PostModule {}
