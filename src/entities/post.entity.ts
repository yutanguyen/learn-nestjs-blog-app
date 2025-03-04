import { Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Category } from "./category.entity";

export enum PostStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

@Entity()
export class Post {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id!: string;

  @Property()
  title!: string;

  @Property()
  slug!: string;

  @Property()
  content!: string;

  @Property()
  status!: PostStatus;

  @ManyToOne({ entity: () => User })
  author!: User;

  @ManyToMany({ entity: () => Category, mappedBy: 'posts' })
  categories!: Category[];

  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();

  @Property()
  deletedAt?: Date;
}
