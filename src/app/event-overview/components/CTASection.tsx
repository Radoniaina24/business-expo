import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Prêt à Transformer Votre Business ?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Ne manquez pas cette opportunité unique de connecter avec les leaders du business africain. Les places sont limitées et l'événement approche rapidement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/visitor-registration"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 shadow-warm-xl hover:shadow-warm-lg transition-smooth"
            >
              <Icon name="UserPlusIcon" size={20} variant="solid" />
              <span>S'inscrire comme Visiteur</span>
            </Link>

            <Link
              href="/exhibitor-portal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 shadow-warm-xl hover:shadow-warm-lg transition-smooth"
            >
              <Icon name="BuildingStorefrontIcon" size={20} variant="solid" />
              <span>Devenir Exposant</span>
            </Link>
          </div>

          {/* Urgency Indicators */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="ClockIcon" size={20} variant="solid" className="text-accent" />
                <span className="text-sm font-semibold text-white">Compte à Rebours</span>
              </div>
              <div className="text-2xl font-bold text-white">98 Jours</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="TicketIcon" size={20} variant="solid" className="text-accent" />
                <span className="text-sm font-semibold text-white">Places Restantes</span>
              </div>
              <div className="text-2xl font-bold text-white">127 / 250</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="FireIcon" size={20} variant="solid" className="text-accent" />
                <span className="text-sm font-semibold text-white">Tarif Préférentiel</span>
              </div>
              <div className="text-2xl font-bold text-white">-30%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;