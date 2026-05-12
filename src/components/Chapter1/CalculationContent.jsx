import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Population Microbienne */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">1. Population Microbienne</h3>
        <p className="text-sm text-gray-600 mb-4">
          Le nombre de micro-organismes est colossal par rapport aux cellules humaines :
        </p>
        <div className="bg-pink-900 text-white p-6 rounded-lg text-center font-mono text-xl shadow-inner">
          10<sup>14</sup> cellules procaryotes
        </div>
        <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-100 text-xs text-yellow-800">
          <strong>Comparaison:</strong> L'homme possède environ 10<sup>13</sup> cellules eucaryotes. Le ratio est d'environ 10 pour 1 (ou 1:1 selon les études récentes).
        </div>
      </div>

      {/* Masse du Microbiote */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">2. Masse et Diversité</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-pink-50 p-4 rounded border border-pink-100">
            <h4 className="font-semibold text-pink-900 text-sm mb-2">Masse Totale</h4>
            <div className="font-mono text-2xl text-center py-2 text-pink-700">
              ~1.5 kg
            </div>
            <p className="text-[10px] text-gray-500 text-center">Poids moyen chez un adulte sain.</p>
          </div>
          <div className="bg-pink-50 p-4 rounded border border-pink-100">
            <h4 className="font-semibold text-pink-900 text-sm mb-2">Biodiversité</h4>
            <div className="font-mono text-2xl text-center py-2 text-pink-700">
              &gt; 500 espèces
            </div>
            <p className="text-[10px] text-gray-500 text-center">Plus de 1 million de gènes identifiés.</p>
          </div>
        </div>
      </div>

      {/* Densité par Organe */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">3. Densité Bactérienne (UFC/g)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-2">Organe</th>
                <th className="px-4 py-2">Densité (UFC/g)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-600 font-mono">
              <tr>
                <td className="px-4 py-3">Estomac</td>
                <td className="px-4 py-3 text-pink-600 text-right">10<sup>1</sup> à 10<sup>3</sup></td>
              </tr>
              <tr>
                <td className="px-4 py-3">Intestin Grêle</td>
                <td className="px-4 py-3 text-pink-600 text-right">10<sup>4</sup> à 10<sup>7</sup></td>
              </tr>
              <tr>
                <td className="px-4 py-3">Côlon</td>
                <td className="px-4 py-3 text-pink-600 text-right font-bold">10<sup>10</sup> à 10<sup>12</sup></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
