import { HiCheckCircle, HiShieldCheck, HiClock, HiSupport, HiStar, HiUsers, HiTruck, HiCurrencyDollar } from 'react-icons/hi';

const features = [
  {
    icon: HiStar,
    title: '20+ Years Experience',
    description: 'Serving Bhopal since 2003 with trusted water purification solutions',
    stat: '20+',
    statLabel: 'Years in Business'
  },
  
  {
    icon: HiShieldCheck,
    title: 'Certified Products',
    description: 'All products are ISO certified with manufacturer warranties',
    stat: '100%',
    statLabel: 'Certified Products'
  },
  
  {
    icon: HiCheckCircle,
    title: 'Quality Assurance',
    description: 'Premium quality products with 100% satisfaction guarantee',
    stat: '100%',
    statLabel: 'Quality Guarantee'
  },
  {
    icon: HiCurrencyDollar,
    title: 'Best Prices',
    description: 'Competitive pricing with flexible payment options',
    stat: 'Best',
    statLabel: 'Price Guarantee'
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-sky-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2303a9f4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-4 font-light">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by <span className="text-sky-600">Bhopal</span> for 20+ Years
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We combine decades of expertise with premium products to deliver the best water purification and cleaning solutions for your home and business
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-slate-200 hover:border-sky-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-sky-600 group-hover:text-sky-700 transition-colors duration-300" />
                </div>
                
                {/* Stat */}
                <div className="text-3xl font-bold text-slate-900 mb-2">{feature.stat}</div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                
                {/* Stat Label */}
                <div className="text-xs font-medium text-sky-600 uppercase tracking-wider">
                  {feature.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
