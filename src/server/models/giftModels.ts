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

const getWishList = {
  // TODO: Complete and test this query
  // select label, description, link, and status from 'gifts'
  // join on user_id, gift_id
  // where user_id = userID
  //** Find all the gifst in 'wish_lists where user_id = userID */
  // text: `SELECT 
  //   gifts.label, gifts.description, gifts.link, gifts.status, wish_lists.user_id
  //   FROM gifts INNER JOIN wish_lists ON (gifts._id = wish_lists.gift_id)
  //   WHERE wish_lists.user_id = ${userID};
  // `
}

export const createGift = (label, description, link) => {
  const query = {
  text: `INSERT INTO gifts(label, description, link)
  VALUES ($1, $2, $3)
  RETURNING _id`,
  params: [label, description, link]
  };
  db.query(query, (dbResponse) => {
    return dbResponse.rows;
  })
}

export const addGiftToWishList = (userID, giftID) => {
  const query = {
    text: `INSERT INTO wish_lists(user_id, gift_id)
    VALUES ($1, $2)`,
    params: [userID, giftID]
  };
  db.query(query, dbResponse) => {
    return dbResponse.rows;
  }
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
