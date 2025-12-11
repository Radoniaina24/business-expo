'use client';

import { useState, useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import BenefitsSection from './BenefitsSection';
import PackageCard from './PackageCard';
import BoothVisualizerModal from './BoothVisualizerModal';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import FooterSection from './FooterSection';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  text: string;
  included: boolean;
}

interface Package {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  isPopular: boolean;
  color: string;
}

const ExhibitorPortalInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isVisualizerOpen, setIsVisualizerOpen] = useState(false);
  const [visualizerPackage, setVisualizerPackage] = useState('');
  const packagesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const packages: Package[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: '€1,200',
      period: '3 jours',
      description: 'Idéal pour les petites entreprises débutantes',
      features: [
        { text: 'Stand de 9m² (3m × 3m)', included: true },
        { text: 'Murs modulaires et moquette', included: true },
        { text: 'Éclairage basique', included: true },
        { text: 'Connexion Wi-Fi', included: true },
        { text: '2 badges exposant', included: true },
        { text: 'Listing dans le catalogue', included: true },
        { text: 'Enseigne personnalisée', included: false },
        { text: 'Mobilier premium', included: false },
        { text: 'Matchmaking B2B prioritaire', included: false },
        { text: 'Session de formation', included: false },
      ],
      isPopular: false,
      color: 'bg-muted',
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '€2,800',
      period: '3 jours',
      description: 'Le choix préféré des entreprises en croissance',
      features: [
        { text: 'Stand de 18m² (6m × 3m)', included: true },
        { text: 'Murs modulaires et moquette premium', included: true },
        { text: 'Éclairage LED professionnel', included: true },
        { text: 'Connexion Wi-Fi haut débit', included: true },
        { text: '4 badges exposant', included: true },
        { text: 'Listing premium dans le catalogue', included: true },
        { text: 'Enseigne lumineuse personnalisée', included: true },
        { text: 'Mobilier premium (table, chaises)', included: true },
        { text: 'Matchmaking B2B prioritaire (10 rendez-vous)', included: true },
        { text: '1 session de formation incluse', included: true },
        { text: 'Kit marketing pré-événement', included: true },
        { text: 'Rapport post-événement détaillé', included: true },
      ],
      isPopular: true,
      color: 'bg-primary',
    },
    {
      id: 'elite',
      name: 'Elite',
      price: '€5,500',
      period: '3 jours',
      description: 'Solution complète pour les leaders du marché',
      features: [
        { text: 'Stand de 36m² (6m × 6m)', included: true },
        { text: 'Design personnalisé complet', included: true },
        { text: 'Éclairage LED intelligent', included: true },
        { text: 'Connexion Wi-Fi dédiée', included: true },
        { text: '8 badges exposant', included: true },
        { text: 'Placement premium page catalogue', included: true },
        { text: 'Enseigne LED interactive', included: true },
        { text: 'Mobilier luxe sur mesure', included: true },
        { text: 'Matchmaking B2B illimité', included: true },
        { text: 'Toutes sessions de formation', included: true },
        { text: 'Kit marketing complet', included: true },
        { text: 'Rapport analytics avancé', included: true },
        { text: 'Espace réunion privé', included: true },
        { text: 'Service traiteur VIP', included: true },
        { text: 'Couverture médiatique garantie', included: true },
      ],
      isPopular: false,
      color: 'bg-accent',
    },
  ];

  const handleScrollToPackages = () => {
    if (packagesRef.current) {
      packagesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePackageSelect = (packageId: string) => {
    if (!isHydrated) return;
    setSelectedPackage(packageId);
    // In production, this would navigate to booking form
    alert(
      `Vous avez sélectionné le forfait ${packages.find((p) => p.id === packageId)?.name}. Redirection vers le formulaire de réservation...`
    );
  };

  const handleOpenVisualizer = (packageName: string) => {
    if (!isHydrated) return;
    setVisualizerPackage(packageName);
    setIsVisualizerOpen(true);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16" />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-muted rounded-2xl" />
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[600px] bg-muted rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onScrollToPackages={handleScrollToPackages} />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Packages Section */}
      <section ref={packagesRef} className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="CurrencyEuroIcon" size={20} variant="solid" className="text-secondary" />
              <span className="text-sm font-semibold text-secondary">Forfaits Exposant</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choisissez Votre Forfait Idéal
            </h2>
            <p className="text-lg text-muted-foreground">
              Des solutions adaptées à chaque étape de votre croissance. Tous les forfaits incluent
              l&apos;accès complet à l&apos;événement.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                name={pkg.name}
                price={pkg.price}
                period={pkg.period}
                description={pkg.description}
                features={pkg.features}
                isPopular={pkg.isPopular}
                color={pkg.color}
                onSelect={() => handlePackageSelect(pkg.id)}
              />
            ))}
          </div>

          {/* Visualizer CTA */}
          <div className="bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/20 rounded-2xl p-8 text-center">
            <Icon
              name="CubeTransparentIcon"
              size={48}
              variant="outline"
              className="text-accent mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Visualisez Votre Stand en 3D
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Découvrez à quoi ressemblera votre espace d&apos;exposition avec notre visualiseur
              interactif 3D.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => handleOpenVisualizer(pkg.name)}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-lg hover:bg-muted hover:shadow-warm transition-smooth"
                >
                  <Icon name="EyeIcon" size={20} variant="outline" />
                  <span>Voir Stand {pkg.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      {/* <FooterSection /> */}

      {/* Booth Visualizer Modal */}
      <BoothVisualizerModal
        isOpen={isVisualizerOpen}
        onClose={() => setIsVisualizerOpen(false)}
        packageName={visualizerPackage}
      />
    </div>
  );
};

export default ExhibitorPortalInteractive;
