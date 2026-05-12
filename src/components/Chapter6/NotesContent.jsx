import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Introduction to Nutritional Epidemiology */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Épidémiologie Nutritionnelle</h3>
        <p className="text-sm text-gray-700 mb-3">
          Étude du rôle des facteurs nutritionnels dans le développement des maladies et évaluation des programmes de prévention.
        </p>
        <div className="p-3 bg-indigo-50 rounded border border-indigo-100 text-xs text-indigo-800">
          <strong>Objectif :</strong> Établir des associations entre aliments/nutriments et pathologies.
        </div>
      </div>

      {/* Main Dietary Assessment Methods */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Méthodes de Recueil Alimentaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 p-3 bg-gray-50 rounded border">
            <h4 className="font-bold text-sm text-gray-800">Rappel des 24 heures</h4>
            <p className="text-[10px] text-gray-600">Entretien où le sujet décrit tout ce qu'il a consommé la veille.</p>
            <p className="text-[10px] text-green-700 font-semibold italic">Avantage : Rapide, peu contraignant.</p>
          </div>
          <div className="space-y-2 p-3 bg-gray-50 rounded border">
            <h4 className="font-bold text-sm text-gray-800">Questionnaire de Fréquence (FFQ)</h4>
            <p className="text-[10px] text-gray-600">Liste d'aliments avec fréquence de consommation sur une période.</p>
            <p className="text-[10px] text-green-700 font-semibold italic">Avantage : Utilisable à grande échelle, faible coût.</p>
          </div>
          <div className="space-y-2 p-3 bg-gray-50 rounded border">
            <h4 className="font-bold text-sm text-gray-800">Enregistrement Alimentaire</h4>
            <p className="text-[10px] text-gray-600">Le sujet note en temps réel (pesées) tout ce qu'il consomme.</p>
            <p className="text-[10px] text-red-700 font-semibold italic">Inconvénient : Très contraignant, risque de modification du comportement.</p>
          </div>
          <div className="space-y-2 p-3 bg-gray-50 rounded border">
            <h4 className="font-bold text-sm text-gray-800">Histoire Alimentaire</h4>
            <p className="text-[10px] text-gray-600">Combine rappel 24h, FFQ et enregistrement pour évaluer les habitudes typiques.</p>
          </div>
        </div>
      </div>

      {/* Biomarkers */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Les Biomarqueurs</h3>
        <p className="text-xs text-gray-700 mb-3">Mesures biologiques reflétant l'apport énergétique ou nutritionnel.</p>
        <ul className="text-[10px] text-gray-600 space-y-2 list-disc list-inside">
          <li><strong>Eau doublement marquée :</strong> Valide l'apport énergétique (AET).</li>
          <li><strong>Excrétion urinaire d'azote :</strong> Valide l'apport protéique.</li>
          <li><strong>Micronutriments :</strong> Vitamine E, b-carotènes, Iode, Fluor, Sélénium...</li>
        </ul>
        <div className="mt-3 p-2 bg-yellow-50 border border-yellow-100 rounded text-[10px] text-yellow-800 italic">
          Indépendant de la déclaration du sujet (méthode de validation objective).
        </div>
      </div>

      {/* Errors and Bias */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Limites et Erreurs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-[11px] text-gray-800">Erreurs Aléatoires</h4>
            <p className="text-[10px] text-gray-500">Dues au hasard, augmentent la variabilité. Atténuées par l'augmentation de l'effectif.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-[11px] text-gray-800">Erreurs Systématiques</h4>
            <p className="text-[10px] text-gray-500">Dues au questionnaire ou table de composition. Créent des biais (mémorisation, perception sociale).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
