'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Country {
  name: string;
  participants: number;
  flag: string;
  coordinates: { lat: number; lng: number };
}

const InteractiveMap = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const countries: Country[] = [
    { name: "Madagascar", participants: 150, flag: "🇲🇬", coordinates: { lat: -18.8792, lng: 47.5079 } },
    { name: "Maurice", participants: 120, flag: "🇲🇺", coordinates: { lat: -20.1609, lng: 57.5012 } },
    { name: "Afrique du Sud", participants: 85, flag: "🇿🇦", coordinates: { lat: -30.5595, lng: 22.9375 } },
    { name: "Kenya", participants: 65, flag: "🇰🇪", coordinates: { lat: -0.0236, lng: 37.9062 } },
    { name: "Sénégal", participants: 55, flag: "🇸🇳", coordinates: { lat: 14.4974, lng: -14.4524 } },
    { name: "Côte d'Ivoire", participants: 48, flag: "🇨🇮", coordinates: { lat: 7.5400, lng: -5.5471 } },
    { name: "Nigeria", participants: 72, flag: "🇳🇬", coordinates: { lat: 9.0820, lng: 8.6753 } },
    { name: "Ghana", participants: 42, flag: "🇬🇭", coordinates: { lat: 7.9465, lng: -1.0232 } }
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 bg-card rounded-2xl animate-pulse"></div>
        </div>
      </section>
    );
  }

  const totalParticipants = countries.reduce((sum, country) => sum + country.participants, 0);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Une Présence Pan-Africaine
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de {totalParticipants} entreprises de 25+ pays africains se réunissent pour créer des opportunités sans précédent
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map Visualization */}
          <div className="relative bg-card rounded-2xl p-8 border border-border shadow-warm">
            <div className="aspect-square relative">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Madagascar Africa Business Expo Participating Countries"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=-18.8792,47.5079&z=3&output=embed"
                className="rounded-xl"
              />
            </div>

            <div className="absolute top-12 right-12 bg-primary text-white px-6 py-3 rounded-lg shadow-warm-lg">
              <div className="flex items-center space-x-2">
                <Icon name="GlobeAltIcon" size={24} variant="solid" />
                <div>
                  <div className="text-2xl font-bold">{countries.length}+</div>
                  <div className="text-sm opacity-90">Pays Participants</div>
                </div>
              </div>
            </div>
          </div>

          {/* Country List */}
          <div className="space-y-4">
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => setSelectedCountry(country)}
                className={`w-full text-left bg-card rounded-xl p-6 border transition-confident hover:shadow-warm-lg ${
                  selectedCountry?.name === country.name
                    ? 'border-primary shadow-warm'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{country.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {country.participants} entreprises inscrites
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                        style={{ width: `${(country.participants / 150) * 100}%` }}
                      />
                    </div>
                    <Icon
                      name="ChevronRightIcon"
                      size={20}
                      variant="outline"
                      className={`transition-transform ${
                        selectedCountry?.name === country.name ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </div>
              </button>
            ))}

            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6 shadow-warm-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold mb-1">{totalParticipants}+</div>
                  <div className="text-sm opacity-90">Total Participants Confirmés</div>
                </div>
                <Icon name="CheckBadgeIcon" size={48} variant="solid" className="opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;