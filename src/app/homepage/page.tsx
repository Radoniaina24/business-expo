import type { Metadata } from 'next';
import Header from '@/components/common/Header';

import Hero from '@/components/Section/Hero';
import About from '@/components/Section/About';
import WhyExhibit from '@/components/Section/WhyExhibit';
import GlobalReach from '@/components/Section/GlobalReach';
import Sectors from '@/components/Section/Sectors';
import Program from '@/components/Section/Program';
import Organizer from '@/components/Section/Organizer';

import Banner from '@/components/Section/Banner';
import ParticipationForm from '@/components/form/ParticipationForm';
import ParticipationFormWizard from '@/components/form/ParticipationFormWizard';
import Contact from '@/components/Section/Contact';

export const metadata: Metadata = {
  title: 'Accueil - Africa Business Expo',
  description:
    "Le plus grand événement business de l'océan Indien connectant Madagascar, l'Afrique et Maurice. Découvrez des opportunités d'affaires exceptionnelles, du networking B2B intelligent et des investissements à fort potentiel.",
};

export default function HomePage() {
  const expoDate = '2026-04-15T09:00:00';

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* <HeroSection expoDate={expoDate} /> */}
        <Banner />

        <Hero />
        <About />
        <WhyExhibit />
        <GlobalReach />
        <Sectors />
        <Program />
        <Organizer />
        {/* <ParticipationFormWizard /> */}
        <Contact />
        {/* <QuickAccessCards /> */}
        {/* <WhyMauritiusSection /> */}
        {/* <InteractiveMap /> */}
        {/* <KeyHighlights /> */}
        {/* <RegistrationStats /> */}
        {/* <PartnersSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
