import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Obésité & Diabète */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">1. Métabolisme : Obésité & Diabète</h3>
        <div className="space-y-4">
          <div className="p-4 bg-pink-50 rounded border border-pink-100">
            <h4 className="font-semibold text-pink-900 text-sm mb-2">Mécanisme Obésité</h4>
            <p className="text-xs text-gray-700">Diminution des <strong>Bacteroidetes</strong> et augmentation des <strong>Firmicutes</strong>. Cela favorise le stockage de l'énergie apportée par l'alimentation.</p>
          </div>
          <div className="p-4 bg-pink-50 rounded border border-pink-100">
            <h4 className="font-semibold text-pink-900 text-sm mb-2">Mécanisme Diabète (T2)</h4>
            <p className="text-xs text-gray-700">Baisse des bactéries produisant du <strong>butyrate</strong> (anti-inflammatoire) et hausse des bactéries opportunistes.</p>
          </div>
        </div>
      </div>

      {/* Cancers */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">2. Cancérogenèse</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-2">Bactérie impliquée</th>
                <th className="px-4 py-2">Type de Cancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-600 italic">
              <tr>
                <td className="px-4 py-3 font-medium text-pink-700">Fusobacterium nucleatum</td>
                <td className="px-4 py-3">Cancer Colorectal</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-pink-700">Helicobacter pylori</td>
                <td className="px-4 py-3">Cancer Gastrique</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-pink-700">Déséquilibre global</td>
                <td className="px-4 py-3 text-gray-500">Cancer du sein (lié aux antibiotiques)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Neuro-inflammation */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">3. Neuro-inflammation & Dégénérescence</h3>
        <div className="bg-gray-900 text-pink-400 p-4 rounded-lg text-center font-mono text-xs">
          Perméabilité Intestinale → Inflammation Cérébrale → Déclin Cognitif
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-3 bg-gray-50 rounded border text-[10px]">
            <span className="font-bold block text-gray-700">Alzheimer</span>
            Régime riche en probiotiques et anti-inflammatoires réduit la progression.
          </div>
          <div className="p-3 bg-gray-50 rounded border text-[10px]">
            <span className="font-bold block text-gray-700">Parkinson</span>
            Corrélation avec la concentration d'<em>Enterobacteriaceae</em>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
