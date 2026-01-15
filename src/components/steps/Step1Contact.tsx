// components/steps/Step1Contact.tsx
'use client';

import React from 'react';
import { FormInput } from '../form/FormInput';
import { UserIcon, EnvelopeIcon, PhoneIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export const Step1Contact: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
          <UserIcon className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Contact Details</h2>
        <p className="text-gray-500 mt-2">Please provide your professional contact information</p>
      </div>

      <div className="space-y-4">
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
      </div>
    </div>
  );
};
