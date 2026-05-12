import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Nature of variables in Epidemiology */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Variables en Épidémiologie</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded border border-blue-100">
            <h4 className="font-bold text-blue-900 text-sm mb-2">Variables Indépendantes</h4>
            <p className="text-[10px] text-blue-800">
              L'évolution n'est pas influencée par d'autres variables. 
              Correspond au <strong>facteur d'exposition</strong> ou à la <strong>cause</strong>.
            </p>
          </div>
          <div className="p-4 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-bold text-indigo-900 text-sm mb-2">Variables Dépendantes</h4>
            <p className="text-[10px] text-indigo-800">
              L'évolution est influencée par d'autres variables. 
              Correspond à l'<strong>effet</strong> ou à la <strong>maladie</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Contingency Table Intro */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Le Tableau de Contingence (2x2)</h3>
        <p className="text-sm text-gray-600 mb-4">
          Base de l'analyse des relations "Exposition-Maladie".
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center border-collapse">
            <thead>
              <tr>
                <th className="p-2 border bg-gray-50 italic text-[10px]" rowSpan="2">Variable Indépendante (Exposition)</th>
                <th className="p-2 border bg-gray-100" colSpan="2">Variable Dépendante (Maladie)</th>
              </tr>
              <tr className="bg-gray-50">
                <th className="p-2 border">Malades</th>
                <th className="p-2 border">Non malades</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border font-bold bg-gray-50">Exposés</td>
                <td className="p-2 border font-mono text-blue-700 font-bold">a</td>
                <td className="p-2 border font-mono text-gray-600">b</td>
              </tr>
              <tr>
                <td className="p-2 border font-bold bg-gray-50">Non exposés</td>
                <td className="p-2 border font-mono text-gray-600">c</td>
                <td className="p-2 border font-mono text-gray-600">d</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-100 text-[10px] text-yellow-800">
          <strong>Note :</strong> Dans une étude <strong>Transversale</strong>, on remplit les 4 cases simultanément (photo). 
          On ne peut pas établir si l'exposition précède la maladie.
        </div>
      </div>

      {/* Measurement Indicators */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">Indicateurs de Mesure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-bold text-gray-800 text-sm mb-1">Prévalence (P)</h4>
            <p className="text-[10px] text-gray-600 mb-2">Proportion d'individus présentant une caractéristique à un moment donné.</p>
            <div className="bg-white p-2 rounded text-center font-mono text-xs border">
              P = (Nombre de cas) / (Population totale)
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-bold text-gray-800 text-sm mb-1">Incidence (I)</h4>
            <p className="text-[10px] text-gray-600 mb-2">Mesure l'apparition de nouveaux cas durant une période donnée.</p>
            <div className="bg-white p-2 rounded text-center font-mono text-xs border">
              I = (Nouveaux cas) / (Population à risque)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
