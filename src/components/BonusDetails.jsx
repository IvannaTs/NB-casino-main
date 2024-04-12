import React, { useState } from 'react';
import DataFetcher from './DataFetcher';
import BonusDetailItem from './BonusDetailItem';

const BonusDetails = () => {
  const [websiteData, setWebsiteData] = useState(null);

  const onDataFetch = (data) => {
    setWebsiteData(data);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleRefresh = () => {
    if (websiteData) {
      const shuffledOffers = shuffleArray(websiteData.offers);
      setWebsiteData({ ...websiteData, offers: shuffledOffers });
    }
  };

  return (
    <section className='bonus-details' id='bonus-details'>
      <div className="container">
        <h2 className='title'>BONUS DETAILS</h2>
        <div className="bonus-detail-items marginT_regular">
          <div className="bonus-detail-item cap">
            <div className='name'>Casino</div>
            <div className='bonuses'>Bonuses</div>
            <div className='rate'>Rate</div>
            <div className='spins'>Free spins</div>
            <div className='more-info'>More info</div>
            <div className='get-game'>Get</div>
          </div>
          {websiteData && websiteData.offers.slice(0, 6).map((offer, index) => (
            <BonusDetailItem key={index} offer={offer} />
          ))}
        </div>
        
        <div className='button-box marginT_regular'>
          <button className='btn btn-large refresh-btn' onClick={handleRefresh}>
            Refresh
          </button>
        </div>
      </div>
      <DataFetcher onDataFetch={onDataFetch} />
    </section>
  );
};

export default BonusDetails;
