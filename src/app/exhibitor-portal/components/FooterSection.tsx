import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    expo: [
      { label: 'Accueil', href: '/homepage' },
      { label: 'Aperçu de l&apos;Événement', href: '/event-overview' },
      { label: 'Inscription Visiteur', href: '/visitor-registration' },
      { label: 'Matchmaking B2B', href: '/business-matchmaking' }
    ],
    resources: [
      { label: 'Brochure Exposant', href: '#' },
      { label: 'Guide de Participation', href: '#' },
      { label: 'Règlement Intérieur', href: '#' },
      { label: 'FAQ', href: '#' }
    ],
    support: [
      { label: 'Contact Support', href: '/contact-support' },
      { label: 'Assistance Technique', href: '#' },
      { label: 'Politique d&apos;Annulation', href: '#' },
      { label: 'Conditions Générales', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'instagram', href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/homepage" className="inline-flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M20 5L8 12V28L20 35L32 28V12L20 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 5V35M8 12L32 28M32 12L8 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">Madagascar Africa</div>
                <div className="text-xs text-white/70">Business Expo</div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              La plateforme B2B de référence connectant Madagascar, l&apos;Afrique et Maurice. Transformez vos ambitions en opportunités concrètes.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.icon}
                  href={social?.href}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth"
                  aria-label={social?.label}
                >
                  <Icon name="ShareIcon" size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-bold text-white mb-4">Expo</h3>
            <ul className="space-y-3">
              {footerLinks?.expo?.map((link) => (
                <li key={link?.href}>
                  <Link href={link?.href} className="text-white/70 hover:text-white text-sm transition-smooth">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks?.resources?.map((link) => (
                <li key={link?.href}>
                  <a href={link?.href} className="text-white/70 hover:text-white text-sm transition-smooth">
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks?.support?.map((link) => (
                <li key={link?.href}>
                  <Link href={link?.href} className="text-white/70 hover:text-white text-sm transition-smooth">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-white/10 mb-8">
          <div className="flex items-start space-x-3">
            <Icon name="EnvelopeIcon" size={24} variant="outline" className="text-primary flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-white mb-1">Email</div>
              <a href="mailto:exposants@madagascarexpo.com" className="text-sm text-white/70 hover:text-white transition-smooth">
                exposants@madagascarexpo.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Icon name="PhoneIcon" size={24} variant="outline" className="text-primary flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-white mb-1">Téléphone</div>
              <a href="tel:+2302301234" className="text-sm text-white/70 hover:text-white transition-smooth">
                +230 230 1234
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Icon name="MapPinIcon" size={24} variant="outline" className="text-primary flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-white mb-1">Adresse</div>
              <p className="text-sm text-white/70">
                Swami Vivekananda Convention Centre\Port Louis, Maurice
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              © {currentYear} Madagascar Africa Business Expo. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-smooth">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-smooth">
                Conditions d&apos;Utilisation
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-smooth">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;