import React, { useState } from 'react';

import useField from './../hooks/useField';

import './BestieItem.scss';

export default function BestieItem({
  id,
  name,
  addBestie,
  deleteBestie
} : {
  id: number,
  name: string|undefined;
  addBestie: () => void;
  deleteBestie: () => void;
})  {

  return (
    <div className='bestie-item'>

    </div>
  );
}
