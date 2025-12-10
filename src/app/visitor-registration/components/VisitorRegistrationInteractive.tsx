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
  interests: string[];
  sessions: string[];
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
    setRegistrationData(data);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadAgenda = () => {
    if (!isHydrated) return;
    // Mock download functionality
    alert('Your personalized agenda has been sent to your email address.');
  };

  const handleGoToMatchmaking = () => {
    if (!isHydrated) return;
    router.push('/business-matchmaking');
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
              Registration Successful!
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Welcome to the Madagascar-Africa Business Expo, {registrationData.firstName}!
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold text-foreground mb-4">Your Registration Details</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Visitor Type:</span>
                  <span className="font-medium text-foreground capitalize">{registrationData.visitorType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium text-foreground">
                    {registrationData.title} {registrationData.firstName} {registrationData.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium text-foreground">{registrationData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Company:</span>
                  <span className="font-medium text-foreground">{registrationData.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Selected Sessions:</span>
                  <span className="font-medium text-foreground">{registrationData.sessions.length} sessions</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Check your email for confirmation and QR code badge</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Download your personalized agenda with selected sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Access the B2B matchmaking platform to schedule meetings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Review pre-event materials and exhibitor directory</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownloadAgenda}
                className="px-6 py-3 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-muted transition-smooth"
              >
                <Icon name="DocumentArrowDownIcon" size={18} className="inline mr-2" />
                Download Agenda
              </button>
              <button
                onClick={handleGoToMatchmaking}
                className="px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth"
              >
                <Icon name="UsersIcon" size={18} className="inline mr-2" />
                Start Matchmaking
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="UserPlusIcon" size={24} />
              <span className="text-sm font-semibold uppercase tracking-wide">Visitor Registration</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Join Africa's Premier Business Gathering
            </h1>
            <p className="text-lg lg:text-xl opacity-90 mb-6">
              Register now to access exclusive networking opportunities, industry insights, and business connections that will transform your enterprise
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="CalendarIcon" size={18} />
                <span>15-16 March 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPinIcon" size={18} />
                <span>Swami Vivekananda International Convention Centre, Mauritius</span>
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
              Complete Your Registration
            </h2>
            <p className="text-muted-foreground">
              Fill in your details to secure your spot at the expo. The process takes less than 5 minutes.
            </p>
          </div>

          <RegistrationForm onSubmit={handleRegistrationSubmit} />
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Trust Signals Section */}
      <section className="py-12 lg:py-16 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground">
              Endorsed by government bodies and international trade organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Exhibitors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">5,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">30+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">€50M+</div>
              <div className="text-sm text-muted-foreground mt-1">Deals Facilitated</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitorRegistrationInteractive;