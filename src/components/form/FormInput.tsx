// components/form/FormInput.tsx
import { useField } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({ label, required = false, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="space-y-1">
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          {...field}
          {...props}
          id={props.name}
          className={`
            w-full px-4 py-3 rounded-lg border transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-0
            ${
              hasError
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50'
                : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200 bg-white'
            }
            placeholder:text-gray-400
          `}
        />
        {hasError && (
          <ExclamationCircleIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
        )}
      </div>
      {hasError && <p className="text-sm text-red-600 flex items-center gap-1">{meta.error}</p>}
    </div>
  );
};
