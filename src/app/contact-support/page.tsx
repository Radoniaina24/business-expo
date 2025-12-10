import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactChannels from './components/ContactChannels';
import ContactFormSection from './components/ContactFormSection';
import FAQSection from './components/FAQSection';
import LocationMap from './components/LocationMap';
import SupportTeam from './components/SupportTeam';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Contact & Support - Madagascar Africa Business Expo',
  description:
    "Contactez notre équipe dédiée pour toute question concernant l'exposition Madagascar-Africa Business Expo. Support multicanal disponible 24/7 en français et anglais.",
};

export default function ContactSupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-16">
        <ContactHero />
        <ContactChannels />
        <ContactFormSection />
        {/* <FAQSection />
        <SupportTeam />
        <LocationMap /> */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}
