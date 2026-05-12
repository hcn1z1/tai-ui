import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Concept de Dysbiose */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">La Dysbiose</h3>
        <p className="text-sm text-gray-700 mb-3">La dysbiose est un déséquilibre de l'écosystème bactérien, caractérisé par :</p>
        <ul className="space-y-2 text-xs text-gray-600">
          <li>• Une <strong>diversité bactérienne réduite</strong>.</li>
          <li>• Une <strong>perte de bactéries bénéfiques</strong>.</li>
          <li>• Une <strong>prolifération de bactéries envahissantes</strong>.</li>
        </ul>
        <div className="mt-4 p-3 bg-rose-50 rounded border border-rose-100 text-[10px] text-rose-800 italic">
          Facteurs favorisants : Stress, Antibiotiques, Alimentation moderne (pauvre en fibres, riche en sucres), Mutations génétiques, Tabac.
        </div>
      </div>

      {/* Liste des Pathologies */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Maladies liées au Microbiote</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 p-3 bg-gray-50 rounded">
            <h4 className="font-semibold text-sm text-gray-800">Métaboliques</h4>
            <ul className="text-[10px] text-gray-600 list-disc list-inside">
              <li>Obésité</li>
              <li>Diabète de type 2</li>
              <li>Maladies cardiovasculaires</li>
            </ul>
          </div>
          <div className="space-y-2 p-3 bg-gray-50 rounded">
            <h4 className="font-semibold text-sm text-gray-800">Neuro-psychiatriques</h4>
            <ul className="text-[10px] text-gray-600 list-disc list-inside">
              <li>Dépression & Anxiété</li>
              <li>Maladie d'Alzheimer & Parkinson</li>
              <li>Schizophrénie</li>
            </ul>
          </div>
          <div className="space-y-2 p-3 bg-gray-50 rounded">
            <h4 className="font-semibold text-sm text-gray-800">Inflammatoires & Autres</h4>
            <ul className="text-[10px] text-gray-600 list-disc list-inside">
              <li>MICI (Crohn, RCH)</li>
              <li>Asthme & Allergies</li>
              <li>Cancers (Colorectal, Gastrique)</li>
            </ul>
          </div>
          <div className="space-y-2 p-3 bg-gray-50 rounded">
            <h4 className="font-semibold text-sm text-gray-800">Auto-immunes</h4>
            <ul className="text-[10px] text-gray-600 list-disc list-inside">
              <li>Lupus, Sclérose en plaques</li>
              <li>Polyarthrite rhumatoïde</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
