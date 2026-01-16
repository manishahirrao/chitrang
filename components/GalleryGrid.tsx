'use client';

import { GalleryImage } from '@/types';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  // Icon mapping for placeholder images
  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'installations':
        return '🔧';
      case 'products':
        return '💧';
      case 'showroom':
        return '🏪';
      case 'service':
        return '⚙️';
      case 'customers':
        return '👥';
      default:
        return '📷';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          onClick={() => onImageClick(index)}
          className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
        >
          {/* Placeholder with icon */}
          <div className="absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-blue-50 to-blue-100">
            {getCategoryIcon(image.category)}
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
              View Image
            </span>
          </div>

          {/* Image Title */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-sm font-medium truncate">{image.alt}</p>
          </div>

          {/* Actual image would go here */}
          {/* <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            loading="lazy"
          /> */}
        </div>
      ))}
    </div>
  );
}
