// components/GlobalReach.tsx
import { MapPin, Globe2, TrendingUp } from 'lucide-react';

const regions = [
  {
    name: 'Africa',
    areas: ['North Africa', 'West Africa', 'East Africa', 'Central Africa', 'Southern Africa'],
    color: 'bg-success-500',
    borderColor: 'border-success-500',
  },
  {
    name: 'Indian Ocean Region',
    areas: ['Island economies', 'Coastal economies'],
    color: 'bg-primary-500',
    borderColor: 'border-primary-500',
  },
  {
    name: 'Asia & Middle East',
    areas: ['India', 'United Arab Emirates', 'Asian markets'],
    color: 'bg-accent-500',
    borderColor: 'border-accent-500',
  },
  {
    name: 'Global Networks',
    areas: ['Commonwealth countries', 'International investors', 'Diaspora networks'],
    color: 'bg-primary-700',
    borderColor: 'border-primary-700',
  },
];

export default function GlobalReach() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Map Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/world-map.svg')] bg-center bg-no-repeat bg-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
            GLOBAL REACH
          </span>
          <h2 className="section-title text-gray-900 mb-6">
            <span className="text-accent-600">Global Reach</span> & Marketing Exposure
          </h2>
          <p className="section-subtitle">
            Thanks to its strategic location and connectivity, Africa Business Expo reaches key
            markets across continents
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-primary-900 to-primary-950 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Dots */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 ${region.borderColor} hover:bg-white/20 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${region.color}`} />
                    <h3 className="font-heading font-bold text-white text-lg">{region.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {region.areas.map((area, i) => (
                      <li key={i} className="flex items-center space-x-2 text-white/80 text-sm">
                        <MapPin className="w-3 h-3" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Central Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
              <Globe2 className="w-64 h-64 text-white" />
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-50 via-success-50 to-accent-50 rounded-2xl px-8 py-6 border border-gray-100">
            <TrendingUp className="w-12 h-12 text-primary-600" />
            <div className="text-left">
              <h4 className="font-heading font-bold text-xl text-gray-900">
                Exceptional Visibility & Market Access
              </h4>
              <p className="text-gray-600">
                This global reach offers exhibitors visibility and market access beyond regional
                borders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
