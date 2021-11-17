import React, { MouseEvent } from 'react';

import './BestieItem.scss';

function getTwoLetters(name: string): string {
  const splitName = name.toUpperCase().split(' ');
  return splitName.length === 1 ? splitName[0][0] + splitName[0][1] : splitName[0][0] + splitName[1][0];
}

export default function BestieItem({
  name,
  openModal
}: {
  name: string;
  openModal: (event: MouseEvent) => void;
}) {

  return (
    <div className='bestie-item' onClick={openModal}>
      <p>{getTwoLetters(name)}</p>
    </div>
  );
}
