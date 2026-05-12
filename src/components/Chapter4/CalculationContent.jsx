import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Acides Gras à Chaîne Courte */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">1. Les AGCC (SCFA)</h3>
        <p className="text-sm text-gray-600 mb-4">
          Produits par la fermentation des polysaccharides par les bactéries :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-pink-900 text-white p-4 rounded-lg text-center font-mono">
            <div className="text-[10px] opacity-70">Butyrate</div>
            <div className="text-xs">Énergie côlon & Anti-inflammatoire</div>
          </div>
          <div className="bg-pink-800 text-white p-4 rounded-lg text-center font-mono">
            <div className="text-[10px] opacity-70">Propionate</div>
            <div className="text-xs">Métabolisme hépatique & Satiété</div>
          </div>
          <div className="bg-pink-700 text-white p-4 rounded-lg text-center font-mono">
            <div className="text-[10px] opacity-70">Acétate</div>
            <div className="text-xs">Métabolisme périphérique</div>
          </div>
        </div>
      </div>

      {/* Impact sur le Stress Oxydant */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">2. Mécanismes d'Interaction</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-2">Composé / Bactérie</th>
                <th className="px-4 py-2">Effet sur les ROS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
              <tr>
                <td className="px-4 py-3 font-medium text-pink-700">Lactobacillus / Bifidobacterium</td>
                <td className="px-4 py-3 text-pink-600 font-mono">Réduction des ROS intestinaux</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-pink-700">Polyphénols transformés</td>
                <td className="px-4 py-3 text-pink-600 font-mono">Protection contre l'inflammation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-pink-700">Butyrate</td>
                <td className="px-4 py-3 text-pink-600 font-mono">Renforcement de la barrière</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-pink-800 mb-4 border-b pb-2">3. Études de Cas & Chiffres</h3>
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">Diabète T2 (Resvératrol)</span>
              <span className="font-bold text-pink-600">Amélioration Glycémie</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-pink-600 h-1.5 rounded-full w-[85%]"></div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">Hypercholestérolémie (Curcumine)</span>
              <span className="font-bold text-pink-600">Baisse LDL</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-pink-600 h-1.5 rounded-full w-[70%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
