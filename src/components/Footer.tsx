import { Coffee, Heart } from 'lucide-react';

interface CafeInfo {
  name: string;
}

export default function Footer({ cafeInfo }: { cafeInfo: CafeInfo | null }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">{cafeInfo?.name || 'Blueberrys Cafe'}</h3>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#menu" className="hover:text-blue-400 transition">Menu</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition">Gallery</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-end gap-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {cafeInfo?.name || 'Blueberrys Cafe'}. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>in Bhubaneswar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
