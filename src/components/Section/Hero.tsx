// components/Hero.tsx
'use client';

import { Calendar, MapPin, Users, ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const stats = [
    { icon: Calendar, label: 'Date', value: 'June 2026' },
    { icon: MapPin, label: 'Place', value: 'Trianon Convention Centre' },
    { icon: Users, label: 'Expected Visitors', value: '15,000+' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-success-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-success-400/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 border-2 border-accent-400/30 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-success-500/20 rounded-full animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <span className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Mauritius • June 2026</span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            <span className="block">AFRICA BUSINESS</span>
            <span className="block mt-2">
              <span className="text-primary-300">EXPO</span>
              <span className="mx-4">–</span>
              <span className="bg-gradient-to-r from-success-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
                MAURITIUS 2026
              </span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-4">
            <span className="text-success-400 font-semibold">Expose.</span>{' '}
            <span className="text-primary-300 font-semibold">Connect.</span>{' '}
            <span className="text-accent-400 font-semibold">Grow Africa.</span>
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12">
            The Pan-African Business Exhibition Connecting Africa & the Indian Ocean to the World
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10"
              >
                <stat.icon className="w-6 h-6 text-success-400" />
                <div className="text-left">
                  <p className="text-white/60 text-sm">{stat.label}</p>
                  <p className="text-white font-semibold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="group bg-gradient-to-r from-success-500 to-success-600 hover:from-success-600 hover:to-success-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-success-500/30 flex items-center space-x-2">
              <span>Exhibit Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-500/30 flex items-center space-x-2">
              <span>Become a Sponsor</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline flex items-center space-x-2">
              <span>Register as Visitor</span>
            </button>
          </div>

          {/* Video Button */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group inline-flex items-center space-x-4 text-white/80 hover:text-white transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
            <span className="font-medium">Watch Promo Video</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
