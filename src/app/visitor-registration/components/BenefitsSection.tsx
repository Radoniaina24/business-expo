import Icon from '@/components/ui/AppIcon';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const BenefitsSection = () => {
  const benefits: Benefit[] = [
    {
      icon: 'UsersIcon',
      title: 'Networking Opportunities',
      description: 'Connect with 500+ exhibitors and 5,000+ business professionals from across Africa and the Indian Ocean region',
    },
    {
      icon: 'PresentationChartLineIcon',
      title: 'Exclusive Sessions',
      description: 'Access keynote presentations, panel discussions, and sector-specific roundtables led by industry experts',
    },
    {
      icon: 'LightBulbIcon',
      title: 'Innovation Showcase',
      description: 'Discover cutting-edge technologies, innovative solutions, and emerging trends shaping African business',
    },
    {
      icon: 'HandshakeIcon',
      title: 'B2B Matchmaking',
      description: 'Pre-scheduled meetings with potential partners, suppliers, and investors aligned with your business interests',
    },
    {
      icon: 'DocumentTextIcon',
      title: 'Market Intelligence',
      description: 'Receive comprehensive market reports, investment guides, and sector analyses for strategic decision-making',
    },
    {
      icon: 'GlobeAltIcon',
      title: 'International Exposure',
      description: 'Gain visibility in the global business community and explore cross-border collaboration opportunities',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Attend the Expo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join Africa's premier business gathering and unlock unprecedented opportunities for growth, partnership, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-warm hover:shadow-warm-lg transition-smooth"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={benefit.icon as any} size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;