import React, { useState } from 'react';

import useField from './../hooks/useField';

import './GiftItem.scss';

export default function GiftItem({
  style,
  id,
  label, 
  description, 
  link, 
  status,
  deleteWish,
  claimWish
} : {
  style: React.CSSProperties;
  id: number,
  label: string|undefined;
  description: string|undefined;
  link: string|undefined;
  status?: string|undefined;
  deleteWish: ()=> void;
  claimWish: ()=> void;
})  {

  const [currentLabel, onLabelChange] = useField(label);
  const [currentDescription, onDescriptionChange] = useField(description);
  const [currentLink, onLinkChange] = useField(link);
  const update =  !(currentLabel === label 
                  && currentDescription === description 
                  && currentLink === link);
  const isOwner : boolean = (status) ? false : true;


  function submitUpdate() {
    // TODO PATCH /api/gift/:id
    console.log('Attempting to update gift information');
  }

  return (
    <div className='gift-item' style={style}>
      <div className='gift-info'>
        <input
          type='text'
          value={currentLabel}
          onChange={onLabelChange}
          disabled={!isOwner}
        />

        <input 
          type='text'
          value={currentDescription}
          onChange={onDescriptionChange}
          disabled={!isOwner}
        />

        <input 
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
        {isOwner && <button className='btn-gift' onClick={deleteWish}>Remove</button>}

        {/* Display Claim Button if not owner */}
        {/* TODO: Add claim reducer onclick*/}
        {!isOwner && <button className='btn-gift' onClick={claimWish}>Claim</button>}
      </div>
    </div>
  );
}
