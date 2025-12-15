'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface RegistrationFormData {
  visitorType: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  position: string;
  industry: string;
  newsletter: boolean;
  terms: boolean;
}

interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormData) => void;
}

interface RegistrationFormData {
  visitorType: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  position: string;
  industry: string;
  newsletter: boolean;
  terms: boolean;
}

interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormData) => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    visitorType: '',
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    position: '',
    industry: '',
    newsletter: false,
    terms: false,
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const visitorTypes = [
    { value: 'business', label: 'Visiteur professionnel', icon: 'BriefcaseIcon' },
    { value: 'investor', label: 'Investisseur stratégique', icon: 'CurrencyDollarIcon' },
    { value: 'media', label: 'Professionnel des médias', icon: 'NewspaperIcon' },
  ];

  const industries = [
    'Agriculture & Agro-industrie',
    'Technologie & Innovation',
    'Industrie manufacturière',
    'Tourisme & Hôtellerie',
    'Services financiers',
    'Santé',
    'Énergie & Ressources renouvelables',
    'Commerce & E-commerce',
    'Construction & Immobilier',
    'Éducation',
    'Autre',
  ];
  const handleInputChange = (field: keyof RegistrationFormData, value: any) => {
    if (!isHydrated) return;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (!isHydrated) return;
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isHydrated) return;
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;
    console.log(formData);
    onSubmit(formData);
  };

  const isStepValid = () => {
    if (!isHydrated) return false;

    switch (currentStep) {
      case 1:
        return formData.visitorType !== '';
      case 2:
        return Boolean(
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.country
        );
      case 3:
        return Boolean(
          formData.company && formData.position && formData.industry && formData.terms
        );
      default:
        return false;
    }
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg shadow-warm p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="space-y-4">
            <div className="h-12 bg-muted rounded"></div>
            <div className="h-12 bg-muted rounded"></div>
            <div className="h-12 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-warm p-6 lg:p-8">
      {/* Indicateur de progression */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-smooth ${
                  step <= currentStep
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-smooth ${
                    step < currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Type</span>
          <span>Personnel</span>
          <span>Professionnel</span>
        </div>
      </div>

      {/* Étape 1 : Type de visiteur */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Sélectionnez le type de visiteur
            </h2>
            <p className="text-muted-foreground">
              Choisissez la catégorie qui correspond le mieux à l&apos;objectif de votre visite
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visitorTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => handleInputChange('visitorType', type.value)}
                className={`p-6 rounded-lg border-2 transition-smooth text-left ${
                  formData.visitorType === type.value
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Icon name={type.icon as any} size={32} className="text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{type.label}</h3>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Étape 2 : Informations personnelles */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Informations personnelles</h2>
            <p className="text-muted-foreground">Veuillez fournir vos coordonnées</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            >
              <option value="">Civilité</option>
              <option value="mr">M.</option>
              <option value="mrs">Mme</option>
              <option value="ms">Mlle</option>
              <option value="dr">Dr</option>
              <option value="prof">Prof.</option>
            </select>

            <input
              type="text"
              placeholder="Prénom *"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="sm:col-span-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              required
            />

            <input
              type="text"
              placeholder="Nom *"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="sm:col-span-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Adresse e-mail *"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              required
            />

            <input
              type="tel"
              placeholder="Numéro de téléphone *"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Pays *"
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            required
          />
        </div>
      )}

      {/* Étape 3 : Informations professionnelles */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Informations professionnelles
            </h2>
            {/* <p className="text-muted-foreground">Parlez-nous de votre parcours professionnel</p> */}
          </div>

          <input
            type="text"
            placeholder="Nom de l’entreprise / organisation / société *"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            required
          />

          <input
            type="text"
            placeholder="Poste / Fonction *"
            value={formData.position}
            onChange={(e) => handleInputChange('position', e.target.value)}
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            required
          />

          <select
            value={formData.industry}
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            required
          >
            <option value="">Sélectionnez votre secteur d&apos;activité *</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>

          <div className="space-y-4 pt-4 border-t border-border">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.newsletter}
                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                className="mt-1 w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-ring"
              />
              <span className="text-sm text-foreground">
                S&apos;abonner à notre newsletter pour recevoir les mises à jour sur nos futurs
                événements et opportunités d&apos;affaires
              </span>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.terms}
                onChange={(e) => handleInputChange('terms', e.target.checked)}
                className="mt-1 w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-ring"
                required
              />
              <span className="text-sm text-foreground">
                J&apos;accepte les{' '}
                <a href="#" className="text-primary hover:underline">
                  Conditions générales
                </a>{' '}
                et{' '}
                <a href="#" className="text-primary hover:underline">
                  Politique de confidentialité
                </a>{' '}
                *
              </span>
            </label>
          </div>
        </div>
      )}

      {/* Boutons de navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="px-6 py-3 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-muted transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Précédent
        </button>

        {currentStep < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            disabled={!isStepValid()}
            className="px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Étape suivante
          </button>
        ) : (
          <button
            type="submit"
            disabled={!isStepValid()}
            className="px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Finaliser l&apos;inscription
          </button>
        )}
      </div>
    </form>
  );
};

export default RegistrationForm;
