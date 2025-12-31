import { Coffee, Phone, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

interface CafeInfo {
  name: string;
  phone?: string;
  location?: string;
}

export default function Header({ cafeInfo }: { cafeInfo: CafeInfo | null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Menu', id: 'menu' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-white via-white to-blue-50 backdrop-blur-sm shadow-lg z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('menu')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Coffee className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                {cafeInfo?.name || 'Blueberrys Cafe'}
              </h1>
              <p className="text-xs text-blue-600 font-medium">Bhubaneswar</p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-semibold text-gray-700 group overflow-hidden rounded-lg transition"
              >
                <span className="relative z-10 flex items-center gap-1 group-hover:text-blue-600 transition">
                  {item.label}
                </span>
                <div className="absolute inset-0 bg-blue-100 translate-x-full group-hover:translate-x-0 transition duration-300 rounded-lg -z-0"></div>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            {cafeInfo?.phone && (
              <a
                href={`tel:${cafeInfo.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition font-medium text-sm group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition" />
                <span className="hidden lg:inline">{cafeInfo.phone}</span>
              </a>
            )}
            {cafeInfo?.location && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-sm">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="hidden xl:inline truncate max-w-[180px]">{cafeInfo.location}</span>
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-blue-100 mt-2 animate-in fade-in slide-in-from-top-2">
            <div className="space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 font-medium transition"
                >
                  {item.label}
                </button>
              ))}
              {cafeInfo?.phone && (
                <a
                  href={`tel:${cafeInfo.phone}`}
                  className="w-full flex items-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-white font-medium transition hover:bg-blue-700"
                >
                  <Phone className="w-4 h-4" />
                  {cafeInfo.phone}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
