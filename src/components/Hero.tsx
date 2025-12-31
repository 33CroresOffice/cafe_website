import { ChevronDown } from 'lucide-react';

interface CafeInfo {
  name: string;
  description: string;
  hero_image: string;
}

export default function Hero({ cafeInfo }: { cafeInfo: CafeInfo | null }) {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {cafeInfo?.name || 'Blueberrys Cafe'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {cafeInfo?.description || 'Welcome to our cozy cafe'}
            </p>
            <div className="flex gap-4">
              <button
                onClick={scrollToMenu}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Explore Menu
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
              >
                Visit Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {cafeInfo?.hero_image && (
                <img
                  src={cafeInfo.hero_image}
                  alt="Blueberrys Cafe"
                  className="w-full h-96 object-cover hover:scale-105 transition duration-300"
                />
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-10"></div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToMenu}
            className="animate-bounce text-blue-600 hover:text-blue-700"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
