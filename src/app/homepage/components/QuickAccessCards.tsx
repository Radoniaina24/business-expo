import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface QuickAccessCard {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

const QuickAccessCards = () => {
  const cards: QuickAccessCard[] = [
    {
      title: "Exposants",
      description: "Réservez votre stand et présentez vos produits à des milliers de visiteurs qualifiés",
      icon: "BuildingStorefrontIcon",
      href: "/exhibitor-portal",
      color: "from-primary to-primary/80"
    },
    {
      title: "Visiteurs",
      description: "Inscrivez-vous gratuitement et découvrez les meilleures opportunités d'affaires",
      icon: "UserGroupIcon",
      href: "/visitor-registration",
      color: "from-secondary to-secondary/80"
    },
    {
      title: "Investisseurs",
      description: "Explorez des projets à fort potentiel et connectez-vous avec des entrepreneurs",
      icon: "CurrencyDollarIcon",
      href: "/business-matchmaking",
      color: "from-accent to-accent/80"
    },
    {
      title: "Médias",
      description: "Accédez aux ressources presse et planifiez vos interviews avec les exposants",
      icon: "NewspaperIcon",
      href: "/contact-support",
      color: "from-gray-700 to-gray-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choisissez Votre Parcours
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Que vous soyez exposant, visiteur, investisseur ou média, nous avons créé une expérience sur mesure pour vous
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary shadow-warm hover:shadow-warm-xl transition-confident overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} mb-6 shadow-warm`}>
                  <Icon name={card.icon as any} size={32} variant="solid" className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>En savoir plus</span>
                  <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessCards;