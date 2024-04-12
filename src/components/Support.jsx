import React from 'react';

const Support = () => {
  return (
    <section className='support' id='support'>
      <div className='container'>
        <h2 className='title'>
          Support
        </h2>
        <div className='inner-flex marginT_regular'>
          <div className='text'>
            <p>
              To get help and technical support,
              you can use several
              available communication channels at once.
            </p>
            <ul className='list'>
              <li>
                <p>
                  Casino NB phone number. Contact the casino
                  by phone to ask pressing questions and get
                  answers instantly. The telephone
                  support service is available 24 hours a day;
                </p>
              </li>
              <li>
                <p>
                  Email. If you have a question or complaint
                  that does not require an immediate response, then you can contact the
                  casino through the official email address;
                </p>
              </li>
              <li>
                <p>
                  Offline support. For those who are directly
                  in the casino, assistance from employees and security representatives is always available.
                  Contact them at any time and with any questions.
                </p>
              </li>
            </ul>
            <p>
              The Canadian casino does everything possible to provide visitors with a comfortable and unforgettable stay in its establishment, hotel, and restaurant.
            </p>
          </div>
          <div className='decor'>
            <img src='./img/support.webp' alt='support' loading='lazy' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;