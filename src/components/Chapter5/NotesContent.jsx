import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Introduction to Case-Control Studies */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Études Cas-Témoins</h3>
        <p className="text-sm text-gray-700 mb-3">
          Études d'observation analytiques où l'on compare la fréquence d'exposition à un facteur de risque 
          chez des sujets malades (Cas) et des sujets non malades (Témoins).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-semibold text-sm text-indigo-900 mb-2">Direction du temps :</h4>
            <ul className="text-xs text-indigo-800 space-y-1">
              <li>• <strong>Rétrospective :</strong> On part de l'effet (maladie) et on remonte vers l'exposition passée.</li>
              <li>• Fait appel à la mémoire (interrogatoire, dossiers).</li>
            </ul>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-100">
            <h4 className="font-semibold text-sm text-green-900 mb-2">Quand l'utiliser ?</h4>
            <ul className="text-xs text-green-800 space-y-1">
              <li>• Étudier de nouvelles maladies ou de nouveaux facteurs.</li>
              <li>• Particulièrement adapté aux <strong>maladies rares</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Selection of Cases and Controls */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Sélection des sujets</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Les Cas (Malades)</h4>
            <p className="text-[10px] text-gray-600">Doivent être représentatifs de l'ensemble de la population cible et sélectionnés selon des critères précis (inclusion/exclusion).</p>
          </div>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Les Témoins (Non-Malades)</h4>
            <p className="text-[10px] text-gray-600">Doivent ressembler le plus possible aux cas (miroir) excepté pour la maladie. Issus de la même population source.</p>
          </div>
        </div>
      </div>

      {/* Comparison: Cohort vs Case-Control */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Comparaison des approches</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px] text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 border">Critère</th>
                <th className="px-3 py-2 border">Cas-Témoins</th>
                <th className="px-3 py-2 border">Cohorte</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-bold border bg-gray-50">Point de départ</td>
                <td className="px-3 py-2 border text-red-700">Malades et non malades</td>
                <td className="px-3 py-2 border text-green-700">Facteur d'exposition</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold border bg-gray-50">Progression</td>
                <td className="px-3 py-2 border">Rétrospectif</td>
                <td className="px-3 py-2 border">Prospectif</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold border bg-gray-50">Mesure</td>
                <td className="px-3 py-2 border font-bold">Odds Ratio (OR)</td>
                <td className="px-3 py-2 border font-bold">Risque Relatif (RR)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Advantages & Disadvantages */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Avantages et Inconvénients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-green-700">Avantages</h4>
            <ul className="text-[10px] text-gray-600 space-y-1 list-disc list-inside">
              <li>Permet d'étudier plusieurs expositions.</li>
              <li>Rapide et faible coût.</li>
              <li>Adapté aux maladies rares.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-red-700">Inconvénients</h4>
            <ul className="text-[10px] text-gray-600 space-y-1 list-disc list-inside">
              <li>Biais de mémorisation fréquent.</li>
              <li>Biais de sélection lors de l'inclusion.</li>
              <li>Relation temporelle parfois difficile à établir.</li>
              <li>L'OR n'est qu'un estimateur du RR.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
