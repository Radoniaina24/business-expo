import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="CalendarIcon" size={20} variant="solid" className="text-accent" />
              <span className="text-sm font-semibold">15-17 Mars 2026 • Antananarivo, Madagascar</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Madagascar Africa Business Expo 2026
            </h1>

            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Le plus grand événement commercial de l'Océan Indien réunissant entrepreneurs, investisseurs et leaders d'affaires de Madagascar, Maurice et toute l'Afrique. Trois jours d'opportunités illimitées, de networking stratégique et de croissance commerciale.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Icon name="BuildingStorefrontIcon" size={24} variant="solid" className="text-accent" />
                <div>
                  <div className="text-2xl font-bold">250+</div>
                  <div className="text-sm text-white/80">Exposants</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Icon name="UsersIcon" size={24} variant="solid" className="text-accent" />
                <div>
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-sm text-white/80">Visiteurs</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Icon name="GlobeAltIcon" size={24} variant="solid" className="text-accent" />
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-white/80">Pays</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_12681ab67-1764666699439.png"
                alt="Large modern conference hall with rows of attendees facing stage, professional lighting and African business professionals networking"
                className="w-full h-[400px] lg:h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-warm-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="TrophyIcon" size={24} variant="solid" className="text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">€2.5M+</div>
                  <div className="text-sm text-muted-foreground">Deals conclus en 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;