// components/form/SectionCard.tsx
import React from 'react';

interface SectionCardProps {
  title: string;
  icon?: React.ReactNode;
  note?: string;
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, icon, note, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {icon && <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">{icon}</div>}
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {children}
        {note && (
          <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
            <span className="text-amber-500">📌</span>
            <p className="text-sm text-amber-700">{note}</p>
          </div>
        )}
      </div>
    </div>
  );
};
