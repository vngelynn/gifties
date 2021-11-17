import React from 'react';
import { useSelector } from 'react-redux';

import ShoppingItem from './ShoppingItem';
import { AppState } from '../redux/store';

import './ShoppingList.scss';

const backgroundColors: string[] = ['#507375', '#748E81', '#959F8B'];

export default function ShoppingList() {
  const shoppingList = useSelector((state: AppState) => state.shoppingList);

  // Map over shoppingList and build our GiftItems
  const gifts = shoppingList.map(gift => {
    const color = backgroundColors[Math.floor(Math.random() * 3)];
    return (
      <ShoppingItem
        style={{ backgroundColor: color }}
        key={gift.id}
        id={gift.id}
        bestie={gift.bestie}
        label={gift.label}
        description={gift.description}
        link={gift.link}
        status={gift.status}
        purchaseGift={() => console.log('Purchase a Wish')}
        deliverGift={() => console.log('Deliver a Wish')}
        removeGift={() => console.log('Remove a Wish')}
      />
    );
  });

  return (
    <div id='shoppingList'>
      <h1 id='shoppingList-heading'>MY SHOPPING LIST</h1>

      <div id='gifts'>
        {gifts}
      </div>
    </div>
  );
}
