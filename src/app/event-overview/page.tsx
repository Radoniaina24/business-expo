import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import EventHighlights from './components/EventHighlights';
import AgendaTimeline from './components/AgendaTimeline';
import VenueSection from './components/VenueSection';
import PackagesComparison from './components/PackagesComparison';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Aperçu de l\'Événement - Madagascar Africa Business Expo',
  description: 'Découvrez le programme complet, les conférenciers, le lieu et les formules de participation pour le Madagascar Africa Business Expo 2026. Trois jours d\'opportunités commerciales exceptionnelles à Antananarivo.',
};

export default function EventOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <EventHighlights />
        <AgendaTimeline />
        <VenueSection />
        <PackagesComparison />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}