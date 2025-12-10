import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    event: [
      { label: 'Accueil', href: '/homepage' },
      { label: 'Programme', href: '/event-overview' },
      { label: 'Exposants', href: '/exhibitor-portal' },
      { label: 'Inscription', href: '/visitor-registration' }
    ],
    services: [
      { label: 'Matchmaking B2B', href: '/business-matchmaking' },
      { label: 'Support', href: '/contact-support' },
      { label: 'FAQ', href: '/contact-support' },
      { label: 'Partenaires', href: '/homepage' }
    ],
    legal: [
      { label: 'Mentions Légales', href: '#' },
      { label: 'Politique de Confidentialité', href: '#' },
      { label: 'CGV', href: '#' },
      { label: 'Cookies', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'instagram', href: '#', label: 'Instagram' }
  ];

  return (
    <footer className={`bg-foreground text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center bg-primary rounded-lg">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M20 5L8 12V28L20 35L32 28V12L20 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 5V35M8 12L32 28M32 12L8 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">Madagascar Africa</div>
                <div className="text-xs opacity-80">Business Expo</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Le rendez-vous incontournable du business dans l'Océan Indien. Connectez, innovez, prospérez.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth"
                >
                  <Icon name="ShareIcon" size={18} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Événement</h3>
            <ul className="space-y-2">
              {footerLinks.event.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-primary transition-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-primary transition-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="EnvelopeIcon" size={18} variant="outline" className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@madagascarexpo.com" className="text-sm text-white/70 hover:text-primary transition-smooth">
                  info@madagascarexpo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="PhoneIcon" size={18} variant="outline" className="text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+261202212345" className="text-sm text-white/70 hover:text-primary transition-smooth">
                  +261 20 22 123 45
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={18} variant="outline" className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  Antananarivo, Madagascar
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              &copy; {currentYear} Madagascar Africa Business Expo. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/60 hover:text-primary transition-smooth"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;