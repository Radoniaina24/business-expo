// components/GlobalReach.tsx
'use client';
import {
  MapPin,
  Globe2,
  TrendingUp,
  Zap,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Building2,
  Plane,
} from 'lucide-react';

const regions = [
  {
    name: 'Africa',
    areas: ['North Africa', 'West Africa', 'East Africa', 'Central Africa', 'Southern Africa'],
    gradient: 'from-emerald-500 to-green-600',
    lightGradient: 'from-emerald-500/20 to-green-600/20',
    iconBg: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    shadowColor: 'shadow-emerald-500/25',
    icon: Globe2,
    stats: '54 Countries',
  },
  {
    name: 'Indian Ocean',
    areas: ['Mauritius', 'Madagascar', 'Seychelles', 'Comoros', 'Réunion'],
    gradient: 'from-blue-500 to-cyan-600',
    lightGradient: 'from-blue-500/20 to-cyan-600/20',
    iconBg: 'bg-blue-500',
    borderColor: 'border-blue-500',
    shadowColor: 'shadow-blue-500/25',
    icon: Plane,
    stats: '5+ Islands',
  },
  {
    name: 'Asia & Middle East',
    areas: ['India', 'UAE', 'Saudi Arabia', 'Singapore', 'China'],
    gradient: 'from-amber-500 to-orange-600',
    lightGradient: 'from-amber-500/20 to-orange-600/20',
    iconBg: 'bg-amber-500',
    borderColor: 'border-amber-500',
    shadowColor: 'shadow-amber-500/25',
    icon: Building2,
    stats: '15+ Markets',
  },
  {
    name: 'Global Networks',
    areas: ['Commonwealth', 'EU Partners', 'Americas', 'Diaspora', 'Investors'],
    gradient: 'from-violet-500 to-purple-600',
    lightGradient: 'from-violet-500/20 to-purple-600/20',
    iconBg: 'bg-violet-500',
    borderColor: 'border-violet-500',
    shadowColor: 'shadow-violet-500/25',
    icon: Users,
    stats: '50+ Countries',
  },
];

const marketingChannels = [
  { icon: Target, label: 'Targeted Campaigns', value: '25+' },
  { icon: Users, label: 'Network Partners', value: '100+' },
  { icon: Globe2, label: 'Media Outlets', value: '50+' },
  { icon: Zap, label: 'Digital Reach', value: '1M+' },
];

const connectionPoints = [
  { x: '15%', y: '35%', delay: '0s', size: 'w-3 h-3' },
  { x: '25%', y: '55%', delay: '0.5s', size: 'w-2 h-2' },
  { x: '45%', y: '25%', delay: '1s', size: 'w-4 h-4' },
  { x: '55%', y: '45%', delay: '1.5s', size: 'w-3 h-3' },
  { x: '70%', y: '35%', delay: '2s', size: 'w-2 h-2' },
  { x: '80%', y: '50%', delay: '2.5s', size: 'w-3 h-3' },
  { x: '35%', y: '65%', delay: '0.8s', size: 'w-2 h-2' },
  { x: '60%', y: '60%', delay: '1.2s', size: 'w-3 h-3' },
];

export default function GlobalReach() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/20 via-blue-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-amber-200/20 via-orange-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-violet-200/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-amber-200 rounded-full mb-8 shadow-lg shadow-amber-100/30">
            <Globe2
              className="w-4 h-4 text-amber-500 animate-spin"
              style={{ animationDuration: '8s' }}
            />
            <span className="text-sm font-bold tracking-wider bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent uppercase">
              Global Reach
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Worldwide
            </span>{' '}
            Connections &
            <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              Marketing{' '}
              <span className="bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
                Exposure
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary-300"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q50,0 100,8 T200,8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
            Thanks to its strategic location, Africa Business Expo connects you to
            <span className="text-gray-700 font-medium"> key markets across continents</span>
          </p>
        </div>

        {/* Interactive World Map Section */}
        <div className="relative mb-20">
          {/* Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 rounded-[40px] blur-2xl opacity-60" />

          {/* Main Container */}
          <div className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 shadow-2xl">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[30px] p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Animated Background Grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Floating Connection Points */}
              {connectionPoints.map((point, i) => (
                <div
                  key={i}
                  className={`absolute ${point.size} rounded-full animate-pulse`}
                  style={{
                    left: point.x,
                    top: point.y,
                    animationDelay: point.delay,
                    background:
                      'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full bg-white/30 animate-ping"
                    style={{ animationDuration: '2s', animationDelay: point.delay }}
                  />
                </div>
              ))}

              {/* Connection Lines SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 15% 35% Q 30% 30% 45% 25%"
                  stroke="url(#lineGradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M 45% 25% Q 60% 35% 70% 35%"
                  stroke="url(#lineGradient2)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M 55% 45% Q 65% 50% 80% 50%"
                  stroke="url(#lineGradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>

              {/* Central Globe Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
                <Globe2 className="w-[400px] h-[400px] text-white" />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 bg-gradient-to-t from-violet-500/10 to-transparent rounded-full blur-3xl" />

              {/* Region Cards Grid */}
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                {regions.map((region, index) => (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Card Glow on Hover */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${region.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500`}
                    />

                    <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                      {/* Top Gradient Line */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${region.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      />

                      {/* Background Gradient on Hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${region.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Icon & Header */}
                      <div className="relative flex items-start justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${region.gradient} flex items-center justify-center shadow-lg ${region.shadowColor} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                          >
                            <region.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-lg group-hover:text-white transition-colors">
                              {region.name}
                            </h3>
                            <span
                              className={`text-xs font-semibold bg-gradient-to-r ${region.gradient} bg-clip-text text-transparent`}
                            >
                              {region.stats}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Areas List */}
                      <ul className="relative space-y-2.5">
                        {region.areas.map((area, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2.5 text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${region.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                            />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Target,
              title: 'Strategic Visibility',
              description: 'Position your brand in front of decision-makers from 100+ countries',
              gradient: 'from-emerald-500 to-green-600',
              bgGradient: 'from-emerald-50 to-green-50',
            },
            {
              icon: TrendingUp,
              title: 'Market Access',
              description: 'Direct pathways to emerging and established markets across continents',
              gradient: 'from-blue-500 to-cyan-600',
              bgGradient: 'from-blue-50 to-cyan-50',
            },
            {
              icon: Zap,
              title: 'Instant Connections',
              description: 'Pre-scheduled B2B meetings with qualified buyers and investors',
              gradient: 'from-violet-500 to-purple-600',
              bgGradient: 'from-violet-50 to-purple-50',
            },
          ].map((item, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
              />

              <div
                className={`relative h-full bg-gradient-to-br ${item.bgGradient} rounded-2xl p-8 border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-[100px]`}
                />

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.description}</p>

                {/* Arrow on Hover */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
