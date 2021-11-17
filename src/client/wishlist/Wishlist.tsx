import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from './../redux/store';
import GiftItem from './GiftItem';

import './Wishlist.scss';

const backgroundColors: string[] = ['#507375', '#748E81', '#959F8B'];

export default function Wishlist() {
  const wishList = useSelector((state: AppState) => state.wishList);

  // Map over wishList and build our GiftItems
  const gifts = wishList.map(gift => {
    const color = backgroundColors[Math.floor(Math.random() * 3)];

    return (
      <GiftItem
        style={{ backgroundColor: color }}
        key={gift.id}
        id={gift.id}
        label={gift.label}
        description={gift.description}
        link={gift.link}
        deleteWish={() => console.log('Deleting a Wish')}
        claimWish={() => console.log('Claiming a Wish')}
      />
    );
  });

  return (
    <div id='wishlist'>
      <h1 id='wishlist-heading'>MY WISH LIST</h1>
      <button id='btn-add-gift' onClick={() => console.log('Adding a Gift')}>ADD GIFT</button>

      <div id='gifts'>
        {gifts}
      </div>
    </div>
  );
}
