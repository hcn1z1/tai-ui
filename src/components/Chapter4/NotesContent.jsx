import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Introduction aux Phytocomposés */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Les Phytocomposés</h3>
        <p className="text-sm text-gray-700 mb-3">Substances bioactives présentes dans les plantes, connues pour leurs bienfaits sur la santé et leur interaction avec le microbiote.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-rose-50 rounded border border-rose-100">
            <h4 className="font-bold text-rose-900 text-xs">Polyphénols</h4>
            <p className="text-[10px] text-gray-600">Antioxydants puissants (thé vert, raisin, vin rouge).</p>
          </div>
          <div className="p-3 bg-rose-50 rounded border border-rose-100">
            <h4 className="font-bold text-rose-900 text-xs">Flavonoïdes</h4>
            <p className="text-[10px] text-gray-600">Soutiennent la santé cardiaque (baies, agrumes).</p>
          </div>
          <div className="p-3 bg-rose-50 rounded border border-rose-100">
            <h4 className="font-bold text-rose-900 text-xs">Polysaccharides</h4>
            <p className="text-[10px] text-gray-600">Glucides complexes / Prébiotiques (avoine, légumineuses).</p>
          </div>
        </div>
      </div>

      {/* Rôles et Bienfaits */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Rôles Physiologiques</h3>
        <ul className="space-y-3 text-xs text-gray-600">
          <li className="flex items-start">
            <span className="font-bold text-rose-600 mr-2">• Antioxydant:</span> 
            Neutralisent les radicaux libres et réduisent le stress oxydatif.
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-600 mr-2">• Anti-inflammatoire:</span> 
            Réduisent les cytokines pro-inflammatoires (TNF-α, IL-6).
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-600 mr-2">• Cardiovasculaire:</span> 
            Améliorent la santé vasculaire et réduisent le cholestérol LDL.
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-600 mr-2">• Métabolique:</span> 
            Aident à réguler la glycémie (essentiel pour les diabétiques).
          </li>
        </ul>
      </div>

      {/* Synergie */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Synergie Microbiote-Phytocomposés</h3>
        <p className="text-sm text-gray-700 mb-3">Le microbiote transforme ces composés en métabolites encore plus actifs.</p>
        <div className="bg-rose-50 p-3 rounded border border-rose-100 text-xs text-rose-800">
          <strong>Prébiotiques:</strong> Les polysaccharides nourrissent les bactéries bénéfiques comme <em>Lactobacillus</em> et <em>Bifidobacterium</em>.
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
