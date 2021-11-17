import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import useField from './../hooks/useField';
import { updateWish, deleteWish } from './../redux/wishListSlice';
import { addGift } from './../redux/shoppingListSlice';
import './GiftItem.scss';

export default function GiftItem({
  style,
  id,
  owner,
  label, 
  description, 
  link, 
  status,
} : {
  style: React.CSSProperties;
  id: number,
  owner: string,
  label: string|undefined;
  description: string|undefined;
  link: string|undefined;
  status?: string|undefined;
})  {

  const [currentLabel, onLabelChange] = useField(label);
  const [currentDescription, onDescriptionChange] = useField(description);
  const [currentLink, onLinkChange] = useField(link);
  const update =  !(currentLabel === label 
                  && currentDescription === description 
                  && currentLink === link);
  const isOwner : boolean = (status) ? false : true;
  const dispatch = useDispatch();

  function submitUpdate() {
    // TODO PATCH /api/gift/:id
    console.log('Attempting to update gift information');

    const updatedWish = {
      id: id,
      owner: owner,
      label: currentLabel,
      description: currentDescription,
      link: currentLabel
    };
    dispatch(updateWish(updatedWish));
  }

  function claimWish() {
    const claimGift = {
      id: id,
      label: currentLabel,
      description: currentDescription,
      link: currentLabel,
      bestie: owner,
      status: 'claimed'
    };
    dispatch(addGift(claimGift));
  }

  function removeWish() {
    const deletedWish = {
      id: id,
      owner: owner,
      label: currentLabel,
      description: currentDescription,
      link: currentLabel
    };

    dispatch(deleteWish(deletedWish));
  }

  return (
    <div className='gift-item' style={style}>
      <div className='gift-info'>
        <input
          className='gift-item-input'
          type='text'
          value={currentLabel}
          onChange={onLabelChange}
          disabled={!isOwner}
        />

        <input 
          className='gift-item-input'
          type='text'
          value={currentDescription}
          onChange={onDescriptionChange}
          disabled={!isOwner}
        />

        <input
          className='gift-item-input' 
          type='text'
          value={currentLink}
          onChange={onLinkChange}
          disabled={!isOwner}
        />
      </div>

      <div id='buttons'>
        {/* Display update button when values have changed */}
        {update && <button className='btn-gift' onClick={submitUpdate}>Update</button>}
        
        {/* Display Remove Button if owner */}
        {/* TODO:Add deleteWish reducer onclick */}
        {isOwner && <button className='btn-gift' onClick={removeWish}>Remove</button>}

        {/* Display Claim Button if not owner */}
        {/* TODO: Add claim reducer onclick*/}
        {!isOwner && <button className='btn-gift' onClick={claimWish}>Claim</button>}
      </div>
    </div>
  );
}
