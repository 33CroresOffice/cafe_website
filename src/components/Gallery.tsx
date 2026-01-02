import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  image_url: string;
  caption: string;
  order: number;
}

interface GalleryProps {
  galleryImages: GalleryImage[];
}

export default function Gallery({ galleryImages }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-widest">Visual Journey</span>
          <h2 className="text-5xl font-bold text-white mb-4 mt-2">Gallery</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Capturing the essence and ambiance of our cafe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map(image => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group border border-slate-700"
            >
              <img
                src={image.image_url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-6">
                <span className="text-white text-center font-semibold text-lg px-4">
                  {image.caption}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-5 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-14 right-0 text-white hover:text-amber-400 transition transform hover:scale-110"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="rounded-2xl overflow-hidden border border-amber-500 border-opacity-30 shadow-2xl">
              <img
                src={selectedImage.image_url}
                alt={selectedImage.caption}
                className="w-full h-auto"
              />
            </div>
            <p className="text-white text-center mt-6 text-lg font-semibold">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
