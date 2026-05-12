import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Questionnaire Design */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Conception de Questionnaire</h3>
        <p className="text-sm text-gray-600 mb-4">Un questionnaire court doit être structuré sur plusieurs domaines :</p>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded border border-blue-100 flex items-center gap-3">
            <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</div>
            <div className="text-[11px] text-blue-900 font-semibold">Fréquence quotidienne des repas (restaurant, grignotage, cuisine)</div>
          </div>
          <div className="p-3 bg-blue-50 rounded border border-blue-100 flex items-center gap-3">
            <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</div>
            <div className="text-[11px] text-blue-900 font-semibold">Taille des portions</div>
          </div>
          <div className="p-3 bg-blue-50 rounded border border-blue-100 flex items-center gap-3">
            <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</div>
            <div className="text-[11px] text-blue-900 font-semibold">Fréquence des achats de nourriture (marché, épicerie)</div>
          </div>
        </div>
      </div>

      {/* Informed Consent */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Consentement Éclairé</h3>
        <p className="text-xs text-gray-600 mb-4">Éléments indispensables à présenter au sujet avant l'enquête :</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            "Présentation", "Objectif de la recherche", "Explication des procédures",
            "Risques et inconforts", "Avantages", "Confidentialité",
            "Coût de participation", "Droits légaux", "Questions"
          ].map((item, index) => (
            <div key={index} className="p-2 bg-gray-50 border rounded text-[9px] text-center text-gray-700">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Data Presentation (PDF 5) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Présentation des données</h3>
        <div className="space-y-4">
          <div className="p-4 bg-indigo-900 text-white rounded-lg">
            <h4 className="font-bold text-sm mb-2 text-indigo-300">Exploitation des données</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px]">
              <div className="border-r border-indigo-700 pr-4">
                <span className="font-bold block mb-1">Aliment / Nutriment :</span>
                Étude de la consommation d'un aliment particulier (ex: table de composition). 
                Limite : interaction entre nutriments (biodisponibilité).
              </div>
              <div>
                <span className="font-bold block mb-1">Profil Alimentaire :</span>
                Étude de l'alimentation dans sa globalité. Les aliments sont corrélés entre eux (ex: fruits + poisson).
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-bold text-gray-800 text-sm mb-2">Types d'Analyses en Épidémiologie</h4>
            <ol className="text-[10px] text-gray-600 list-decimal list-inside space-y-1">
              <li>Estimation des apports moyens d'une population.</li>
              <li>Estimation de la distribution (apports excessifs ou insuffisants).</li>
              <li>Analyses de corrélations ou de régressions (ex: Apport vs IMC).</li>
              <li>Analyses qualitatives (Sujets classés par catégories).</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
