import React, { useState } from 'react';
import DataAndExtractLink from './DataAndExtractLink';

const BonusDetailItem = ({ offer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bonus-detail-item row'>
            <div className='accordeon-header'>
                <div className='logo name'>
                    <img src={`https://api.adkey-seo.com/storage/images/offers/${offer.logo}`} alt={offer.name} />
                </div>
                <div className='bonuses'>Welcome bonus</div>
                <div className='rate'>{offer.bonuses.rate}</div>
                <div className='spins'>{offer.bonuses.free_spins}</div>
                <div className='more-info' onClick={toggleAccordion}>
                    <img src="./img/icon-more-info.svg" alt="more info" title='More Info'/>
                </div>
                <div className='get-game'>
                <a href={offer.link} className='btn btn-link btn-small'>Get The Bonus</a>
                </div>
            </div>
            <div className={`accordeon-body ${isOpen ? 'open' : ''}`}>
                <div className='accordeon-body-content hidden-block_bonuses'>
                    <div className='content-title'>Bonuses</div>
                    <div className='content-description'>{offer.bonuses.welcome_bonus}</div>
                </div>
                <div className='accordeon-body-content'>
                    <div className='content-title'>Maximum amount</div>
                    <div className='content-description'>{offer.bonuses.amount}</div>
                </div>
                <div className='accordeon-body-content'>
                    <div className='content-title'>Wager</div>
                    <div className='content-description'>{offer.wager}</div>
                </div>
                <div className='accordeon-body-content'>
                    <div className='content-title'>Bonus Code:</div>
                    <div className='content-description'>{offer.bonus_code}</div>
                </div>
                <div className='accordeon-body-content hidden-block_btn'>
                    <DataAndExtractLink render={({ link }) => (
                        <a href={link} className='btn btn-link btn-small'>Visit Site</a>
                    )} />
                </div>
            </div>
        </div>
    );
};

export default BonusDetailItem;
