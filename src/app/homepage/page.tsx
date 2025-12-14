import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import QuickAccessCards from './components/QuickAccessCards';
import InteractiveMap from './components/InteractiveMap';
import KeyHighlights from './components/KeyHighlights';
import RegistrationStats from './components/RegistrationStats';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import WhyMauritiusSection from './components/WhyMauritiusSection';

export const metadata: Metadata = {
  title: 'Accueil - Madagascar Africa Business Expo',
  description:
    "Le plus grand événement business de l'océan Indien connectant Madagascar, l'Afrique et Maurice. Découvrez des opportunités d'affaires exceptionnelles, du networking B2B intelligent et des investissements à fort potentiel.",
};

export default function HomePage() {
  const expoDate = '2026-04-15T09:00:00';

  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection expoDate={expoDate} />
        {/* <QuickAccessCards /> */}
        <WhyMauritiusSection />
        {/* <InteractiveMap /> */}
        <KeyHighlights />
        {/* <RegistrationStats /> */}
        {/* <PartnersSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
