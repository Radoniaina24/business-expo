// components/form/FormTextarea.tsx
import { useField } from 'formik';

interface FormTextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({ label, rows = 4, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="space-y-1">
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        id={props.name}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-lg border transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-0 resize-none
          ${
            hasError
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50'
              : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200 bg-white'
          }
          placeholder:text-gray-400
        `}
      />
      {hasError && <p className="text-sm text-red-600">{meta.error}</p>}
    </div>
  );
};
