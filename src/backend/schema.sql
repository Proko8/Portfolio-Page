DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;

\c portfolio;

CREATE TABLE recruiter_info (
  id SERIAL PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  company CHAR(50) NOT NULL,
  email CHAR(50) NOT NULL
);


INSERT INTO recruiter_info (firstName, lastName, company, email) 
VALUES('Paul', 'Prokopy', 'Galvanize Inc.', 'pprokopy@gmail.com');


