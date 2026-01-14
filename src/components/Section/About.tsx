// components/About.tsx
import { Building2, Users2, Handshake, TrendingUp, Globe2, Landmark } from 'lucide-react';

const participants = [
  { icon: Building2, title: 'African and Indian Ocean companies' },
  { icon: Users2, title: 'International investors and buyers' },
  { icon: Landmark, title: 'Financial institutions and development partners' },
  { icon: Globe2, title: 'Chambers of commerce and business networks' },
  { icon: Handshake, title: 'Public and private sector decision-makers' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-success-100 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            ABOUT THE EXPO
          </span>
          <h2 className="section-title text-gray-900">
            A <span className="text-primary-600">Pan-African</span> &
            <span className="text-success-600"> Indian Ocean</span> Platform
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="text-primary-600 font-bold text-2xl">Africa Business Expo</span> is
                a large-scale international business exhibition designed to connect African and
                Indian Ocean economies with global investors, buyers and strategic partners.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-6">
                Hosted in <span className="text-success-600 font-semibold">Mauritius</span>, one of
                Africa's most stable and business-friendly economies, the Expo serves as a gateway
                between Africa, the Indian Ocean region, Asia, the Middle East and the Commonwealth.
              </p>
            </div>

            {/* Feature Box */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <TrendingUp className="w-10 h-10 text-success-400" />
                <h3 className="font-heading font-bold text-2xl">Results-Driven</h3>
              </div>
              <p className="text-white/90">
                The Expo focuses on B2B, B2G meetings, product positioning, market access and
                investment opportunities.
              </p>
            </div>
          </div>

          {/* Right Column - Participants */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-8">
              Africa Business Expo brings together:
            </h3>
            {participants.map((item, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 p-5 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-success-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary-200"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-lg group-hover:text-primary-700 transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gateway Banner */}
        {/* <div className="mt-20 bg-gradient-to-r from-success-600 via-primary-600 to-accent-600 rounded-3xl p-1">
          <div className="bg-white rounded-[22px] p-8 md:p-12 text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-4">
              A Global Business Gateway
            </h3>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              Connecting Africa, the Indian Ocean, Asia, the Middle East, and the Commonwealth
              through one powerful platform for business growth and international partnerships.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
