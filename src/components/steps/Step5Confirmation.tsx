// components/steps/Step5Confirmation.tsx
'use client';

import React from 'react';
import { Field, useFormikContext } from 'formik';
import { FormTextarea } from '../form/FormTextarea';
import { CheckCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { ParticipationFormValues } from '@/types/participation';

export const Step5Confirmation: React.FC = () => {
  const { values, errors, touched } = useFormikContext<ParticipationFormValues>();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
          <CheckCircleIcon className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Final Step</h2>
        <p className="text-gray-500 mt-2">Review and confirm your submission</p>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          <DocumentTextIcon className="w-5 h-5 text-emerald-600" />
          Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Name:</span>
            <span className="ml-2 text-gray-800 font-medium">{values.fullName}</span>
          </div>
          <div>
            <span className="text-gray-500">Company:</span>
            <span className="ml-2 text-gray-800 font-medium">{values.company}</span>
          </div>
          <div>
            <span className="text-gray-500">Email:</span>
            <span className="ml-2 text-gray-800 font-medium">{values.email}</span>
          </div>
          <div>
            <span className="text-gray-500">Country:</span>
            <span className="ml-2 text-gray-800 font-medium capitalize">
              {values.country?.replace('_', ' ')}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Package:</span>
            <span className="ml-2 text-gray-800 font-medium capitalize">
              {values.logisticalPackage}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Representatives:</span>
            <span className="ml-2 text-gray-800 font-medium">{values.representatives}</span>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <FormTextarea
        name="additionalInfo"
        label="Additional Information (Optional)"
        placeholder="Any additional comments, questions, or specific requirements..."
        rows={4}
      />

      {/* Confirmation Checkbox */}
      <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
        <label className="flex items-start gap-4 cursor-pointer">
          <Field
            type="checkbox"
            name="confirmation"
            className="mt-1 h-5 w-5 text-emerald-600 focus:ring-emerald-500 
                     border-gray-300 rounded"
          />
          <span className="text-sm text-gray-700">
            I confirm that the information provided is accurate and agree to be contacted by the
            Organising Committee of Africa Business Expo regarding my participation.
          </span>
        </label>
        {touched.confirmation && errors.confirmation && (
          <p className="text-sm text-red-600 mt-2 ml-9">{errors.confirmation}</p>
        )}
      </div>

      {/* Process Info */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-3">What happens next?</h4>
        <ul className="space-y-2 text-sm text-blue-700">
          <li className="flex items-start gap-2">
            <span className="font-bold">1.</span>
            Your request will be reviewed by the AIOCCI Organising Committee
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">2.</span>
            You will receive an official participation proposal by email
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">3.</span>
            Confirmation only after written acceptance and formal invoice
          </li>
        </ul>
      </div>
    </div>
  );
};
