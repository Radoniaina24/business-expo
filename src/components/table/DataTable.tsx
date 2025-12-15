'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { ExpoData, ExpoFormData, ExpoQueryParams, SortConfig } from '@/types/registration';
import {
  useGetAllExposQuery,
  useUpdateExpoMutation,
  useDeleteExpoMutation,
} from '@/redux/api/expoApi';
import { useModal } from '@/hooks/useModal';
import { useDebounce } from '@/hooks/useDebounce';
import { useToast } from '@/context/ToastContext';
import { SearchBar } from './SearchBar';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { MobileCard } from './MobileCard';
import { Pagination } from './Pagination';
import { TableSkeleton } from './TableSkeleton';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';
import { ViewModal } from '../modals/ViewModal';
import { EditModal } from '../modals/EditModal';
import { DeleteModal } from '../modals/DeleteModal';
import {
  ArrowDownTrayIcon,
  PlusIcon,
  FunnelIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

interface DataTableProps {
  title?: string;
}

const columns = [
  { key: 'firstName' as const, label: 'Nom', sortable: true },
  { key: 'visitorType' as const, label: 'Type', sortable: true },
  { key: 'company' as const, label: 'Entreprise', sortable: true },
  {
    key: 'industry' as const,
    label: 'Industrie',
    sortable: true,
    className: 'hidden lg:table-cell',
  },
  {
    key: 'country' as const,
    label: 'Pays',
    sortable: true,
    className: 'hidden xl:table-cell',
  },
  {
    key: 'newsletter' as const,
    label: 'Newsletter',
    sortable: true,
    className: 'hidden xl:table-cell',
  },
  {
    key: 'createdAt' as const,
    label: 'Date',
    sortable: true,
    className: 'hidden 2xl:table-cell',
  },
];

export function DataTable({ title = 'Inscriptions' }: DataTableProps) {
  const { addToast } = useToast();

  // Query params state
  const [queryParams, setQueryParams] = useState<ExpoQueryParams>({
    page: 1,
    limit: 10,
    search: '',
    sortBy: 'createdAt',
    sortOrder: 'desc',
  });

  // Local search state (before debounce)
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearch = useDebounce(searchInput, 500);

  // Update search in query params when debounced value changes
  React.useEffect(() => {
    setQueryParams((prev) => ({
      ...prev,
      search: debouncedSearch,
      page: 1, // Reset to first page on search
    }));
  }, [debouncedSearch]);

  // Sort config for UI
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'createdAt',
    direction: 'desc',
  });

  // RTK Query hooks
  const {
    data: response,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetAllExposQuery(queryParams);

  const [updateExpo, { isLoading: isUpdating }] = useUpdateExpoMutation();
  const [deleteExpo, { isLoading: isDeleting }] = useDeleteExpoMutation();

  // Modal states
  const viewModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  // Computed values
  const expos = response?.expos || [];
  const totalItems = response?.totalExpos || 0;
  const totalPages = response?.totalPages || 1;
  const currentPage = response?.currentPage || 1;

  // Handlers
  const handleSort = useCallback((key: keyof ExpoData) => {
    setSortConfig((prev) => {
      let direction: 'asc' | 'desc' | null = 'asc';
      if (prev.key === key) {
        if (prev.direction === 'asc') direction = 'desc';
        else if (prev.direction === 'desc') direction = null;
      }

      // Update query params
      setQueryParams((prevParams) => ({
        ...prevParams,
        sortBy: direction ? key : 'createdAt',
        sortOrder: direction || 'desc',
        page: 1,
      }));

      return { key: direction ? key : null, direction };
    });
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setQueryParams((prev) => ({ ...prev, page }));
  }, []);

  const handleItemsPerPageChange = useCallback((limit: number) => {
    setQueryParams((prev) => ({ ...prev, limit, page: 1 }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setSearchInput('');
    setSortConfig({ key: 'createdAt', direction: 'desc' });
    setQueryParams({
      page: 1,
      limit: 10,
      search: '',
      sortBy: 'createdAt',
      sortOrder: 'desc',
    });
  }, []);

  // View handler
  const handleView = useCallback(
    (id: string) => {
      const item = expos.find((d) => d._id === id);
      if (item) {
        viewModal.openModal('view', item);
      }
    },
    [expos, viewModal]
  );

  // Edit handlers
  const handleEdit = useCallback(
    (id: string) => {
      const item = expos.find((d) => d._id === id);
      if (item) {
        editModal.openModal('edit', item);
      }
    },
    [expos, editModal]
  );

  const handleEditFromView = useCallback(
    (item: ExpoData) => {
      editModal.openModal('edit', item);
    },
    [editModal]
  );

  const handleSaveEdit = useCallback(
    async (id: string, data: Partial<ExpoFormData>) => {
      try {
        await updateExpo({ id, data }).unwrap();
        addToast({
          type: 'success',
          title: 'Modification enregistrée',
          message: `Les informations ont été mises à jour avec succès.`,
        });
      } catch (err: any) {
        addToast({
          type: 'error',
          title: 'Erreur',
          message: err?.data?.message || 'Une erreur est survenue lors de la modification.',
        });
        throw err;
      }
    },
    [updateExpo, addToast]
  );

  // Delete handlers
  const handleDelete = useCallback(
    (id: string) => {
      const item = expos.find((d) => d._id === id);
      if (item) {
        deleteModal.openModal('delete', item);
      }
    },
    [expos, deleteModal]
  );

  const handleConfirmDelete = useCallback(
    async (id: string) => {
      try {
        await deleteExpo(id).unwrap();
        addToast({
          type: 'success',
          title: 'Inscription supprimée',
          message: "L'inscription a été supprimée avec succès.",
        });
      } catch (err: any) {
        addToast({
          type: 'error',
          title: 'Erreur',
          message: err?.data?.message || 'Une erreur est survenue lors de la suppression.',
        });
        throw err;
      }
    },
    [deleteExpo, addToast]
  );

  // Export handler
  const handleExport = useCallback(() => {
    if (expos.length === 0) {
      addToast({
        type: 'warning',
        title: 'Aucune donnée',
        message: "Il n'y a aucune donnée à exporter.",
      });
      return;
    }

    const csvContent = [
      // Headers
      [
        'ID',
        'Type',
        'Civilité',
        'Prénom',
        'Nom',
        'Email',
        'Téléphone',
        'Pays',
        'Entreprise',
        'Poste',
        'Industrie',
        'Newsletter',
        'Date',
      ].join(','),
      // Data
      ...expos.map((item) =>
        [
          item._id,
          item.visitorType,
          item.title,
          item.firstName,
          item.lastName,
          item.email,
          item.phone || '',
          item.country || '',
          item.company || '',
          item.position || '',
          item.industry || '',
          item.newsletter ? 'Oui' : 'Non',
          new Date(item.createdAt).toLocaleDateString('fr-FR'),
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `inscriptions_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    addToast({
      type: 'success',
      title: 'Export réussi',
      message: `${expos.length} inscriptions exportées au format CSV.`,
    });
  }, [expos, addToast]);

  // Render loading state
  if (isLoading) {
    return (
      <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32" />
          </div>
        </div>
        <TableSkeleton rows={queryParams.limit} />
      </div>
    );
  }

  // Render error state
  if (isError) {
    return (
      <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <ErrorState
          title="Erreur de chargement"
          message={(error as any)?.data?.message || 'Impossible de charger les inscriptions.'}
          onRetry={refetch}
        />
      </div>
    );
  }

  return (
    <>
      <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
                {isFetching && <ArrowPathIcon className="w-5 h-5 text-blue-500 animate-spin" />}
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {totalItems} enregistrement{totalItems > 1 ? 's' : ''} au total
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExport}
                disabled={expos.length === 0}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Exporter</span>
              </button>
              {/* <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <PlusIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Ajouter</span>
              </button> */}
            </div>
          </div>

          {/* Search & Filters */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 max-w-md">
              <SearchBar
                value={searchInput}
                onChange={setSearchInput}
                placeholder="Rechercher par nom, email, entreprise..."
              />
            </div>
            {/* <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600 transition-colors">
              <FunnelIcon className="w-4 h-4" />
              <span>Filtres</span>
            </button> */}
          </div>
        </div>

        {/* Content */}
        {expos.length === 0 ? (
          <EmptyState isSearch={!!debouncedSearch} onReset={handleResetFilters} />
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <TableHeader columns={columns} sortConfig={sortConfig} onSort={handleSort} />
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {expos.map((item) => (
                    <TableRow
                      key={item._id}
                      data={item}
                      onView={handleView}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-4">
              {expos.map((item) => (
                <MobileCard
                  key={item._id}
                  data={item}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsPerPage={queryParams.limit || 10}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
              onFirstPage={() => handlePageChange(1)}
              onLastPage={() => handlePageChange(totalPages)}
              onNextPage={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              onPreviousPage={() => handlePageChange(Math.max(currentPage - 1, 1))}
            />
          </>
        )}
      </div>

      {/* Modals */}
      <ViewModal
        isOpen={viewModal.modalState.type === 'view'}
        onClose={viewModal.closeModal}
        data={viewModal.modalState.data}
        onEdit={handleEditFromView}
      />

      <EditModal
        isOpen={editModal.modalState.type === 'edit'}
        onClose={editModal.closeModal}
        data={editModal.modalState.data}
        onSave={handleSaveEdit}
        isLoading={isUpdating}
      />

      <DeleteModal
        isOpen={deleteModal.modalState.type === 'delete'}
        onClose={deleteModal.closeModal}
        data={deleteModal.modalState.data}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
      />
    </>
  );
}
