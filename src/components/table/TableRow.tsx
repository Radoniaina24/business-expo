'use client';

import React from 'react';

import { Badge } from '../ui/Badge';
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ExpoData } from '@/types/registration';

interface TableRowProps {
  data: ExpoData;
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const getVisitorTypeBadge = (type: string) => {
  const variants: Record<string, 'success' | 'info' | 'warning' | 'danger' | 'default'> = {
    Professionnel: 'success',
    Entreprise: 'info',
    Étudiant: 'warning',
    Presse: 'danger',
    Exposant: 'default',
  };
  return variants[type] || 'default';
};

export function TableRow({ data, onView, onEdit, onDelete }: TableRowProps) {
  const formattedDate = new Date(data.createdAt).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
      {/* Nom complet */}
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-red-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
              {data.firstName?.[0]?.toUpperCase()}
              {data.lastName?.[0]?.toUpperCase()}
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {data.title} {data.firstName} {data.lastName}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{data.email}</div>
          </div>
        </div>
      </td>

      {/* Type de visiteur */}
      <td className="px-4 py-4 whitespace-nowrap">
        <Badge variant={getVisitorTypeBadge(data.visitorType)}>{data.visitorType}</Badge>
      </td>

      {/* Entreprise */}
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-white">{data.company || '-'}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{data.position || '-'}</div>
      </td>

      {/* Industrie */}
      <td className="px-4 py-4 whitespace-nowrap hidden lg:table-cell">
        <span className="text-sm text-gray-900 dark:text-white">{data.industry || '-'}</span>
      </td>

      {/* Pays */}
      <td className="px-4 py-4 whitespace-nowrap hidden xl:table-cell">
        <span className="text-sm text-gray-900 dark:text-white">{data.country || '-'}</span>
      </td>

      {/* Newsletter */}
      <td className="px-4 py-4 whitespace-nowrap hidden xl:table-cell">
        <Badge variant={data.newsletter ? 'success' : 'default'}>
          {data.newsletter ? 'Oui' : 'Non'}
        </Badge>
      </td>

      {/* Date */}
      <td className="px-4 py-4 whitespace-nowrap hidden 2xl:table-cell">
        <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
      </td>

      {/* Actions */}
      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onView?.(data._id)}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
            title="Voir les détails"
          >
            <EyeIcon className="w-5 h-5" />
          </button>
          {/* <button
            onClick={() => onEdit?.(data._id)}
            className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
            title="Modifier"
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button> */}
          <button
            onClick={() => onDelete?.(data._id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            title="Supprimer"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
}
