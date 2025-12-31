import { Coffee, Phone, MapPin } from 'lucide-react';

interface CafeInfo {
  name: string;
  phone?: string;
  location?: string;
}

export default function Header({ cafeInfo }: { cafeInfo: CafeInfo | null }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{cafeInfo?.name || 'Blueberrys Cafe'}</h1>
              <p className="text-xs text-blue-600">Bhubaneswar</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-blue-600 transition">Menu</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            {cafeInfo?.phone && (
              <a href={`tel:${cafeInfo.phone}`} className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600 transition">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{cafeInfo.phone}</span>
              </a>
            )}
            {cafeInfo?.location && (
              <span className="flex items-center gap-1 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="hidden sm:inline">{cafeInfo.location}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
