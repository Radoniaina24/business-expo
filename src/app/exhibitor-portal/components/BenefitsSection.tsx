import Icon from '@/components/ui/AppIcon';

interface Benefit {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const BenefitsSection = () => {
  const benefits: Benefit[] = [
    {
      icon: 'UsersIcon',
      title: 'Accès à 5,000+ Acheteurs Qualifiés',
      description: 'Rencontrez des décideurs d&apos;entreprises de Madagascar, Maurice, et de toute l&apos;Afrique activement à la recherche de solutions.',
      color: 'bg-primary'
    },
    {
      icon: 'GlobeAltIcon',
      title: 'Visibilité Internationale',
      description: 'Bénéficiez d&apos;une couverture médiatique complète avec plus de 50 médias partenaires et une diffusion en direct.',
      color: 'bg-secondary'
    },
    {
      icon: 'ChartBarIcon',
      title: 'Génération de Leads Garantie',
      description: 'Notre système de matchmaking B2B intelligent vous connecte avec les prospects les plus pertinents avant même l&apos;événement.',
      color: 'bg-accent'
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Sessions de Formation Exclusives',
      description: 'Accédez à des ateliers sur l&apos;exportation, le financement, et les stratégies de croissance animés par des experts.',
      color: 'bg-error'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Support Dédié 24/7',
      description: 'Une équipe dédiée vous accompagne de la réservation jusqu&apos;à la fin de l&apos;expo pour garantir votre succès.',
      color: 'bg-success'
    },
    {
      icon: 'CurrencyDollarIcon',
      title: 'ROI Moyen de 300%',
      description: 'Nos exposants précédents ont généré en moyenne 3€ de revenus pour chaque 1€ investi dans leur participation.',
      color: 'bg-warning'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="StarIcon" size={20} variant="solid" className="text-primary" />
            <span className="text-sm font-semibold text-primary">Avantages Exposants</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pourquoi Exposer avec Nous?
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les avantages exclusifs qui font de notre expo la plateforme de croissance préférée des entreprises africaines.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-warm-lg transition-confident"
            >
              <div className={`w-14 h-14 ${benefit.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                <Icon name={benefit.icon as any} size={28} variant="outline" className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-error rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Prêt à Transformer Votre Entreprise?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Rejoignez les leaders du marché qui ont déjà réservé leur place. Les meilleurs emplacements partent vite!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 shadow-warm-lg transition-confident">
              <span>Réserver Maintenant</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </button>
            <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-confident">
              <Icon name="PhoneIcon" size={20} variant="outline" />
              <span>Parler à un Conseiller</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;