import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import VisitorRegistrationInteractive from './components/VisitorRegistrationInteractive';

export const metadata: Metadata = {
  title: 'Visitor Registration - Madagascar Africa Business Expo',
  description: 'Register as a visitor for the Madagascar-Africa Business Expo. Access exclusive networking opportunities, industry insights, and business connections across Africa and the Indian Ocean region.',
};

export default function VisitorRegistrationPage() {
  return (
    <>
      <Header />
      <VisitorRegistrationInteractive />
    </>
  );
}