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
    <header className="fixed top-0 w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 backdrop-blur-md shadow-xl z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('menu')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-11 h-11 bg-gradient-to-br from-amber-600 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <Coffee className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                {cafeInfo?.name || 'Blueberrys Cafe'}
              </h1>
              <p className="text-xs text-amber-500 font-medium">Bhubaneswar</p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-semibold text-gray-300 group overflow-hidden rounded-lg transition"
              >
                <span className="relative z-10 flex items-center gap-1 group-hover:text-amber-400 transition">
                  {item.label}
                </span>
                <div className="absolute inset-0 bg-amber-500 bg-opacity-10 translate-x-full group-hover:translate-x-0 transition duration-300 rounded-lg -z-0"></div>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            {cafeInfo?.phone && (
              <a
                href={`tel:${cafeInfo.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 bg-opacity-10 text-amber-400 hover:bg-opacity-20 transition font-medium text-sm group border border-amber-500 border-opacity-20"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition" />
                <span className="hidden lg:inline">{cafeInfo.phone}</span>
              </a>
            )}
            {cafeInfo?.location && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-gray-300 text-sm border border-slate-700">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="hidden xl:inline truncate max-w-[180px]">{cafeInfo.location}</span>
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-700 mt-2 animate-in fade-in slide-in-from-top-2">
            <div className="space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 font-medium transition"
                >
                  {item.label}
                </button>
              ))}
              {cafeInfo?.phone && (
                <a
                  href={`tel:${cafeInfo.phone}`}
                  className="w-full flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium transition hover:from-amber-700 hover:to-amber-600"
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
