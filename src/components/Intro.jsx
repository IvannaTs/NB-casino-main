import React, { useState } from 'react';
import DataFetcher from './DataFetcher';

const Intro = () => {
    const [welcomeBonus, setWelcomeBonus] = useState('');
    const [claimLink, setClaimLink] = useState('');

    const handleDataFetch = (data) => {
        const firstOffer = data && data.offers && data.offers.length > 0 ? data.offers[0] : null;
        const bonus = firstOffer ? firstOffer.bonuses.welcome_bonus : '';
        setWelcomeBonus(bonus);

        const link = firstOffer ? firstOffer.link : '';
        setClaimLink(link);
    };

    return (
        <section id='intro' className='intro'>
            <div className='container'>
                <div className='intro-title'>
                    <h1 className='title-text h1-text'>
                        Welcome Bonus
                    </h1>
                </div>
                <div>
                    <div className='intro-subtitle'>
                        <div className='subtitle-text'>
                            EXCLUSIVE WELCOME OFFER OF
                            <br />
                            <span>
                                {welcomeBonus}
                            </span>
                        </div>
                    </div>
                    <div className='button-box'>
                        <DataFetcher onDataFetch={handleDataFetch} />
                        <a href={claimLink} className='btn-large btn btn-link'>Claim Bonus</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
