import { ChevronDown, Sparkles } from 'lucide-react';

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
    <section className="pt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-amber-500 uppercase tracking-widest">Premium Cafe Experience</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {cafeInfo?.name || 'Blueberrys Cafe'}
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-lg">
              {cafeInfo?.description || 'Discover a sanctuary for coffee lovers. Handcrafted beverages and timeless moments await.'}
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={scrollToMenu}
                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-600 transition font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Menu
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-lg hover:bg-amber-500 hover:text-white transition font-semibold backdrop-blur-sm"
              >
                Visit Us
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-500 border-opacity-20">
              {cafeInfo?.hero_image && (
                <img
                  src={cafeInfo.hero_image}
                  alt="Blueberrys Cafe"
                  className="w-full h-96 object-cover group-hover:scale-110 transition duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToMenu}
            className="animate-bounce text-amber-400 hover:text-amber-300 transition"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
