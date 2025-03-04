import { Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Post } from "./post.entity";
@Entity()
export class Category {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id!: string;

  @Property()
  name!: string;

  @Property()
  slug!: string;

  @ManyToMany({ entity: () => Post, inversedBy: 'categories' })
  posts!: Post[];

  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();
}
