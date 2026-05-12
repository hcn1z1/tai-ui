import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Fonctions Métaboliques */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Fonctions Métaboliques & Digestion</h3>
        <p className="text-sm text-gray-700 mb-3">Le microbiote intestinal assure son propre métabolisme en puisant dans nos aliments (ex: fibres).</p>
        <ul className="space-y-2 text-xs text-gray-600">
          <li>• <strong>Fermentation:</strong> Des substrats et résidus alimentaires non digestibles.</li>
          <li>• <strong>Assimilation:</strong> Aide à l'absorption des nutriments via des enzymes spécifiques.</li>
          <li>• <strong>Synthèse:</strong> Production de vitamines (K, B12, B8) et d'acides aminés essentiels (valine, leucine, isoleucine).</li>
          <li>• <strong>Hydrolyse:</strong> De l'amidon, de la cellulose, des polysaccharides.</li>
        </ul>
      </div>

      {/* Fonctions Immunitaires */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Fonctions Immunitaires & Barrière</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-rose-900">Effet Barrière</h4>
            <p className="text-xs text-gray-700">Empêche la colonisation par des espèces pathogènes via la compétition et la production de substances bactéricides.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-rose-900">Maturation Immunitaire</h4>
            <p className="text-xs text-gray-700">Indispensable pour que le système immunitaire apprenne à distinguer les espèces amies des pathogènes.</p>
          </div>
        </div>
      </div>

      {/* Autres rôles */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Impact Global</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Neurologie</h4>
            <p className="text-xs text-gray-600">Axe intestin-cerveau : influence sur le fonctionnement cérébral et le comportement.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Établissement</h4>
            <p className="text-xs text-gray-600">Se constitue dès la naissance (voie basse vs césarienne) et se stabilise vers l'âge de 3 ans.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
