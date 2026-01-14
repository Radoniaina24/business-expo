// components/Organizer.tsx
import { Globe2, Handshake, TrendingUp, Building2 } from 'lucide-react';

const initiatives = [
  {
    icon: Globe2,
    title: 'Regional Economic Connector',
    description: 'Bridging Africa, Indian Ocean, and global markets',
  },
  {
    icon: Handshake,
    title: 'Partnership Facilitation',
    description: 'Enabling strategic business partnerships',
  },
  {
    icon: TrendingUp,
    title: 'Investment Flows',
    description: 'Channeling investments to key sectors',
  },
  {
    icon: Building2,
    title: 'Business Growth',
    description: 'Supporting enterprise expansion beyond borders',
  },
];

export default function Organizer() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-success-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              ORGANIZER
            </span>

            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              <span className="text-success-400">AIOCCI</span>
              <span className="block text-xl md:text-2xl mt-2 text-white/80 font-normal">
                African Indian Ocean Chamber of Commerce & Industry
              </span>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              AIOCCI is a non-profit organization dedicated to strengthening economic cooperation,
              trade and investment between Africa, the Indian Ocean region and global markets.
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Through its initiatives and international events, AIOCCI acts as a regional economic
              connector, facilitating partnerships, investment flows and business growth beyond
              borders.
            </p>

            {/* CTA */}
            <a
              href="https://aiocci.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-success-400 hover:text-success-300 font-semibold transition-colors"
            >
              <span>Learn more about AIOCCI</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Right Column - Initiatives */}
          <div className="grid sm:grid-cols-2 gap-6">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success-500 to-primary-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
