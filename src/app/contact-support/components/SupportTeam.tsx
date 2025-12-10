import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  alt: string;
  email: string;
  phone: string;
  languages: string[];
}

interface SupportTeamProps {
  className?: string;
}

const SupportTeam = ({ className = '' }: SupportTeamProps) => {
  const teamMembers: TeamMember[] = [
  {
    id: 'team1',
    name: 'Marie Rasoanaivo',
    role: 'Directrice du Support Client',
    department: 'Support Général',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb2fd956-1763293568388.png",
    alt: 'Professional African woman with short black hair wearing navy blazer smiling at camera in modern office',
    email: 'marie.r@madagascarexpo.mu',
    phone: '+230 5 123 4567',
    languages: ['Français', 'Anglais', 'Malgache']
  },
  {
    id: 'team2',
    name: 'Jean-Paul Ramanantsoa',
    role: 'Responsable Relations Exposants',
    department: 'Support Exposants',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_151c98aae-1763293647335.png",
    alt: 'Professional African man with short hair in dark suit and tie smiling confidently in corporate setting',
    email: 'jeanpaul.r@madagascarexpo.mu',
    phone: '+230 5 234 5678',
    languages: ['Français', 'Anglais']
  },
  {
    id: 'team3',
    name: 'Aminata Diallo',
    role: 'Coordinatrice Visiteurs',
    department: 'Support Visiteurs',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10778c045-1765088831422.png",
    alt: 'Smiling African woman with braided hair wearing professional burgundy blazer in bright office environment',
    email: 'aminata.d@madagascarexpo.mu',
    phone: '+230 5 345 6789',
    languages: ['Français', 'Anglais', 'Wolof']
  },
  {
    id: 'team4',
    name: 'Rakesh Patel',
    role: 'Spécialiste Support Technique',
    department: 'Support Technique',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19e9497eb-1763293691311.png",
    alt: 'Professional man with glasses wearing white shirt smiling warmly in modern tech office',
    email: 'rakesh.p@madagascarexpo.mu',
    phone: '+230 5 456 7890',
    languages: ['Français', 'Anglais', 'Hindi']
  }];


  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="UserGroupIcon" size={16} variant="solid" />
            <span>Notre Équipe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Rencontrez Notre Équipe de Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des professionnels dévoués prêts à vous accompagner dans votre parcours avec l'exposition
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member) =>
          <div
            key={member.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-warm-lg transition-smooth group">

              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Department Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-4">{member.role}</p>

                {/* Contact Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="EnvelopeIcon" size={16} variant="outline" className="flex-shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="PhoneIcon" size={16} variant="outline" className="flex-shrink-0" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="LanguageIcon" size={16} variant="outline" className="text-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Langues</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang) =>
                  <span
                    key={lang}
                    className="bg-muted text-foreground px-2 py-1 rounded text-xs font-medium">

                        {lang}
                      </span>
                  )}
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-smooth flex items-center justify-center space-x-2">
                  <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
                  <span>Contacter</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Membres d'Équipe</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">8</div>
            <p className="text-muted-foreground">Langues Parlées</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <p className="text-muted-foreground">Support Disponible</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Satisfaction Client</p>
          </div>
        </div>
      </div>
    </section>);

};

export default SupportTeam;