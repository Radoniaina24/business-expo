// components/steps/Step4Logistics.tsx
'use client';

import React from 'react';
import { Field, useFormikContext } from 'formik';
import { FormRadioGroup } from '../form/FormRadioGroup';
import { TruckIcon, UsersIcon } from '@heroicons/react/24/outline';
import { ParticipationFormValues } from '@/types/participation';

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

const representativesOptions = ['1', '2', '3', '4+'];

export const Step4Logistics: React.FC = () => {
  const { values, errors, touched } = useFormikContext<ParticipationFormValues>();

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
          <TruckIcon className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Logistics & Team</h2>
        <p className="text-gray-500 mt-2">Choose your package and team size</p>
      </div>

      {/* Logistical Package */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <TruckIcon className="w-5 h-5 text-emerald-600" />
          Logistical Preferences
        </h3>
        <FormRadioGroup name="logisticalPackage" options={logisticalPackages} required />
        <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
          <span className="text-xl">📌</span>
          <p className="text-sm text-amber-700">
            Logistical arrangements and costs vary by country and will be detailed in the official
            proposal.
          </p>
        </div>
      </div>

      {/* Number of Representatives */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <UsersIcon className="w-5 h-5 text-emerald-600" />
          Number of Representatives <span className="text-red-500">*</span>
        </h3>
        <div className="grid grid-cols-4 gap-3">
          {representativesOptions.map((option) => (
            <label key={option} className="relative cursor-pointer">
              <Field type="radio" name="representatives" value={option} className="peer sr-only" />
              <div
                className="flex items-center justify-center p-4 rounded-xl border-2 
                         transition-all duration-200
                         peer-checked:border-emerald-500 peer-checked:bg-emerald-50
                         peer-checked:shadow-md
                         border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              >
                <span className="text-2xl font-bold text-gray-800">{option}</span>
              </div>
            </label>
          ))}
        </div>
        {touched.representatives && errors.representatives && (
          <p className="text-sm text-red-600">{errors.representatives}</p>
        )}
      </div>
    </div>
  );
};
