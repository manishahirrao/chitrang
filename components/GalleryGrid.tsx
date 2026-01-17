'use client';

import Image from 'next/image';
import { GalleryImage } from '@/types';
import { HiMap, HiCalendar, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BUSINESS_INFO } from '@/lib/constants';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  // Icon mapping for categories
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

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Create WhatsApp message for project inquiry
  const createWhatsAppMessage = (image: GalleryImage) => {
    const message = `Hi! I'm interested in your project: ${image.title}

Category: ${image.category?.replace('-', ' ').toUpperCase() || 'N/A'}
${image.description ? `Description: ${image.description}` : ''}
${image.location ? `Location: ${image.location}` : ''}

Please provide more details and pricing.

Sent from: ${BUSINESS_INFO.name} Website Gallery`;

    return `https://wa.me/91${BUSINESS_INFO.phones.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            
            {/* Overlay with icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-4 text-3xl">
                {getCategoryIcon(image.category)}
              </div>
            </div>

            {/* Hover overlay text */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                Click to view
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Title */}
            <h3 className="font-semibold text-slate-900 mb-2 line-clamp-1">
              {image.title || image.alt}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-slate-600 mb-3 line-clamp-2 leading-relaxed">
              {image.description || 'Project image showing our work and installations.'}
            </p>
            
            {/* Meta Information */}
            <div className="space-y-2 text-xs text-slate-500">
              {/* Location */}
              {image.location && (
                <div className="flex items-center gap-1">
                  <HiMap className="w-3 h-3" />
                  <span>{image.location}</span>
                </div>
              )}
              
              {/* Date */}
              {image.date && (
                <div className="flex items-center gap-1">
                  <HiCalendar className="w-3 h-3" />
                  <span>{formatDate(image.date)}</span>
                </div>
              )}
              
              {/* Client */}
              {image.client && (
                <div className="flex items-center gap-1">
                  <HiOutlineOfficeBuilding className="w-3 h-3" />
                  <span>{image.client}</span>
                </div>
              )}
            </div>

            {/* Category Badge */}
            <div className="mt-3 mb-3">
              <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">
                {image.category?.replace('-', ' ').toUpperCase()}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {/* View Image Button */}
              <button
                onClick={() => onImageClick(index)}
                className="flex-1 bg-sky-600 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-sky-700 transition-colors"
              >
                View Image
              </button>
              
              {/* WhatsApp Button */}
              <a
                href={createWhatsAppMessage(image)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-1"
                aria-label="Inquire about this project on WhatsApp"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
