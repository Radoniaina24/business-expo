'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Session {
  time: string;
  title: string;
  speaker?: string;
  speakerRole?: string;
  speakerImage?: string;
  speakerImageAlt?: string;
  type: 'keynote' | 'workshop' | 'networking' | 'panel';
  description: string;
}

interface DayAgenda {
  day: string;
  date: string;
  sessions: Session[];
}

interface AgendaTimelineProps {
  className?: string;
}

const AgendaTimeline = ({ className = '' }: AgendaTimelineProps) => {
  const [activeDay, setActiveDay] = useState(0);

  const agenda: DayAgenda[] = [
  {
    day: 'Jour 1',
    date: '15 Mars 2026',
    sessions: [
    {
      time: '09:00 - 10:00',
      title: 'Cérémonie d\'Ouverture & Keynote',
      speaker: 'Dr. Aminata Touré',
      speakerRole: 'Présidente, African Development Bank',
      speakerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_120a6f8f8-1763300092999.png",
      speakerImageAlt: 'Professional African woman in navy blue business suit with confident smile in modern office setting',
      type: 'keynote',
      description: 'Vision stratégique pour le développement économique de l\'Océan Indien et opportunités d\'investissement en Afrique de l\'Est.'
    },
    {
      time: '10:30 - 12:00',
      title: 'Panel: Financement des PME Africaines',
      type: 'panel',
      description: 'Discussion avec investisseurs et banquiers sur les mécanismes de financement innovants pour les entreprises en croissance.'
    },
    {
      time: '12:00 - 13:30',
      title: 'Déjeuner Networking',
      type: 'networking',
      description: 'Opportunité de networking informel avec exposants et visiteurs dans l\'espace restauration premium.'
    },
    {
      time: '14:00 - 16:00',
      title: 'Atelier: Stratégies d\'Export vers l\'Europe',
      speaker: 'Jean-Pierre Dubois',
      speakerRole: 'Directeur Export, Mauritius Chamber of Commerce',
      speakerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_116576876-1765038468363.png",
      speakerImageAlt: 'Middle-aged businessman in gray suit with glasses presenting at conference with confident posture',
      type: 'workshop',
      description: 'Workshop pratique sur les certifications, réglementations et meilleures pratiques pour exporter vers les marchés européens.'
    },
    {
      time: '16:30 - 18:00',
      title: 'Sessions B2B Matchmaking',
      type: 'networking',
      description: 'Rencontres pré-programmées entre exposants et visiteurs qualifiés via notre plateforme de matchmaking.'
    }]

  },
  {
    day: 'Jour 2',
    date: '16 Mars 2026',
    sessions: [
    {
      time: '09:00 - 10:30',
      title: 'Keynote: Transformation Digitale en Afrique',
      speaker: 'Kwame Mensah',
      speakerRole: 'CEO, AfriTech Ventures',
      speakerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_150d1b412-1763295725152.png",
      speakerImageAlt: 'Young African tech entrepreneur in casual blazer with warm smile in modern startup office',
      type: 'keynote',
      description: 'Comment la technologie révolutionne les modèles d\'affaires africains et crée de nouvelles opportunités de croissance.'
    },
    {
      time: '11:00 - 12:30',
      title: 'Panel: Opportunités dans l\'Agribusiness',
      type: 'panel',
      description: 'Experts discutent des innovations dans l\'agriculture, la transformation alimentaire et les chaînes de valeur agricoles.'
    },
    {
      time: '12:30 - 14:00',
      title: 'Déjeuner VIP avec Investisseurs',
      type: 'networking',
      description: 'Session exclusive pour les exposants premium avec des investisseurs institutionnels et family offices.'
    },
    {
      time: '14:30 - 16:00',
      title: 'Atelier: Marketing Digital pour l\'Afrique',
      speaker: 'Fatima El-Mansouri',
      speakerRole: 'Digital Marketing Director, Orange Africa',
      speakerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf89a9ae-1763300807832.png",
      speakerImageAlt: 'Professional woman in red blazer with confident expression presenting at corporate event',
      type: 'workshop',
      description: 'Stratégies digitales adaptées aux marchés africains: réseaux sociaux, mobile-first et e-commerce.'
    },
    {
      time: '16:30 - 18:30',
      title: 'Innovation Showcase & Pitch Competition',
      type: 'keynote',
      description: '10 startups africaines présentent leurs innovations devant un jury d\'investisseurs. Prix: €50,000 en financement.'
    }]

  },
  {
    day: 'Jour 3',
    date: '17 Mars 2026',
    sessions: [
    {
      time: '09:00 - 10:30',
      title: 'Keynote: Partenariats Stratégiques Afrique-Maurice',
      speaker: 'Rajesh Patel',
      speakerRole: 'Ministre du Commerce, République de Maurice',
      speakerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8090d9d-1764771886583.png",
      speakerImageAlt: 'Distinguished businessman in formal dark suit with tie speaking at government conference',
      type: 'keynote',
      description: 'Vision gouvernementale pour renforcer les liens commerciaux entre Maurice et les pays africains.'
    },
    {
      time: '11:00 - 12:30',
      title: 'Panel: Tourisme & Hospitalité en Afrique',
      type: 'panel',
      description: 'Opportunités dans le secteur touristique africain post-pandémie et tendances du tourisme durable.'
    },
    {
      time: '12:30 - 14:00',
      title: 'Déjeuner de Clôture',
      type: 'networking',
      description: 'Dernière opportunité de networking avec remise des certificats de participation.'
    },
    {
      time: '14:30 - 16:00',
      title: 'Atelier: Conformité & Réglementation Africaine',
      type: 'workshop',
      description: 'Guide pratique sur les aspects légaux, fiscaux et réglementaires pour faire des affaires en Afrique.'
    },
    {
      time: '16:30 - 18:00',
      title: 'Cérémonie de Clôture & Networking Final',
      type: 'networking',
      description: 'Bilan de l\'événement, annonces pour 2027 et cocktail de networking final.'
    }]

  }];


  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':return 'bg-primary/10 text-primary border-primary/20';
      case 'workshop':return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'panel':return 'bg-accent/10 text-accent border-accent/20';
      case 'networking':return 'bg-muted text-muted-foreground border-border';
      default:return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'keynote':return 'MicrophoneIcon';
      case 'workshop':return 'AcademicCapIcon';
      case 'panel':return 'UserGroupIcon';
      case 'networking':return 'UsersIcon';
      default:return 'CalendarIcon';
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Programme Détaillé
          </h2>
          <p className="text-lg text-muted-foreground">
            Trois jours intensifs de conférences, ateliers et networking avec les meilleurs experts du business africain.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {agenda.map((day, index) =>
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${
            activeDay === index ?
            'bg-primary text-primary-foreground shadow-warm' :
            'bg-card text-foreground border border-border hover:border-primary'}`
            }>

              <div className="text-sm">{day.day}</div>
              <div className="text-xs opacity-80">{day.date}</div>
            </button>
          )}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {agenda[activeDay].sessions.map((session, index) =>
            <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== agenda[activeDay].sessions.length - 1 &&
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
              }

                <div className="flex gap-6">
                  {/* Time Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-warm relative z-10">
                      <Icon name={getTypeIcon(session.type) as any} size={20} variant="solid" className="text-primary-foreground" />
                    </div>
                  </div>

                  {/* Session Card */}
                  <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:shadow-warm-lg transition-smooth">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-muted-foreground">
                            {session.time}
                          </span>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getTypeColor(session.type)}`}>
                            {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {session.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {session.description}
                        </p>
                      </div>

                      {/* Speaker Info */}
                      {session.speaker &&
                    <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                            <AppImage
                          src={session.speakerImage || ''}
                          alt={session.speakerImageAlt || 'Speaker profile photo'}
                          className="w-full h-full object-cover" />

                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground">
                              {session.speaker}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {session.speakerRole}
                            </div>
                          </div>
                        </div>
                    }
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-xl p-6 shadow-warm">
            <Icon name="DocumentArrowDownIcon" size={32} variant="outline" className="text-primary" />
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground mb-1">
                Programme Complet PDF
              </h4>
              <p className="text-sm text-muted-foreground">
                Téléchargez le programme détaillé avec tous les speakers et sessions
              </p>
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth whitespace-nowrap">
              Télécharger
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default AgendaTimeline;