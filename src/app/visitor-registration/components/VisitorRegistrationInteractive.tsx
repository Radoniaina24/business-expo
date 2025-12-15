'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import RegistrationForm from './RegistrationForm';
import BenefitsSection from './BenefitsSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';

interface RegistrationFormData {
  visitorType: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  position: string;
  industry: string;
  newsletter: boolean;
  terms: boolean;
}

const VisitorRegistrationInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationData, setRegistrationData] = useState<RegistrationFormData | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleRegistrationSubmit = (data: RegistrationFormData) => {
    if (!isHydrated) return;
    console.log(data);
    setRegistrationData(data);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-64 bg-muted"></div>
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="space-y-8">
              <div className="h-12 bg-muted rounded w-3/4"></div>
              <div className="h-96 bg-card rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitted && registrationData) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-card rounded-lg shadow-warm-lg p-8 lg:p-12 text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={48} variant="solid" className="text-success" />
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Inscription réussie !
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Bienvenue à la Madagascar-Africa Business Expo, {registrationData.firstName} !
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Vos informations d&apos;inscription
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type de visiteur :</span>
                  <span className="font-medium text-foreground capitalize">
                    {registrationData.visitorType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nom :</span>
                  <span className="font-medium text-foreground">
                    {registrationData.title} {registrationData.firstName}{' '}
                    {registrationData.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">E-mail :</span>
                  <span className="font-medium text-foreground">{registrationData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Entreprise :</span>
                  <span className="font-medium text-foreground">{registrationData.company}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Icon
                  name="InformationCircleIcon"
                  size={24}
                  className="text-primary flex-shrink-0 mt-1"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">Prochaines étapes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Consultez votre e-mail pour la confirmation et votre badge QR code
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="UserPlusIcon" size={24} />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Inscription des visiteurs
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Rejoignez le plus grand rassemblement d&apos;affaires en Afrique
            </h1>
            <p className="text-lg lg:text-xl opacity-90 mb-6">
              Inscrivez-vous dès maintenant pour accéder à des opportunités exclusives de
              réseautage, à des insights stratégiques et à des connexions professionnelles qui
              transformeront votre entreprise.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="CalendarIcon" size={18} />
                <span>15–16 Avril 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPinIcon" size={18} />
                <span>Swami Vivekananda International Convention Centre, Maurice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Finalisez votre inscription
            </h2>
            <p className="text-muted-foreground">
              Renseignez vos informations pour confirmer votre participation à l&apos;expo. Le
              processus ne prend pas plus de 5 minutes.
            </p>
          </div>

          <RegistrationForm onSubmit={handleRegistrationSubmit} />
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />
    </div>
  );
};

export default VisitorRegistrationInteractive;
