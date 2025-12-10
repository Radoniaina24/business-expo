'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface HeroSectionProps {
  expoDate: string;
}

const HeroSection = ({ expoDate }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "L\'exposition a transformé notre entreprise. Nous avons établi des partenariats avec 12 entreprises africaines en seulement 3 jours.",
      author: 'Jean-Pierre Rakoto',
      role: 'PDG, Madagascar Tech Solutions',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10d17e2d1-1763293910418.png',
      alt: 'African businessman in navy blue suit smiling confidently in modern office',
    },
    {
      text: "Une plateforme exceptionnelle pour connecter l\'Afrique et Maurice. Les opportunités d\'investissement étaient remarquables.",
      author: 'Amina Ndiaye',
      role: 'Directrice des Investissements, Mauritius Capital',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a00be414-1763300651144.png',
      alt: 'Professional African woman in burgundy blazer with confident smile in corporate setting',
    },
    {
      text: "Le networking B2B a dépassé toutes nos attentes. Nous avons signé 3 contrats majeurs pendant l\'événement.",
      author: 'David Andriamahefa',
      role: 'Fondateur, African Trade Hub',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10d17e2d1-1763293910418.png',
      alt: 'Young African entrepreneur in charcoal suit with warm smile in modern workspace',
    },
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const calculateCountdown = () => {
      const now = new Date().getTime();
      const expoTime = new Date(expoDate).getTime();
      const distance = expoTime - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, [expoDate, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialTimer);
  }, [isHydrated, testimonials.length]);

  if (!isHydrated) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center text-white">
            <div className="h-16 bg-white/20 rounded-lg animate-pulse mb-6"></div>
            <div className="h-32 bg-white/20 rounded-lg animate-pulse mb-8"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
      </div>

      {/* Animated Circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
              <span className="text-sm font-semibold">
                Édition 17-18 Avril 2026 - L'Événement Business de l'Année
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Où l'Ambition Africaine
              <span className="block text-accent mt-2">Rencontre l'Opportunité Mondiale</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Votre passerelle vers l'écosystème commercial de l'océan Indien. Connectez Madagascar,
              l'Afrique et Maurice dans un événement qui transcende les frontières.
            </p>

            {/* Countdown Timer */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-sm font-semibold mb-4 text-accent">L'ÉVÉNEMENT COMMENCE DANS</p>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: countdown.days, label: 'Jours' },
                  { value: countdown.hours, label: 'Heures' },
                  { value: countdown.minutes, label: 'Minutes' },
                  { value: countdown.seconds, label: 'Secondes' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                      <span className="text-4xl font-bold">{item.value}</span>
                    </div>
                    <span className="text-sm text-white/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/visitor-registration"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 shadow-warm-lg hover:shadow-warm-xl transition-confident"
              >
                <Icon name="UserPlusIcon" size={24} variant="solid" />
                <span>S'inscrire comme Visiteur</span>
              </Link>
              <Link
                href="/exhibitor-portal"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-foreground font-bold rounded-lg hover:bg-accent/90 shadow-warm-lg hover:shadow-warm-xl transition-confident"
              >
                <Icon name="BuildingStorefrontIcon" size={24} variant="solid" />
                <span>Devenir Exposant</span>
              </Link>
            </div> */}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {[
                // { value: '500+', label: 'Exposants' },
                // { value: '15K+', label: 'Visiteurs' },
                // { value: '25+', label: 'Pays' },
                { value: '0', label: 'Exposants' },
                { value: '0', label: 'Visiteurs' },
                { value: '0', label: 'Pays' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-warm-xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent">
                  <AppImage
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].author}
                  </h3>
                  <p className="text-white/70 text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
                <Icon
                  name="ChatBubbleLeftRightIcon"
                  size={32}
                  variant="solid"
                  className="text-accent"
                />
              </div>

              <blockquote className="text-white text-lg leading-relaxed mb-6 font-accent italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'w-8 bg-accent' : 'w-2 bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-foreground rounded-xl p-6 shadow-warm-xl">
              <div className="flex items-center space-x-3">
                <Icon name="TrophyIcon" size={32} variant="solid" />
                <div>
                  <div className="text-2xl font-bold">€2.5M+</div>
                  <div className="text-sm opacity-80">Deals Conclus 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} variant="outline" className="text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
