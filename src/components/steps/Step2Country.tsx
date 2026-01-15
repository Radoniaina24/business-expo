// components/steps/Step2Country.tsx
'use client';

import React from 'react';
import { FormInput } from '../form/FormInput';
import { FormSelect } from '../form/FormSelect';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

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

export const Step2Country: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
          <GlobeAltIcon className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Country of Origin</h2>
        <p className="text-gray-500 mt-2">Where is your organisation based?</p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <FormSelect
          name="country"
          label="Country"
          options={countries}
          placeholder="Select your country"
          required
        />
        <FormInput name="city" label="City" placeholder="Your city (optional)" />
      </div>

      <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 max-w-md mx-auto">
        <span className="text-xl">📌</span>
        <p className="text-sm text-amber-700">
          Country information is required to determine applicable participation conditions and
          logistical options.
        </p>
      </div>
    </div>
  );
};
