# Sample User Account Seed
INSERT INTO `sale_db`.`user_account` (`firstname`, `lastname`, `username`, `about`, `email`, `password`, `status`,`createdAt`, `updatedAt`) VALUES ('Mark	', 'Chaffin', 'mchaffin', 'to graduate', 'mark.chaffin@outlook.com', 'Fungi', 'Enabled','2018-07-16 09:00:00','2018-07-16 09:00:00');

# Sample Sale Event Seed
INSERT INTO `sale_db`.`sale_event` (`useraccount_id`, `address`, `city`, `state`, `zip`, `date`, `start_time`, `end_time`,`comments`, `photo_url`,`createdAt`, `updatedAt`) VALUES ('1', '123 Anywhere Lane', 'Minneapolis', 'MN', '55406', '2018-07-16', '2018-07-16 09:00:00', '2018-07-16 12:00:00','some comments for testing', 'http://via.placeholder.com/350x200','2018-07-16 09:00:00','2018-07-16 09:00:00');

INSERT INTO `sale_db`.`sale_event` (`useraccount_id`, `address`, `city`, `state`, `zip`, `date`, `start_time`, `end_time`,`comments`, `photo_url`,`createdAt`, `updatedAt`) VALUES ('1', '456 Anywhere Lane', 'Minneapolis', 'MN', '55406', '2018-07-16', '2018-07-16 09:00:00', '2018-07-16 12:00:00','some comments for testing', 'http://via.placeholder.com/350x200','2018-07-16 09:00:00','2018-07-16 09:00:00');

INSERT INTO `sale_db`.`sale_event` (`useraccount_id`, `address`, `city`, `state`, `zip`, `date`, `start_time`, `end_time`,`comments`, `photo_url`,`createdAt`, `updatedAt`) VALUES ('1', '789 Anywhere Lane', 'Minneapolis', 'MN', '55406', '2018-07-16', '2018-07-16 09:00:00', '2018-07-16 12:00:00','some comments for testing', 'http://via.placeholder.com/350x200','2018-07-16 09:00:00','2018-07-16 09:00:00');

INSERT INTO `sale_db`.`sale_event` (`useraccount_id`, `address`, `city`, `state`, `zip`, `date`, `start_time`, `end_time`,`comments`, `photo_url`,`createdAt`, `updatedAt`) VALUES ('1', '111 Anywhere Lane', 'Minneapolis', 'MN', '55406', '2018-07-16', '2018-07-16 09:00:00', '2018-07-16 12:00:00','some comments for testing', 'http://via.placeholder.com/350x200','2018-07-16 09:00:00','2018-07-16 09:00:00');


# Sample Item Category Seed
INSERT INTO `sale_db`.`item` (`sale_event_id`, `rank`, `category_name`,`createdAt`, `updatedAt`) VALUES ('1', '8', 'Electronics','2018-07-16 09:00:00','2018-07-16 09:00:00');

# Sample Photo Seed
INSERT INTO `sale_db`.`photo` (`item_id`, `url`,`createdAt`, `updatedAt`) VALUES ('1', '/photos/12345678.png','2018-07-16 09:00:00','2018-07-16 09:00:00');
