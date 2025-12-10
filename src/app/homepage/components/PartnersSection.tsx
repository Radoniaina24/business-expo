import AppImage from '@/components/ui/AppImage';

interface Partner {
  name: string;
  logo: string;
  alt: string;
  category: string;
}

const PartnersSection = () => {
  const partners: Partner[] = [
  {
    name: "African Development Bank",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff6e5f0a-1764694156823.png",
    alt: "African Development Bank logo with blue and white corporate design",
    category: "Partenaire Stratégique"
  },
  {
    name: "Mauritius Chamber of Commerce",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1114dd8fd-1764759257792.png",
    alt: "Mauritius Chamber of Commerce emblem with traditional business symbols",
    category: "Partenaire Officiel"
  },
  {
    name: "Madagascar Trade Ministry",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_142c0c310-1765028257067.png",
    alt: "Madagascar Trade Ministry official seal with national colors",
    category: "Partenaire Gouvernemental"
  },
  {
    name: "African Union Commission",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1958b0596-1764749478976.png",
    alt: "African Union Commission logo with continental map design",
    category: "Partenaire Institutionnel"
  },
  {
    name: "Indian Ocean Commission",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1ed2092-1765286393397.png",
    alt: "Indian Ocean Commission emblem with maritime theme",
    category: "Partenaire Régional"
  },
  {
    name: "COMESA",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17c288ac9-1765286390881.png",
    alt: "COMESA logo representing Common Market for Eastern and Southern Africa",
    category: "Partenaire Commercial"
  }];


  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nos Partenaires Stratégiques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soutenus par les plus grandes institutions africaines et internationales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) =>
          <div
            key={index}
            className="bg-card rounded-2xl p-8 border border-border hover:border-primary shadow-warm hover:shadow-warm-lg transition-confident group">

              <div className="relative h-24 mb-6 flex items-center justify-center bg-muted rounded-xl overflow-hidden">
                <AppImage
                src={partner.logo}
                alt={partner.alt}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform" />

              </div>

              <div className="text-center">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {partner.category}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {partner.name}
                </h3>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white shadow-warm-xl">
          <h3 className="text-3xl font-bold mb-4">
            Devenez Partenaire de l'Événement
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Associez votre marque au plus grand événement business de l'océan Indien et bénéficiez d'une visibilité exceptionnelle
          </p>
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 shadow-warm-lg hover:shadow-warm-xl transition-confident">
            Découvrir les Opportunités de Partenariat
          </button>
        </div>
      </div>
    </section>);

};

export default PartnersSection;