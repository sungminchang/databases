CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  username varchar(255),
  msgtxt varchar(255),
  roomname varchar(255)
  -- createdAt DATETIME()
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

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

