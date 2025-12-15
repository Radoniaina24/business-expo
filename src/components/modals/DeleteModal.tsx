'use client';

import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../ui/Button';
import { ExpoData } from '@/types/registration';
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ExpoData | null;
  onConfirm: (id: string) => Promise<void>;
  isLoading?: boolean;
}

export function DeleteModal({
  isOpen,
  onClose,
  data,
  onConfirm,
  isLoading = false,
}: DeleteModalProps) {
  const [confirmText, setConfirmText] = useState('');

  if (!data) return null;

  const expectedText = 'SUPPRIMER';
  const isConfirmEnabled = confirmText === expectedText;

  const handleConfirm = async () => {
    if (!isConfirmEnabled) return;

    try {
      await onConfirm(data._id);
      onClose();
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleClose = () => {
    setConfirmText('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Supprimer l'inscription"
      subtitle="Cette action est irréversible"
      size="md"
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-red-600" />}
      iconBg="bg-red-100 dark:bg-red-900/30"
    >
      {/* Content */}
      <div className="p-6">
        {/* Warning Message */}
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl mb-6">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Attention !</strong> Vous êtes sur le point de supprimer définitivement cette
            inscription. Cette action ne peut pas être annulée.
          </p>
        </div>

        {/* User Info Summary */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl mb-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-bold">
              {data.firstName?.[0]?.toUpperCase()}
              {data.lastName?.[0]?.toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {data.title} {data.firstName} {data.lastName}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{data.email}</p>
              {data.company && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {data.company}
                  {data.position && ` • ${data.position}`}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Confirmation Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Pour confirmer, tapez{' '}
            <span className="font-mono font-bold text-red-600 bg-red-50 dark:bg-red-900/30 px-1.5 py-0.5 rounded">
              {expectedText}
            </span>{' '}
            ci-dessous :
          </label>
          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
            placeholder="Tapez SUPPRIMER"
            className="block w-full px-3 py-2.5 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            autoComplete="off"
            disabled={isLoading}
          />
          {confirmText && !isConfirmEnabled && (
            <p className="text-sm text-red-600 dark:text-red-400">Le texte ne correspond pas</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-2xl">
        <Button variant="outline" onClick={handleClose} disabled={isLoading}>
          Annuler
        </Button>
        <Button
          variant="danger"
          onClick={handleConfirm}
          isLoading={isLoading}
          disabled={!isConfirmEnabled}
          leftIcon={<TrashIcon className="w-4 h-4" />}
        >
          Supprimer définitivement
        </Button>
      </div>
    </Modal>
  );
}
