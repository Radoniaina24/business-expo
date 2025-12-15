'use client';

import { DataTable } from '@/components/table/DataTable';
import { useGetAllExposQuery } from '@/redux/api/expoApi';

export default function Home() {
  // Optionnel: récupérer les stats pour le dashboard
  const { data } = useGetAllExposQuery({ limit: 1000 });
  // console.log(data);
  const stats = {
    total: data?.totalExpos || 0,
    professionals: data?.expos?.filter((e) => e.visitorType === 'Professionnel').length || 0,
    students: data?.expos?.filter((e) => e.visitorType === 'Étudiant').length || 0,
    newsletter: data?.expos?.filter((e) => e.newsletter).length || 0,
  };

  return (
    <main className="min-h-screen  dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Gestion des Inscriptions
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Gérez les inscriptions des visiteurs à votre événement
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Inscriptions
            </div>
            <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {stats.total}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Professionnels
            </div>
            <div className="mt-2 text-3xl font-bold text-green-600">{stats.professionals}</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Étudiants</div>
            <div className="mt-2 text-3xl font-bold text-blue-600">{stats.students}</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Newsletter</div>
            <div className="mt-2 text-3xl font-bold text-purple-600">{stats.newsletter}</div>
          </div>
        </div>

        {/* Table */}
        <DataTable title="Liste des Inscriptions" />
      </div>
    </main>
  );
}
