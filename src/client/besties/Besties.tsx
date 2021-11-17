import React from 'react';
import { Bestie } from '../types';
import BestieItem from './BestieItem';
import { useSelector } from 'react-redux';

import './Besties.scss';

export default function Wishlist({
  wishList
} : {
  wishList: Gift[]
}) {

  // Map over wishList and build our GiftItems
  const gifts = wishList.map(gift => {
    return (
      <GiftItem
        key={gift.id}
        id={gift.id}
        label={gift.label}
        description={gift.description}
        link={gift.link}
        deleteWish={()=>console.log('Deleting a Wish')}
        claimWish={()=>console.log('Claiming a Wish')}
      />
    );
  });

  return (
    <div>

      <div id='wishlist'>
        <h1 id='wishlist-heading'>MY WISH LIST</h1>
        <button id='btn-add-gift' onClick={()=>console.log('Adding a Gift')}>ADD GIFT</button>

        <div id='gifts'>
          {gifts}
        </div>
      </div>

    </div>
  );
}
