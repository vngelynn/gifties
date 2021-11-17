import express from 'express';

const router = express.Router();
import * as giftController from '../controllers/gift-controller';

// TODO: create verifyUser middleware to check for current jwt
// TODO: create getWishList middleware to get user's wish list
router.get('/wish-list/:id', giftController.retrieveWishList, (req, res) => {
  res.status(200).json(res.locals.wishList);
});

// // TODO: create getShoppingList middleware to get user's wish list
// router.get('/shopping-list', verifyUser, getShoppingList, (req, res) => {
//   res.status(200).send([]);
// });

// TODO: create createGift middleware to add gift to user's wish list
router.post('/:id', giftController.createGift, giftController.addGiftToWishList, giftController.retrieveWishList, (req, res) => {
  res.status(200).json(res.locals.wishList);
});

// TODO: create updateGift middleware to update user's wish list
// router.patch('/:id', verifyUser, updateGift, (req, res) => {
//   res.status(200).send([]);
// });

// // TODO: create deleteGift middleware to update user's wish list
// router.delete('/:id', verifyUser, deleteGift, (req, res) => {
//   res.status(200).send([]);
// });

export default router;
