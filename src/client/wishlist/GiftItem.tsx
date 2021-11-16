import React, { useState } from 'react';


import useField from './../hooks/useField';

export default function GiftItem({
  id,
  label, 
  description, 
  link, 
  status,
  deleteWish,
  claimWish
} : {
  id: string,
  label: string;
  description: string;
  link: string;
  status: string;
  deleteWish: ()=> void;
  claimWish: ()=> void;
})  {

  const [currentLabel, onLabelChange] = useField(label);
  const [currentDescription, onDescriptionChange] = useField(description);
  const [currentLink, onLinkChange] = useField(link);
  const [update, changeUpdate] = useState(false);
  const isOwner : boolean = (status) ? false : true;


  function submitUpdate() {
    // TODO PATCH /api/gift/:id
    console.log('Attempting to update gift information');
  }


  // Update input field values and verify whether any of them have changed from the original
  function valueChange() {
    onLabelChange;
    onDescriptionChange;
    onLinkChange;

    // Flag if any of the values have changed to enable the update button
    ( currentLabel === label && 
      currentDescription === description && 
      currentLink === link) 
      ? changeUpdate(false) : changeUpdate(true);
  }

  return (
    <div className='gift-item'>
      <div className='gift-info'>
        <input 
          type='text'
          value={currentLabel}
          onChange={valueChange}
          disabled={!isOwner}
        />

        <input 
          type='text'
          value={currentDescription}
          onChange={valueChange}
          disabled={!isOwner}
        />

        <input 
          type='text'
          value={currentLink}
          onChange={valueChange}
          disabled={!isOwner}
        />
      </div>

      <div id="buttons">
        {/* Display update button when values have changed */}
        {update && <button onClick={submitUpdate}>Update</button>}
        
        {/* Display Remove Button if owner */}
        {/* TODO:Add deleteWish reducer onclick */}
        {isOwner && <button onClick={deleteWish}>Remove</button>}

        {/* Display Claim Button if not owner */}
        {/* TODO: Add claim reducer onclick*/}
        {!isOwner && <button onClick={claimWish}>Claim</button>}
      </div>
    </div>
  );
}
