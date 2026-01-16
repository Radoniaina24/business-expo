// components/ParticipationFormWizard.tsx
'use client';

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import { ParticipationFormValues, initialValues, formSteps } from '@/types/participation';
import { Step1Contact } from '../steps/Step1Contact';
import { stepSchemas } from '../../../validation/participationSchema';
import { Step2Country } from '../steps/Step2Country';
import { Step3Profile } from '../steps/Step3Profile';
import { Step4Logistics } from '../steps/Step4Logistics';
import { Step5Confirmation } from '../steps/Step5Confirmation';
import { Stepper } from './Stepper';

const stepComponents = [
  Step1Contact,
  Step2Country,
  Step3Profile,
  Step4Logistics,
  Step5Confirmation,
];

export const ParticipationFormWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = formSteps.length;
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  const CurrentStepComponent = stepComponents[currentStep - 1];

  const handleNext = async (validateForm: any, values: ParticipationFormValues) => {
    const errors = await validateForm();
    const currentSchema = stepSchemas[currentStep - 1];

    try {
      await currentSchema.validate(values, { abortEarly: false });
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      // Validation errors will be shown by Formik
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (
    values: ParticipationFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
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
      <section className="packages">
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircleIcon className="w-14 h-14 text-emerald-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Request Submitted Successfully!
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for your interest in Africa Business Expo. Our Organising Committee will
                review your request and send you an official participation proposal within{' '}
                <strong>5 business days</strong>.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                <h3 className="font-semibold text-gray-800 mb-3">Next Steps:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
                    Check your email inbox
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
                    Review the official proposal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
                    Confirm your participation
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 
                       text-white rounded-xl hover:bg-emerald-700 transition-all
                       shadow-lg hover:shadow-xl"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 md:py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 
                        text-emerald-700 rounded-full text-sm font-medium mb-4"
          >
            <GlobeAltIcon className="w-4 h-4" />
            Africa Business Expo – Mauritius
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Participation Request
          </h1>
        </div>

        {/* Notice Banner - Only on first step */}
        {isFirstStep && (
          <div
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 
                        rounded-xl p-4 mb-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                <svg
                  className="w-5 h-5 text-blue-600"
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
              <p className="text-sm text-blue-700">
                <strong>No payment required at this stage.</strong> All participation conditions and
                fees will be communicated through official documentation.
              </p>
            </div>
          </div>
        )}

        {/* Stepper */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <Stepper steps={formSteps} currentStep={currentStep} />
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={stepSchemas[currentStep - 1]}
          onSubmit={handleSubmit}
          validateOnMount={false}
        >
          {({ isSubmitting, validateForm, values, setTouched }) => (
            <Form>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">
                <CurrentStepComponent />
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={isFirstStep}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-xl font-medium
                    transition-all duration-200
                    ${
                      isFirstStep
                        ? 'opacity-0 pointer-events-none'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                    }
                  `}
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {isLastStep ? (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r 
                             from-emerald-600 to-teal-600 text-white font-semibold 
                             rounded-xl shadow-lg hover:shadow-xl
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
                        <PaperAirplaneIcon className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNext(validateForm, values)}
                    className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r 
                             from-emerald-600 to-teal-600 text-white font-semibold 
                             rounded-xl shadow-lg hover:shadow-xl
                             transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="hidden sm:inline">Continue</span>
                    <span className="sm:hidden">Next</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 mb-1">Organised by</p>
          <p className="text-sm font-medium text-gray-600">
            AIOCCI – African Indian Ocean Chamber of Commerce & Industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticipationFormWizard;
