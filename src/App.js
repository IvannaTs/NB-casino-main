import React, { useState, useEffect } from 'react';
import MiddlePage from './components/MiddlePage';
import BtnLinkHandler from './components/BtnLinkHandler';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Intro from './components/Intro';
import BonusDetails from './components/BonusDetails';
import CardsItems from './components/TopProducts';
import TopProducts from './components/TopProducts';
import OptionalInformation from './components/OptionalInformation';
import AdditionalInformation from './components/AdditionalInformation';
import Advantages from './components/Advantages';
import PaymentMethods from './components/PaymentMethods';
import Licences from './components/Licences';
import Providers from './components/Providers';
import Support from './components/Support';
import FAQ from './components/FAQ';
import AppInfo from './components/AppInfo';
import Footer from './components/Footer';
import Games from './components/Games';

const App = () => {
  const [showContent, setShowContent] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setIsNotFound(true);
    }
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content-wrap'>
        {showContent && !isNotFound && (
          <>
            <Intro />
            <TopProducts />
            <BonusDetails/>
            <Advantages />
            <Games />
            <OptionalInformation />
            <PaymentMethods />
            <Licences />
            <Providers />
            <AppInfo />
            <FAQ />
            <Support />
            <AdditionalInformation />
            <Footer />
          </>
        )}
        {isNotFound && <NotFound />}
        {!showContent && !isNotFound && <MiddlePage />}
        <BtnLinkHandler setShowContent={setShowContent} />
      </div>
    </div>
  );
}

export default App;
