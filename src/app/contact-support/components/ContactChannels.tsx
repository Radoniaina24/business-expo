import Icon from '@/components/ui/AppIcon';

interface ContactChannel {
  id: string;
  icon: string;
  title: string;
  description: string;
  action: string;
  actionLabel: string;
  availability: string;
  color: string;
}

interface ContactChannelsProps {
  className?: string;
}

const ContactChannels = ({ className = '' }: ContactChannelsProps) => {
  const channels: ContactChannel[] = [
    {
      id: 'phone',
      icon: 'PhoneIcon',
      title: 'Téléphone',
      description: 'Appelez-nous directement pour une assistance immédiate',
      action: '+230 5 123 4567',
      actionLabel: 'Appeler Maintenant',
      availability: 'Lun-Ven: 8h00-18h00 (GMT+4)',
      color: 'bg-primary'
    },
    {
      id: 'email',
      icon: 'EnvelopeIcon',
      title: 'Email',
      description: 'Envoyez-nous un email détaillé, réponse sous 24h',
      action: 'contact@madagascarexpo.mu',
      actionLabel: 'Envoyer un Email',
      availability: 'Réponse sous 24 heures',
      color: 'bg-secondary'
    },
    {
      id: 'whatsapp',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'WhatsApp Business',
      description: 'Messagerie instantanée pour des réponses rapides',
      action: '+230 5 987 6543',
      actionLabel: 'Ouvrir WhatsApp',
      availability: 'Disponible 24/7',
      color: 'bg-accent'
    },
    {
      id: 'location',
      icon: 'MapPinIcon',
      title: 'Bureau Principal',
      description: 'Visitez-nous à notre bureau à Port Louis',
      action: '15 Avenue de l\'Indépendance, Port Louis, Maurice',
      actionLabel: 'Obtenir l\'Itinéraire',
      availability: 'Lun-Ven: 9h00-17h00',
      color: 'bg-primary'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
            <span>Canaux de Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choisissez Votre Canal Préféré
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous offrons plusieurs moyens de communication pour répondre à vos besoins spécifiques
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-warm-lg transition-smooth group"
            >
              <div className="flex items-start space-x-4">
                <div className={`${channel.color} rounded-lg p-3 flex-shrink-0 group-hover:scale-110 transition-smooth`}>
                  <Icon name={channel.icon as any} size={24} variant="outline" className="text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground mb-2">{channel.title}</h3>
                  <p className="text-muted-foreground mb-4">{channel.description}</p>
                  
                  <div className="bg-muted rounded-lg p-3 mb-4">
                    <p className="text-foreground font-medium break-all">{channel.action}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="ClockIcon" size={16} variant="outline" />
                      <span>{channel.availability}</span>
                    </div>
                    
                    <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-smooth flex items-center space-x-1">
                      <span>{channel.actionLabel}</span>
                      <Icon name="ArrowRightIcon" size={16} variant="outline" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-gradient-to-r from-error/10 to-warning/10 border border-error/20 rounded-xl p-6 lg:p-8">
          <div className="flex items-start space-x-4">
            <div className="bg-error rounded-lg p-3 flex-shrink-0">
              <Icon name="ExclamationTriangleIcon" size={24} variant="solid" className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">Contact d'Urgence</h3>
              <p className="text-muted-foreground mb-4">
                Pour les questions urgentes pendant l'événement ou les urgences liées à l'exposition
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+2305999888" className="inline-flex items-center space-x-2 bg-error text-white px-6 py-3 rounded-lg font-semibold hover:bg-error/90 transition-smooth">
                  <Icon name="PhoneIcon" size={20} variant="solid" />
                  <span>+230 5 999 888</span>
                </a>
                <span className="inline-flex items-center space-x-2 text-muted-foreground">
                  <Icon name="ClockIcon" size={20} variant="outline" />
                  <span>Disponible 24/7 pendant l'événement</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactChannels;