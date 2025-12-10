import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface VenueSectionProps {
  className?: string;
}

const VenueSection = ({ className = '' }: VenueSectionProps) => {
  const venueFeatures = [
  {
    icon: 'BuildingOffice2Icon',
    title: 'Centre de Conférences Moderne',
    description: '5000m² d\'espace d\'exposition avec équipements audiovisuels de pointe'
  },
  {
    icon: 'WifiIcon',
    title: 'Connectivité Premium',
    description: 'WiFi haut débit gratuit dans tout le centre pour tous les participants'
  },
  {
    icon: 'TruckIcon',
    title: 'Accès Logistique Facile',
    description: 'Quais de chargement et parking sécurisé pour exposants'
  },
  {
    icon: 'MapPinIcon',
    title: 'Localisation Centrale',
    description: 'À 15 minutes de l\'aéroport et proche des hôtels partenaires'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Lieu de l'Événement
          </h2>
          <p className="text-lg text-muted-foreground">
            Le Centre International de Conférences d'Antananarivo offre des installations de classe mondiale pour accueillir cet événement prestigieux.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Venue Image & Map */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_10356289d-1764771882333.png"
                alt="Modern conference center exterior with glass facade and landscaped entrance in Antananarivo"
                className="w-full h-[300px] object-cover" />

            </div>

            {/* Google Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg h-[300px]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Centre International de Conférences Antananarivo"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=-18.8792,47.5079&z=14&output=embed"
                className="border-0" />

            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Centre International de Conférences
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPinIcon" size={20} variant="solid" className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Adresse</div>
                    <div className="text-sm text-muted-foreground">
                      Avenue de l'Indépendance, Antananarivo 101, Madagascar
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="ClockIcon" size={20} variant="solid" className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Horaires</div>
                    <div className="text-sm text-muted-foreground">
                      09:00 - 18:00 (tous les jours de l'expo)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="PhoneIcon" size={20} variant="solid" className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Contact Venue</div>
                    <div className="text-sm text-muted-foreground">
                      +261 20 22 123 45
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="EnvelopeIcon" size={20} variant="solid" className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">
                      venue@madagascarexpo.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {venueFeatures.map((feature, index) =>
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-warm transition-smooth">

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon as any} size={20} variant="solid" className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Directions Button */}
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 shadow-warm hover:shadow-warm-lg transition-smooth">
              <Icon name="MapIcon" size={20} variant="solid" />
              <span>Obtenir l'Itinéraire</span>
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default VenueSection;