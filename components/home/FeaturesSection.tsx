import { HiCheckCircle, HiShieldCheck, HiClock, HiSupport } from 'react-icons/hi';

const features = [
  {
    icon: HiCheckCircle,
    title: 'Quality Products',
    description: 'Premium RO water purifiers and vacuum cleaners from trusted brands',
  },
  {
    icon: HiShieldCheck,
    title: 'Certified & Reliable',
    description: 'All products are certified and come with manufacturer warranties',
  },
  {
    icon: HiClock,
    title: 'Quick Service',
    description: 'Fast installation and prompt after-sales service support',
  },
  {
    icon: HiSupport,
    title: '24/7 Support',
    description: 'Dedicated customer support available during working hours',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-24 bg-water-gradient-subtle relative overflow-hidden">
      {/* Animated Background Water Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative container mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We are committed to providing the best water purification and home cleaning solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border border-cyan-100 hover:border-cyan-300"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Icon with Water Effect */}
              <div className="flex justify-center mb-4 relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full animate-pulse-slow"></div>
                <feature.icon className="relative w-12 h-12 md:w-14 md:h-14 text-cyan-600 group-hover:text-cyan-700 transition-colors duration-300" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center group-hover:text-cyan-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>

              {/* Hover Water Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Water Flow Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-water-wave"></div>
      </div>
    </section>
  );
}
