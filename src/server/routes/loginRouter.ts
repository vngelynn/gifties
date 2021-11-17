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
        label: 'Tamagotchi',
        description: 'i want it',
        link: 'www.tamagotchi.com'
      },
      {
        id: 3,
        label: 'Banana Phone',
        description: 'To call grandma',
        link: 'www.phones.com'
      },
      {
        id: 4,
        label: 'Cold Beer Coats',
        description: 'My beer is cold',
        link: 'www.beerattire.com'
      },
      {
        id: 5,
        label: 'Socks',
        description: 'I keep losing mine',
        link: 'www.socks.com'
      }
    ]
  });
});

export default router;
