import { useEffect, useState } from 'react';
import { Coffee } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { cafeInfo } from './data/staticData';
import { supabase } from './lib/supabaseClient';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
}

interface GalleryImage {
  id: string;
  image_url: string;
  caption: string;
  order: number;
}

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuRes, galleryRes] = await Promise.all([
          supabase.from('menu_items').select('*').order('category'),
          supabase.from('gallery_images').select('*').order('order'),
        ]);

        if (menuRes.data) setMenuItems(menuRes.data as MenuItem[]);
        if (galleryRes.data) setGalleryImages(galleryRes.data as GalleryImage[]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Coffee className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-bounce" />
          <p className="text-gray-600">Loading Blueberrys Cafe...</p>
        </div>
      </div>
    );
  }

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
