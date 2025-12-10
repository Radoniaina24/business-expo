'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
  quote: string;
  rating: number;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    name: 'Sophie Rakotomalala',
    role: 'CEO',
    company: 'Madagascar Vanilla Export',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e531637b-1764874730554.png",
    imageAlt: 'Professional African businesswoman in elegant navy suit with confident smile in modern office',
    quote: 'L\'expo 2024 a été un tournant pour notre entreprise. Nous avons signé 3 contrats majeurs avec des distributeurs européens et établi des partenariats stratégiques qui ont doublé notre chiffre d\'affaires. L\'organisation était impeccable et le networking de très haute qualité.',
    rating: 5
  },
  {
    name: 'David Andriamihaja',
    role: 'Directeur Commercial',
    company: 'AfriTech Solutions',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_150d1b412-1763295725152.png",
    imageAlt: 'Young African tech entrepreneur in casual blazer with warm smile in modern startup office',
    quote: 'En tant que startup tech, nous cherchions des investisseurs et des clients. L\'expo nous a permis de rencontrer 5 investisseurs potentiels et de décrocher notre premier gros contrat. Le système de matchmaking B2B est vraiment efficace. Je recommande vivement!',
    rating: 5
  },
  {
    name: 'Marie-Claire Dubois',
    role: 'Investment Manager',
    company: 'Indian Ocean Ventures',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf89a9ae-1763300807832.png",
    imageAlt: 'Professional woman in red blazer with confident expression at corporate investment event',
    quote: 'Nous participons à de nombreux événements business en Afrique, mais le Madagascar Africa Business Expo se distingue par la qualité des exposants et l\'organisation professionnelle. Nous avons identifié 8 opportunités d\'investissement prometteuses en seulement 3 jours.',
    rating: 5
  }];


  const nextTestimonial = () => {
    if (!isHydrated) return;
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (!isHydrated) return;
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ce Que Disent Nos Participants
            </h2>
            <p className="text-lg text-muted-foreground">
              Des témoignages authentiques d'exposants et visiteurs qui ont transformé leur business grâce à l'expo.
            </p>
          </div>
          <div className="h-96 bg-card rounded-2xl animate-pulse" />
        </div>
      </section>);

  }

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ce Que Disent Nos Participants
          </h2>
          <p className="text-lg text-muted-foreground">
            Des témoignages authentiques d'exposants et visiteurs qui ont transformé leur business grâce à l'expo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-warm-xl">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary/10">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                <path d="M12 34h8l4-8V14H12v12h8zm16 0h8l4-8V14H28v12h8z" />
              </svg>
            </div>

            <div className="relative">
              {/* Testimonial Content */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.imageAlt}
                    className="w-full h-full object-cover" />

                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) =>
                  <Icon key={i} name="StarIcon" size={20} variant="solid" className="text-accent" />
                  )}
                </div>

                <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 font-accent italic">
                  "{currentTestimonial.quote}"
                </p>

                <div>
                  <div className="text-lg font-bold text-foreground">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                  aria-label="Previous testimonial">

                  <Icon name="ChevronLeftIcon" size={20} variant="outline" />
                </button>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                    index === activeIndex ? 'bg-primary w-8' : 'bg-border'}`
                    }
                    aria-label={`Go to testimonial ${index + 1}`} />

                  )}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                  aria-label="Next testimonial">

                  <Icon name="ChevronRightIcon" size={20} variant="outline" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-xs text-muted-foreground">Taux de Satisfaction</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-secondary mb-1">€2.5M+</div>
              <div className="text-xs text-muted-foreground">Deals Conclus 2024</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">4.8/5</div>
              <div className="text-xs text-muted-foreground">Note Moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;