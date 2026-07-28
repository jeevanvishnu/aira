import Navbar from './components/Navbar';
import HeroScroll from './components/HeroScroll';
import OurStory from './components/OurStory';
import OurCollections from './components/OurCollections';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroScroll />
      <OurStory />
      <OurCollections />
      <div className="content-wrapper">
        <section id="gallery" style={{ height: '100vh', padding: '40px' }}>
          <h1>Gallery</h1>
        </section>
        <section id="contact" style={{ height: '100vh', padding: '40px', backgroundColor: '#fcfcfc' }}>
          <h1>Contact</h1>
        </section>
      </div>
    </>
  );
};

export default App;