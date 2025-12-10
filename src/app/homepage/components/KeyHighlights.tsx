import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Highlight {
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  stats: {value: string;label: string;}[];
}

const KeyHighlights = () => {
  const highlights: Highlight[] = [
  {
    title: "Networking B2B Intelligent",
    description: "Notre plateforme de matchmaking alimentée par l'IA connecte automatiquement les exposants et visiteurs selon leurs intérêts commerciaux, secteurs d'activité et objectifs stratégiques.",
    icon: "UsersIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10e5408f4-1764654348927.png",
    alt: "Diverse group of African business professionals networking and shaking hands in modern conference room",
    stats: [
    { value: "5000+", label: "Rendez-vous B2B" },
    { value: "92%", label: "Taux de Satisfaction" }]

  },
  {
    title: "Opportunités d'Investissement",
    description: "Accédez à un portefeuille exclusif de projets africains à fort potentiel, avec due diligence complète, projections financières et accompagnement personnalisé pour les investisseurs.",
    icon: "CurrencyDollarIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c2b13bd-1764804739909.png",
    alt: "African businesswoman analyzing financial charts and investment data on laptop in modern office",
    stats: [
    { value: "€50M+", label: "Capital Disponible" },
    { value: "150+", label: "Projets Présentés" }]

  },
  {
    title: "Conférences & Masterclasses",
    description: "Participez à plus de 30 sessions animées par des leaders d'opinion africains, couvrant l'innovation, la transformation digitale, le commerce transfrontalier et les tendances sectorielles.",
    icon: "AcademicCapIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17e471e18-1765114953008.png",
    alt: "African speaker presenting to engaged audience in modern conference hall with large screens",
    stats: [
    { value: "30+", label: "Sessions" },
    { value: "50+", label: "Experts Internationaux" }]

  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pourquoi Participer à l'Expo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bien plus qu'une simple exposition, c'est un écosystème complet conçu pour accélérer votre croissance en Afrique
          </p>
        </div>

        <div className="space-y-16">
          {highlights.map((highlight, index) =>
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
            }>

              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-warm-xl group">
                  <div className="aspect-[4/3] relative">
                    <AppImage
                    src={highlight.image}
                    alt={highlight.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                    {highlight.stats.map((stat, statIndex) =>
                  <div key={statIndex} className="text-white">
                        <div className="text-3xl font-bold">{stat.value}</div>
                        <div className="text-sm opacity-90">{stat.label}</div>
                      </div>
                  )}
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary mb-6 shadow-warm">
                  <Icon name={highlight.icon as any} size={32} variant="solid" className="text-white" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {highlight.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {highlight.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                "Matchmaking IA",
                "Rendez-vous Pré-planifiés",
                "Suivi Post-Événement"].
                map((feature, featureIndex) =>
                <div
                  key={featureIndex}
                  className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-lg">

                      <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-secondary" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default KeyHighlights;