// components/Packages.tsx
import { Check, Plane, Hotel, Car, Grid3X3, Users, Star, Crown, Download } from 'lucide-react';

const packages = [
  {
    name: 'Indian Ocean & Africa All-Inclusive Pack',
    highlight: true,
    price: 'Contact Us',
    description: 'Complete package for African & Indian Ocean exhibitors',
    color: 'from-success-500 to-success-600',
    features: [
      { icon: Plane, text: 'Return flights for 2 participants' },
      { icon: Hotel, text: 'Hotel accommodation' },
      { icon: Car, text: 'Airport and local transfers' },
      { icon: Grid3X3, text: '3×3 exhibition stand' },
      { icon: Users, text: 'Full access to Expo & networking' },
    ],
  },
  {
    name: 'Official Partner',
    highlight: false,
    price: 'Custom',
    description: 'Strategic partnership opportunities',
    color: 'from-primary-500 to-primary-600',
    features: [
      { icon: Check, text: 'Logo placement on all materials' },
      { icon: Check, text: 'Premium exhibition space' },
      { icon: Check, text: 'Speaking opportunities' },
      { icon: Check, text: 'VIP networking access' },
      { icon: Check, text: 'Media exposure' },
    ],
  },
  {
    name: 'Gold Sponsor',
    highlight: false,
    price: 'Premium',
    description: 'Enhanced visibility package',
    color: 'from-amber-500 to-amber-600',
    icon: Star,
    features: [
      { icon: Check, text: 'Large exhibition booth' },
      { icon: Check, text: 'Brand visibility' },
      { icon: Check, text: 'B2B meeting priority' },
      { icon: Check, text: 'Marketing support' },
      { icon: Check, text: 'Delegate passes' },
    ],
  },
  {
    name: 'Platinum Sponsor',
    highlight: false,
    price: 'Elite',
    description: 'Maximum exposure & benefits',
    color: 'from-slate-600 to-slate-700',
    icon: Crown,
    features: [
      { icon: Check, text: 'Premium booth location' },
      { icon: Check, text: 'Title sponsorship rights' },
      { icon: Check, text: 'Exclusive networking events' },
      { icon: Check, text: 'Full media package' },
      { icon: Check, text: 'VIP hospitality' },
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-success-100 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-success-100 text-success-700 rounded-full text-sm font-semibold mb-4">
            PARTICIPATION & PACKAGES
          </span>
          <h2 className="section-title text-gray-900 mb-6">
            Choose Your <span className="text-success-600">Participation</span> Package
          </h2>
          <p className="section-subtitle">
            Flexible options designed to meet your business objectives and budget
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                pkg.highlight
                  ? 'bg-gradient-to-br from-success-600 to-success-700 text-white shadow-2xl shadow-success-500/30 lg:scale-105'
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-success-600 text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Package Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4 ${
                    pkg.highlight ? 'bg-white/20' : 'shadow-lg'
                  }`}
                >
                  {pkg.icon ? (
                    <pkg.icon
                      className={`w-7 h-7 ${pkg.highlight ? 'text-white' : 'text-white'}`}
                    />
                  ) : (
                    <Grid3X3 className={`w-7 h-7 ${pkg.highlight ? 'text-white' : 'text-white'}`} />
                  )}
                </div>

                {/* Package Info */}
                <h3
                  className={`font-heading font-bold text-xl mb-2 ${
                    pkg.highlight ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>

                {/* Price */}
                <div className={`mb-6 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>
                  <span className="font-heading font-bold text-2xl">{pkg.price}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <feature.icon
                        className={`w-5 h-5 flex-shrink-0 ${
                          pkg.highlight ? 'text-success-200' : 'text-success-500'
                        }`}
                      />
                      <span
                        className={`text-sm ${pkg.highlight ? 'text-white/90' : 'text-gray-600'}`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-white text-success-600 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Download Brochure */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary-50 via-success-50 to-accent-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <Download className="w-12 h-12 text-primary-600" />
            <div className="text-center sm:text-left">
              <h4 className="font-heading font-bold text-xl text-gray-900">
                Download Complete Brochure
              </h4>
              <p className="text-gray-600">
                Get detailed information about all packages and sponsorship opportunities
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">Download PDF</button>
          </div>
        </div>
      </div>
    </section>
  );
}
