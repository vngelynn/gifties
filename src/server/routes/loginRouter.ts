import { Router } from 'express';

const router = Router();

router.use((req, res) => {
  res.json({
    user: {
      userId: 202,
      name: 'Michael',
      email: 'michael@dundermifflin.com',
      profileImage: 'www.featherlessbird.com',
    },
    besties: [
      {
        id: 0,
        name: 'Adam'
      },
      {
        id: 1,
        name: 'Angelynn'
      },
      {
        id: 2,
        name: 'Jackie'
      },
    ],
    shoppingList: [
      {
        id: 0,
        label: 'test1',
        status: 'available'
      },
      {
        id: 1,
        label: 'test2',
        status: 'purchased'
      },
    ],
    wishList: [
      {
        id: 303,
        label: 'Chicken wings',
        description: 'uncooked',
        link: 'www.nocook.com',
        status: 'available',
      },
    ]
  });
});

export default router;
