// components/Program.tsx
'use client';
import { Calendar, Users, Presentation, Handshake, Award, ChevronRight } from 'lucide-react';

const programDays = [
  {
    day: 'Day -1',
    title: 'Strategic B2B & VIP Networking',
    date: 'Pre-Event Day',
    color: 'from-violet-500 to-purple-600',
    ringColor: 'ring-violet-500',
    dotColor: 'bg-violet-500',
    icon: Users,
    events: [
      { time: '09:00', title: 'Pre-arranged B2B meetings', icon: Handshake },
      {
        time: '14:00',
        title: 'High-level networking with investors, major corporations and institutions',
        icon: Users,
      },
      {
        time: '17:00',
        title: 'Strategic discussions and partnership building',
        icon: Presentation,
      },
    ],
  },
  {
    day: 'Day 1',
    title: 'Official Opening & Exhibition',
    date: 'Main Event - Day 1',
    color: 'from-blue-500 to-cyan-600',
    ringColor: 'ring-blue-500',
    dotColor: 'bg-blue-500',
    icon: Award,
    events: [
      {
        time: '09:00',
        title: 'Official opening ceremony with authorities and partners',
        icon: Award,
      },
      { time: '10:30', title: 'Launch of the Exhibition', icon: Presentation },
      { time: '11:00', title: 'B2B & B2C Exhibition', icon: Users },
      { time: '14:00', title: 'Business meetings and product presentations', icon: Handshake },
    ],
  },
  {
    day: 'Day 2',
    title: 'Exhibition & Business Opportunities',
    date: 'Main Event - Day 2',
    color: 'from-emerald-500 to-green-600',
    ringColor: 'ring-emerald-500',
    dotColor: 'bg-emerald-500',
    icon: Handshake,
    events: [
      { time: '09:00', title: 'Continued B2B & B2C Exhibition', icon: Users },
      { time: '11:00', title: 'Product demonstrations and showcases', icon: Presentation },
      { time: '14:00', title: 'Business matchmaking and deal-making', icon: Handshake },
      { time: '16:00', title: 'Partnership development', icon: Award },
    ],
  },
];

export default function Program() {
  return (
    <section id="program" className="py-28 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-white/80 text-sm font-bold tracking-wider uppercase">
              PROGRAM
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Event{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Program
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Three days of intensive networking, exhibitions, and business opportunities
          </p>
        </div>

        {/* Timeline Connector - Desktop */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 rounded-full opacity-30" />
          <div className="flex justify-between px-[15%]">
            {programDays.map((day, index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full ${day.dotColor} ring-4 ${day.ringColor} ring-opacity-30 relative z-10`}
              >
                <div
                  className={`absolute inset-0 ${day.dotColor} rounded-full animate-ping opacity-50`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {programDays.map((day, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Top Border */}
                <div className={`h-1 bg-gradient-to-r ${day.color}`} />

                {/* Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-lg text-white/60 text-xs font-medium mb-2">
                        {day.date}
                      </span>
                      <h3 className="font-bold text-3xl text-white">{day.day}</h3>
                    </div>
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${day.color} flex items-center justify-center shadow-lg shadow-black/20`}
                    >
                      <day.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <p className="text-white/70 font-medium">{day.title}</p>
                </div>

                {/* Divider */}
                <div className="mx-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Events */}
                <div className="p-6 space-y-2">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      {/* Dot */}
                      <div className="flex-shrink-0 mt-1.5">
                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${day.color}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-white/80 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                          {event.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${day.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
