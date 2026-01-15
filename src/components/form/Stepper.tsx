// components/form/Stepper.tsx
'use client';

import React from 'react';
import {
  UserIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  TruckIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { CheckIcon as CheckIconSolid } from '@heroicons/react/24/solid';
import { Step } from '@/types/participation';

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  user: UserIcon,
  globe: GlobeAltIcon,
  briefcase: BriefcaseIcon,
  truck: TruckIcon,
  check: CheckIcon,
};

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full">
      {/* Desktop Stepper */}
      <div className="hidden md:flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon];
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`
                    relative flex items-center justify-center w-12 h-12 rounded-full
                    transition-all duration-300 
                    ${
                      isCompleted
                        ? 'bg-emerald-500 text-white'
                        : isCurrent
                          ? 'bg-emerald-100 text-emerald-600 ring-4 ring-emerald-50'
                          : 'bg-gray-100 text-gray-400'
                    }
                  `}
                >
                  {isCompleted ? (
                    <CheckIconSolid className="w-6 h-6" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`text-sm font-medium ${
                      isCurrent
                        ? 'text-emerald-600'
                        : isCompleted
                          ? 'text-gray-700'
                          : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentStep > step.id ? 'bg-emerald-500' : 'bg-gray-200'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile Stepper */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-emerald-600">
            Step {currentStep} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">{steps[currentStep - 1]?.title}</span>
        </div>
        <div className="flex gap-1">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                currentStep >= step.id ? 'bg-emerald-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
