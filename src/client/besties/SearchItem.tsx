import React from 'react';

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
      <button onClick={showProfile}>Profile</button>
      {status === 'accepted' && <button>Unfriend</button>}
      {status === 'unknown' && <button>Friend</button>}
      {status === 'pending' && <button>Revoke</button>}
    </div>
  );
}
