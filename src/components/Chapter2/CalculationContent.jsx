import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Phyla Dominants */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">1. Phyla Dominants du Microbiote Intestinal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-pink-50 p-4 rounded border border-pink-100 text-center">
            <h4 className="font-bold text-pink-900 text-sm">Firmicutes</h4>
            <div className="text-2xl font-bold text-pink-600">~75%</div>
            <p className="text-[10px] text-gray-500">Clostridium, Lactobacillus</p>
          </div>
          <div className="bg-pink-50 p-4 rounded border border-pink-100 text-center">
            <h4 className="font-bold text-pink-900 text-sm">Bacteroidetes</h4>
            <div className="text-2xl font-bold text-pink-600">~21%</div>
            <p className="text-[10px] text-gray-500">Bacteroides, Prevotella</p>
          </div>
          <div className="bg-pink-50 p-4 rounded border border-pink-100 text-center">
            <h4 className="font-bold text-pink-900 text-sm">Actinobacteria</h4>
            <div className="text-2xl font-bold text-pink-600">2-3%</div>
            <p className="text-[10px] text-gray-500">Bifidobacterium</p>
          </div>
          <div className="bg-pink-50 p-4 rounded border border-pink-100 text-center">
            <h4 className="font-bold text-pink-900 text-sm">Proteobacteria</h4>
            <div className="text-2xl font-bold text-pink-600">&lt;1%</div>
            <p className="text-[10px] text-gray-500">Escherichia coli</p>
          </div>
        </div>
      </div>

      {/* Autres Composants */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">2. Autres Membres de l'Écosystème</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-2">Catégorie</th>
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Détails</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
              <tr>
                <td className="px-4 py-3 font-medium text-pink-700">Archées</td>
                <td className="px-4 py-3 italic">Archéome</td>
                <td className="px-4 py-3">Ex: Methanobrevibacter sp. Produisent du méthane.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-pink-700">Levures</td>
                <td className="px-4 py-3 italic">Mycobiome</td>
                <td className="px-4 py-3">Ex: Candida. &lt;1% de la population totale.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-pink-700">Virus</td>
                <td className="px-4 py-3 italic">Virome</td>
                <td className="px-4 py-3">Bactériophages (tuent les bactéries).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
