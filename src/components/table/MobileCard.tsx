'use client';

import React from 'react';

import { Badge } from '../ui/Badge';
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { ExpoData } from '@/types/registration';

interface MobileCardProps {
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

export function MobileCard({ data, onView, onEdit, onDelete }: MobileCardProps) {
  const formattedDate = new Date(data.createdAt).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 space-y-4">
      {/* En-tête */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-sm">
            {data.firstName?.[0]?.toUpperCase()}
            {data.lastName?.[0]?.toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {data.title} {data.firstName} {data.lastName}
            </h3>
            <Badge variant={getVisitorTypeBadge(data.visitorType)} size="sm">
              {data.visitorType}
            </Badge>
          </div>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">{formattedDate}</span>
      </div>

      {/* Informations */}
      <div className="grid grid-cols-1 gap-2 text-sm">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <EnvelopeIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
          <a
            href={`mailto:${data.email}`}
            className="truncate hover:text-blue-600 dark:hover:text-blue-400"
          >
            {data.email}
          </a>
        </div>
        {data.phone && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <PhoneIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
            <a href={`tel:${data.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {data.phone}
            </a>
          </div>
        )}
        {data.company && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <BuildingOfficeIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
            <span>
              {data.company}
              {data.position && ` • ${data.position}`}
            </span>
          </div>
        )}
        {data.country && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPinIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
            <span>{data.country}</span>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {data.industry && (
          <Badge variant="info" size="sm">
            {data.industry}
          </Badge>
        )}
        {data.newsletter && (
          <Badge variant="success" size="sm">
            Newsletter
          </Badge>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={() => onView?.(data._id)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
        >
          <EyeIcon className="w-4 h-4" />
          <span>Voir</span>
        </button>
        {/* <button
          onClick={() => onEdit?.(data._id)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
        >
          <PencilSquareIcon className="w-4 h-4" />
          <span>Modifier</span>
        </button> */}
        <button
          onClick={() => onDelete?.(data._id)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          <TrashIcon className="w-4 h-4" />
          <span>Supprimer</span>
        </button>
      </div>
    </div>
  );
}
