import { Module } from "@nestjs/common";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Category } from "../../entities/category.entity";

@Module({
	imports: [MikroOrmModule.forFeature([Category])],
	providers: [CategoryResolver, CategoryService],
	exports: [CategoryService],
})
export class CategoryModule {}
