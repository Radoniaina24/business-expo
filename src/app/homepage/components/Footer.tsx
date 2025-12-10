'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    "L'Événement": [
      // { label: "À Propos", href: "/event-overview" },
      // { label: "Programme", href: "/event-overview" },
      // { label: "Lieu & Accès", href: "/event-overview" },
      // { label: "FAQ", href: "/contact-support" }
      { label: 'À Propos', href: '/' },
      { label: 'Programme', href: '/' },
      { label: 'Lieu & Accès', href: '/' },
      { label: 'FAQ', href: '/' },
    ],
    Participants: [
      // { label: 'Devenir Exposant', href: '/exhibitor-portal' },
      // { label: "S\'inscrire comme Visiteur", href: '/visitor-registration' },
      // { label: 'Matchmaking B2B', href: '/business-matchmaking' },
      // { label: "Opportunités d\'Investissement", href: '/business-matchmaking' },
      { label: 'Devenir Exposant', href: '/' },
      { label: "S\'inscrire comme Visiteur", href: '/' },
      { label: 'Matchmaking B2B', href: '/' },
      { label: "Opportunités d\'Investissement", href: '/' },
    ],
    Ressources: [
      // { label: 'Centre Média', href: '/contact-support' },
      // { label: 'Partenariats', href: '/contact-support' },
      // { label: 'Contact & Support', href: '/contact-support' },
      // { label: 'Conditions Générales', href: '/contact-support' },
      { label: 'Centre Média', href: '/' },
      { label: 'Partenariats', href: '/' },
      { label: 'Contact & Support', href: '/' },
      { label: 'Conditions Générales', href: '/' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: '#' },
    { name: 'Twitter', icon: 'ShareIcon', href: '#' },
    { name: 'LinkedIn', icon: 'ShareIcon', href: '#' },
    { name: 'Instagram', icon: 'ShareIcon', href: '#' },
  ];

  if (!isHydrated) {
    return (
      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-64 bg-white/10 rounded-lg animate-pulse"></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center bg-primary rounded-lg">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
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
                <div className="text-xl font-bold leading-tight">Madagascar Africa</div>
                <div className="text-sm text-white/70">Business Expo</div>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed mb-6">
              Le plus grand événement business de l'océan Indien, connectant Madagascar, l'Afrique
              et Maurice pour créer des opportunités sans précédent.
            </p>

            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-primary transition-confident"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Restez Informé</h3>
            <p className="text-white/70 mb-6">
              Recevez les dernières actualités, opportunités et mises à jour de l'événement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-confident whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} Madagascar Africa Business Expo. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Mentions Légales
              </Link>
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
