// components/WhyExhibit.tsx
import {
  Target,
  Globe,
  Award,
  Users,
  Megaphone,
  Presentation,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Access Qualified Investors',
    description:
      'Connect with qualified investors and international buyers actively seeking opportunities.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Globe,
    title: 'Enter New Markets',
    description:
      'Expand your reach across Africa and the Indian Ocean region with strategic partnerships.',
    color: 'from-success-500 to-success-600',
  },
  {
    icon: Award,
    title: 'Premium Global Stage',
    description:
      'Position your brand on a prestigious international platform with high visibility.',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Users,
    title: 'B2B Strategic Meetings',
    description: 'Participate in high-level B2B meetings and strategic business discussions.',
    color: 'from-primary-600 to-success-500',
  },
  {
    icon: Megaphone,
    title: 'Marketing Exposure',
    description: 'Benefit from strong international marketing and media coverage.',
    color: 'from-success-500 to-accent-500',
  },
  {
    icon: Presentation,
    title: 'Showcase Excellence',
    description: 'Present your products, services and projects to a diverse global audience.',
    color: 'from-accent-500 to-primary-500',
  },
];

export default function WhyExhibit() {
  return (
    <section id="why-exhibit" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-success-100 text-success-700 rounded-full text-sm font-semibold mb-4">
            WHY EXHIBIT
          </span>
          <h2 className="section-title text-gray-900 mb-6">
            Why Exhibit at <span className="text-success-600">Africa Business Expo?</span>
          </h2>
          <p className="section-subtitle">
            Unlock unprecedented opportunities and connect your business to Africa and beyond
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent relative overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />
              <div className="absolute inset-[2px] bg-white rounded-2xl" />

              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-success-900 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-success-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />

          <div className="relative">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Exhibit in Mauritius and connect your
              <br />
              <span className="text-success-400">business to Africa and beyond</span>
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['15,000+ Visitors', '500+ Exhibitors', '50+ Countries'].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-success-400" />
                  <span className="text-white font-medium">{stat}</span>
                </div>
              ))}
            </div>

            <button className="group bg-success-500 hover:bg-success-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
              <span>Secure Your Booth Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
