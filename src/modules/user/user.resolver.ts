import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class UserResolver {
	@Query(() => String)
	hello() {
		return "Hello World";
	}

	@Query(() => String)
	users() {
		return "Hello Users";
	}
}
