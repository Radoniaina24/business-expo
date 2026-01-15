// components/form/FormCheckboxGroup.tsx
import { useField } from 'formik';

interface Option {
  value: string;
  label: string;
}

interface FormCheckboxGroupProps {
  name: string;
  options: Option[];
  label?: string;
  required?: boolean;
}

export const FormCheckboxGroup: React.FC<FormCheckboxGroupProps> = ({
  name,
  options,
  label,
  required = false,
}) => {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;

  const handleChange = (value: string) => {
    const currentValues = field.value as string[];
    if (currentValues.includes(value)) {
      helpers.setValue(currentValues.filter((v) => v !== value));
    } else {
      helpers.setValue([...currentValues, value]);
    }
  };

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center gap-3 p-3 rounded-lg border cursor-pointer
              transition-all duration-200 hover:bg-gray-50
              ${
                (field.value as string[]).includes(option.value)
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200'
              }
            `}
          >
            <input
              type="checkbox"
              checked={(field.value as string[]).includes(option.value)}
              onChange={() => handleChange(option.value)}
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {hasError && <p className="text-sm text-red-600">{meta.error}</p>}
    </div>
  );
};
