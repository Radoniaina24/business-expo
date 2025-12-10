import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  ctaLink: string;
}

interface PackagesComparisonProps {
  className?: string;
}

const PackagesComparison = ({ className = '' }: PackagesComparisonProps) => {
  const packages: Package[] = [
    {
      name: 'Visiteur Standard',
      price: 'Gratuit',
      description: 'Accès complet à l\'exposition et aux conférences principales',
      features: [
        'Accès à tous les stands d\'exposition',
        'Participation aux conférences plénières',
        'Networking dans les espaces communs',
        'Documentation digitale de l\'événement',
        'Badge visiteur personnalisé'
      ],
      highlighted: false,
      cta: 'S\'inscrire Gratuitement',
      ctaLink: '/visitor-registration'
    },
    {
      name: 'Visiteur VIP',
      price: '€150',
      description: 'Expérience premium avec accès exclusif et networking privilégié',
      features: [
        'Tous les avantages Visiteur Standard',
        'Accès VIP Lounge avec restauration',
        'Sessions B2B matchmaking prioritaires',
        'Participation aux ateliers exclusifs',
        'Déjeuners networking avec speakers',
        'Kit VIP et goodies premium',
        'Parking réservé'
      ],
      highlighted: true,
      cta: 'Devenir VIP',
      ctaLink: '/visitor-registration'
    },
    {
      name: 'Exposant Standard',
      price: '€1,200',
      description: 'Stand d\'exposition 9m² avec équipements de base',
      features: [
        'Stand équipé 9m² (3x3m)',
        'Mobilier standard (table, chaises)',
        'Connexion électrique et WiFi',
        '2 badges exposant inclus',
        'Listing dans le catalogue officiel',
        'Accès aux conférences',
        'Support logistique sur place'
      ],
      highlighted: false,
      cta: 'Réserver un Stand',
      ctaLink: '/exhibitor-portal'
    },
    {
      name: 'Exposant Premium',
      price: '€2,500',
      description: 'Stand premium 18m² avec visibilité maximale et services VIP',
      features: [
        'Stand premium 18m² (6x3m)',
        'Design et aménagement personnalisé',
        'Emplacement privilégié',
        '5 badges exposant inclus',
        'Publicité dans le catalogue',
        'Sessions B2B matchmaking illimitées',
        'Participation aux déjeuners VIP',
        'Support marketing pré-événement',
        'Vidéo promotionnelle sur écrans géants'
      ],
      highlighted: false,
      cta: 'Choisir Premium',
      ctaLink: '/exhibitor-portal'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choisissez Votre Formule
          </h2>
          <p className="text-lg text-muted-foreground">
            Des options adaptées à tous les besoins, du visiteur curieux à l'exposant premium. Comparez et choisissez la formule qui correspond à vos objectifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-6 flex flex-col ${
                pkg.highlighted
                  ? 'border-primary shadow-warm-xl scale-105 lg:scale-110'
                  : 'border-border shadow-warm hover:shadow-warm-lg'
              } transition-smooth`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-warm">
                  Plus Populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-primary">
                    {pkg.price}
                  </span>
                  {pkg.price !== 'Gratuit' && (
                    <span className="text-sm text-muted-foreground">/ participant</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="flex-1 mb-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        variant="solid"
                        className={`flex-shrink-0 mt-0.5 ${
                          pkg.highlighted ? 'text-primary' : 'text-success'
                        }`}
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={pkg.ctaLink}
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-smooth ${
                  pkg.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm hover:shadow-warm-lg'
                    : 'bg-muted text-foreground border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3 shadow-warm">
            <Icon name="InformationCircleIcon" size={20} variant="solid" className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Tarifs préférentiels disponibles pour les groupes de 10+ personnes.{' '}
              <Link href="/contact-support" className="text-primary font-semibold hover:underline">
                Contactez-nous
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesComparison;