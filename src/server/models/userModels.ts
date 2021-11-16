// queries for users table
const createUserTable = `CREATE TABLE users(
  _id SERIAL PRIMARY KEY,
  display_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  passhash VARCHAR NOT NULL,
  profile_image VARCHAR NOT NULL,
  );`

// queries for besties table
const createBestiesTable = `CREATE TABLE besties(
  _id SERIAL PRIMARY KEY,
  CONSTRAINT user1_id FOREIGN KEY (_id) REFERENCES users(_id),
  CONSTRAINT user2_id FOREIGN KEY (_id) REFERENCES users(_id),
  status VARCHAR NOT NULL DEFAULT 'pending'
);`

//queries for questions and question_answers tables
const createQuestionsTable = `CREATE TABLE questions(
  _id SERIAL PRIMARY KEY,
  question VARCHAR NOT NULL
  );`

const createQuestionAnswersTable = `CREATE TABLE question_answers(
  _id SERIAL PRIMARY KEY,
  CONSTRAINT user_id FOREIGN KEY (_id) REFERENCES users(_id),
  CONSTRAINT question_id FOREIGN KEY (_id) REFERENCES questions(_id),
  answer VARCHAR NOT NULL
  );`
