import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Principle of Univariate Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Principe de l'analyse univariée</h3>
        <p className="text-sm text-gray-600 mb-4">
          L'analyse univariée permet de mieux appréhender une seule variable. Elle comporte quatre étapes clés :
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-3 rounded text-center border border-blue-100">
            <span className="text-xl font-bold text-blue-800 block">1</span>
            <span className="text-[10px] text-blue-700 uppercase font-semibold">Effectifs</span>
          </div>
          <div className="bg-blue-50 p-3 rounded text-center border border-blue-100">
            <span className="text-xl font-bold text-blue-800 block">2</span>
            <span className="text-[10px] text-blue-700 uppercase font-semibold">Centralité</span>
          </div>
          <div className="bg-blue-50 p-3 rounded text-center border border-blue-100">
            <span className="text-xl font-bold text-blue-800 block">3</span>
            <span className="text-[10px] text-blue-700 uppercase font-semibold">Dispersion</span>
          </div>
          <div className="bg-blue-50 p-3 rounded text-center border border-blue-100">
            <span className="text-xl font-bold text-blue-800 block">4</span>
            <span className="text-[10px] text-blue-700 uppercase font-semibold">Graphique</span>
          </div>
        </div>
      </div>

      {/* Steps by Variable Type */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Détail des étapes par type de variable</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px] text-left border-collapse">
            <thead className="bg-gray-800 text-white font-semibold">
              <tr>
                <th className="px-3 py-2 border border-gray-700">Étape</th>
                <th className="px-3 py-2 border border-gray-700">Nominale</th>
                <th className="px-3 py-2 border border-gray-700">Ordonnée</th>
                <th className="px-3 py-2 border border-gray-700">Discrète</th>
                <th className="px-3 py-2 border border-gray-700">Continue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-bold bg-gray-50 border">Effectif</td>
                <td className="px-3 py-2 border">À faire</td>
                <td className="px-3 py-2 border">À faire</td>
                <td className="px-3 py-2 border">À faire</td>
                <td className="px-3 py-2 border italic text-gray-400">Inutile</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold bg-gray-50 border">Centralité</td>
                <td className="px-3 py-2 border font-semibold text-indigo-700">Mode</td>
                <td className="px-3 py-2 border">Médiane</td>
                <td className="px-3 py-2 border">Moyenne & Médiane</td>
                <td className="px-3 py-2 border">Moyenne & Médiane</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold bg-gray-50 border">Dispersion</td>
                <td className="px-3 py-2 border italic text-gray-400">N'existe pas</td>
                <td className="px-3 py-2 border">Quartile</td>
                <td className="px-3 py-2 border">Écart type</td>
                <td className="px-3 py-2 border">Écart-type & Quartiles</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold bg-gray-50 border">Graphique</td>
                <td className="px-3 py-2 border" colSpan="2">Histogramme des effectifs</td>
                <td className="px-3 py-2 border">Histogramme, Boîte à moustache</td>
                <td className="px-3 py-2 border">Distribution, Boîte à moustache</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Central Tendency Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Mesures de Centralité</h3>
        <div className="space-y-4">
          <div className="p-4 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-bold text-indigo-900 text-sm mb-1">Moyenne (Arithmetic Mean)</h4>
            <p className="text-[10px] text-indigo-700 mb-2">Somme des valeurs divisée par l'effectif total.</p>
            <div className="bg-white p-2 rounded text-center font-mono text-sm border border-indigo-200">
              x̄ = (Σ xᵢ) / n
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded border border-blue-100">
              <h4 className="font-bold text-blue-900 text-sm mb-1">Médiane</h4>
              <p className="text-[10px] text-blue-700">Valeur qui sépare la série en deux groupes d'effectifs égaux (50% au-dessus, 50% en-dessous).</p>
            </div>
            <div className="p-4 bg-blue-50 rounded border border-blue-100">
              <h4 className="font-bold text-blue-900 text-sm mb-1">Mode</h4>
              <p className="text-[10px] text-blue-700">La valeur ou la modalité qui a l'effectif (ou la fréquence) le plus élevé.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dispersion Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Mesures de Dispersion</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-bold text-gray-800 text-sm mb-1">Écart-type (Standard Deviation)</h4>
            <p className="text-[10px] text-gray-600 mb-2">Mesure la dispersion des valeurs autour de la moyenne.</p>
            <div className="bg-white p-2 rounded text-center font-mono text-sm border">
              s = √[ Σ(xᵢ - x̄)² / (n - 1) ]
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-bold text-gray-800 text-sm mb-1">Quartiles (Q1, Q2, Q3)</h4>
            <ul className="text-[10px] text-gray-600 space-y-1">
              <li>• <strong>Q1:</strong> 25% des données sont inférieures.</li>
              <li>• <strong>Q2:</strong> Médiane (50%).</li>
              <li>• <strong>Q3:</strong> 75% des données sont inférieures.</li>
              <li>• <strong>IQR:</strong> Écart interquartile = Q3 - Q1.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
