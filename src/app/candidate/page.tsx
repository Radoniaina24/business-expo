import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Candidate from './components/Candidate';

export const metadata: Metadata = {
  title: 'Candidate - Madagascar Africa Business Expo',
};

export default function ContactSupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-28">
        <Candidate />
      </div>
    </main>
  );
}
