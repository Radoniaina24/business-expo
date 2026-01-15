// components/ParticipationForm.tsx
'use client';

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  UserIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  FlagIcon,
  TruckIcon,
  UsersIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

import { ParticipationFormValues, initialValues } from '@/types/participation';
import { participationSchema } from '../../../validation/participationSchema';
import { SectionCard } from './SectionCard';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormCheckboxGroup } from './FormCheckboxGroup';
import { FormRadioGroup } from './FormRadioGroup';
import { FormTextarea } from './FormTextarea';

// Country options
const countries = [
  { value: 'mauritius', label: 'Mauritius' },
  { value: 'south_africa', label: 'South Africa' },
  { value: 'kenya', label: 'Kenya' },
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'ghana', label: 'Ghana' },
  { value: 'senegal', label: 'Senegal' },
  { value: 'morocco', label: 'Morocco' },
  { value: 'egypt', label: 'Egypt' },
  { value: 'tanzania', label: 'Tanzania' },
  { value: 'ethiopia', label: 'Ethiopia' },
  { value: 'uganda', label: 'Uganda' },
  { value: 'rwanda', label: 'Rwanda' },
  { value: 'ivory_coast', label: "Côte d'Ivoire" },
  { value: 'cameroon', label: 'Cameroon' },
  { value: 'madagascar', label: 'Madagascar' },
  { value: 'seychelles', label: 'Seychelles' },
  { value: 'comoros', label: 'Comoros' },
  { value: 'reunion', label: 'Réunion' },
  { value: 'other', label: 'Other' },
];

const participationTypes = [
  { value: 'exhibitor', label: 'Exhibitor' },
  { value: 'sponsor', label: 'Sponsor / Partner' },
  { value: 'institution', label: 'Institution / Organisation' },
];

const objectives = [
  { value: 'business_development', label: 'Business development & market access' },
  { value: 'exhibition', label: 'Product or service exhibition' },
  { value: 'partnerships', label: 'Strategic partnerships' },
  { value: 'investor_meetings', label: 'Investor meetings' },
  { value: 'networking', label: 'B2B networking' },
  { value: 'visibility', label: 'Brand visibility' },
];

const logisticalPackages = [
  {
    value: 'standard',
    label: 'Standard Participation Package',
    description: "Travel arrangements at participant's expense",
  },
  {
    value: 'comprehensive',
    label: 'Comprehensive Participation Package',
    description: 'Subject to country eligibility',
  },
];

const representativesOptions = [
  { value: '1', label: '1 Representative' },
  { value: '2', label: '2 Representatives' },
  { value: '3', label: '3 Representatives' },
  { value: '4+', label: '4+ Representatives' },
];

export const ParticipationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (
    values: ParticipationFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      // Simulate API call
      console.log('Form submitted:', values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-12 h-12 text-emerald-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Request Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-8">
              Thank you for your interest in Africa Business Expo. Our Organising Committee will
              review your request and send you an official participation proposal within 5 business
              days.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 
                       text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 
                        text-emerald-700 rounded-full text-sm font-medium mb-4"
          >
            <GlobeAltIcon className="w-4 h-4" />
            Africa Business Expo – Mauritius
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Participation Request Form
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            This form is intended to formally register your interest in participating in the event.
            Based on the information provided, the Organising Committee will review your profile and
            send you an official participation proposal.
          </p>
        </div>

        {/* Notice Banner */}
        <div
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 
                      rounded-xl p-4 md:p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-blue-800 font-medium">No payment required at this stage</p>
              <p className="text-blue-600 text-sm mt-1">
                All participation conditions and fees will be communicated exclusively through
                official written documentation issued by the Organiser.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={participationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-6">
              {/* Contact Details */}
              <SectionCard title="Contact Details" icon={<UserIcon className="w-5 h-5" />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput name="fullName" label="Full Name" placeholder="John Doe" required />
                  <FormInput
                    name="jobTitle"
                    label="Job Title / Position"
                    placeholder="CEO, Director, Manager..."
                    required
                  />
                </div>
                <FormInput
                  name="company"
                  label="Company / Organisation"
                  placeholder="Your company or organisation name"
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    name="email"
                    label="Professional Email Address"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                  <FormInput
                    name="phone"
                    label="Phone / WhatsApp"
                    type="tel"
                    placeholder="+230 XXX XXXX"
                    required
                  />
                </div>
              </SectionCard>

              {/* Country of Origin */}
              <SectionCard
                title="Country of Origin"
                icon={<FlagIcon className="w-5 h-5" />}
                note="Country information is required to determine applicable participation conditions and logistical options."
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormSelect
                    name="country"
                    label="Country"
                    options={countries}
                    placeholder="Select your country"
                    required
                  />
                  <FormInput name="city" label="City" placeholder="Your city" />
                </div>
              </SectionCard>

              {/* Participation Profile */}
              <SectionCard
                title="Participation Profile"
                icon={<BriefcaseIcon className="w-5 h-5" />}
              >
                <FormInput
                  name="businessSector"
                  label="Business Sector / Products / Services"
                  placeholder="e.g., Technology, Agriculture, Manufacturing..."
                  required
                />
                <FormCheckboxGroup
                  name="participationType"
                  label="Intended Participation Type (indicative only)"
                  options={participationTypes}
                  required
                />
              </SectionCard>

              {/* Objectives */}
              <SectionCard
                title="Objectives of Participation"
                icon={<FlagIcon className="w-5 h-5" />}
              >
                <FormCheckboxGroup name="objectives" options={objectives} />
              </SectionCard>

              {/* Logistical Preferences */}
              <SectionCard
                title="Logistical Preferences (Indicative)"
                icon={<TruckIcon className="w-5 h-5" />}
                note="Logistical arrangements and costs vary by country and will be detailed in the official proposal."
              >
                <FormRadioGroup name="logisticalPackage" options={logisticalPackages} required />
              </SectionCard>

              {/* Number of Representatives */}
              <SectionCard
                title="Number of Representatives"
                icon={<UsersIcon className="w-5 h-5" />}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {representativesOptions.map((option) => (
                    <label key={option.value} className="relative cursor-pointer">
                      <Field
                        type="radio"
                        name="representatives"
                        value={option.value}
                        className="peer sr-only"
                      />
                      <div
                        className="p-4 text-center rounded-lg border-2 transition-all
                                    peer-checked:border-emerald-500 peer-checked:bg-emerald-50
                                    border-gray-200 hover:border-gray-300"
                      >
                        <span className="text-2xl font-bold text-gray-800">{option.value}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {touched.representatives && errors.representatives && (
                  <p className="text-sm text-red-600 mt-2">{errors.representatives}</p>
                )}
              </SectionCard>

              {/* Additional Information */}
              <SectionCard
                title="Additional Information"
                icon={<ChatBubbleBottomCenterTextIcon className="w-5 h-5" />}
              >
                <FormTextarea
                  name="additionalInfo"
                  label="Any additional comments or requirements"
                  placeholder="Tell us more about your expectations, specific needs, or any questions you may have..."
                  rows={5}
                />
              </SectionCard>

              {/* Confirmation */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <label className="flex items-start gap-4 cursor-pointer">
                  <Field
                    type="checkbox"
                    name="confirmation"
                    className="mt-1 h-5 w-5 text-emerald-600 focus:ring-emerald-500 
                             border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I confirm that the information provided is accurate and agree to be contacted by
                    the Organising Committee of Africa Business Expo regarding my participation.
                  </span>
                </label>
                {touched.confirmation && errors.confirmation && (
                  <p className="text-sm text-red-600 mt-2 ml-9">{errors.confirmation}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 
                           bg-gradient-to-r from-emerald-600 to-teal-600 text-white 
                           font-semibold rounded-xl shadow-lg hover:shadow-xl
                           transform hover:-translate-y-0.5 transition-all duration-200
                           disabled:opacity-50 disabled:cursor-not-allowed
                           disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon
                        className="w-5 h-5 transition-transform 
                                                  group-hover:translate-x-1"
                      />
                      Submit Participation Request
                    </>
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Process Info */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Official Process & Transparency</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '1',
                title: 'Expression of Interest',
                desc: 'Non-binding submission of this form',
              },
              {
                step: '2',
                title: 'Committee Review',
                desc: 'Review by AIOCCI Organising Committee',
              },
              { step: '3', title: 'Official Proposal', desc: 'Detailed proposal sent via email' },
              { step: '4', title: 'Confirmation', desc: 'Written acceptance and formal invoice' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center p-4">
                  <div
                    className="w-10 h-10 bg-emerald-100 rounded-full flex items-center 
                                justify-center text-emerald-600 font-bold mb-3"
                  >
                    {item.step}
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <svg
                      className="w-4 h-4 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">Organised by</p>
          <p className="font-semibold text-gray-800">
            AIOCCI – African Indian Ocean Chamber of Commerce & Industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticipationForm;
