CREATE TABLE `tokens` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `token_user_id_idx` (`user_id` ASC),
  CONSTRAINT `token_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
ALTER TABLE `tokens`
CHANGE COLUMN `id` `id` VARCHAR(40) NOT NULL ;