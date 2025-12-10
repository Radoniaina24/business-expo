import Icon from '@/components/ui/AppIcon';

interface Highlight {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface EventHighlightsProps {
  className?: string;
}

const EventHighlights = ({ className = '' }: EventHighlightsProps) => {
  const highlights: Highlight[] = [
    {
      icon: 'SparklesIcon',
      title: 'Networking Premium',
      description: 'Rencontrez des décideurs clés, investisseurs et partenaires stratégiques dans un environnement professionnel exclusif.',
      color: 'text-primary'
    },
    {
      icon: 'PresentationChartLineIcon',
      title: 'Conférences Experts',
      description: 'Assistez à des sessions animées par des leaders d\'opinion africains et internationaux sur les tendances du marché.',
      color: 'text-secondary'
    },
    {
      icon: 'LightBulbIcon',
      title: 'Innovation Hub',
      description: 'Découvrez les dernières innovations technologiques et solutions business adaptées au marché africain.',
      color: 'text-accent'
    },
    {
      icon: 'HandshakeIcon',
      title: 'B2B Matchmaking',
      description: 'Système intelligent de mise en relation pour maximiser vos opportunités commerciales et partenariats.',
      color: 'text-primary'
    },
    {
      icon: 'GlobeAltIcon',
      title: 'Exposition Internationale',
      description: 'Showcasez vos produits et services devant un public qualifié de 30+ pays de l\'Océan Indien et d\'Afrique.',
      color: 'text-secondary'
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Ateliers Pratiques',
      description: 'Participez à des workshops interactifs sur le financement, l\'export et la croissance internationale.',
      color: 'text-accent'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pourquoi Participer à l'Expo ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Une plateforme unique pour développer votre business, créer des partenariats stratégiques et accéder aux marchés africains en pleine croissance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-warm-lg transition-smooth group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth ${highlight.color}`}>
                  <Icon name={highlight.icon as any} size={24} variant="solid" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;