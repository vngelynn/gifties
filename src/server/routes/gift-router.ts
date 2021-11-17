import express from 'express';

const router = express.Router();

// TODO: create verifyUser middleware to check for current jwt
// TODO: create getWishList middleware to get user's wish list
router.get('/wish-list', verifyUser, getWishList, (req, res) => {
  res.status(200).send([]);
});

// TODO: create getShoppingList middleware to get user's wish list
router.get('/shopping-list', verifyUser, getShoppingList, (req, res) => {
  res.status(200).send([]);
});

// TODO: create createGift middleware to add gift to user's wish list
router.post('/:id', verifyUser, createGift, (req, res) => {
  res.status(200).send([]);
});

// TODO: create updateGift middleware to update user's wish list
router.patch('/:id', verifyUser, updateGift, (req, res) => {
  res.status(200).send([]);
});

// TODO: create deleteGift middleware to update user's wish list
router.delete('/:id', verifyUser, deleteGift, (req, res) => {
  res.status(200).send([]);
});

export { router as giftRouter };
