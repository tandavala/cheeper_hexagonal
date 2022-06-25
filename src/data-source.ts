import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "dev",
  password: "dev",
  database: "dev",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
