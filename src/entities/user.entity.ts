import { Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Post } from "./post.entity";
export enum UserRole {
	ADMIN = "admin",
	USER = "user",
}

@Entity()
export class User {
	@PrimaryKey({ type: "uuid", defaultRaw: "gen_random_uuid()" })
	id!: string;

	@Property()
	username!: string;

	@Property({ unique: true })
	email!: string;

	@Property()
	password!: string;

	@Property()
	name!: string;

	@Property()
	role!: UserRole;

	@Property({ onCreate: () => new Date() })
	createdAt = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt = new Date();

	@Property()
	isActive = true;

	@Property()
	deletedAt?: Date;

	@OneToMany({ entity: () => Post, mappedBy: "author" })
	posts!: Post[];
}
