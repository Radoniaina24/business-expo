// components/Organizer.tsx
import { Globe2, Handshake, TrendingUp, Building2 } from 'lucide-react';
import Image from 'next/image';

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
            <Image
              alt="image"
              src={
                'https://res.cloudinary.com/dx3xhdaym/image/upload/v1768490356/9254b683-32a5-4751-b0e6-ed8c6bccd465_stueh7.jpg'
              }
              width={700}
              height={700}
              className="rounded-lg"
            />
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
