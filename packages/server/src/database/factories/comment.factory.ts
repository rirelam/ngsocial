import { faker } from "@faker-js/faker";
import { define, factory } from "typeorm-seeding";
import { Comment } from "../../entity/Comment";

define(Comment, () => {
  const comment = new Comment();
  comment.comment = faker.lorem.text();
  comment.createdAt = faker.date.past();
  return comment;
});
