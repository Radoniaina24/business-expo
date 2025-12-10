'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: 'Quand dois-je réserver mon stand?',
      answer: 'Nous recommandons de réserver au moins 3 mois avant l&apos;événement pour garantir le meilleur emplacement. Les stands premium se vendent rapidement, souvent 6 mois à l&apos;avance. Des réductions early-bird sont disponibles pour les réservations anticipées.'
    },
    {
      question: 'Quels sont les modes de paiement acceptés?',
      answer: 'Nous acceptons les virements bancaires, cartes de crédit (Visa, Mastercard), et les paiements mobiles. Un acompte de 30% est requis à la réservation, le solde étant dû 30 jours avant l&apos;événement. Des plans de paiement échelonnés sont disponibles pour les forfaits Premium et Elite.'
    },
    {
      question: 'Puis-je personnaliser mon stand?',
      answer: 'Absolument! Tous nos forfaits incluent des options de personnalisation. Notre équipe de design peut créer un stand sur mesure reflétant votre marque. Les services incluent la conception graphique, l&apos;impression de bannières, l&apos;installation de mobilier personnalisé, et l&apos;intégration technologique.'
    },
    {
      question: 'Comment fonctionne le système de matchmaking B2B?',
      answer: 'Notre plateforme AI analyse votre profil d&apos;entreprise et vous connecte avec les visiteurs les plus pertinents avant l&apos;événement. Vous recevez une liste de prospects qualifiés et pouvez planifier des rendez-vous directement via notre application. Le taux de conversion moyen est de 35%.'
    },
    {
      question: 'Quelle est votre politique d&apos;annulation?',
      answer: 'Annulation gratuite jusqu&apos;à 90 jours avant l&apos;événement avec remboursement complet. Entre 90-60 jours: remboursement de 50%. Moins de 60 jours: aucun remboursement, mais vous pouvez transférer votre réservation à l&apos;édition suivante ou à une autre entreprise.'
    },
    {
      question: 'Offrez-vous un support technique pendant l&apos;expo?',
      answer: 'Oui! Une équipe technique dédiée est disponible 24/7 pendant l&apos;événement. Nous fournissons un support pour l&apos;installation, le dépannage électrique, la connectivité internet, et tout problème technique. Un technicien est assigné à chaque zone pour une assistance immédiate.'
    },
    {
      question: 'Puis-je obtenir des leads après l&apos;événement?',
      answer: 'Tous les exposants reçoivent un rapport détaillé post-événement incluant les coordonnées des visiteurs qui ont scanné votre badge, les statistiques de trafic de votre stand, et les enregistrements des rendez-vous B2B. Les données sont livrées dans les 48 heures suivant la clôture.'
    },
    {
      question: 'Y a-t-il des restrictions sur les produits exposés?',
      answer: 'Les produits doivent être conformes aux réglementations mauriciennes et internationales. Les articles interdits incluent les armes, substances illégales, et produits contrefaits. Certains secteurs (alimentaire, pharmaceutique) nécessitent des certifications spécifiques. Notre équipe vous guidera dans le processus de conformité.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="QuestionMarkCircleIcon" size={20} variant="solid" className="text-accent" />
            <span className="text-sm font-semibold text-accent">FAQ</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-lg text-muted-foreground">
            Trouvez rapidement les réponses à vos questions sur l&apos;exposition.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-warm transition-smooth"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-smooth"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <Icon
                  name="ChevronDownIcon"
                  size={24}
                  variant="outline"
                  className={`flex-shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-muted/50 rounded-xl p-8">
          <Icon name="ChatBubbleLeftEllipsisIcon" size={48} variant="outline" className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Vous avez d&apos;autres questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Notre équipe est là pour vous aider. Contactez-nous et nous vous répondrons dans les 24 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:exposants@madagascarexpo.com"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 shadow-warm transition-smooth"
            >
              <Icon name="EnvelopeIcon" size={20} variant="outline" />
              <span>exposants@madagascarexpo.com</span>
            </a>
            <a
              href="tel:+2302301234"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-smooth"
            >
              <Icon name="PhoneIcon" size={20} variant="outline" />
              <span>+230 230 1234</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;