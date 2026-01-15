// components/form/FormRadioGroup.tsx
import { useField } from 'formik';

interface Option {
  value: string;
  label: string;
  description?: string;
}

interface FormRadioGroupProps {
  name: string;
  options: Option[];
  label?: string;
  required?: boolean;
}

export const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  options,
  label,
  required = false,
}) => {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-start gap-3 p-4 rounded-lg border cursor-pointer
              transition-all duration-200 hover:bg-gray-50
              ${
                field.value === option.value
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200'
              }
            `}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={field.value === option.value}
              onChange={() => helpers.setValue(option.value)}
              className="mt-0.5 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
            />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-700">{option.label}</span>
              {option.description && (
                <p className="text-xs text-gray-500 mt-1">{option.description}</p>
              )}
            </div>
          </label>
        ))}
      </div>
      {hasError && <p className="text-sm text-red-600">{meta.error}</p>}
    </div>
  );
};
