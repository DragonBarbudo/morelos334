import { useState, useEffect } from 'react';

interface BannerProps {
  images: string[];
}

const Banner = ({ images }: BannerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Slower, more elegant transitions

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative aspect-[14/9]  w-full rounded-[2rem] overflow-hidden shadow-soft border border-white/20 group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out transform ${index === currentImageIndex
            ? 'opacity-100 scale-105'
            : 'opacity-0 scale-100'
            }`}
        >
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentImageIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/40'
              }`}
          />
        ))}
      </div>
    </div>
  );
};


export default Banner;