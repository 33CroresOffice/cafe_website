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
    <section id="gallery" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-gray-600 text-lg">Moments from our cozy cafe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map(image => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={image.image_url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                <span className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.image_url}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
