// components/Sectors.tsx
import {
  ShoppingBag,
  Factory,
  Wheat,
  Fish,
  Package,
  Ship,
  Zap,
  Building,
  Home,
  Palmtree,
  Laptop,
  Landmark,
  Headphones,
  GraduationCap,
  Heart,
  Leaf,
} from 'lucide-react';

const sectors = [
  {
    icon: ShoppingBag,
    name: 'Trade & International Commerce',
    color: 'from-primary-500 to-primary-600',
  },
  { icon: Factory, name: 'Industry & Manufacturing', color: 'from-gray-600 to-gray-700' },
  { icon: Wheat, name: 'Agriculture & Agro-business', color: 'from-success-500 to-success-600' },
  {
    icon: Fish,
    name: 'Fisheries, Aquaculture & Blue Economy',
    color: 'from-primary-400 to-primary-500',
  },
  {
    icon: Package,
    name: 'Import–Export & Regional Logistics',
    color: 'from-amber-500 to-amber-600',
  },
  { icon: Ship, name: 'Transport, Port & Maritime Services', color: 'from-blue-500 to-blue-600' },
  { icon: Zap, name: 'Energy (Renewable & Conventional)', color: 'from-yellow-500 to-orange-500' },
  {
    icon: Building,
    name: 'Infrastructure & Construction (BTP)',
    color: 'from-stone-500 to-stone-600',
  },
  { icon: Home, name: 'Real Estate & Urban Development', color: 'from-rose-500 to-rose-600' },
  { icon: Palmtree, name: 'Tourism & Hospitality', color: 'from-teal-500 to-teal-600' },
  { icon: Laptop, name: 'Digital, ICT & Innovation', color: 'from-violet-500 to-violet-600' },
  {
    icon: Landmark,
    name: 'Financial Services, Banking & Insurance',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Headphones,
    name: 'Outsourcing, BPO & Professional Services',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: GraduationCap,
    name: 'Education, Training & Skills Development',
    color: 'from-sky-500 to-sky-600',
  },
  { icon: Heart, name: 'Health, Wellness & Life Sciences', color: 'from-accent-500 to-accent-600' },
  {
    icon: Leaf,
    name: 'Green Economy & Sustainable Development',
    color: 'from-success-600 to-success-700',
  },
];

export default function Sectors() {
  return (
    <section
      id="sectors"
      className="py-24 bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            SECTORS REPRESENTED
          </span>
          <h2 className="section-title text-white mb-6">
            <span className="text-success-400">16 Key Sectors</span> Driving Africa's Growth
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Explore diverse business opportunities across the continent's most dynamic industries
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />

              <div className="relative flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <sector.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/90 font-medium text-sm group-hover:text-white transition-colors">
                  {sector.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">
            Can't find your sector? Contact us for custom exhibition solutions.
          </p>
          <button className="btn-outline">Explore All Opportunities</button>
        </div>
      </div>
    </section>
  );
}
