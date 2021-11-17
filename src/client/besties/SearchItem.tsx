import React from 'react';

import './SearchItem.scss';

export default function SearchItem({
  name,
  status,
  showProfile,
}: {
  name: string;
  status: 'accepted' | 'pending' | 'unknown';
  showProfile: () => void;
}) {
  // TODO handle changing friend request status

  return (
    <div className='search-item'>
      <h3>{name}</h3>
      <button onClick={showProfile} className='btn-profile'>Profile</button>
      {status === 'accepted' && <button className='btn-unfriend'>Unfriend</button>}
      {status === 'unknown' && <button className='btn-friend'>Friend</button>}
      {status === 'pending' && <button className='btn-unfriend'>Revoke</button>}
    </div>
  );
}
