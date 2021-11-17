import React from 'react';

export default function ShoppingItem({
  style,
  id,
  bestie,
  label, 
  description, 
  link, 
  status,
  purchaseGift,
  deliverGift,
  removeGift
} : {
  style: React.CSSProperties;
  id: number;
  bestie: string,
  label: string|undefined;
  description: string|undefined;
  link: string|undefined;
  status?: string|undefined;
  purchaseGift: ()=> void;
  deliverGift: ()=> void;
  removeGift: ()=> void;
}) {
  return (
    <div className='gift-item' style={style}>
      <div className='gift-info'>
        <p>For my bestie {bestie}</p>

        <h2>{label}</h2>

        <h4>{description}</h4>
        <h5>{link}</h5>
      </div>

      <div id='buttons'>
        {(status === 'available') && 
          <button 
            className='btn-gift' 
            onClick={purchaseGift}>
              Purchase
          </button>}
        {(status === 'gifted') && 
          <button 
            className='btn-gift' 
            onClick={deliverGift}>
              Delivered!
          </button>}
        {(status === 'available') && 
          <button 
            className='btn-gift' 
            onClick={removeGift}>
              Forget This!
          </button>}
      </div>
    </div>
  );
}
