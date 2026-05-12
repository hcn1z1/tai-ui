import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Définitions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Définitions Fondamentales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-rose-900">Microbiote</h4>
            <p className="text-xs text-gray-700">Population microbienne entière dans un endroit particulier (ex: corps humain, animal). Composé de bactéries, virus, champignons, archées.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-rose-900">Microbiome</h4>
            <p className="text-xs text-gray-700">Collection complète du matériel génétique du microbiote dans un lieu donné. Se concentre sur les gènes et la composition génétique.</p>
          </div>
        </div>
      </div>

      {/* Localisation */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Localisation du Microbiote Humain</h3>
        <ul className="space-y-3 text-xs text-gray-600">
          <li className="flex items-start">
            <span className="font-bold text-rose-600 mr-2">• Cutané:</span> 
            Se nourrit de sébum et cellules mortes. ~1 million de bactéries/cm².
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-600 mr-2">• Bucco-dentaire:</span> 
            Présent dans la bouche.
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-600 mr-2">• Pulmonaire:</span> 
            Dans les voies respiratoires.
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-600 mr-2">• Vaginal:</span> 
            Riche en lactobacilles (acidité protectrice).
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-600 mr-2">• Intestinal:</span> 
            Le plus important en nombre et diversité.
          </li>
        </ul>
      </div>

      {/* Symbiose */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-rose-800 mb-4 border-b pb-2">Symbiose Hôte-Microbiote</h3>
        <p className="text-sm text-gray-700 mb-3">L'homme vit en symbiose avec son microbiote (environ 50% de cellules humaines, 50% de bactéries).</p>
        <div className="bg-rose-50 p-3 rounded border border-rose-100 text-xs text-rose-800">
          <strong>Dysbiose:</strong> Altération qualitative ou fonctionnelle du microbiote, souvent liée à des pathologies.
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
