import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Prevalence vs Incidence */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Prévalence vs Incidence</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-indigo-900 bg-indigo-50 p-2 rounded">Prévalence (P)</h4>
            <p className="text-xs text-gray-700">Mesure l'état de santé à un instant donné (le stock).</p>
            <ul className="text-[10px] text-gray-600 space-y-1 list-disc list-inside">
              <li>Étude transversale.</li>
              <li>Estime la probabilité d'être atteint.</li>
              <li>Utile pour la planification des services de santé.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-green-900 bg-green-50 p-2 rounded">Incidence (I)</h4>
            <p className="text-xs text-gray-700">Mesure l'apparition de nouveaux cas (le flux).</p>
            <ul className="text-[10px] text-gray-600 space-y-1 list-disc list-inside">
              <li>Étude longitudinale.</li>
              <li>Mesure le risque (IC) ou la vitesse (TI).</li>
              <li>Nécessite un suivi dans le temps.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Types of Cohorts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Types de Cohortes</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Cohorte Fermée ou Stable</h4>
            <p className="text-xs text-gray-600">Le nombre de sujets est stable pendant la période de l'étude. Pas de nouveaux entrants.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Cohorte Dynamique</h4>
            <p className="text-xs text-gray-600">Le nombre de sujets change par renouvellement (entrées et sorties/guérisons).</p>
          </div>
        </div>
      </div>

      {/* Interpretation of Prevalence Ratio */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Interprétation du Rapport de Prévalence (RP)</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 bg-gray-50 border rounded text-center">
            <div className="font-bold text-gray-700">RP = 1</div>
            <div className="text-[9px] text-gray-500">Pas de lien</div>
          </div>
          <div className="p-2 bg-red-50 border border-red-100 rounded text-center">
            <div className="font-bold text-red-700">RP &gt; 1</div>
            <div className="text-[9px] text-red-500">Lien positif (Facteur de risque)</div>
          </div>
          <div className="p-2 bg-green-50 border border-green-100 rounded text-center">
            <div className="font-bold text-green-700">RP &lt; 1</div>
            <div className="text-[9px] text-green-500">Lien négatif (Facteur protecteur)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
