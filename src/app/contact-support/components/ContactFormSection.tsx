'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  // inquiryType: string;
  subject: string;
  message: string;
  preferredContact: string;
  language: string;
}

interface ContactFormSectionProps {
  className?: string;
}

const ContactFormSection = ({ className = '' }: ContactFormSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    // inquiryType: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    language: 'fr',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-muted ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl p-8 animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-full mb-8"></div>
            <div className="space-y-4">
              <div className="h-12 bg-muted rounded"></div>
              <div className="h-12 bg-muted rounded"></div>
              <div className="h-32 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          country: formData.country,
          subject: formData.subject,
          message: formData.message,
          preferredContact: formData.preferredContact,
          language: formData.language,
        }),
      });

      const result = await response.json();
      // console.log(result);
      if (response.ok && result.success) {
        setSubmitStatus('success');

        // Reset form after success
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            country: '',
            subject: '',
            message: '',
            preferredContact: 'email',
            language: 'fr',
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="PencilSquareIcon" size={16} variant="solid" />
            <span>Formulaire de Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Envoyez-Nous un Message
          </h2>
          <p className="text-lg text-muted-foreground">
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-warm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Prénom <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="Jean"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Nom <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="Dupont"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email <span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="jean.dupont@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Téléphone <span className="text-error">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="+230 5 123 4567"
                />
              </div>
            </div>

            {/* Company and Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Entreprise <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="Nom de votre entreprise"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Pays <span className="text-error">*</span>
                </label>

                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="Nom du pays"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                Sujet <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="Résumé de votre demande"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message <span className="text-error">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                minLength={50}
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                placeholder="Décrivez votre demande en détail..."
              />
              <p className="text-sm text-muted-foreground mt-2">
                Minimum 50 caractères, maximum 1000 caractères
              </p>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Méthode de Contact Préférée
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-foreground">Email</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-foreground">Téléphone</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="whatsapp"
                    checked={formData.preferredContact === 'whatsapp'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-foreground">WhatsApp</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-warm hover:shadow-warm-lg transition-smooth flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon
                      name="ArrowPathIcon"
                      size={20}
                      variant="outline"
                      className="animate-spin"
                    />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
                    <span>Envoyer le Message</span>
                  </>
                )}
              </button>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex items-start space-x-3">
                <Icon
                  name="CheckCircleIcon"
                  size={24}
                  variant="solid"
                  className="text-success flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Message Envoyé avec Succès!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs
                    délais.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-card border border-border rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Icon
              name="InformationCircleIcon"
              size={24}
              variant="solid"
              className="text-primary flex-shrink-0"
            />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Informations Importantes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Nous répondons généralement dans les 2 heures pendant les heures de bureau
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Pour les demandes urgentes, veuillez nous appeler directement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Vos informations sont protégées et ne seront jamais partagées avec des tiers
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
