import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onScrollToPackages: () => void;
}

const HeroSection = ({ onScrollToPackages }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-error overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
              <span className="text-sm font-semibold">Portail Exposant Premium</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Développez Votre Entreprise à l&apos;Échelle Internationale
            </h1>

            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Rejoignez plus de 200 exposants africains et mauriciens qui transforment leurs ambitions en opportunités concrètes. Réservez votre stand dès aujourd&apos;hui et connectez-vous avec des milliers d&apos;acheteurs qualifiés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onScrollToPackages}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 shadow-warm-lg hover:shadow-warm-xl transition-confident">

                <span>Découvrir les Forfaits</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </button>

              <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-confident">
                <Icon name="PlayIcon" size={20} variant="solid" />
                <span>Voir la Visite Virtuelle</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-white/80">Exposants</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5,000+</div>
                <div className="text-sm text-white/80">Visiteurs</div>
              </div>
              <div>
                <div className="text-3xl font-bold">€2M+</div>
                <div className="text-sm text-white/80">Affaires Conclues</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_12681ab67-1764666699439.png"
                alt="African business professionals networking at trade expo booth with modern display screens and product samples"
                className="w-full h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-warm-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                      <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground">Réservation Confirmée</div>
                    <div className="text-xs text-muted-foreground">Stand Premium A-12 • 36m²</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;