// components/AfricaVisionaryAwards.tsx

import Image from 'next/image';
import React from 'react';

interface AfricaVisionaryAwardsProps {
  imageSrc?: string;
  imageAlt?: string;
}

const AfricaVisionaryAwards: React.FC<AfricaVisionaryAwardsProps> = ({
  imageSrc = '/images/africa-awards.jpg',
  imageAlt = 'Africa Visionary Awards Ceremony',
}) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-green-50 to-red-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-900/10 via-green-900/10 to-blue-900/10 border border-green-800/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full animate-pulse"></span>
              <span className="text-green-900 text-sm font-medium tracking-wide uppercase">
                In Preparation
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-700 via-green-700 to-blue-700 bg-clip-text text-transparent mb-6 leading-tight">
              The Africa Visionary Awards
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              <div className="h-1 w-8 bg-green-500 rounded-full"></div>
              <div className="h-1 w-4 bg-blue-400 rounded-full"></div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-green-800">The Africa Visionary Awards</span> is
                a prestigious pan-African recognition initiative currently in preparation, developed
                by{' '}
                <span className="font-semibold text-blue-700">
                  African Indian Ocean Chamber of Commerce & Industry (AIOCCI)
                </span>{' '}
                in partnership with the{' '}
                <span className="font-semibold text-red-700">
                  Chambre de Commerce et d'Industrie Maurice–Madagascar (CCIMM)
                </span>
                .
              </p>

              <p>
                The awards ceremony is planned to take place during the{' '}
                <span className="font-semibold text-green-800">Africa Business Expo</span>, to be
                held in Mauritius at the{' '}
                <span className="font-semibold text-blue-800">Trianon Convention Center</span>.
              </p>

              <p>
                The Africa Visionary Awards aims to honor visionary leaders, entrepreneurs,
                innovators, and institutions whose impact and leadership contribute to Africa's
                economic transformation, innovation, and regional integration across Africa and the
                Indian Ocean region.
              </p>

              <p className="italic text-blue-800 border-l-4 border-gradient-to-b from-red-500 via-green-500 to-blue-500 pl-4  py-3 rounded-r-lg border-l-green-500">
                Further official details regarding the program, nomination process, and ceremony
                will be announced soon.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-tr from-red-500/20 to-green-600/20 rounded-full blur-2xl"></div>

            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Border Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-green-600 to-blue-600 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-600 via-red-600 to-green-600 rounded-2xl transform -rotate-2 scale-102 opacity-15"></div>

              {/* Image Wrapper */}
              <div className="relative bg-gradient-to-br from-green-800 via-blue-900 to-red-900 rounded-2xl p-2 shadow-2xl shadow-blue-900/40">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl rotate-12 z-20">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Partners Section */}
      </div>
    </section>
  );
};

export default AfricaVisionaryAwards;
