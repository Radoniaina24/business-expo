'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import MatchmakingFilters from './MatchmakingFilters';
import MatchCard from './MatchCard';
import MeetingScheduler from './MeetingScheduler';
import ConnectionsList from './ConnectionsList';

interface FilterOptions {
  industry: string[];
  country: string[];
  businessType: string[];
  interests: string[];
}

interface Match {
  id: string;
  name: string;
  company: string;
  position: string;
  country: string;
  industry: string;
  image: string;
  alt: string;
  compatibilityScore: number;
  mutualConnections: number;
  interests: string[];
  lookingFor: string;
  bio: string;
}

interface Connection {
  id: string;
  name: string;
  company: string;
  image: string;
  alt: string;
  status: 'pending' | 'accepted' | 'scheduled';
  connectedDate: string;
  nextMeeting?: string;
}

const BusinessMatchmakingInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'matches' | 'connections'>('matches');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    industry: [],
    country: [],
    businessType: [],
    interests: []
  });
  const [showScheduler, setShowScheduler] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockMatches: Match[] = [
  {
    id: '1',
    name: 'Aminata Diallo',
    company: 'AfriTech Solutions',
    position: 'CEO & Founder',
    country: 'Senegal',
    industry: 'Technology & Innovation',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17c736752-1763300698503.png",
    alt: 'Professional African woman in blue blazer smiling confidently in modern office',
    compatibilityScore: 92,
    mutualConnections: 8,
    interests: ['Investment Opportunities', 'Technology Transfer', 'Strategic Partnerships'],
    lookingFor: 'Investisseurs stratégiques pour expansion en Afrique de l\'Ouest',
    bio: 'Entrepreneure passionnée avec 10 ans d\'expérience dans le développement de solutions technologiques pour l\'Afrique.'
  },
  {
    id: '2',
    name: 'Jean-Pierre Rakoto',
    company: 'Madagascar Vanilla Export',
    position: 'Directeur Commercial',
    country: 'Madagascar',
    industry: 'Agriculture & Agribusiness',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16178fe64-1765004742457.png",
    alt: 'Mature African businessman in grey suit with confident expression',
    compatibilityScore: 88,
    mutualConnections: 5,
    interests: ['Export Markets', 'Distribution Channels', 'Strategic Partnerships'],
    lookingFor: 'Partenaires de distribution en Europe et Asie pour produits de vanille premium',
    bio: 'Expert en commerce international avec réseau établi dans l\'exportation de produits agricoles malgaches.'
  },
  {
    id: '3',
    name: 'Fatima Hassan',
    company: 'Renewable Energy Africa',
    position: 'Investment Director',
    country: 'Kenya',
    industry: 'Renewable Energy',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3f1aeb1-1763298919911.png",
    alt: 'Young African woman in professional attire with warm smile in bright office',
    compatibilityScore: 85,
    mutualConnections: 12,
    interests: ['Investment Opportunities', 'Joint Ventures', 'Technology Transfer'],
    lookingFor: 'Projets d\'énergie solaire et éolienne en Afrique de l\'Est nécessitant financement',
    bio: 'Directrice d\'investissement spécialisée dans les projets d\'énergie renouvelable à travers l\'Afrique.'
  },
  {
    id: '4',
    name: 'David Nkosi',
    company: 'SA Manufacturing Group',
    position: 'Operations Manager',
    country: 'South Africa',
    industry: 'Manufacturing',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_192a5ee06-1763296776968.png",
    alt: 'African man in business casual attire standing in industrial facility',
    compatibilityScore: 78,
    mutualConnections: 3,
    interests: ['Supplier Relationships', 'Technology Transfer', 'Joint Ventures'],
    lookingFor: 'Fournisseurs de matières premières et partenaires technologiques pour expansion',
    bio: 'Gestionnaire d\'opérations avec expertise en optimisation de chaînes de production manufacturières.'
  },
  {
    id: '5',
    name: 'Aisha Mohammed',
    company: 'Ghana E-Commerce Hub',
    position: 'Founder & CEO',
    country: 'Ghana',
    industry: 'Retail & E-commerce',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14f19b6c2-1765042221339.png",
    alt: 'Young African entrepreneur in colorful traditional attire with laptop',
    compatibilityScore: 82,
    mutualConnections: 6,
    interests: ['Strategic Partnerships', 'Distribution Channels', 'Technology Transfer'],
    lookingFor: 'Partenaires logistiques et plateformes de paiement pour expansion régionale',
    bio: 'Pionnière du e-commerce en Afrique de l\'Ouest, connectant artisans locaux aux marchés internationaux.'
  },
  {
    id: '6',
    name: 'Laurent Dubois',
    company: 'Mauritius Investment Fund',
    position: 'Senior Partner',
    country: 'Mauritius',
    industry: 'Financial Services',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_183fc715d-1763301362797.png",
    alt: 'Professional man in navy suit with glasses in modern financial office',
    compatibilityScore: 90,
    mutualConnections: 15,
    interests: ['Investment Opportunities', 'Strategic Partnerships', 'Joint Ventures'],
    lookingFor: 'Opportunités d\'investissement dans startups africaines à fort potentiel de croissance',
    bio: 'Investisseur expérimenté spécialisé dans le financement de projets innovants à travers l\'océan Indien.'
  }];


  const mockConnections: Connection[] = [
  {
    id: '1',
    name: 'Marie Andriamanga',
    company: 'Madagascar Tourism Board',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10df5a971-1765003957966.png",
    alt: 'Professional woman in business attire smiling warmly',
    status: 'scheduled',
    connectedDate: '05/12/2025',
    nextMeeting: '15/12/2025 à 14:00'
  },
  {
    id: '2',
    name: 'Thomas Rabemananjara',
    company: 'Agri-Business Solutions',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e7b89b5-1763296712151.png",
    alt: 'Mature businessman in professional setting',
    status: 'accepted',
    connectedDate: '03/12/2025'
  },
  {
    id: '3',
    name: 'Sophie Razafindrakoto',
    company: 'Tech Innovators Ltd',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10277c8a6-1764882025817.png",
    alt: 'Young professional woman in modern office environment',
    status: 'pending',
    connectedDate: '08/12/2025'
  }];


  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleConnect = (matchId: string) => {
    showNotification('Demande de connexion envoyée avec succès!');
  };

  const handleScheduleMeeting = (matchId: string) => {
    const match = mockMatches.find((m) => m.id === matchId);
    if (match) {
      setSelectedMatch(match);
      setShowScheduler(true);
    }
  };

  const handleViewProfile = (matchId: string) => {
    showNotification('Ouverture du profil détaillé...');
  };

  const handleScheduleConfirm = (date: string, time: string, type: string) => {
    showNotification(`Réunion ${type} planifiée pour le ${date} à ${time}`);
    setShowScheduler(false);
    setSelectedMatch(null);
  };

  const handleMessage = (connectionId: string) => {
    showNotification('Ouverture de la messagerie...');
  };

  const handleScheduleConnection = (connectionId: string) => {
    const connection = mockConnections.find((c) => c.id === connectionId);
    if (connection) {
      const match: Match = {
        id: connection.id,
        name: connection.name,
        company: connection.company,
        position: '',
        country: '',
        industry: '',
        image: connection.image,
        alt: connection.alt,
        compatibilityScore: 0,
        mutualConnections: 0,
        interests: [],
        lookingFor: '',
        bio: ''
      };
      setSelectedMatch(match);
      setShowScheduler(true);
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded-lg w-1/3"></div>
            <div className="h-64 bg-muted rounded-lg"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-96 bg-muted rounded-lg"></div>
              <div className="h-96 bg-muted rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {notification &&
      <div className="fixed top-24 right-4 z-50 bg-success text-success-foreground px-6 py-3 rounded-lg shadow-warm-lg flex items-center space-x-2 animate-slide-in">
          <Icon name="CheckCircleIcon" size={20} variant="solid" />
          <span className="font-medium">{notification}</span>
        </div>
      }

      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              <Icon name="SparklesIcon" size={16} variant="solid" />
              <span>Matchmaking Intelligent Alimenté par IA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trouvez Vos Partenaires Commerciaux Idéaux
            </h1>
            <p className="text-lg text-muted-foreground">
              Connectez-vous avec des entrepreneurs, investisseurs et leaders d'affaires à travers Madagascar, l'Afrique et Maurice grâce à notre système de matchmaking intelligent
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-2 border-b border-border">
              <button
                onClick={() => setActiveTab('matches')}
                className={`px-6 py-3 text-sm font-semibold transition-smooth ${
                activeTab === 'matches' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`
                }>

                <div className="flex items-center space-x-2">
                  <Icon name="UserGroupIcon" size={20} variant="outline" />
                  <span>Correspondances Suggérées</span>
                  <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                    {mockMatches.length}
                  </span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('connections')}
                className={`px-6 py-3 text-sm font-semibold transition-smooth ${
                activeTab === 'connections' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`
                }>

                <div className="flex items-center space-x-2">
                  <Icon name="UserPlusIcon" size={20} variant="outline" />
                  <span>Mes Connexions</span>
                  <span className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">
                    {mockConnections.length}
                  </span>
                </div>
              </button>
            </div>

            <div className="relative w-full sm:w-auto">
              <Icon
                name="MagnifyingGlassIcon"
                size={20}
                variant="outline"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />

              <input
                type="text"
                placeholder="Rechercher par nom, entreprise, secteur..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-80 pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground" />

            </div>
          </div>

          <MatchmakingFilters onFilterChange={setFilters} />
        </div>

        {activeTab === 'matches' ?
        <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                Correspondances Recommandées
              </h2>
              <div className="text-sm text-muted-foreground">
                {mockMatches.length} profils trouvés
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockMatches.map((match) =>
            <MatchCard
              key={match.id}
              match={match}
              onConnect={handleConnect}
              onScheduleMeeting={handleScheduleMeeting}
              onViewProfile={handleViewProfile} />

            )}
            </div>
          </div> :

        <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                Mes Connexions Actives
              </h2>
              <div className="text-sm text-muted-foreground">
                {mockConnections.length} connexions
              </div>
            </div>

            <ConnectionsList
            connections={mockConnections}
            onMessage={handleMessage}
            onSchedule={handleScheduleConnection} />

          </div>
        }
      </div>

      {showScheduler && selectedMatch &&
      <MeetingScheduler
        matchName={selectedMatch.name}
        onClose={() => {
          setShowScheduler(false);
          setSelectedMatch(null);
        }}
        onSchedule={handleScheduleConfirm} />

      }
    </div>);

};

export default BusinessMatchmakingInteractive;