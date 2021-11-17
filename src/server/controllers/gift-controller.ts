import { Request, Response, NextFunction } from 'express';
import { db }  from './../models/db';
// import db from '../models/db';


// NOTE: I defined the two queries within functions in the models/giftModels folder, but the promises were not returning as expected

export const createGift = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { label, description, link } = req.body;

    // Query the DB to add a gift to the gifts table
    const giftQuery = {
    text: `INSERT INTO gifts (
      label, description, link
    )
    VALUES ($1, $2, $3)
    RETURNING _id`,
    params: [label, description, link]
    };
    db.query(giftQuery.text, giftQuery.params, (err: Error, dbResponse: any) => {
      if (err) {
        console.error(err.message);
      }
      console.log('createGiftResponse: ', dbResponse.rows);
      res.locals.giftID = dbResponse.rows[0]._id;
      return next();
    });
  }
    catch (err) {
    next(err);
  }
};

export const addGiftToWishList = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    // Query the DB to add a gift to the wish_list based on user_id
    const wishListQuery = {
      text: `INSERT INTO wish_lists(user_id, gift_id)
      VALUES ($1, $2)
      RETURNING *`,
      params: [id, res.locals.giftID]
    };
    db.query(wishListQuery.text, wishListQuery.params, (err: Error, dbResponse: any) => {
      if (err) {
        console.error(err.message);
      }
      console.log('addToWishListResponse: ', dbResponse);
    });
    return next();
  }

    catch (err) {
    next(err);
  }
};

export const retrieveWishList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    // SQL query for id's wishlist
    const retrieveWishListQuery = {
      text: `SELECT 
        wish_lists.gift_id AS gift_id,
        gifts.label, gifts.description, gifts.link
        FROM wish_lists
        LEFT JOIN gifts ON wish_lists.gift_id = gifts._id
        WHERE wish_lists.user_id = $1`,
      params: [id]
    };

    await db.query(retrieveWishListQuery.text, retrieveWishListQuery.params, (err: Error, dbResponse: any) => {
      if (err) {
        console.error(err.message);
      }
      console.log('retrieveWishListResponse: ', dbResponse.rows);
      res.locals.wishList = dbResponse.rows;
      next();
    });
    
  }
  
  catch (err) {
    next(err);
  }
};
