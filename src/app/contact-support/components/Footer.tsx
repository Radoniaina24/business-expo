import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    event: [
      { label: 'Aperçu de l\'Événement', href: '/event-overview' },
      { label: 'Portail Exposant', href: '/exhibitor-portal' },
      { label: 'Inscription Visiteur', href: '/visitor-registration' },
      { label: 'Matchmaking B2B', href: '/business-matchmaking' }
    ],
    resources: [
      { label: 'Centre Média', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Téléchargements', href: '#' }
    ],
    legal: [
      { label: 'Politique de Confidentialité', href: '#' },
      { label: 'Conditions d\'Utilisation', href: '#' },
      { label: 'Mentions Légales', href: '#' },
      { label: 'RGPD', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: '#' },
    { name: 'Twitter', icon: 'ShareIcon', href: '#' },
    { name: 'LinkedIn', icon: 'ShareIcon', href: '#' },
    { name: 'Instagram', icon: 'ShareIcon', href: '#' }
  ];

  return (
    <footer className={`bg-foreground text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center bg-primary rounded-lg">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <path
                    d="M20 5L8 12V28L20 35L32 28V12L20 5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 5V35M8 12L32 28M32 12L8 28"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">Madagascar Africa</div>
                <div className="text-xs text-white/70 font-medium">Business Expo</div>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Votre passerelle vers l'écosystème commercial de l'océan Indien. Connectant Madagascar, l'Afrique et Maurice pour créer des opportunités commerciales durables.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Événement</h3>
            <ul className="space-y-3">
              {footerLinks.event.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-smooth flex items-center space-x-2"
                  >
                    <Icon name="ChevronRightIcon" size={14} variant="outline" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-smooth flex items-center space-x-2"
                  >
                    <Icon name="ChevronRightIcon" size={14} variant="outline" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Légal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-smooth flex items-center space-x-2"
                  >
                    <Icon name="ChevronRightIcon" size={14} variant="outline" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold mb-2">Restez Informé</h3>
            <p className="text-white/70 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et opportunités
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth whitespace-nowrap">
                S'Inscrire
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/70 text-sm text-center md:text-left">
            © {currentYear} Madagascar Africa Business Expo. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-6 text-sm text-white/70">
            <span className="flex items-center space-x-2">
              <Icon name="GlobeAltIcon" size={16} variant="outline" />
              <span>Français</span>
            </span>
            <span className="flex items-center space-x-2">
              <Icon name="CurrencyEuroIcon" size={16} variant="outline" />
              <span>EUR (€)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;