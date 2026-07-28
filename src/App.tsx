import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroScroll from './components/HeroScroll';
import OurStory from './components/OurStory';
import OurCollections from './components/OurCollections';
import PromotionalBanner from './components/PromotionalBanner';
import TrendingNow from './components/TrendingNow';
import KidsCollection from './components/KidsCollection';
import OurBrands from './components/OurBrands';
import AiraPromise from './components/AiraPromise';
import BridalCollection from './components/BridalCollection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroScroll />
      <OurStory />
      <OurCollections />
      <PromotionalBanner />
      <TrendingNow />
      <KidsCollection />
      <BridalCollection />
      <OurBrands />
      <AiraPromise />
      <Contact />
      <Footer />
    </>
  );
};

export default App;