import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Definition of Epidemiology */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Définition de l'Épidémiologie</h3>
        <p className="text-sm text-gray-700 mb-3 italic">
          "L'étude de la distribution et des déterminants des états ou des événements liés à la santé dans des populations définies." (OMS)
        </p>
        <div className="space-y-2 text-xs text-gray-600">
          <p>• <strong>Objet :</strong> Groupes de personnes (et non des individus).</p>
          <p>• <strong>Champ :</strong> Individus sains et malades.</p>
          <p>• <strong>But :</strong> Savoir avec quelle fréquence les problèmes de santé surviennent et <strong>pourquoi</strong>.</p>
        </div>
      </div>

      {/* Clinical vs Epidemiological */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Clinicien vs Épidémiologiste</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-2">Critères</th>
                <th className="px-4 py-2">Clinicien</th>
                <th className="px-4 py-2">Épidémiologiste</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr>
                <td className="px-4 py-3 font-medium">Population-cible</td>
                <td className="px-4 py-3">Individus malades</td>
                <td className="px-4 py-3">Sains et malades</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Résultat</td>
                <td className="px-4 py-3">Diagnostic</td>
                <td className="px-4 py-3">Facteurs de risque (probab.)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Recherche</td>
                <td className="px-4 py-3">Pathogénie</td>
                <td className="px-4 py-3">Association démontrée</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Relation patient</td>
                <td className="px-4 py-3">Colloque singulier</td>
                <td className="px-4 py-3">Pas de relation individuelle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Epidemiological Reasoning */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Le Raisonnement Épidémiologique</h3>
        <div className="relative pl-8 space-y-4">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-indigo-100"></div>
          <div className="relative">
            <div className="absolute -left-[25px] mt-1.5 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white"></div>
            <h4 className="font-bold text-sm text-indigo-900">1. Question de départ & Problématique</h4>
            <p className="text-[10px] text-gray-500">Suspicion qu'un facteur influence la fréquence d'un problème.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[25px] mt-1.5 w-4 h-4 rounded-full bg-indigo-400 border-2 border-white"></div>
            <h4 className="font-bold text-sm text-indigo-900">2. Formulation d'hypothèses spécifiques</h4>
          </div>
          <div className="relative">
            <div className="absolute -left-[25px] mt-1.5 w-4 h-4 rounded-full bg-indigo-400 border-2 border-white"></div>
            <h4 className="font-bold text-sm text-indigo-900">3. Réalisation de l'étude (Observation)</h4>
          </div>
          <div className="relative">
            <div className="absolute -left-[25px] mt-1.5 w-4 h-4 rounded-full bg-indigo-400 border-2 border-white"></div>
            <h4 className="font-bold text-sm text-indigo-900">4. Analyse des informations & Validité</h4>
            <p className="text-[10px] text-gray-500">Examen de la causalité (Hasard ? Biais ? Facteurs confondants ?)</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[25px] mt-1.5 w-4 h-4 rounded-full bg-indigo-400 border-2 border-white"></div>
            <h4 className="font-bold text-sm text-indigo-900">5. Conclusion & Jugement</h4>
          </div>
        </div>
      </div>

      {/* Descriptive Epidemiology Types */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Épidémiologie Descriptive</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-orange-50 rounded border border-orange-100">
            <h4 className="font-bold text-orange-900 text-sm mb-2">Études Transversales</h4>
            <p className="text-[10px] text-orange-800 mb-2">Indicateur <strong>STATIQUE</strong> (la "photo").</p>
            <ul className="text-[10px] space-y-1 text-orange-700 list-disc list-inside">
              <li>Mesure la <strong>Prévalence</strong>.</li>
              <li>À un instant "t".</li>
              <li>Peu coûteuses et rapides.</li>
              <li>Biais de souvenir fréquent.</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded border border-blue-100">
            <h4 className="font-bold text-blue-900 text-sm mb-2">Études Longitudinales</h4>
            <p className="text-[10px] text-blue-800 mb-2">Indicateur <strong>DYNAMIQUE</strong> (la "vidéo").</p>
            <ul className="text-[10px] space-y-1 text-blue-700 list-disc list-inside">
              <li>Mesure l'<strong>Incidence</strong>.</li>
              <li>Suivi dans le temps (cohorte).</li>
              <li>Permet de cartographier un développement.</li>
              <li>Plus coûteuses et longues.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
