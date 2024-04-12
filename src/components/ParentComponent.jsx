import React from 'react';
import DataAndExtractLink from './DataAndExtractLink';

const ParentComponent = () => {
  return (
    <DataAndExtractLink
      render={({ link, loading, error }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (error) {
          return <div>Error: {error}</div>;
        }

        return (
          <section id='intro' className='intro'>
            <div className='container'>
              <div className='intro-title'>
                <h1 className='title-text h1-text'>Welcome Bonus</h1>
              </div>
              <div>
                <div className='intro-subtitle'>
                  <div className='subtitle-text'>
                    EXCLUSIVE WELCOME OFFER OF <br />
                    <span>{link && link.offers && link.offers[0].bonuses && link.offers[0].bonuses.welcome_bonus}</span>
                  </div>
                </div>
                <div className='button-box'>
                  <a href={link && link.offers && link.offers[0].link} className='btn-large btn btn-link'>
                    Claim Bonus
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    />
  );
};

export default ParentComponent;
