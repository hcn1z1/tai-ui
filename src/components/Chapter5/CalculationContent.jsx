import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Odds Ratio (OR) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">1. Odds Ratio (OR) - Rapport de Cotes</h3>
        <p className="text-sm text-gray-600 mb-4">Mesure l'association dans les études cas-témoins.</p>
        <div className="bg-blue-900 text-white p-6 rounded-lg text-center font-mono text-lg shadow-inner">
          OR = (a / c) / (b / d) = (a × d) / (b × c)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-semibold text-sm text-indigo-900 mb-2">Interprétation :</h4>
            <ul className="text-[10px] text-indigo-800 space-y-1">
              <li>• <strong>OR &gt; 1 :</strong> Facteur de risque.</li>
              <li>• <strong>OR = 1 :</strong> Pas d'effet.</li>
              <li>• <strong>OR &lt; 1 :</strong> Facteur protecteur.</li>
            </ul>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-100">
            <h4 className="font-semibold text-sm text-green-900 mb-2">Cote d'exposition :</h4>
            <ul className="text-[10px] text-green-800 space-y-1">
              <li>• <strong>Chez les cas :</strong> a / c</li>
              <li>• <strong>Chez les témoins :</strong> b / d</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contingency Table Filling */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">2. Remplissage de la table</h3>
        <p className="text-sm text-gray-600 mb-4">
          Dans une étude cas-témoins, la table se remplit par une <strong>entrée verticale</strong> en fonction de la maladie (Cas).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-2 border italic text-[10px]">Exposition</th>
                <th className="p-2 border text-red-700">Cas (Malades)</th>
                <th className="p-2 border text-green-700">Témoins (Sains)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border font-bold bg-gray-50">Exposés</td>
                <td className="p-2 border font-mono font-bold">a</td>
                <td className="p-2 border font-mono">b</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold bg-gray-50">Non exposés</td>
                <td className="p-2 border font-mono">c</td>
                <td className="p-2 border font-mono">d</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border font-bold italic text-[10px]">Total</td>
                <td className="p-2 border font-mono">a + c</td>
                <td className="p-2 border font-mono">b + d</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Confidence Interval for OR */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">3. Intervalle de Confiance (IC 95%)</h3>
        <p className="text-xs text-gray-600 mb-4">Méthode de Miettinen pour l'OR :</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded border font-mono text-xs text-center">
            ln(IC_BI) = ln(OR) - 1,96 × √[ 1 / Χ² × ln(OR) ]
          </div>
          <div className="bg-gray-50 p-4 rounded border font-mono text-xs text-center italic">
            (Voir PDF page 15 pour formules détaillées)
          </div>
        </div>
        <div className="mt-4 p-3 bg-red-50 rounded border border-red-100 text-[10px] text-red-800">
          <strong>Significativité :</strong> Si l'intervalle [IC_BI ; IC_BS] <strong>exclut la valeur 1</strong>, la relation est statistiquement significative.
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
