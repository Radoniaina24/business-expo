// components/Banner.tsx
'use client';

import { useState } from 'react';
import { Sparkles, Calendar, MapPin, Star, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Banner() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative w-full bg-primary-950">
      {/* Top Bar */}
      <div className="relative z-30 w-full">
        <div className="bg-gradient-to-r from-success-600 via-primary-600 to-accent-600">
          <div className="max-w-7xl mx-auto px-4 py-2.5">
            <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4 text-white text-sm">
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
              <span className="hidden sm:block font-semibold animate-pulse">
                Register Now - Early Bird Offers!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Image Container - Full Width Edge to Edge */}
      <div className="relative w-full">
        {/* Image Container - Full Width */}
        <div className="relative w-full">
          {/* Background Fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-success-900" />

          {/* Full Width Image - Edge to Edge */}
          <Image
            src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1768223810/post-paysage_bvk0rb.jpg"
            alt="Paysage Mauritius - Conference 2026"
            width={1920}
            height={1080}
            priority
            quality={95}
            sizes="100vw"
            className={`
              relative
              w-full
              h-auto
              block
              transition-all duration-700 ease-out
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            onLoad={() => setImageLoaded(true)}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />

          {/* Overlay Elements - Above Image */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Subtle Vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.2)]" />

            {/* Top & Bottom Subtle Gradients */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-950/40 to-transparent" />
          </div>

          {/* Decorative Elements */}
          <BannerDecorations />

          {/* Floating Particles */}
          <FloatingParticles />
        </div>
      </div>
    </section>
  );
}

// Decorative Elements Component
function BannerDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <div className="w-16 h-16 md:w-24 md:h-24 border-l-2 border-t-2 border-success-400/30 rounded-tl-2xl" />
      </div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        <div className="w-16 h-16 md:w-24 md:h-24 border-r-2 border-t-2 border-accent-400/30 rounded-tr-2xl" />
      </div>
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
        <div className="w-16 h-16 md:w-24 md:h-24 border-l-2 border-b-2 border-primary-400/30 rounded-bl-2xl" />
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
        <div className="w-16 h-16 md:w-24 md:h-24 border-r-2 border-b-2 border-success-400/30 rounded-br-2xl" />
      </div>
    </div>
  );
}

// Floating Particles Component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Circles */}
      <div className="absolute top-[15%] left-[5%] w-12 h-12 md:w-20 md:h-20 rounded-full border border-success-400/20 animate-float" />
      <div className="absolute top-[20%] right-[8%] w-10 h-10 md:w-16 md:h-16 rounded-full border border-accent-400/20 animate-float-delayed" />
      <div className="absolute bottom-[25%] left-[12%] w-8 h-8 md:w-14 md:h-14 rounded-full border border-primary-400/20 animate-float" />
      <div className="absolute bottom-[30%] right-[15%] w-6 h-6 md:w-12 md:h-12 rounded-full bg-success-500/10 animate-float-delayed" />

      {/* Sparkles */}
      <Sparkles className="absolute top-[25%] right-[25%] w-4 h-4 md:w-6 md:h-6 text-success-400/30 animate-pulse" />
      <Sparkles
        className="absolute bottom-[35%] left-[20%] w-5 h-5 md:w-7 md:h-7 text-accent-400/30 animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      {/* Stars */}
      <Star className="absolute top-[35%] left-[8%] w-3 h-3 text-white/20 animate-twinkle" />
      <Star
        className="absolute top-[28%] right-[12%] w-2 h-2 text-success-300/25 animate-twinkle"
        style={{ animationDelay: '0.5s' }}
      />
    </div>
  );
}
