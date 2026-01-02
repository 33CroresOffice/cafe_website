import { useState } from 'react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
}

interface MenuProps {
  menuItems: MenuItem[];
}

export default function Menu({ menuItems }: MenuProps) {
  const categories = Array.from(new Set(menuItems.map(item => item.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0] || 'Coffee');

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-widest">Culinary Selection</span>
          <h2 className="text-5xl font-bold text-white mb-4 mt-2">Our Menu</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Handcrafted beverages and delicacies prepared with passion and precision</p>
        </div>

        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500 transition duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>
              <div className="relative h-56 overflow-hidden bg-slate-700">
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              <div className="relative p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">{item.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-700">
                  <span className="text-2xl font-bold text-amber-500">₹{item.price}</span>
                  <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-amber-600 transition text-sm font-semibold shadow-lg transform group-hover:scale-105">
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
