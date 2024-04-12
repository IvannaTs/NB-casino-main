// правильний 

import React, { useState } from 'react';
import ServerDataComponent from './ServerDataComponent';

const OfferLinkComponent = () => {
  const [offerLink, setOfferLink] = useState('');
  const [additionalLink, setAdditionalLink] = useState('');

  const handleDataReceived = (data) => {
    if (data && data.offers && data.offers.length > 0) {
      setOfferLink(data.offers[0].link);
      setAdditionalLink(data.offers[0].additionalLink);
    } else {
      console.error('No offers available');
    }
  };

  return (
    <div>
      <ServerDataComponent onDataReceived={handleDataReceived} />
      {offerLink && (
        <div>
          <a href={offerLink} className='btn btn-link'>
            
          </a>
        </div>
      )}
    </div>
  );
};

export default OfferLinkComponent;
