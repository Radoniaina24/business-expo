// components/WhyExhibit.tsx
'use client';
import { Target, Globe, Award, Users, Megaphone, Presentation } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Access Qualified Investors',
    description:
      'Connect with qualified investors and international buyers actively seeking opportunities.',
    color: 'from-primary-500 to-primary-600',
    bgGlow: 'bg-primary-500',
  },
  {
    icon: Globe,
    title: 'Enter New Markets',
    description:
      'Expand your reach across Africa and the Indian Ocean region with strategic partnerships.',
    color: 'from-success-500 to-success-600',
    bgGlow: 'bg-success-500',
  },
  {
    icon: Award,
    title: 'Premium Global Stage',
    description:
      'Position your brand on a prestigious international platform with high visibility.',
    color: 'from-accent-500 to-accent-600',
    bgGlow: 'bg-accent-500',
  },
  {
    icon: Users,
    title: 'B2B Strategic Meetings',
    description: 'Participate in high-level B2B meetings and strategic business discussions.',
    color: 'from-primary-600 to-success-500',
    bgGlow: 'bg-primary-600',
  },
  {
    icon: Megaphone,
    title: 'Marketing Exposure',
    description: 'Benefit from strong international marketing and media coverage.',
    color: 'from-success-500 to-accent-500',
    bgGlow: 'bg-success-500',
  },
  {
    icon: Presentation,
    title: 'Showcase Excellence',
    description: 'Present your products, services and projects to a diverse global audience.',
    color: 'from-accent-500 to-primary-500',
    bgGlow: 'bg-accent-500',
  },
];

export default function WhyExhibit() {
  return (
    <section
      id="why-exhibit"
      className="py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-success-200/40 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-200/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-success-50 to-success-100 border border-success-200 rounded-full mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-600"></span>
            </span>
            <span className="text-success-700 text-sm font-bold tracking-wider uppercase">
              WHY EXHIBIT
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Exhibit at{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-success-600 via-success-500 to-primary-600 bg-clip-text text-transparent">
                Africa Business Expo?
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C47.6667 2.16667 141 -2.4 199 5.5"
                  stroke="url(#paint0_linear)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="1"
                    y1="5.5"
                    x2="199"
                    y2="5.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#22c55e" />
                    <stop offset="1" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock unprecedented opportunities and connect your business to Africa and beyond
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 ${benefit.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700`}
              />

              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] transition-all duration-500 border border-gray-100 group-hover:border-transparent overflow-hidden group-hover:-translate-y-2">
                {/* Top Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                {/* Background Pattern on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                  />
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="relative group">
          {/* Animated Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-success-500 to-accent-500 rounded-[2rem] blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />

          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2rem] p-12 md:p-16 text-center overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px',
                }}
              />
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-success-500/30 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-10 left-10 w-40 h-40 bg-primary-500/30 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent-500/20 rounded-full blur-3xl" />

            {/* Stars/Sparkles */}
            <div
              className="absolute top-8 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"
              style={{ animationDuration: '2s' }}
            />
            <div
              className="absolute bottom-12 right-1/3 w-1.5 h-1.5 bg-success-400 rounded-full animate-ping"
              style={{ animationDuration: '2.5s' }}
            />
            <div
              className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent-400 rounded-full animate-ping"
              style={{ animationDuration: '3s' }}
            />

            <div className="relative">
              <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Exhibit in Mauritius and connect your
                <br />
                <span className="bg-gradient-to-r from-success-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  business to Africa and beyond
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
