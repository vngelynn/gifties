const db = require('../models/db');

// queries for gifts table
const createGiftsQuery = {
  text: `CREATE TABLE gifts(
  _id SERIAL PRIMARY KEY,
  label VARCHAR NOT NULL,
  description VARCHAR,
  link VARCHAR,
  status VARCHAR NOT NULL DEFAULT 'available'
  );`,
  params: []
}

// queries for wish_lists table
const createWishListsQuery = {
  text: `CREATE TABLE wish_lists(
  _id SERIAL PRIMARY KEY,
  CONSTRAINT gift_id FOREIGN KEY (_id) REFERENCES gifts(_id),
  CONSTRAINT user_id FOREIGN KEY (_id) REFERENCES users(_id)
  );`,
  params: []
}

// queries for shopping_lists table
const createShoppingListsQuery = {
  text: `CREATE TABLE shopping_lists(
  _id SERIAL PRIMARY KEY,
  CONSTRAINT gift_id FOREIGN KEY (_id) REFERENCES gifts(_id),
  CONSTRAINT user_id FOREIGN KEY (_id) REFERENCES users(_id)
  );`,
  params: []
}
