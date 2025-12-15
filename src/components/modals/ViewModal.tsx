'use client';

import React from 'react';
import { Modal } from './Modal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  TagIcon,
  PencilSquareIcon,
  PrinterIcon,
} from '@heroicons/react/24/outline';
import { ExpoData } from '@/types/registration';

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ExpoData | null;
  onEdit?: (data: ExpoData) => void;
}

const getVisitorTypeBadge = (type: string) => {
  const variants: Record<string, 'success' | 'info' | 'warning' | 'danger'> = {
    Professionnel: 'success',
    Entreprise: 'info',
    Étudiant: 'warning',
    Presse: 'danger',
  };
  return variants[type] || 'default';
};

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-sm font-medium text-gray-900 dark:text-white mt-0.5">{value || '-'}</p>
      </div>
    </div>
  );
}

export function ViewModal({ isOpen, onClose, data, onEdit }: ViewModalProps) {
  if (!data) return null;

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(data.createdAt).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Détails de l'inscription"
      subtitle={`ID: ${data._id}`}
      size="lg"
      icon={<UserIcon className="w-6 h-6 text-blue-600" />}
      iconBg="bg-blue-100 dark:bg-blue-900/30"
    >
      {/* Content */}
      <div className="p-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl mb-6">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            {data.firstName?.[0]?.toUpperCase()}
            {data.lastName?.[0]?.toUpperCase()}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {data.title} {data.firstName} {data.lastName}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant={getVisitorTypeBadge(data.visitorType)} size="md">
                {data.visitorType}
              </Badge>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                • Inscrit le {formattedDate}
              </span>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
          {/* Left Column */}
          <div className="space-y-1 md:pr-8">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Informations personnelles
            </h4>
            <InfoRow
              icon={<EnvelopeIcon className="w-5 h-5" />}
              label="Email"
              value={
                <a
                  href={`mailto:${data.email}`}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  {data.email}
                </a>
              }
            />
            <InfoRow
              icon={<PhoneIcon className="w-5 h-5" />}
              label="Téléphone"
              value={
                data.phone ? (
                  <a
                    href={`tel:${data.phone}`}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    {data.phone}
                  </a>
                ) : (
                  '-'
                )
              }
            />
            <InfoRow icon={<MapPinIcon className="w-5 h-5" />} label="Pays" value={data.country} />
          </div>

          {/* Right Column */}
          <div className="space-y-1 md:pl-8 pt-4 md:pt-0">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Informations professionnelles
            </h4>
            <InfoRow
              icon={<BuildingOfficeIcon className="w-5 h-5" />}
              label="Entreprise"
              value={data.company}
            />
            <InfoRow
              icon={<BriefcaseIcon className="w-5 h-5" />}
              label="Poste"
              value={data.position}
            />
            <InfoRow
              icon={<TagIcon className="w-5 h-5" />}
              label="Industrie"
              value={data.industry ? <Badge variant="info">{data.industry}</Badge> : '-'}
            />
          </div>
        </div>

        {/* Preferences */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Préférences
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className={`flex items-center gap-3 p-4 rounded-xl ${
                data.newsletter
                  ? 'bg-green-50 dark:bg-green-900/20'
                  : 'bg-gray-50 dark:bg-gray-700/50'
              }`}
            >
              {data.newsletter ? (
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
              ) : (
                <XCircleIcon className="w-6 h-6 text-gray-400" />
              )}
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Newsletter</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {data.newsletter ? 'Inscrit à la newsletter' : 'Non inscrit'}
                </p>
              </div>
            </div>
            <div
              className={`flex items-center gap-3 p-4 rounded-xl ${
                data.terms ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
              }`}
            >
              {data.terms ? (
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
              ) : (
                <XCircleIcon className="w-6 h-6 text-red-500" />
              )}
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Conditions générales
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {data.terms ? 'Acceptées' : 'Non acceptées'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="w-4 h-4" />
            <span>Créé le {formattedDate}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-4 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-2xl">
        {/* <Button
          variant="ghost"
          onClick={handlePrint}
          leftIcon={<PrinterIcon className="w-4 h-4" />}
        >
          Imprimer
        </Button> */}
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
          {/* {onEdit && (
            <Button
              variant="primary"
              onClick={() => {
                onClose();
                onEdit(data);
              }}
              leftIcon={<PencilSquareIcon className="w-4 h-4" />}
            >
              Modifier
            </Button>
          )} */}
        </div>
      </div>
    </Modal>
  );
}
