import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Introduction to Biostatistics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Introduction aux Biostatistiques</h3>
        <p className="text-sm text-gray-700 mb-3">
          L'application des statistiques dans le domaine du vivant (Biologie, Médecine). 
          C'est la science des données : une science, une méthode et un ensemble de techniques.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-semibold text-sm text-indigo-900 mb-2">Une étude statistique implique :</h4>
            <ul className="text-xs text-indigo-800 space-y-1">
              <li>• La collecte</li>
              <li>• La classification & Le résumé</li>
              <li>• L'organisation & L'analyse</li>
              <li>• L'interprétation des informations numériques</li>
            </ul>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-100">
            <h4 className="font-semibold text-sm text-green-900 mb-2">Sources de données :</h4>
            <ul className="text-xs text-green-800 space-y-1">
              <li>• Recensement (tout le monde à un moment donné)</li>
              <li>• Sondage (échantillon de la population)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vocabulary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Vocabulaire de base</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Définition</th>
                <th className="px-4 py-2">Exemple</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
              <tr>
                <td className="px-4 py-3 font-medium text-indigo-700">Individu</td>
                <td className="px-4 py-3">Objet étudié</td>
                <td className="px-4 py-3">Un étudiant, sujet, malade...</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-indigo-700">Population</td>
                <td className="px-4 py-3">Ensemble des individus</td>
                <td className="px-4 py-3">Tous les étudiants participant à l'expérience</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-indigo-700">Variable</td>
                <td className="px-4 py-3">Ce qui est étudié chez les individus</td>
                <td className="px-4 py-3">[Age], [Notes], [Cigarette/Jour]</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-indigo-700">Modalités</td>
                <td className="px-4 py-3">Valeurs possibles pour une variable</td>
                <td className="px-4 py-3">Modalités de [Age] : 0 à 120 ans</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-indigo-700">Observation</td>
                <td className="px-4 py-3">Valeur prise par un individu</td>
                <td className="px-4 py-3">Marc a 21 ans (21 est l'observation)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Nature of Variables */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Nature d'une variable</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-indigo-900 bg-indigo-50 p-2 rounded">Variables Quantitatives</h4>
            <p className="text-xs text-gray-700 italic">Mesurables, on peut additionner 2 observations.</p>
            <ul className="text-xs space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-bold text-indigo-600">• Continue:</span> 
                <span>Le nombre de modalités est grand (ex: Taille, Poids).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-indigo-600">• Discrète:</span> 
                <span>Valeurs entières, nombre de modalités limité (ex: Nombre d'enfants).</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-pink-900 bg-pink-50 p-2 rounded">Variables Qualitatives</h4>
            <p className="text-xs text-gray-700 italic">Non mesurables par des nombres au sens strict.</p>
            <ul className="text-xs space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-600">• Ordonnée:</span> 
                <span>Il existe une relation d'ordre (ex: Niveau de satisfaction, Stade d'une maladie).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-600">• Nominale:</span> 
                <span>Pas de relation d'ordre (ex: Couleur des yeux, Groupe sanguin, Sexe).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data Issues */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Biais et Données manquantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-red-50 rounded border border-red-100">
            <h4 className="font-semibold text-sm text-red-900 mb-2">Données manquantes :</h4>
            <ul className="text-[10px] text-red-800 space-y-1">
              <li>• Absence du sujet / Refus de répondre</li>
              <li>• Oubli / Perte de documents</li>
              <li>• Erreur de saisie / codage / transcription</li>
            </ul>
          </div>
          <div className="p-3 bg-yellow-50 rounded border border-yellow-100">
            <h4 className="font-semibold text-sm text-yellow-900 mb-2">Biais de sélection :</h4>
            <p className="text-[10px] text-yellow-800">
              Erreurs dues au questionnaire (mal posé), à l'enquêté (oubli, crainte), 
              ou à l'enquêteur (manque de neutralité, mauvaises personnes interrogées).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
