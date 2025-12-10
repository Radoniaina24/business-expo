'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import CompatibilityScore from './CompatibilityScore';

interface Match {
  id: string;
  name: string;
  company: string;
  position: string;
  country: string;
  industry: string;
  image: string;
  alt: string;
  compatibilityScore: number;
  mutualConnections: number;
  interests: string[];
  lookingFor: string;
  bio: string;
}

interface MatchCardProps {
  match: Match;
  onConnect: (matchId: string) => void;
  onScheduleMeeting: (matchId: string) => void;
  onViewProfile: (matchId: string) => void;
}

const MatchCard = ({ match, onConnect, onScheduleMeeting, onViewProfile }: MatchCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg shadow-warm hover:shadow-warm-lg transition-smooth overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
              <AppImage
                src={match.image}
                alt={match.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2">
              <CompatibilityScore score={match.compatibilityScore} size="sm" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{match.name}</h3>
                <p className="text-sm text-muted-foreground">{match.position}</p>
                <p className="text-sm font-medium text-primary">{match.company}</p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 hover:bg-muted rounded-lg transition-smooth"
              >
                <Icon 
                  name={isExpanded ? "ChevronUpIcon" : "ChevronDownIcon"} 
                  size={20} 
                  variant="outline" 
                />
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="MapPinIcon" size={16} variant="outline" />
                <span>{match.country}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="BriefcaseIcon" size={16} variant="outline" />
                <span>{match.industry}</span>
              </div>
              {match.mutualConnections > 0 && (
                <div className="flex items-center space-x-1 text-primary">
                  <Icon name="UsersIcon" size={16} variant="outline" />
                  <span>{match.mutualConnections} connexions communes</span>
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {match.interests.slice(0, 3).map((interest, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full"
                >
                  {interest}
                </span>
              ))}
              {match.interests.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full">
                  +{match.interests.length - 3} plus
                </span>
              )}
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Recherche</h4>
              <p className="text-sm text-muted-foreground">{match.lookingFor}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">À propos</h4>
              <p className="text-sm text-muted-foreground">{match.bio}</p>
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => onConnect(match.id)}
            className="flex-1 min-w-[140px] px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm transition-smooth flex items-center justify-center space-x-2"
          >
            <Icon name="UserPlusIcon" size={16} variant="outline" />
            <span>Se Connecter</span>
          </button>
          <button
            onClick={() => onScheduleMeeting(match.id)}
            className="flex-1 min-w-[140px] px-4 py-2 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-muted transition-smooth flex items-center justify-center space-x-2"
          >
            <Icon name="CalendarIcon" size={16} variant="outline" />
            <span>Planifier</span>
          </button>
          <button
            onClick={() => onViewProfile(match.id)}
            className="px-4 py-2 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-muted transition-smooth"
          >
            Voir Profil
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;