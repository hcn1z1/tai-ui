import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Introduction to Cohort Studies */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Études de Cohorte (Analytique)</h3>
        <p className="text-sm text-gray-700 mb-3">
          Études d'observation où l'on compare deux groupes de sujets (Exposés vs Non-Exposés) 
          sur le plan de l'apparition de la maladie au cours de la période d'observation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-semibold text-sm text-indigo-900 mb-2">Direction du temps :</h4>
            <ul className="text-xs text-indigo-800 space-y-1">
              <li>• <strong>Prospective :</strong> On part de l'exposition et on suit les sujets dans le futur.</li>
              <li>• <strong>Rétrospective :</strong> On utilise des dossiers passés pour reconstituer l'exposition et le suivi.</li>
            </ul>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-100">
            <h4 className="font-semibold text-sm text-green-900 mb-2">Sélection des sujets :</h4>
            <ul className="text-xs text-green-800 space-y-1">
              <li>• Sujets à risque de développer la maladie.</li>
              <li>• Sujets indemnes de la maladie au début de l'étude.</li>
              <li>• Groupes E et NE doivent être similaires (sauf pour l'exposition).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rules for Selecting the Non-Exposed Group */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Règles de sélection du groupe NE</h3>
        <ul className="space-y-3 text-xs text-gray-600">
          <li className="flex items-start gap-2">
            <span className="font-bold text-indigo-600">Règle 1:</span> 
            <span>Issus de la même population que les exposés (éviter le biais de sélection).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-indigo-600">Règle 2:</span> 
            <span>Même potentialité de suivi que les exposés.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-indigo-600">Règle 3:</span> 
            <span>Même probabilité de contracter la maladie que les exposés (si non exposés).</span>
          </li>
        </ul>
      </div>

      {/* Advantages & Disadvantages */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Avantages et Inconvénients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-green-700">Avantages</h4>
            <ul className="text-[10px] text-gray-600 space-y-1 list-disc list-inside">
              <li>Plus rigoureuse (non expérimentale).</li>
              <li>Séquence temporelle certaine (exposition avant maladie).</li>
              <li>Mesure directe de l'Incidence (Risque).</li>
              <li>Étude de plusieurs maladies pour une même exposition.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-red-700">Inconvénients</h4>
            <ul className="text-[10px] text-gray-600 space-y-1 list-disc list-inside">
              <li>Longues et coûteuses.</li>
              <li>Nécessite un grand nombre de sujets.</li>
              <li>Biais liés aux perdus de vue.</li>
              <li>Peu adapté aux maladies rares ou à longue latence.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
