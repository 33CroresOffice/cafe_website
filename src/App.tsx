import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { cafeInfo, menuItems, galleryImages } from './data/staticData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header cafeInfo={cafeInfo} />
      <Hero cafeInfo={cafeInfo} />
      <Menu menuItems={menuItems} />
      <Gallery galleryImages={galleryImages} />
      <Contact cafeInfo={cafeInfo} />
      <Footer cafeInfo={cafeInfo} />
    </div>
  );
}

export default App;
