import { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Browse our range of RO Water Purifiers, Vacuum Cleaners, Water Softeners, and accessories. Quality products for residential and commercial use.',
};

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-cyan-800 to-slate-900 text-white py-32 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
          <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-pulse"></div>
          <div className="absolute bottom-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-10"></div>
        </div>
        
        <div className="relative container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Premium water purification and cleaning solutions for your home and business
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-8">
          {/* Category: RO Water Purifiers */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">RO Water Purifiers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'ro-purifier')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Commercial Purifiers */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Commercial Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'commercial-purifier')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Water Softeners */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Water Softeners</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'water-softener')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Vacuum Cleaners */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Vacuum Cleaners</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'vacuum-cleaner')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Installation Services */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Installation Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'installation-service')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Accessories */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Accessories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'accessories')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight animate-fade-in-up">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Our experts are here to help you find the perfect solution for your needs
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href={`https://wa.me/07554297797`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 8c0 3.23-1.51 4.5-4.5 4.5-4.5S19.5 3.23 16 8c0-3.23 1.51-4.5 4.5-4.5 4.5S12.5 8.77 16 8c0 3.23 1.51 4.5 4.5 4.5S8.5 12.77 16 8z"/>
                </svg>
                Contact Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
