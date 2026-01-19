// components/About.tsx
'use client';

import {
  Building2,
  Users2,
  Handshake,
  TrendingUp,
  Globe2,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
} from 'lucide-react';

const participants = [
  {
    icon: Building2,
    title: 'African and Indian Ocean companies',
    description: 'Leading enterprises across diverse sectors',
  },
  {
    icon: Users2,
    title: 'International investors and buyers',
    description: 'Global capital seeking African opportunities',
  },
  {
    icon: Landmark,
    title: 'Financial institutions and development partners',
    description: 'Supporting sustainable growth initiatives',
  },
  {
    icon: Globe2,
    title: 'Chambers of commerce and business networks',
    description: 'Facilitating cross-border connections',
  },
  {
    icon: Handshake,
    title: 'Public and private sector decision-makers',
    description: 'Shaping the future of African commerce',
  },
];

const stats = [
  { value: '50+', label: 'Countries' },
  { value: '500+', label: 'Exhibitors' },
  { value: '10K+', label: 'Visitors' },
  { value: '1000+', label: 'B2B Meetings' },
];

const highlights = [
  'Strategic location in Mauritius',
  'Direct access to African markets',
  'Commonwealth business network',
  'Investment matchmaking',
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/30 via-primary-100/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-success-200/30 via-success-100/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/10 via-transparent to-success-100/10 rounded-full blur-3xl" />

        {/* Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.8)_70%)]" />
      </div>

      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-primary-100 rounded-full mb-8 shadow-lg shadow-primary-100/20">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-bold tracking-wider bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent uppercase">
              About The Expo
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
            A{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                Pan-African
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary-300"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q25,0 50,8 T100,8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            & <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-success-600 via-success-500 to-success-600 bg-clip-text text-transparent">
                Indian Ocean
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-success-300"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q25,0 50,8 T100,8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            Platform
          </h2>

          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Connecting continents, creating opportunities, and fostering
            <span className="text-gray-700 font-medium"> sustainable business growth</span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Description */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Description Card */}
            <div className="relative group">
              {/* Animated Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-success-500 to-primary-500 rounded-[28px] opacity-20 group-hover:opacity-40 blur-lg transition-all duration-700 animate-gradient-x" />

              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white shadow-2xl shadow-gray-200/60">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-transparent rounded-tr-3xl rounded-bl-[100px] opacity-50" />

                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-success-500 bg-clip-text text-transparent">
                    Africa Business Expo
                  </span>
                </h3>

                <div className="space-y-5">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A large-scale international business exhibition designed to connect
                    <span className="text-gray-800 font-semibold">
                      {' '}
                      African and Indian Ocean economies{' '}
                    </span>
                    with global investors, buyers and strategic partners.
                  </p>

                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-success-50 to-primary-50 rounded-xl border border-success-100">
                    <MapPin className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Hosted in <span className="font-bold text-success-600">Mauritius</span>, one
                      of Africa's most stable and business-friendly economies, serving as a gateway
                      between Africa, the Indian Ocean region, Asia, the Middle East and the
                      Commonwealth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Box - Dark Theme */}
            <div className="relative group overflow-hidden rounded-3xl">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

              {/* Gradient Orbs */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-500/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-success-500/30 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

              <div className="relative p-8 md:p-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-success-400 rounded-2xl blur opacity-75" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-white">Results-Driven</h4>
                    <p className="text-white/60 text-sm">Platform for Growth</p>
                  </div>
                </div>

                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Focused on B2B, B2G meetings, product positioning, market access and investment
                  opportunities.
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-success-400 to-success-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Participants */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 rounded-lg mb-4">
                <Users2 className="w-4 h-4 text-primary-600" />
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                  Our Participants
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who Joins the Expo?
              </h3>
              <p className="text-gray-500 text-lg">
                Africa Business Expo brings together key stakeholders from across the globe
              </p>
            </div>

            <div className="space-y-4">
              {participants.map((item, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-success-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

                  <div className="relative flex items-center gap-5 p-5 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden">
                    {/* Background Pattern on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-transparent to-success-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-success-500 rounded-xl blur-md opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500" />
                      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 via-primary-600 to-success-500 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 relative">
                      <h4 className="font-bold text-gray-900 text-lg md:text-xl group-hover:text-primary-600 transition-colors duration-300 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm md:text-base truncate group-hover:text-gray-600 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
