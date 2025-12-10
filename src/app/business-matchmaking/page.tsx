import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import BusinessMatchmakingInteractive from './components/BusinessMatchmakingInteractive';

export const metadata: Metadata = {
  title: 'Business Matchmaking - Madagascar Africa Business Expo',
  description: 'Connect with entrepreneurs, investors, and business leaders across Madagascar, Africa, and Mauritius through our AI-powered intelligent matchmaking system for strategic partnerships and business opportunities.',
};

export default function BusinessMatchmakingPage() {
  return (
    <>
      <Header />
      <BusinessMatchmakingInteractive />
    </>
  );
}