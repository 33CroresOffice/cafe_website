import { Coffee, Heart } from 'lucide-react';

interface CafeInfo {
  name: string;
}

export default function Footer({ cafeInfo }: { cafeInfo: CafeInfo | null }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-lg">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{cafeInfo?.name || 'Blueberrys Cafe'}</h3>
              <p className="text-xs text-amber-500 font-semibold">Premium Cafe</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#menu" className="hover:text-amber-400 transition duration-300">Menu</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition duration-300">Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Follow</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300 font-medium">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300 font-medium">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {cafeInfo?.name || 'Blueberrys Cafe'}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>in Bhubaneswar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
