'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const navigationItems = [
  //   { label: 'Accueil', href: '/homepage', icon: 'HomeIcon' },
  //   { label: 'Contacter le support', href: '/contact-support', icon: 'ChatBubbleLeftRightIcon' },
  //   // { label: 'Aperçu de l’événement', href: '/event-overview', icon: 'CalendarIcon' },
  //   // { label: 'Portail exposants', href: '/exhibitor-portal', icon: 'BuildingStorefrontIcon' },
  //   // { label: 'Inscription visiteurs', href: '/visitor-registration', icon: 'UserPlusIcon' },
  //   // { label: 'Matchmaking B2B', href: '/business-matchmaking', icon: 'UsersIcon' },
  // ];
  // const moreItems = [
  //   { label: 'Contacter le support', href: '/contact-support', icon: 'ChatBubbleLeftRightIcon' }, //contact-support
  // ];
  const navigationItems = [
    { label: 'Home', href: '#home', icon: 'HomeIcon' },
    { label: 'About', href: '#about', icon: 'InformationCircleIcon' },
    { label: 'Why Exhibit', href: '#why-exhibit', icon: 'StarIcon' },
    { label: 'Sectors', href: '#sectors', icon: 'Squares2X2Icon' },
    { label: 'Program', href: '#program', icon: 'CalendarDaysIcon' },
    { label: 'Packages', href: '#packages', icon: 'BriefcaseIcon' },
    // { label: 'Contact', href: '#contact', icon: 'EnvelopeIcon' },
  ];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-warm ${className}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link
            href="/homepage"
            className="flex items-center space-x-3 hover:opacity-90 transition-smooth"
          >
            {/* <div className="relative w-10 h-10 flex items-center justify-center bg-primary rounded-lg">
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
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-foreground leading-tight">
                Madagascar Africa
              </div>
              <div className="text-xs text-muted-foreground font-medium">Business Expo</div>
            </div> */}
            <div className="my-5">
              <Image
                src={
                  'https://res.cloudinary.com/dx3xhdaym/image/upload/v1768381305/mada_bus_expo-03_1_joehhr.png'
                }
                alt="logo"
                width={130}
                height={70}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
              >
                <Icon name={item.icon as any} size={18} variant="outline" />
                <span>{item.label}</span>
              </Link>
            ))}

            {/* More Dropdown */}
            {/* <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth">
                <Icon name="EllipsisHorizontalIcon" size={18} variant="outline" />
                <span>More</span>
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-warm-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted first:rounded-t-lg last:rounded-b-lg transition-smooth"
                  >
                    <Icon name={item.icon as any} size={18} variant="outline" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div> */}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="#contact"
              className="px-4 py-2 text-sm flex gap-2 items-center font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth"
            >
              <Icon name={'UserPlusIcon'} size={18} variant="outline" />
              Contact
            </Link>
            {/* <Link
              href="/exhibitor-portal"
              className="px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth"
            >
              Become an Exhibitor
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} variant="outline" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="px-4 py-4 space-y-1">
            {[...navigationItems].map(
              (
                item // ...moreItems
              ) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                >
                  <Icon name={item.icon as any} size={20} variant="outline" />
                  <span>{item.label}</span>
                </Link>
              )
            )}

            <div className="pt-4 space-y-2 border-t border-border mt-4">
              {/* <Link
                href="/visitor-registration"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-sm font-semibold text-center text-foreground border border-border rounded-lg hover:bg-muted transition-smooth"
              >
                Register as Visitor
              </Link> */}

              <Link
                href="#contact"
                className="px-4 py-2 text-sm flex gap-2 items-center font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth"
              >
                <Icon name={'UserPlusIcon'} size={18} variant="outline" />
                Contact
              </Link>

              {/* <Link
                href="/visitor-registration"
                onClick={() => setIsMobileMenuOpen(false)}
                className="  w-full px-4 py-2 text-sm flex gap-2 items-center font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth"
              >
                <Icon name={'UserPlusIcon'} size={18} variant="outline" /> Inscription
              </Link> */}

              {/* <Link
                href="/exhibitor-portal"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-sm font-semibold text-center text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm transition-smooth"
              >
                Become an Exhibitor
              </Link> */}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
