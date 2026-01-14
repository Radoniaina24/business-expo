// components/Contact.tsx
'use client';

import { useState } from 'react';
import { Mail, Globe, Send, User, Building2, MessageSquare, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formType, setFormType] = useState<'exhibitor' | 'sponsor' | 'visitor'>('exhibitor');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            CONTACT & REGISTRATION
          </span>
          <h2 className="section-title text-gray-900 mb-6">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="section-subtitle">
            Ready to join Africa's premier business exhibition? Register now or contact us for more
            information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">Quick Contact</h3>

              <div className="space-y-6">
                <a
                  href="mailto:info@africabusinessexpo.com"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                      info@africabusinessexpo.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://africabusinessexpo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-success-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="text-gray-900 font-medium group-hover:text-success-600 transition-colors">
                      www.africabusinessexpo.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Registration Options */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="font-heading font-bold text-2xl mb-6">Quick Registration</h3>

              <div className="space-y-4">
                <button className="w-full bg-success-500 hover:bg-success-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <Building2 className="w-5 h-5" />
                  <span>Exhibit Now</span>
                </button>
                <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Become a Sponsor</span>
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20">
                  <User className="w-5 h-5" />
                  <span>Register as Visitor</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
              Send Us a Message
            </h3>

            {/* Form Type Selector */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { id: 'exhibitor', label: 'Exhibitor' },
                { id: 'sponsor', label: 'Sponsor' },
                { id: 'visitor', label: 'Visitor' },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFormType(type.id as typeof formType)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    formType === type.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success-500 mx-auto mb-4" />
                <h4 className="font-heading font-bold text-xl text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="Mauritius"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your interest in Africa Business Expo..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-success-600 hover:from-primary-700 hover:to-success-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
