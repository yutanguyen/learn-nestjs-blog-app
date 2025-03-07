import { PostgreSqlDriver, Options } from "@mikro-orm/postgresql";

// TODO: add config from env
const mikroOrmConfig: Options = {
	driver: PostgreSqlDriver,
	entities: ["dist/entities/*.entity.js"],
	entitiesTs: ["src/entities/*.entity.ts"],
	dbName: "blog_db",
	user: "postgres",
	password: "supersecret",
	host: "localhost",
	port: 5432,
};

export default mikroOrmConfig;
