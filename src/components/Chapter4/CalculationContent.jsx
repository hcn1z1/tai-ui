import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Relative Risk (RR) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">1. Risque Relatif (RR)</h3>
        <p className="text-sm text-gray-600 mb-4">Mesure l'association entre l'exposition et la maladie.</p>
        <div className="bg-blue-900 text-white p-6 rounded-lg text-center font-mono text-lg shadow-inner">
          RR = IC_e / IC_ne = [a / (a + b)] / [c / (c + d)]
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-semibold text-sm text-indigo-900 mb-2">Interprétation :</h4>
            <ul className="text-[10px] text-indigo-800 space-y-1">
              <li>• <strong>RR &gt; 1 :</strong> Facteur de risque (Lien positif).</li>
              <li>• <strong>RR = 1 :</strong> Pas d'association.</li>
              <li>• <strong>RR &lt; 1 :</strong> Facteur protecteur (Lien négatif).</li>
            </ul>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-100">
            <h4 className="font-semibold text-sm text-green-900 mb-2">Exemple :</h4>
            <p className="text-[10px] text-green-800 italic">
              "Si RR = 2, les exposés ont 2 fois plus de risque de contracter la maladie que les non-exposés."
            </p>
          </div>
        </div>
      </div>

      {/* Attributable Risk (RA) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">2. Risque Attribuable (RA)</h3>
        <p className="text-sm text-gray-600 mb-4">Différence de risque entre exposés et non-exposés.</p>
        <div className="bg-gray-800 text-green-400 p-6 rounded-lg text-center font-mono text-lg">
          RA = IC_e - IC_ne
        </div>
        <p className="mt-4 text-[10px] text-gray-500">
          Représente la part de l'incidence qui est directement attribuable au facteur d'exposition.
        </p>
      </div>

      {/* Chi-Squared Test (Χ²) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">3. Test du Chi-carré (Χ²)</h3>
        <p className="text-sm text-gray-600 mb-4">Pour tester si l'association est statistiquement significative.</p>
        <div className="bg-gray-100 p-4 rounded border font-mono text-center text-sm overflow-x-auto">
          Χ² = [ (ad - bc)² × (a + b + c + d) ] / [ (a + b)(c + d)(a + c)(b + d) ]
        </div>
        <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-100">
          <h4 className="font-bold text-yellow-900 text-xs mb-2">Règle de décision :</h4>
          <p className="text-[10px] text-yellow-800">
            Si <strong>Χ² observé &gt; 3,84</strong> (seuil pour α = 5% et ddl = 1), le risque est significativement différent entre exposés et non-exposés.
          </p>
        </div>
      </div>

      {/* Confidence Interval (Miettinen) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">4. Intervalle de Confiance (IC 95%)</h3>
        <p className="text-xs text-gray-600 mb-4">Méthode de Miettinen pour le RR :</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded border font-mono text-xs text-center">
            IC_BI = RR<sup>1 - (1,96 / √Χ²)</sup>
          </div>
          <div className="bg-gray-50 p-4 rounded border font-mono text-xs text-center">
            IC_BS = RR<sup>1 + (1,96 / √Χ²)</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
