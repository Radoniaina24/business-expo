'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className = '' }: FAQSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="h-32 bg-muted rounded"></div>
              <div className="h-32 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const categories = [
    { id: 'general', label: 'Questions Générales', icon: 'QuestionMarkCircleIcon' },
    { id: 'exhibitor', label: 'Exposants', icon: 'BuildingStorefrontIcon' },
    { id: 'visitor', label: 'Visiteurs', icon: 'UserGroupIcon' },
    { id: 'technical', label: 'Technique', icon: 'WrenchScrewdriverIcon' }
  ];

  const faqs: FAQ[] = [
    {
      id: 'faq1',
      category: 'general',
      question: 'Quand et où se déroule l\'exposition Madagascar-Africa Business Expo?',
      answer: 'L\'exposition se tiendra du 15 au 18 mars 2025 au Centre de Conférences de Port Louis, Maurice. L\'événement est ouvert de 9h00 à 18h00 chaque jour, avec une cérémonie d\'ouverture spéciale le premier jour à 10h00.'
    },
    {
      id: 'faq2',
      category: 'general',
      question: 'Comment puis-je obtenir plus d\'informations sur les opportunités de partenariat?',
      answer: 'Vous pouvez nous contacter directement via le formulaire de contact, par email à partnerships@madagascarexpo.mu, ou par téléphone au +230 5 123 4567. Notre équipe de partenariats est disponible pour discuter des opportunités personnalisées.'
    },
    {
      id: 'faq3',
      category: 'exhibitor',
      question: 'Quels sont les différents packages d\'exposition disponibles?',
      answer: 'Nous proposons trois packages principaux: Standard (9m²) à partir de €2.500, Premium (18m²) à partir de €4.800, et Elite (36m²) à partir de €8.500. Chaque package comprend l\'espace de stand, le mobilier de base, l\'électricité, et l\'accès Wi-Fi.'
    },
    {
      id: 'faq4',
      category: 'exhibitor',
      question: 'Quelle est la date limite pour réserver un stand d\'exposition?',
      answer: 'La date limite pour les réservations de stands est le 1er février 2025. Cependant, nous recommandons de réserver le plus tôt possible car les espaces sont limités et attribués selon le principe du premier arrivé, premier servi.'
    },
    {
      id: 'faq5',
      category: 'exhibitor',
      question: 'Puis-je personnaliser mon stand d\'exposition?',
      answer: 'Oui, tous nos packages permettent la personnalisation. Le package Standard offre une personnalisation de base, tandis que les packages Premium et Elite incluent des options de design personnalisé complètes. Notre équipe peut vous aider avec la conception et l\'installation.'
    },
    {
      id: 'faq6',
      category: 'visitor',
      question: 'L\'inscription des visiteurs est-elle gratuite?',
      answer: 'Oui, l\'inscription en ligne pour les visiteurs professionnels est entièrement gratuite. Vous devez simplement vous inscrire à l\'avance sur notre plateforme pour recevoir votre badge d\'accès et profiter de toutes les fonctionnalités de l\'événement.'
    },
    {
      id: 'faq7',
      category: 'visitor',
      question: 'Comment fonctionne le système de matchmaking B2B?',
      answer: 'Notre plateforme de matchmaking utilise l\'intelligence artificielle pour vous connecter avec des partenaires potentiels en fonction de vos intérêts et objectifs commerciaux. Vous pouvez planifier des réunions à l\'avance et recevoir des recommandations personnalisées.'
    },
    {
      id: 'faq8',
      category: 'visitor',
      question: 'Y a-t-il des sessions de formation ou des conférences pendant l\'événement?',
      answer: 'Oui, nous organisons plus de 20 sessions de formation, conférences et panels de discussion couvrant divers sujets tels que l\'expansion commerciale en Afrique, les opportunités d\'investissement, et les tendances du marché. Le programme complet est disponible sur notre site.'
    },
    {
      id: 'faq9',
      category: 'technical',
      question: 'Quelles sont les options de connectivité Internet disponibles?',
      answer: 'Tous les exposants et visiteurs bénéficient d\'un accès Wi-Fi gratuit haut débit. Les exposants Premium et Elite peuvent demander une connexion Internet dédiée pour des besoins spécifiques. Le support technique est disponible sur place pendant toute la durée de l\'événement.'
    },
    {
      id: 'faq10',
      category: 'technical',
      question: 'Comment puis-je obtenir de l\'aide technique pendant l\'événement?',
      answer: 'Notre équipe de support technique sera présente sur place pendant toute la durée de l\'événement. Vous pouvez également nous contacter via notre hotline d\'urgence au +230 5 999 888 ou visiter le bureau d\'assistance technique situé dans le hall principal.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="QuestionMarkCircleIcon" size={16} variant="solid" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trouvez Vos Réponses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consultez notre base de connaissances pour trouver rapidement des réponses à vos questions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Icon name="MagnifyingGlassIcon" size={20} variant="outline" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher dans les questions fréquentes..."
              className="w-full pl-12 pr-4 py-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-smooth ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-warm'
                  : 'bg-card text-foreground border border-border hover:bg-muted'
              }`}
            >
              <Icon name={category.icon as any} size={20} variant={activeCategory === category.id ? 'solid' : 'outline'} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map(faq => (
              <div
                key={faq.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-warm transition-smooth"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted transition-smooth"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    variant="outline"
                    className={`flex-shrink-0 text-primary transition-transform ${
                      expandedFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-5 pt-2 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Icon name="MagnifyingGlassIcon" size={48} variant="outline" className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Aucun résultat trouvé</h3>
              <p className="text-muted-foreground">
                Essayez de modifier votre recherche ou sélectionnez une autre catégorie
              </p>
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 text-center">
          <Icon name="ChatBubbleLeftRightIcon" size={48} variant="solid" className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Vous n'avez pas trouvé votre réponse?</h3>
          <p className="text-muted-foreground mb-6">
            Notre équipe est là pour vous aider. Contactez-nous directement pour une assistance personnalisée.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth"
          >
            <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
            <span>Contactez-Nous</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;