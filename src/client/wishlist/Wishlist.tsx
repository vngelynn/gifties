import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from './../redux/store';
import GiftItem from './GiftItem';
import AddGift from './AddGift';

import './Wishlist.scss';

const backgroundColors: string[] = ['#507375', '#748E81', '#959F8B'];

export default function Wishlist() {
  const wishList = useSelector((state: AppState) => state.wishList);
  const [show, setShow] = useState(false);
  const addGiftColor = backgroundColors[Math.floor(Math.random() * 3)];

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
      />
    );
  });

  function toggleShow () {
    setShow(!show);
  }

  return (
    <div id='wishlist'>
      <h1 id='wishlist-heading'>MY WISH LIST</h1>
      <button id='btn-add-gift' onClick={toggleShow}>ADD GIFT</button>
      {show && <AddGift style={{backgroundColor: addGiftColor}} handleClose={toggleShow} />}
      <div id='gifts'>
        {gifts}
      </div>
    </div>
  );
}
