import React, { useState, useEffect } from 'react';
import TopProductItem from './TopProductItem';

const TopProducts = () => {
  const [data, setData] = useState(null);
  const [displayedOffers, setDisplayedOffers] = useState([]);
  const [hrefValue, setHrefValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.adkey-seo.com/api/website/get-website/295');
        const responseData = await response.json();
        setData(responseData);
        setDisplayedOffers(responseData.offers.slice(0, 8));
        setHrefValue(responseData.offers.length > 0 ? responseData.offers[0].link : ''); // Оновлення hrefValue
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    setDisplayedOffers(data.offers);
  };

  return (
    <section className='top-products' id='top-products'>
      <div className='container'>
        <h2 className='title h2-text'>
          Top Casino's&ensp; 
          <span className='country_name'>{data?.website.country_name}</span>
        </h2>
        <div className='top-products-items marginT_regular'>
          {displayedOffers.map(offer => (
            <TopProductItem key={offer.id} offer={offer}/>
          ))}
        </div>
        {displayedOffers.length < data?.offers.length && (
          <div className='button-box marginT_regular'>
            <button className='btn btn-large' onClick={handleClick}>
              All Casino
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopProducts;
