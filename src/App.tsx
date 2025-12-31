import { useEffect, useState } from 'react';
import { Coffee, MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import { supabase } from './lib/supabaseClient';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface CafeInfo {
  name: string;
  description: string;
  location: string;
  phone: string;
  email: string;
  opening_hours: string;
  hero_image: string;
}

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
  const [cafeInfo, setCafeInfo] = useState<CafeInfo | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cafeRes, menuRes, galleryRes] = await Promise.all([
          supabase.from('cafe_info').select('*').single(),
          supabase.from('menu_items').select('*').order('category'),
          supabase.from('gallery_images').select('*').order('order'),
        ]);

        if (cafeRes.data) setCafeInfo(cafeRes.data);
        if (menuRes.data) setMenuItems(menuRes.data);
        if (galleryRes.data) setGalleryImages(galleryRes.data);
      } catch (error) {
        console.error('Error fetching cafe data:', error);
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
