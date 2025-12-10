'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Connection {
  id: string;
  name: string;
  company: string;
  image: string;
  alt: string;
  status: 'pending' | 'accepted' | 'scheduled';
  connectedDate: string;
  nextMeeting?: string;
}

interface ConnectionsListProps {
  connections: Connection[];
  onMessage: (connectionId: string) => void;
  onSchedule: (connectionId: string) => void;
}

const ConnectionsList = ({ connections, onMessage, onSchedule }: ConnectionsListProps) => {
  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { text: 'En Attente', className: 'bg-accent/10 text-accent' },
      accepted: { text: 'Connecté', className: 'bg-success/10 text-success' },
      scheduled: { text: 'Réunion Planifiée', className: 'bg-primary/10 text-primary' }
    };
    return badges[status as keyof typeof badges];
  };

  return (
    <div className="space-y-3">
      {connections.map((connection) => {
        const badge = getStatusBadge(connection.status);
        return (
          <div
            key={connection.id}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-warm transition-smooth"
          >
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                <AppImage
                  src={connection.image}
                  alt={connection.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-base font-semibold text-foreground">{connection.name}</h4>
                    <p className="text-sm text-muted-foreground">{connection.company}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${badge.className}`}>
                    {badge.text}
                  </span>
                </div>

                <div className="mt-2 flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="ClockIcon" size={14} variant="outline" />
                    <span>Connecté le {connection.connectedDate}</span>
                  </div>
                  {connection.nextMeeting && (
                    <div className="flex items-center space-x-1 text-primary">
                      <Icon name="CalendarIcon" size={14} variant="outline" />
                      <span>Réunion: {connection.nextMeeting}</span>
                    </div>
                  )}
                </div>

                <div className="mt-3 flex space-x-2">
                  <button
                    onClick={() => onMessage(connection.id)}
                    className="flex-1 px-3 py-1.5 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-smooth flex items-center justify-center space-x-1"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} variant="outline" />
                    <span>Message</span>
                  </button>
                  {connection.status === 'accepted' && (
                    <button
                      onClick={() => onSchedule(connection.id)}
                      className="flex-1 px-3 py-1.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-smooth flex items-center justify-center space-x-1"
                    >
                      <Icon name="CalendarIcon" size={16} variant="outline" />
                      <span>Planifier</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConnectionsList;