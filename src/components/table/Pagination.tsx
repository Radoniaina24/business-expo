'use client';

import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (count: number) => void;
  onFirstPage: () => void;
  onLastPage: () => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
  isLoading?: boolean;
  pageSizeOptions?: number[];
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  onFirstPage,
  onLastPage,
  onNextPage,
  onPreviousPage,
  isLoading = false,
  pageSizeOptions = [5, 10, 20, 50, 100],
}: PaginationProps) {
  // Calcul des éléments affichés
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Générer les numéros de page à afficher
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Si peu de pages, toutes les afficher
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Toujours afficher la première page
    pages.push(1);

    // Calculer les pages autour de la page actuelle
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    // Ajuster si on est au début
    if (currentPage <= 3) {
      endPage = Math.min(4, totalPages - 1);
    }

    // Ajuster si on est à la fin
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 3);
    }

    // Ajouter ellipsis avant si nécessaire
    if (startPage > 2) {
      pages.push('...');
    }

    // Ajouter les pages du milieu
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Ajouter ellipsis après si nécessaire
    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    // Toujours afficher la dernière page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  // Désactiver les contrôles pendant le chargement ou si pas de données
  const isDisabled = isLoading || totalItems === 0;
  const canGoPrevious = currentPage > 1 && !isDisabled;
  const canGoNext = currentPage < totalPages && !isDisabled;

  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      {/* Mobile Layout */}
      <div className="flex flex-col sm:hidden gap-4">
        {/* Info */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {totalItems === 0 ? (
              'Aucun résultat'
            ) : (
              <>
                <span className="font-medium text-gray-900 dark:text-white">
                  {startItem}-{endItem}
                </span>{' '}
                sur <span className="font-medium text-gray-900 dark:text-white">{totalItems}</span>
              </>
            )}
          </span>

          {/* Items per page - Mobile */}
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            disabled={isDisabled}
            className="px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Navigation Mobile */}
        <div className="flex items-center justify-between">
          <button
            onClick={onPreviousPage}
            disabled={!canGoPrevious}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            Précédent
          </button>

          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Page {currentPage} / {totalPages || 1}
          </span>

          <button
            onClick={onNextPage}
            disabled={!canGoNext}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Suivant
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex items-center justify-between">
        {/* Left: Info & Items per page */}
        <div className="flex items-center gap-6">
          {/* Results info */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {totalItems === 0 ? (
              'Aucun résultat'
            ) : (
              <>
                Affichage{' '}
                <span className="font-medium text-gray-900 dark:text-white">{startItem}</span> à{' '}
                <span className="font-medium text-gray-900 dark:text-white">{endItem}</span> sur{' '}
                <span className="font-medium text-gray-900 dark:text-white">{totalItems}</span>{' '}
                résultat{totalItems > 1 ? 's' : ''}
              </>
            )}
          </p>

          {/* Items per page selector */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="itemsPerPage"
              className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap"
            >
              Lignes par page :
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              disabled={isDisabled}
              className="px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right: Navigation */}
        <nav className="flex items-center gap-1" aria-label="Pagination">
          {/* First page */}
          <button
            onClick={onFirstPage}
            disabled={!canGoPrevious}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors"
            title="Première page"
            aria-label="Première page"
          >
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          </button>

          {/* Previous page */}
          <button
            onClick={onPreviousPage}
            disabled={!canGoPrevious}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors"
            title="Page précédente"
            aria-label="Page précédente"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* Page numbers */}
          <div className="flex items-center gap-1 mx-2">
            {getPageNumbers().map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <span className="px-2 py-1 text-gray-400 dark:text-gray-500 select-none">⋯</span>
                ) : (
                  <button
                    onClick={() => onPageChange(page as number)}
                    disabled={isDisabled}
                    className={`
                      min-w-[40px] px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                      ${
                        currentPage === page
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Next page */}
          <button
            onClick={onNextPage}
            disabled={!canGoNext}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors"
            title="Page suivante"
            aria-label="Page suivante"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Last page */}
          <button
            onClick={onLastPage}
            disabled={!canGoNext}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors"
            title="Dernière page"
            aria-label="Dernière page"
          >
            <ChevronDoubleRightIcon className="w-5 h-5" />
          </button>
        </nav>
      </div>

      {/* Optional: Go to page input (for large datasets) */}
      {totalPages > 10 && (
        <div className="hidden lg:flex items-center justify-center pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Aller à la page :</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value, 10);
                if (page >= 1 && page <= totalPages) {
                  onPageChange(page);
                }
              }}
              disabled={isDisabled}
              className="w-16 px-2 py-1.5 text-sm text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">sur {totalPages}</span>
          </div>
        </div>
      )}
    </div>
  );
}
