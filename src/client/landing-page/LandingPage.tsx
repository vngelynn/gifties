import React from 'react';

import './LandingPage.scss';

export default function LandingBox({
  children
}: {
  children: React.ReactElement
}) {

  return (
    <div id='landing-page'>
      <h1>Bestie Gifting</h1>
      <div id='lading-box'>
        {children}
      </div>
    </div>
  );
}
