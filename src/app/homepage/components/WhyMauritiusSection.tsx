import Icon from '@/components/ui/AppIcon';

const WhyMauritiusSection = () => {
  const regions = [
    { name: 'Madagascar', flag: '🇲🇬' },
    { name: 'La Réunion', flag: '🇷🇪' },
    { name: 'Seychelles', flag: '🇸🇨' },
    { name: 'Mayotte', flag: '🇾🇹' },
    { name: 'Afrique du Sud', flag: '🇿🇦' },
    { name: 'Inde', flag: '🇮🇳' },
    { name: 'Émirats Arabes Unis', flag: '🇦🇪' },
  ];

  const mauriceAdvantages = [
    {
      icon: 'ShieldCheckIcon',
      title: 'Fiable',
      description: 'Environnement business stable et sécurisé',
    },
    { icon: 'StarIcon', title: 'Professionnel', description: 'Infrastructure de classe mondiale' },
    {
      icon: 'GlobeAltIcon',
      title: 'Reconnu Internationalement',
      description: "Hub économique de l\'océan Indien",
    },
    {
      icon: 'MapIcon',
      title: 'Stratégiquement Placé',
      description: 'Au cœur des routes commerciales',
    },
  ];

  const eventBenefits = [
    'Présenter vos produits et services sur un marché nouveau',
    'Toucher des clients et partenaires qui ne viennent jamais à Madagascar',
    "Tester votre attractivité à l\'international",
    'Se connecter directement à des acheteurs professionnels mauriciens, africains et asiatiques',
    'Identifier des opportunités commerciales inédites',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pourquoi Maurice Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pourquoi Maurice ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Parce que Maurice <span className="text-primary font-semibold">attire</span>,
              <span className="text-primary font-semibold"> rassure</span> et
              <span className="text-primary font-semibold"> connecte</span>.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-card rounded-2xl shadow-warm-xl p-8 lg:p-12 border border-border/50">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Organiser une exposition à Maurice, c'est bénéficier d'un environnement unique qui
                combine tous les avantages d'un hub international moderne.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {mauriceAdvantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-muted/50 rounded-xl p-6 hover:bg-muted transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-warm">
                        <Icon
                          name={advantage.icon as any}
                          size={24}
                          variant="solid"
                          className="text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{advantage.title}</h4>
                      <p className="text-muted-foreground text-sm">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Regional Network */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">
              Maurice : Le Carrefour Économique Naturel
            </h3>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Placé au cœur d'un réseau régional stratégique entre l'océan Indien, l'Afrique, l'Asie
              et le Commonwealth
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 text-center hover:shadow-warm-lg transition-all hover:-translate-y-1 border border-border/50"
                >
                  <div className="text-4xl mb-3">{region.flag}</div>
                  <p className="text-sm font-medium text-foreground">{region.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-card px-6 py-3 rounded-full shadow-warm">
                <Icon name="RocketLaunchIcon" size={24} variant="solid" className="text-primary" />
                <p className="text-lg font-semibold text-foreground">
                  Une rampe de lancement pour entrer dans de nouveaux marchés
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Regional Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Un Marketing Régional Puissant
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Pour attirer du trafic réel et qualifié
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="bg-card rounded-2xl shadow-warm-xl p-8 border border-border/50">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-warm">
                      <Icon name="MegaphoneIcon" size={28} variant="solid" className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Déploiement Multi-Canal
                    </h3>
                    <p className="text-muted-foreground">
                      Un plan marketing ciblé dans tous les pays de la région
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'Médias traditionnels',
                    'Affichage publicitaire',
                    'Radios locales',
                    'Réseaux sociaux',
                    'Télévision',
                    'Marketing digital',
                  ].map((channel, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-muted/50 rounded-lg p-3"
                    >
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        variant="solid"
                        className="text-secondary flex-shrink-0"
                      />
                      <span className="text-foreground font-medium">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-8 border border-secondary/30">
                <h4 className="text-2xl font-bold text-foreground mb-6">Objectif de l'Événement</h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Attirer un public professionnel et grand public,{' '}
                  <span className="text-foreground font-semibold">qualifié et actif</span>, qui
                  cherche à :
                </p>
                <ul className="space-y-3">
                  {[
                    'Découvrir de nouvelles opportunités',
                    'Investir dans des projets prometteurs',
                    'Acheter et négocier',
                    'Collaborer avec des partenaires fiables',
                  ].map((goal, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      </div>
                      <span className="text-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-card/80 rounded-xl border-l-4 border-primary">
                  <p className="text-foreground font-semibold">
                    Les exposants bénéficient d'une visibilité régionale impossible à obtenir en
                    restant dans un seul pays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* International Opportunity Section */}
        <div className="mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-warm-2xl p-8 lg:p-12 text-white">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon name="GlobeAltIcon" size={40} variant="solid" className="text-white" />
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
                L'Avantage Majeur : S'Ouvrir à une Nouvelle Opportunité Internationale
              </h2>

              <p className="text-xl text-center mb-12 opacity-95">
                Madagascar–Africa Business Expo est conçu pour permettre à chaque exposant de :
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {eventBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <Icon
                      name="ArrowRightIcon"
                      size={24}
                      variant="solid"
                      className="text-white flex-shrink-0 mt-1"
                    />
                    <p className="text-white">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-2xl font-bold mb-4">
                  Participer, c'est sortir du cadre national pour entrer dans une dynamique
                  internationale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hybrid Event Format */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Un Salon Hybride : Exposition – B2B – B2C
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Toucher tout l'écosystème économique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-warm-xl p-8 border border-border/50 hover:shadow-warm-2xl transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-warm">
                <Icon name="BuildingOfficeIcon" size={32} variant="solid" className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                B2B - Business to Business
              </h3>
              <ul className="space-y-3">
                {[
                  'Investisseurs',
                  'Entreprises',
                  'Institutions',
                  'Grossistes',
                  'Acheteurs internationaux',
                ].map((audience, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      variant="solid"
                      className="text-secondary"
                    />
                    <span className="text-muted-foreground">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl shadow-warm-xl p-8 border border-border/50 hover:shadow-warm-2xl transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-6 shadow-warm">
                <Icon name="UserGroupIcon" size={32} variant="solid" className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                B2C - Business to Consumer
              </h3>
              <ul className="space-y-3">
                {['Grand public', 'Familles', 'Jeunes entrepreneurs', 'Consommateurs actifs'].map(
                  (audience, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        variant="solid"
                        className="text-primary"
                      />
                      <span className="text-muted-foreground">{audience}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h4 className="text-2xl font-bold text-center text-foreground mb-6">
                Votre exposition devient un espace de :
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: 'EyeIcon', label: 'Visibilité' },
                  { icon: 'ShoppingCartIcon', label: 'Ventes' },
                  { icon: 'UsersIcon', label: 'Rencontres' },
                  { icon: 'HandshakeIcon', label: 'Partenariats' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3 shadow-warm">
                      <Icon
                        name={item.icon as any}
                        size={28}
                        variant="solid"
                        className="text-white"
                      />
                    </div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-foreground to-foreground/90 rounded-2xl shadow-warm-2xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              En Résumé : Une Exposition Qui Élargit Votre Monde
            </h2>

            <p className="text-xl text-center mb-12 opacity-95">
              Madagascar–Africa Business Expo est le rendez-vous incontournable pour :
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'GlobeAltIcon', text: "S'ouvrir à un nouveau marché" },
                { icon: 'UserGroupIcon', text: 'Accéder à une audience internationale' },
                { icon: 'HandshakeIcon', text: "Développer des relations d'affaires durables" },
                { icon: 'EyeIcon', text: "Gagner en visibilité dans l'océan Indien" },
                { icon: 'SparklesIcon', text: 'Attirer de nouvelles opportunités commerciales' },
                { icon: 'RocketLaunchIcon', text: 'Propulser votre croissance internationale' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Icon
                      name={item.icon as any}
                      size={28}
                      variant="solid"
                      className="text-white"
                    />
                  </div>
                  <p className="font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                <Icon name="StarIcon" size={28} variant="solid" className="text-yellow-300" />
                <p className="text-xl font-bold">
                  Rejoignez-nous et transformez votre vision en réalité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMauritiusSection;
