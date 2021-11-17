import { Request, Response, NextFunction } from 'express';
const db = require('../models/db');


// NOTE: I defined the two queries within functions in the models/giftModels folder, but the promises were not returning as expected

export const createGift = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { label, description, link } = req.body;
    let giftID;

    // Query the DB to add a gift to the gifts table
    const giftQuery = {
    text: `INSERT INTO gifts (
      label, description, link
    )
    VALUES ($1, $2, $3)
    RETURNING _id`,
    params: [label, description, link]
    };
    await db.query(giftQuery.text, giftQuery.params, (err: Error, dbResponse: any) => {
      if (err) {
        console.error(err.message);
      } 
      giftID = dbResponse.rows[0]._id;
      console.log('giftID: ', giftID);
      res.locals.giftID = giftID;
    });
    return next();
  }
    catch (err) {
    next(err);
  }
};


export const addGiftToWishList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    // Query the DB to add a gift to the wish_list based on user_id
    const wishListQuery = {
      text: `INSERT INTO wish_lists(user_id, gift_id)
      VALUES ($1, $2)
      RETURNING *`,
      params: [id, res.locals.giftID]
    };
    await db.query(wishListQuery.text, wishListQuery.params, (err: Error, dbResponse: any) => {
      if (err) {
        console.error(err.message);
      }
      console.log('dbResponse: ', dbResponse);
    });
    return next();
  }

    catch (err) {
    next(err);
  }
};
