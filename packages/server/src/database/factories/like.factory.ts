import { faker }  from "@faker-js/faker";import { define } from "typeorm-seeding";
import { Like } from "../../entity/Like";

define(Like, () => {
  const like = new Like();
  like.createdAt = faker.date.past();
  return like;
});
