import Navbar from './components/Navbar';
import HeroScroll from './components/HeroScroll';
import OurStory from './components/OurStory';
import OurCollections from './components/OurCollections';
import PromotionalBanner from './components/PromotionalBanner';
import NecklaceGallery from './components/NecklaceGallery';
import BraceletGallery from './components/BraceletGallery';
import EarringGallery from './components/EarringGallery';
import BabyCollection from './components/BabyCollection';
import OurBrands from './components/OurBrands';
import AiraPromise from './components/AiraPromise';
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
      <NecklaceGallery />
      <BraceletGallery />
      <EarringGallery />
      <BabyCollection />
      <OurBrands />
      <AiraPromise />
      <Contact />
      <Footer />
    </>
  );
};

export default App;