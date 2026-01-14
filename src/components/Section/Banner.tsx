// components/Banner.tsx
'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Calendar, MapPin, Star } from 'lucide-react';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const headlines = [
    "Africa's Premier Business Exhibition",
    'Connect with 15,000+ Business Leaders',
    'Gateway to African & Indian Ocean Markets',
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToHero = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        {/* Main Background Image - African/Mauritius Landscape */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] hover:scale-110"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1768223810/post-paysage_bvk0rb.jpg')`,
          }}
        />

        {/* Alternative: Mauritius Beach/Mountain */}
        {/* 
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`,
          }}
        />
        */}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 via-transparent to-success-900/40" />

        {/* Animated Color Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-accent-600/20 animate-pulse"
          style={{ animationDuration: '4s' }}
        />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="banner-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#banner-grid)" />
          </svg>
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full border border-success-400/30 animate-float" />
        <div className="absolute top-40 right-[15%] w-24 h-24 rounded-full border border-accent-400/30 animate-float-delayed" />
        <div className="absolute bottom-40 left-[20%] w-20 h-20 rounded-full border border-primary-400/30 animate-float" />
        <div className="absolute bottom-60 right-[25%] w-16 h-16 rounded-full bg-success-500/10 animate-float-delayed" />

        {/* Sparkle Elements */}
        <Sparkles className="absolute top-32 right-[30%] w-6 h-6 text-success-400/50 animate-pulse" />
        <Sparkles
          className="absolute bottom-48 left-[35%] w-8 h-8 text-accent-400/50 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <Star className="absolute top-1/3 left-[15%] w-4 h-4 text-white/30 animate-twinkle" />
        <Star
          className="absolute top-1/4 right-[20%] w-3 h-3 text-success-300/40 animate-twinkle"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="bg-gradient-to-r from-success-600 via-primary-600 to-accent-600">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center justify-center space-x-4 text-white text-sm">
              <span className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">June 2026</span>
              </span>
              <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
              <span className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Mauritius</span>
              </span>
              <span className="w-1.5 h-1.5 bg-white/50 rounded-full hidden sm:block" />
              <span className="hidden sm:block font-semibold">
                Register Now - Early Bird Offers!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Animated Badge */}
        {/* <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-8">
            <div className="flex -space-x-1">
              <div className="w-3 h-3 rounded-full bg-success-400 animate-pulse" />
              <div
                className="w-3 h-3 rounded-full bg-primary-400 animate-pulse"
                style={{ animationDelay: '0.2s' }}
              />
              <div
                className="w-3 h-3 rounded-full bg-accent-400 animate-pulse"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
            <span className="text-white/90 font-medium text-sm sm:text-base">
              Pan-African Business Exhibition
            </span>
          </div>
        </div> */}

        {/* Main Title */}
        {/* <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-tight">
            <span className="block">AFRICA</span>
            <span className="block bg-gradient-to-r from-success-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
              BUSINESS
            </span>
            <span className="block">EXPO</span>
          </h1>
        </div> */}

        {/* Location Badge */}
        {/* <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-light text-white">
              MAURITIUS <span className="text-success-400 font-bold">2026</span>
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50" />
          </div>
        </div> */}

        {/* Animated Headlines */}
        <div
          className={`h-16 mb-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="relative h-full flex items-center justify-center overflow-hidden">
            {headlines.map((headline, index) => (
              <p
                key={index}
                className={`absolute text-lg sm:text-xl md:text-2xl text-white/80 font-light transition-all duration-700 ${
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {headline}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-950 to-transparent" />

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-8 w-24 h-24 border-l-2 border-t-2 border-success-400/30 rounded-tl-3xl" />
      <div className="absolute top-20 right-8 w-24 h-24 border-r-2 border-t-2 border-accent-400/30 rounded-tr-3xl" />
      <div className="absolute bottom-32 left-8 w-24 h-24 border-l-2 border-b-2 border-primary-400/30 rounded-bl-3xl" />
      <div className="absolute bottom-32 right-8 w-24 h-24 border-r-2 border-b-2 border-success-400/30 rounded-br-3xl" />
    </section>
  );
}
