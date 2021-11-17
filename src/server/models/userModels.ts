// queries for users table
const createUserQuery = {
  text: `CREATE TABLE users(
  _id SERIAL PRIMARY KEY,
  display_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  passhash VARCHAR NOT NULL,
  profile_image VARCHAR NOT NULL
  );`,
  params: []
};

// queries for besties table
const createBestiesQuery = {
  text: `CREATE TABLE besties(
  _id SERIAL PRIMARY KEY,
  CONSTRAINT user1_id FOREIGN KEY (_id) REFERENCES users(_id),
  CONSTRAINT user2_id FOREIGN KEY (_id) REFERENCES users(_id),
  status VARCHAR NOT NULL DEFAULT 'pending'
  );`,
  params: []
};

//queries for questions and question_answers tables
const createQuestionsQuery = {
  text: `CREATE TABLE questions(
  _id SERIAL PRIMARY KEY,
  question VARCHAR NOT NULL
  );`,
  params: []
};

const createQuestionAnswersTable = {
  text: `CREATE TABLE question_answers(
  _id SERIAL PRIMARY KEY,
  CONSTRAINT user_id FOREIGN KEY (_id) REFERENCES users(_id),
  CONSTRAINT question_id FOREIGN KEY (_id) REFERENCES questions(_id),
  answer VARCHAR NOT NULL
  );`,
  param: []
};
