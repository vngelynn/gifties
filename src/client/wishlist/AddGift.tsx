import React from 'react';
import { useDispatch } from 'react-redux';

import useField from './../hooks/useField';
import { addWish } from './../redux/wishListSlice';
import './AddGift.scss';

export default function AddGiftModal({
  style,
  handleClose
} : {
  style: React.CSSProperties;
  handleClose: ()=> void;
}){
  const [label, onLabelChange] = useField('What is your gift called?');
  const [description, onDescriptionChange] = useField('Tell us about it...');
  const [link, onLinkChange] = useField('Got a link for that?');
  const dispatch = useDispatch();


  function addMyWish() {
    // TODO: Remove id key once server route is established
    const newWish = {
      id: 222,
      label: label,
      description: description,
      link: link
    };


    // TODO: Add POST request to server to add the wish

    // TODO: Once server response is available use that wish object to update the store since it will have the unique id number value
    console.log('Adding a wish');
    dispatch(addWish(newWish));
    handleClose();
  }

  return(
    <div id='add-gift'>
      <h1 className='enterWish'>WHAT IS YOUR WISH?</h1>
      <div className='gift-item' style={style}>
      <div className='gift-info'>
        <input
          className='new-wish-input'
          type='text'
          value={label}
          onChange={onLabelChange}
        />

        <input 
          className='new-wish-input'
          type='text'
          value={description}
          onChange={onDescriptionChange}
        />

        <input 
          className='new-wish-input'
          type='text'
          value={link}
          onChange={onLinkChange}
        />
      </div>

      <div id='buttons'>
        {/* Display update button when values have changed */}
        <button className='btn-gift' onClick={addMyWish}>Somebody get me this!</button>
        <button className='btn-gift' onClick={handleClose}>Close</button>
      </div>
    </div>
  </div>
  );
}
