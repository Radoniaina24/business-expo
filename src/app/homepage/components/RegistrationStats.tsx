'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  icon: string;
  value: number;
  label: string;
  suffix: string;
  color: string;
}

const RegistrationStats = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  const stats: Stat[] = [
    {
      icon: "BuildingStorefrontIcon",
      value: 487,
      label: "Exposants Inscrits",
      suffix: "+",
      color: "from-primary to-primary/80"
    },
    {
      icon: "UserGroupIcon",
      value: 12450,
      label: "Visiteurs Enregistrés",
      suffix: "+",
      color: "from-secondary to-secondary/80"
    },
    {
      icon: "BriefcaseIcon",
      value: 3200,
      label: "Rendez-vous B2B Planifiés",
      suffix: "+",
      color: "from-accent to-accent/80"
    },
    {
      icon: "GlobeAltIcon",
      value: 28,
      label: "Pays Représentés",
      suffix: "",
      color: "from-gray-700 to-gray-600"
    }
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedValues(stats.map(stat => Math.floor(stat.value * progress)));

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(stats.map(stat => stat.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-8 animate-pulse h-40"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            L'Événement Prend Forme
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Rejoignez des milliers de professionnels qui ont déjà confirmé leur participation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-confident group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} mb-6 shadow-warm group-hover:scale-110 transition-transform`}>
                <Icon name={stat.icon as any} size={32} variant="solid" className="text-white" />
              </div>

              <div className="text-5xl font-bold text-white mb-2">
                {animatedValues[index].toLocaleString('fr-FR')}{stat.suffix}
              </div>

              <div className="text-white/80 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-accent text-foreground px-6 py-3 rounded-full font-semibold shadow-warm-lg">
            <Icon name="ClockIcon" size={20} variant="solid" />
            <span>Places Limitées - Inscrivez-vous Maintenant!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationStats;