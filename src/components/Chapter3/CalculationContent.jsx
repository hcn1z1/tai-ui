import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Prevalence Calculation */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">1. Calcul de la Prévalence (P)</h3>
        <div className="bg-blue-900 text-white p-6 rounded-lg text-center font-mono text-lg shadow-inner">
          P(%) = (Cas à un moment t / Population totale à t) × 100
        </div>
        <p className="mt-4 text-xs text-gray-600">
          Utilisée dans les études transversales pour évaluer l'importance d'un problème de santé à un moment donné.
        </p>
      </div>

      {/* Cumulative Incidence Calculation */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">2. Incidence Cumulée (IC)</h3>
        <p className="text-sm text-gray-600 mb-4">Mesure le <strong>risque</strong> de contracter la maladie.</p>
        <div className="bg-gray-800 text-green-400 p-6 rounded-lg text-center font-mono text-lg">
          IC = Nouveaux cas (t₀, t₁) / Population à risque (t₀)
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-100 text-[10px] text-blue-800">
          <strong>Population à risque (t₀) :</strong> Sujets sains au début de l'étude capables de devenir des cas.
        </div>
      </div>

      {/* Incidence Density / Rate */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">3. Taux d'Incidence (TI)</h3>
        <p className="text-sm text-gray-600 mb-4">Mesure la <strong>vitesse</strong> d'apparition de la maladie.</p>
        <div className="bg-gray-800 text-yellow-400 p-6 rounded-lg text-center font-mono text-lg">
          TI = Nouveaux cas (t₀, t₁) / Personnes-temps à risque (PT)
        </div>
        <div className="mt-4 space-y-2">
          <h4 className="font-semibold text-sm text-gray-800">Calcul des Personnes-Temps (PT) :</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px]">
            <div className="p-3 bg-gray-50 rounded border">
              <strong>Cohorte fermée :</strong><br/>
              PT = n × dt (si peu de perdus)<br/>
              Ou PT = [(nt₀ + nt₁) / 2] × dt
            </div>
            <div className="p-3 bg-gray-50 rounded border">
              <strong>Cohorte dynamique :</strong><br/>
              PT = [(nt₀ + nt₁ - m) / 2] × dt<br/>
              <span className="italic">(m = nombre de guéris)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prevalence Ratio */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">4. Rapport de Prévalence (RP)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-4 rounded border border-indigo-100">
            <h4 className="font-semibold text-indigo-900 text-sm mb-2">Formule</h4>
            <div className="bg-white p-2 rounded text-center font-mono text-sm border">
              RP = Pe / Pne
            </div>
            <p className="text-[10px] text-indigo-700 mt-2 italic">Pe: Prévalence chez les exposés. Pne: Prévalence chez les non exposés.</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded border border-indigo-100">
            <h4 className="font-semibold text-indigo-900 text-sm mb-2">Calcul de Pe et Pne</h4>
            <div className="text-[10px] space-y-1 font-mono">
              <div>Pe = a / (a + b)</div>
              <div>Pne = c / (c + d)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
