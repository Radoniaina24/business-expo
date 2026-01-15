// components/form/FormSelect.tsx
import { useField } from 'formik';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  name: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  options,
  placeholder = 'Select an option',
  required = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="space-y-1">
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          {...field}
          {...props}
          id={props.name}
          className={`
            w-full px-4 py-3 rounded-lg border appearance-none
            transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0
            ${
              hasError
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50'
                : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200 bg-white'
            }
            ${!field.value && 'text-gray-400'}
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
      {hasError && <p className="text-sm text-red-600">{meta.error}</p>}
    </div>
  );
};
