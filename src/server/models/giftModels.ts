// queries for gifts table
const createGiftsTable = `CREATE TABLE gifts(
  _id SERIAL PRIMARY KEY,
  label VARCHAR NOT NULL,
  description VARCHAR,
  link VARCHAR,
  status VARCHAR NOT NULL DEFAULT 'available'
  );`

// queries for wish_lists table
const createWishListsTable = `CREATE TABLE wish_lists(
  _id SERIAL PRIMARY KEY,
  CONSTRAINT gift_id FOREIGN KEY (_id) REFERENCES gifts(_id),
  CONSTRAINT user_id FOREIGN KEY (_id) REFERENCES users(_id)
  );`

// queries for shopping_lists table
const createShoppingListsTable = `CREATE TABLE shopping_lists(
  _id SERIAL PRIMARY KEY,
  CONSTRAINT gift_id FOREIGN KEY (_id) REFERENCES gifts(_id),
  CONSTRAINT user_id FOREIGN KEY (_id) REFERENCES users(_id)
  );`
