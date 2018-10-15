create table users ( user_id int not null auto_increment primary key, first_name varchar(50), last_name varchar(50), designation varchar(50), email_id varchar(50), dob date, active boolean);

alter table users add constraint user_unique unique (first_name, last_name);