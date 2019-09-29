CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE `workers` (
  `worker_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL
  `name` varchar(55) NOT NULL,
  `surname` varchar(55) NOT NULL,
  `middlename` varchar(55),
  `department_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `deparment_id` int(11) NOT NULL,
  PRIMARY KEY (`worker_id`),
      FOREIGN KEY (`role_id`)
    REFERENCES `roles` (`role_id`),
    FOREIGN KEY (`user_id`)
        REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `departments` (
  `department_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `head` int(11) NOT NULL,
  PRIMARY KEY (`department_id`),
        FOREIGN KEY (`head`)
    REFERENCES `workers` (`worker_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

ALTER TABLE `workers`
ADD FOREIGN KEY (`department_id`)
    REFERENCES `departments` (`department_id`)


CREATE TABLE `sources` (
  `source_id` int(11) NOT NULL AUTO_INCREMENT,
  `source_title` varchar(55) NOT NULL,
  PRIMARY KEY (`source_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `statuses` (
  `status_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE `leads` (
  `lead_id` int(11) NOT NULL AUTO_INCREMENT,
  `source` int(11) NOT NULL,
  `fio` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(55),
  `address` varchar(255),
  `status` int(11) NOT NULL,
  `supervisor` int(11) NOT NULL,
  `responsible` int(11) NOT NULL,
  `creation_date` datetime NOT NULL,
  `comment` varchar(255),
  PRIMARY KEY (`lead_id`),

          FOREIGN KEY (`source`)
    REFERENCES `sources` (`source_id`),

    FOREIGN KEY (`status`)
    REFERENCES `statuses` (`status_id`),

     FOREIGN KEY (`supervisor`)
    REFERENCES `workers` (`worker_id`),

    FOREIGN KEY (`responsible`)
    REFERENCES `workers` (`worker_id`)

) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
