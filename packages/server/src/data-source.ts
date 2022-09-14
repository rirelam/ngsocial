import "reflect-metadata";import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./data/socialdb.db",
  synchronize: true,
  logging: false,
  entities: ["./entity/**/*.ts"],
  migrations: ["./migration/**/*.ts"],
  subscribers: ["/subscriber/**/*.ts"],
});
