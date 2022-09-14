import { faker} from "@faker-js/faker";
import { define } from "typeorm-seeding";
import { Notification } from "../../entity/Notification";

define(Notification, () => {
  const notification = new Notification();
  notification.text = faker.lorem.words();
  notification.postId = 1;
  notification.createdAt = faker.date.past();
  return notification;
});
