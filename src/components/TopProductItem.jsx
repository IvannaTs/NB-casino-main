import React, { useState } from 'react';

const TopProductItem = ({ offer, href }) => {
    
    return (
        <div className='card' id={offer.id}>
            <img className='card-logo' src={`https://api.adkey-seo.com/storage/images/offers/${offer.logo}`} loading='lazy' alt={offer.name} />
            <div className='card-title'>{offer.name}</div>
                <div className='card-subtitle'>Welcome Bonus</div>
                <div className='card-description'>{offer.bonuses.welcome_bonus}</div>
            <a className='btn btn-card btn-small btn-link' href={offer.link} target='_self' type='button'>Claim Bonus</a>
        </div>
    );
};

export default TopProductItem;
