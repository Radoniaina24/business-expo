import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section
      className={`relative bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden ${className}`}
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-white/80 text-sm mb-6">
            <span>Accueil</span>
            <Icon name="ChevronRightIcon" size={16} variant="outline" />
            <span className="text-white font-medium">Contact & Support</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Nous Sommes Là Pour Vous Aider
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Notre équipe dédiée est prête à répondre à toutes vos questions concernant l'exposition,
            les opportunités d'affaires et les partenariats. Contactez-nous via votre canal préféré.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="ClockIcon" size={20} variant="outline" className="text-accent" />
                <span className="text-white/80 text-sm">Temps de Réponse</span>
              </div>
              <p className="text-2xl font-bold text-white">&lt; 2h</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <Icon
                  name="ChatBubbleLeftRightIcon"
                  size={20}
                  variant="outline"
                  className="text-accent"
                />
                <span className="text-white/80 text-sm">Support 24/7</span>
              </div>
              <p className="text-2xl font-bold text-white">Disponible</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 col-span-2 sm:col-span-1">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="LanguageIcon" size={20} variant="outline" className="text-accent" />
                <span className="text-white/80 text-sm">Langues</span>
              </div>
              <p className="text-2xl font-bold text-white">FR / EN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
