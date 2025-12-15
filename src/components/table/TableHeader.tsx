'use client';

import React from 'react';
import { ChevronUpIcon, ChevronDownIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { ExpoData, SortConfig, SortDirection } from '@/types/registration';

// Type pour définir une colonne
export interface Column {
  key: keyof ExpoData;
  label: string;
  sortable?: boolean;
  className?: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

interface TableHeaderProps {
  columns: Column[];
  sortConfig: SortConfig;
  onSort: (key: keyof ExpoData) => void;
  showActions?: boolean;
  actionsLabel?: string;
  isLoading?: boolean;
}

export function TableHeader({
  columns,
  sortConfig,
  onSort,
  showActions = true,
  actionsLabel = 'Actions',
  isLoading = false,
}: TableHeaderProps) {
  // Fonction pour obtenir l'icône de tri appropriée
  const getSortIcon = (key: keyof ExpoData, isSortable: boolean) => {
    if (!isSortable) return null;

    const isActive = sortConfig.key === key;
    const direction = sortConfig.direction;

    if (!isActive || !direction) {
      return (
        <ChevronUpDownIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
      );
    }

    if (direction === 'asc') {
      return <ChevronUpIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }

    return <ChevronDownIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
  };

  // Fonction pour obtenir le prochain état de tri (pour l'aria-label)
  const getNextSortDirection = (key: keyof ExpoData): string => {
    if (sortConfig.key !== key) return 'ascendant';
    if (sortConfig.direction === 'asc') return 'descendant';
    if (sortConfig.direction === 'desc') return 'aucun';
    return 'ascendant';
  };

  // Fonction pour obtenir l'alignement
  const getAlignmentClass = (align?: 'left' | 'center' | 'right'): string => {
    switch (align) {
      case 'center':
        return 'text-center justify-center';
      case 'right':
        return 'text-right justify-end';
      default:
        return 'text-left justify-start';
    }
  };

  return (
    <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
      <tr>
        {columns.map((column) => {
          const isActive = sortConfig.key === column.key;
          const isSortable = column.sortable !== false;

          return (
            <th
              key={column.key}
              scope="col"
              className={`
                px-4 py-4 text-xs font-semibold uppercase tracking-wider
                ${column.className || ''}
                ${column.width || ''}
                ${isSortable ? 'cursor-pointer select-none' : ''}
                ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}
              `}
            >
              {isSortable ? (
                <button
                  onClick={() => !isLoading && onSort(column.key)}
                  disabled={isLoading}
                  className={`
                    group inline-flex items-center gap-1.5 
                    hover:text-gray-900 dark:hover:text-white 
                    transition-colors duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${getAlignmentClass(column.align)}
                  `}
                  aria-label={`Trier par ${column.label} (${getNextSortDirection(column.key)})`}
                >
                  <span>{column.label}</span>
                  <span className="flex-shrink-0">{getSortIcon(column.key, true)}</span>
                </button>
              ) : (
                <span className={`inline-flex items-center ${getAlignmentClass(column.align)}`}>
                  {column.label}
                </span>
              )}
            </th>
          );
        })}

        {/* Colonne Actions */}
        {showActions && (
          <th
            scope="col"
            className="px-4 py-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider text-right"
          >
            <span className="sr-only">{actionsLabel}</span>
            <span aria-hidden="true">{actionsLabel}</span>
          </th>
        )}
      </tr>
    </thead>
  );
}
