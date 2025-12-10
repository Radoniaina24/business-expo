import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ExhibitorPortalInteractive from './components/ExhibitorPortalInteractive';

export const metadata: Metadata = {
  title: 'Portail Exposant - Madagascar Africa Business Expo',
  description: 'Réservez votre stand et développez votre entreprise à l\'échelle internationale. Accédez à 5,000+ acheteurs qualifiés, bénéficiez d\'une visibilité médiatique complète, et générez des leads garantis avec notre système de matchmaking B2B intelligent.',
};

export default function ExhibitorPortalPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ExhibitorPortalInteractive />
      </main>
    </>
  );
}