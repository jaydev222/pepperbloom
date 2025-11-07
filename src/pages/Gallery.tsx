import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, title: 'Summer Wedding', category: 'weddings', color: 'from-[#EC6839] to-[#F29EB7]' },
    { id: 2, title: 'Anniversary Gala', category: 'celebrations', color: 'from-[#F29EB7] to-[#EC6839]' },
    { id: 3, title: 'Corporate Launch', category: 'corporate', color: 'from-[#6A1027] to-[#EC6839]' },
    { id: 4, title: 'Garden Wedding', category: 'weddings', color: 'from-[#E1D2C5] to-[#6A1027]' },
    { id: 5, title: 'Birthday Celebration', category: 'celebrations', color: 'from-[#EC6839] to-[#6A1027]' },
    { id: 6, title: 'Brand Event', category: 'corporate', color: 'from-[#F29EB7] to-[#E1D2C5]' },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FDFBF7] to-[#F5EFE9]">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-['Playfair_Display'] text-5xl mb-6 text-[#30383B] leading-tight">
            Our Work
          </h1>
          <p className="text-xl text-[#5A5A5A] max-w-3xl leading-relaxed">
            Explore our portfolio of beautifully designed celebrations that showcase our commitment to excellence and artistry.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-square rounded-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-[#6A1027]/25 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${image.color} transition-all group-hover:scale-105`}></div>
                <div className="absolute inset-0 bg-[#30383B]/0 group-hover:bg-[#30383B]/40 transition-all flex items-end justify-start p-6">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-['Playfair_Display'] text-2xl font-semibold mb-1">
                      {image.title}
                    </p>
                    <p className="text-[#E1D2C5] text-sm capitalize">
                      {image.category}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-[#30383B]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} className="text-white" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 p-3 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          <div className="max-w-3xl w-full">
            <div className={`w-full aspect-square bg-gradient-to-br ${galleryImages[selectedImage].color} rounded-lg`}></div>
            <div className="mt-6 text-center">
              <h2 className="font-['Playfair_Display'] text-3xl text-white mb-2">
                {galleryImages[selectedImage].title}
              </h2>
              <p className="text-[#E1D2C5] capitalize">
                {galleryImages[selectedImage].category}
              </p>
              <p className="text-white/60 text-sm mt-4">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 p-3 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
