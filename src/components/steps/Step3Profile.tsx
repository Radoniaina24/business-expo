// components/steps/Step3Profile.tsx
'use client';

import React from 'react';
import { FormInput } from '../form/FormInput';
import { FormCheckboxGroup } from '../form/FormCheckboxGroup';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

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

export const Step3Profile: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
          <BriefcaseIcon className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Participation Profile</h2>
        <p className="text-gray-500 mt-2">Tell us about your business and interests</p>
      </div>

      <div className="space-y-6">
        <FormInput
          name="businessSector"
          label="Business Sector / Products / Services"
          placeholder="e.g., Technology, Agriculture, Manufacturing, Finance..."
          required
        />

        <FormCheckboxGroup
          name="participationType"
          label="Intended Participation Type"
          options={participationTypes}
          required
        />

        <FormCheckboxGroup
          name="objectives"
          label="Objectives of Participation"
          options={objectives}
        />
      </div>
    </div>
  );
};
