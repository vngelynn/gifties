import React from 'react';

import './LandingPage.scss';

export default function LandingBox({
  children
}: {
  children: React.ReactElement
}) {

  return (
    <div id='landing-page'>
      <div id='heading'>
      <p><h1>YOUR #1 STOP SHOP FOR</h1></p>
      <p><span id='spin'></span></p>
      <p><h1>AND ANY OTHER OCCASIONS!</h1></p>
      </div>
      <div id='lading-box'>
        {children}
      </div>
    </div>
    
  );
}
