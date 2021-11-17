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
        name: 'Adam Sheff'
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
        id: 1,
        label: 'Mario Cart',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      },
      {
        id: 2,
        label: 'Mario Cart2',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      },
      {
        id: 3,
        label: 'Mario Cart3',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      },
      {
        id: 4,
        label: 'Mario Cart4',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      },
      {
        id: 5,
        label: 'Mario Cart5',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      }
    ]
  });
});

export default router;
