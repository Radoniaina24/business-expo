'use client';

import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import {
  ExpoData,
  ExpoFormData,
  VISITOR_TYPES,
  TITLES,
  INDUSTRIES,
  COUNTRIES,
} from '@/types/registration';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ExpoData | null;
  onSave: (id: string, data: Partial<ExpoFormData>) => Promise<void>;
  isLoading?: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export function EditModal({ isOpen, onClose, data, onSave, isLoading = false }: EditModalProps) {
  const [formData, setFormData] = useState<ExpoFormData | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData({
        visitorType: data.visitorType,
        title: data.title,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || '',
        country: data.country || '',
        company: data.company || '',
        position: data.position || '',
        industry: data.industry || '',
        newsletter: data.newsletter,
        terms: data.terms,
      });
      setErrors({});
      setIsDirty(false);
    }
  }, [data]);

  if (!formData || !data) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) =>
      prev
        ? {
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
          }
        : null
    );
    setIsDirty(true);

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await onSave(data._id, formData);
      onClose();
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  const handleClose = () => {
    if (isDirty) {
      if (
        window.confirm(
          'Vous avez des modifications non sauvegardées. Voulez-vous vraiment fermer ?'
        )
      ) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Modifier l'inscription"
      subtitle={`Modification des informations de ${data?.firstName} ${data?.lastName}`}
      size="xl"
      icon={<PencilSquareIcon className="w-6 h-6 text-amber-600" />}
      iconBg="bg-amber-100 dark:bg-amber-900/30"
      closeOnOverlayClick={!isDirty}
    >
      <form onSubmit={handleSubmit}>
        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* Type & Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Select
              label="Type de visiteur"
              name="visitorType"
              value={formData.visitorType}
              onChange={handleChange}
              options={VISITOR_TYPES.map((type) => ({
                value: type,
                label: type,
              }))}
              required
            />
            <Select
              label="Civilité"
              name="title"
              value={formData.title}
              onChange={handleChange}
              options={TITLES.map((title) => ({
                value: title,
                label: title,
              }))}
              required
            />
          </div>

          {/* Personal Info */}
          <div className="space-y-4 mb-6">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Informations personnelles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Prénom"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                required
              />
              <Input
                label="Nom"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
              <Input
                label="Téléphone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <Select
              label="Pays"
              name="country"
              value={formData.country}
              onChange={handleChange}
              options={COUNTRIES.map((country) => ({
                value: country,
                label: country,
              }))}
              placeholder="Sélectionner un pays"
            />
          </div>

          {/* Professional Info */}
          <div className="space-y-4 mb-6">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Informations professionnelles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Entreprise"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              <Input
                label="Poste"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </div>
            <Select
              label="Industrie"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              options={INDUSTRIES.map((industry) => ({
                value: industry,
                label: industry,
              }))}
              placeholder="Sélectionner une industrie"
            />
          </div>

          {/* Preferences */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Préférences
            </h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Newsletter
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Recevoir les actualités et offres par email
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Conditions générales
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Accepter les conditions générales d'utilisation
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-2xl">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {isDirty && (
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                Modifications non sauvegardées
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button type="button" variant="outline" onClick={handleClose} disabled={isLoading}>
              Annuler
            </Button>
            <Button type="submit" variant="primary" isLoading={isLoading} disabled={!isDirty}>
              Enregistrer
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
