// components/Program.tsx
import { Calendar, Users, Presentation, Handshake, Award, Coffee } from 'lucide-react';

const programDays = [
  {
    day: 'Day -1',
    title: 'Strategic B2B & VIP Networking',
    date: 'Pre-Event Day',
    color: 'from-accent-500 to-accent-600',
    borderColor: 'border-accent-500',
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
    color: 'from-primary-500 to-primary-600',
    borderColor: 'border-primary-500',
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
    color: 'from-success-500 to-success-600',
    borderColor: 'border-success-500',
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
    <section id="program" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            PROGRAM
          </span>
          <h2 className="section-title text-gray-900 mb-6">
            Event <span className="text-primary-600">Program</span>
          </h2>
          <p className="section-subtitle">
            Three days of intensive networking, exhibitions, and business opportunities
          </p>
        </div>

        {/* Program Timeline */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programDays.map((day, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 ${day.borderColor}`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${day.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80 text-sm font-medium">{day.date}</span>
                  <day.icon className="w-8 h-8 text-white/80" />
                </div>
                <h3 className="font-heading font-bold text-2xl">{day.day}</h3>
                <p className="text-white/90 mt-1">{day.title}</p>
              </div>

              {/* Events */}
              <div className="p-6 space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${day.color} text-white`}
                      >
                        {event.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <event.icon className="w-4 h-4 text-gray-400" />
                        <p className="text-gray-700 text-sm">{event.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Download Schedule */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center space-x-2 bg-white shadow-lg hover:shadow-xl rounded-full px-8 py-4 text-primary-600 font-semibold transition-all duration-300 hover:-translate-y-1">
            <Calendar className="w-5 h-5" />
            <span>Download Full Program</span>
          </button>
        </div>
      </div>
    </section>
  );
}
