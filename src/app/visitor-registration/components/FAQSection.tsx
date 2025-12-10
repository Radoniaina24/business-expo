'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      question: 'What is included in my visitor registration?',
      answer: 'Your registration includes full access to the exhibition floor, all keynote sessions and panel discussions, networking events, the B2B matchmaking platform, digital event materials, and complimentary refreshments throughout the expo.',
    },
    {
      question: 'How does the B2B matchmaking system work?',
      answer: 'After registration, you\'ll receive access to our AI-powered matchmaking platform. Simply indicate your business interests and objectives, and our system will suggest relevant exhibitors and attendees. You can then request meetings which will be scheduled based on mutual availability.',
    },
    {
      question: 'Can I register on-site, or must I register online?',
      answer: 'While on-site registration is available, we strongly recommend pre-registering online to ensure faster check-in, access to pre-event networking features, and the ability to schedule B2B meetings in advance. Online registration also offers early-bird discounts.',
    },
    {
      question: 'What are the visa requirements for international visitors?',
      answer: 'Visa requirements vary by nationality. Mauritius offers visa-free entry or visa-on-arrival for many countries. We provide visa support letters for registered attendees. Please check with the Mauritian embassy in your country or contact our support team for assistance.',
    },
    {
      question: 'Are there accommodation packages available?',
      answer: 'Yes, we have partnered with several hotels near the venue offering special rates for expo attendees. Accommodation options and booking links will be provided in your registration confirmation email.',
    },
    {
      question: 'What COVID-19 safety measures are in place?',
      answer: 'We follow all local health guidelines and implement comprehensive safety protocols including enhanced sanitization, adequate spacing, and optional mask-wearing. Specific requirements will be communicated closer to the event date based on current regulations.',
    },
  ];

  const toggleFAQ = (index: number) => {
    if (!isHydrated) return;
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isHydrated) {
    return (
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="space-y-3 mt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-card rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about visitor registration and attendance
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-warm overflow-hidden transition-smooth"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-smooth"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <Icon
                  name="ChevronDownIcon"
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="/contact-support"
            className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm hover:shadow-warm-lg transition-smooth"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={18} />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;