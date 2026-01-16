import Image from 'next/image';
import { Product } from '@/types';
import Card from './ui/Card';
import { HiCheckCircle } from 'react-icons/hi';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      {/* Product Image */}
      <div className="relative h-64 bg-gray-100 overflow-hidden group">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Category Icon Overlay */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.category === 'ro-purifier' && '💧'}
          {product.category === 'vacuum-cleaner' && '🧹'}
          {product.category === 'water-softener' && '⚙️'}
          {product.category === 'commercial-purifier' && '🏢'}
          {product.category === 'installation-service' && '⚙️'}
          {product.category === 'accessories' && '🔧'}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
          {product.description}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="space-y-2 mb-4">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <HiCheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Category Badge */}
        <div className="mt-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-700 rounded-full hover:bg-cyan-200 transition-colors duration-300">
            {product.category?.replace('-', ' ').toUpperCase()}
          </span>
        </div>
      </div>
    </Card>
  );
}
