import Icon from '@/components/ui/AppIcon';

interface LocationMapProps {
  className?: string;
}

const LocationMap = ({ className = '' }: LocationMapProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="MapPinIcon" size={16} variant="solid" />
            <span>Notre Emplacement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Visitez Notre Bureau
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes situés au cœur de Port Louis, facilement accessible depuis tous les quartiers de Maurice
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-warm h-[400px] lg:h-[500px]">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Madagascar Africa Business Expo Office Location"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=-20.1609,57.5012&z=15&output=embed"
              className="w-full h-full"
            />
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-warm transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                  <Icon name="MapPinIcon" size={24} variant="solid" className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Adresse du Bureau</h3>
                  <p className="text-muted-foreground mb-4">
                    15 Avenue de l'Indépendance\nPort Louis, Maurice\nCode Postal: 11328
                  </p>
                  <button className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-smooth">
                    <Icon name="MapIcon" size={18} variant="outline" />
                    <span>Obtenir l'Itinéraire</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-warm transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary rounded-lg p-3 flex-shrink-0">
                  <Icon name="ClockIcon" size={24} variant="solid" className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-4">Heures d'Ouverture</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-foreground font-medium">Lundi - Vendredi</span>
                      <span className="text-muted-foreground">9h00 - 17h00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-foreground font-medium">Samedi</span>
                      <span className="text-muted-foreground">9h00 - 13h00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-foreground font-medium">Dimanche</span>
                      <span className="text-error font-medium">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-warm transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-lg p-3 flex-shrink-0">
                  <Icon name="TruckIcon" size={24} variant="solid" className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Informations de Stationnement</h3>
                  <p className="text-muted-foreground mb-3">
                    Parking gratuit disponible pour les visiteurs dans notre parking sécurisé. Entrée par la rue latérale.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-success">
                    <Icon name="CheckCircleIcon" size={18} variant="solid" />
                    <span className="font-medium">Parking Gratuit Disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Transport */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Accès en Transport Public</h4>
                  <p className="text-sm text-muted-foreground">
                    Accessible par les lignes de bus 1, 2, 5, et 12. Arrêt "Place d'Armes" à 200m du bureau.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;