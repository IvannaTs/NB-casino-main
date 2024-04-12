import React from 'react';
import DataAndExtractLink from './DataAndExtractLink';

const AppInfo = () => {
  return (
    <section className='app-info' id='app-info'>
      <div className='container'>
        <div className='inner-flex'>
          <div className='text'>
            <h2>Casino NB App</h2>
            <p>
              This casino currently does not have an official Casino NB app. However, it is possible that it will appear soon. If you want to learn about the casino from your mobile device, this will not be a problem. The site easily opens on smartphones and tablets, is adapted for small screens, and provides access to all necessary and relevant information. Here you can easily find a Casino NB hotel phone number, book a table in a restaurant, and ask other questions that interest you.
            </p>
            <div className='inner-flex buttons-wrap'>
              <DataAndExtractLink render={({ link }) => (
                <a href={link} className='btn btn-link app-store'>
                  <img src='./img/app-store.webp' loading='lazy' alt='app store' />
                </a>
              )}/>
              <DataAndExtractLink render={({ link }) => (
                <a href={link} className='btn btn-link google-play'>
                  <img src='./img/google-play.webp' loading='lazy' alt='google play' />
                </a>
              )}/>
            </div>
          </div>
          <div className='decor'>
            <img className='device' src='./img/device-phone.webp' alt='device' loading='lazy' />
          </div>
        </div>
        <div className='inner-flex'>
          <div className='text'>
            <h3>Languages</h3>
            <p>
              The official website is presented in 2 interface options. These are English and French. Since it is a Canadian casino, it is not surprising that these site languages are used.
            </p>
            <p>
              When visiting a land-based casino, customers are also served in English and French. For foreign guests, staff are ready to find translators and help organize the most comfortable and safe holiday.
            </p>
          </div>
          <div className='text'>
            <h3>Currencies</h3>
            <p>
              The main gaming currencies in this famous and popular Canadian casino are Canadian and American dollars. Customers can exchange foreign currencies through conversion. The establishment's payment services work with various bank cards, systems, and electronic currencies. Therefore, nothing will prevent the visitor from enjoying the game and relaxation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
