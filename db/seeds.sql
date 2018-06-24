
# Sample User Account Seed
INSERT INTO `sale_db`.`user_account` (`firstname`, `lastname`, `username`, `about`, `email`, `password`, `last_login`, `status`) VALUES ('Mark	', 'Chaffin', 'mchaffin', 'to graduate', 'mark.chaffin@outlook.com', 'Fungi', '01/01/2018', 'Enabled');

# Sample Sale Event Seed
INSERT INTO `sale_db`.`sale_event` (`useraccount_id`, `address`, `city`, `state`, `zip`, `date`, `start_time`, `end_time`) VALUES ('1', '123 Anywhere Lane', 'Minneapolis', 'MN', '55406', '01/01/2018', '12:00:00', '17:00:00');

# Sample Item Category Seed
INSERT INTO `sale_db`.`item` (`sale_event_id`, `rank`, `category_name`) VALUES ('1', '8', 'Electronics');

# Sample Photo Seed
INSERT INTO `sale_db`.`photo` (`item_id`, `url`) VALUES ('1', '/photos/12345678.png');