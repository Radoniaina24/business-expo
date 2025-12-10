import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
  results: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
  {
    name: 'Rakoto Andrianina',
    role: 'Directeur Général',
    company: 'Madagascar Vanilla Export',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10d17e2d1-1763293910418.png",
    alt: 'African businessman in navy suit smiling confidently in modern office',
    quote: 'L&apos;expo nous a permis de signer 12 nouveaux contrats d&apos;exportation en seulement 3 jours. Le ROI a dépassé toutes nos attentes.',
    rating: 5,
    results: '+€450K en contrats'
  },
  {
    name: 'Amina Rasoanaivo',
    role: 'Fondatrice',
    company: 'Artisan Malagasy',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14ac44511-1765134223765.png",
    alt: 'African businesswoman in red blazer with warm smile in bright office setting',
    quote: 'Le système de matchmaking B2B est exceptionnel. Nous avons rencontré exactement les acheteurs que nous cherchions.',
    rating: 5,
    results: '18 partenariats créés'
  },
  {
    name: 'Jean-Claude Ramanantsoa',
    role: 'PDG',
    company: 'TechMada Solutions',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_124ddf771-1765167525499.png",
    alt: 'Professional man in gray suit with glasses in corporate environment',
    quote: 'La visibilité médiatique et les connexions établies ont transformé notre entreprise. Nous sommes maintenant présents dans 5 pays africains.',
    rating: 5,
    results: 'Expansion 5 pays'
  }];


  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" className="text-success" />
            <span className="text-sm font-semibold text-success">Témoignages</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ce Que Disent Nos Exposants
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment des entreprises comme la vôtre ont transformé leur participation en succès concrets.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-warm-lg transition-confident">

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Icon key={i} name="StarIcon" size={18} variant="solid" className="text-accent" />
              )}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed font-accent italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Results Badge */}
              <div className="inline-flex items-center space-x-2 bg-success/10 px-3 py-1.5 rounded-full mb-6">
                <Icon name="TrophyIcon" size={16} variant="solid" className="text-success" />
                <span className="text-sm font-semibold text-success">{testimonial.results}</span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-6 border-t border-border">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground truncate">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground truncate">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground truncate">{testimonial.company}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-success rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">94%</div>
              <div className="text-sm text-white/90">Taux de Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">€2.1M</div>
              <div className="text-sm text-white/90">Affaires Générées</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">87%</div>
              <div className="text-sm text-white/90">Réservent à Nouveau</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-sm text-white/90">Note Moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;