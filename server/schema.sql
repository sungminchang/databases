-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  messageId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255),
  msgtxt varchar(255),
  roomname varchar(255),
  createdAt timestamp
);

CREATE TABLE users (
  username varchar(255)
  -- createdAt DATETIME()
  -- usernames
  -- createdAt
);

CREATE TABLE rooms (
  roomname varchar(255)
  -- roomname
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

