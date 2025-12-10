import Icon from '@/components/ui/AppIcon';

interface Feature {
  text: string;
  included: boolean;
}

interface PackageCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  isPopular?: boolean;
  color: string;
  onSelect: () => void;
}

const PackageCard = ({
  name,
  price,
  period,
  description,
  features,
  isPopular = false,
  color,
  onSelect
}: PackageCardProps) => {
  return (
    <div className={`relative bg-card border-2 ${isPopular ? 'border-primary shadow-warm-xl' : 'border-border'} rounded-2xl p-8 hover:shadow-warm-lg transition-confident`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-warm">
            Plus Populaire
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 ${color} rounded-xl mb-4`}>
          <Icon name="BuildingStorefrontIcon" size={32} variant="outline" className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Pricing */}
      <div className="text-center mb-8 pb-8 border-b border-border">
        <div className="flex items-baseline justify-center space-x-2">
          <span className="text-4xl lg:text-5xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground">/ {period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
              feature.included ? 'bg-success' : 'bg-muted'
            }`}>
              <Icon
                name={feature.included ? 'CheckIcon' : 'XMarkIcon'}
                size={14}
                variant="solid"
                className="text-white"
              />
            </div>
            <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-lg font-bold transition-confident ${
          isPopular
            ? 'bg-primary text-white hover:bg-primary/90 shadow-warm hover:shadow-warm-lg'
            : 'bg-muted text-foreground hover:bg-muted/80'
        }`}
      >
        Sélectionner ce Forfait
      </button>
    </div>
  );
};

export default PackageCard;