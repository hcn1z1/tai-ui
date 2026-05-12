import React, { useState } from 'react';
import { Calculator, ArrowRight, Table, BarChart3, Users, Beaker, FlaskConical } from 'lucide-react';
import InteractiveCalculationOverlay from './InteractiveCalculationOverlay';

const CalculationWalkthroughView = () => {
  const [activeLab, setActiveLab] = useState(null);

  return (
    <div className="animate-fade-in space-y-12 pb-20">
      {activeLab && (
        <InteractiveCalculationOverlay
          algorithm={activeLab}
          onClose={() => setActiveLab(null)}
        />
      )}

      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
          <Calculator size={28} />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Step-by-Step Calculations</h2>
      </div>
      <p className="text-gray-600 max-w-3xl border-l-4 border-purple-400 pl-4 py-1 italic">
        Guide interactif pour maîtriser les calculs épidémiologiques et statistiques.
      </p>

      {/* 1. VARIANCE & STANDARD DEVIATION */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group">
        <div className="bg-indigo-50 px-6 py-5 border-b border-indigo-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-indigo-900">1. Dispersion : Écart-type (σ)</h3>
            <button
              onClick={() => setActiveLab('variance')}
              className="flex items-center space-x-1 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <FlaskConical size={12} />
              <span>LABO INTERACTIF</span>
            </button>
          </div>
          <span className="text-[10px] font-bold bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full uppercase tracking-wider">Univariée</span>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700 underline decoration-indigo-300">Méthodologie :</p>
              <ol className="space-y-4">
                <li className="flex items-start text-xs">
                  <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div><b>Calculer la Moyenne (x̄) :</b> Somme de toutes les valeurs divisée par N.</div>
                </li>
                <li className="flex items-start text-xs">
                  <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div><b>Calculer les Écarts :</b> Pour chaque valeur xᵢ, calculer (xᵢ - x̄).</div>
                </li>
                <li className="flex items-start text-xs">
                  <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div><b>Élever au Carré :</b> Calculer (xᵢ - x̄)² pour éliminer les signes négatifs.</div>
                </li>
                <li className="flex items-start text-xs">
                  <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
                  <div><b>Sommer et Diviser :</b> Diviser la somme par (N-1) pour obtenir la <b>Variance (s²)</b>.</div>
                </li>
                <li className="flex items-start text-xs">
                  <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">5</span>
                  <div><b>Racine Carrée :</b> √s² = <b>Écart-type (s)</b>.</div>
                </li>
              </ol>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-indigo-300 font-mono text-[11px] shadow-inner">
                <p className="mb-4 text-indigo-400 font-bold">// Exemple : [10, 12, 14]</p>
                <p>1. x̄ = (10+12+14)/3 = <b>12</b></p>
                <div className="my-4 space-y-1">
                    <p>2. (10 - 12)² = (-2)² = <b>4</b></p>
                    <p>3. (12 - 12)² = (0)² = <b>0</b></p>
                    <p>4. (14 - 12)² = (2)² = <b>4</b></p>
                </div>
                <p>5. Somme = 4 + 0 + 4 = <b>8</b></p>
                <p>6. s² = 8 / (3-1) = <b>4</b></p>
                <p className="mt-4 text-white text-sm">7. s = √4 = <span className="text-green-400 font-bold">2.0</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHI-SQUARE TEST (X2) */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-rose-50 px-6 py-5 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-rose-900">2. Test de Significativité : Chi-2 (X²)</h3>
            <button
              onClick={() => setActiveLab('chi2')}
              className="flex items-center space-x-1 px-3 py-1 bg-rose-600 text-white text-[10px] font-bold rounded-full hover:bg-rose-700 transition-colors shadow-sm"
            >
              <FlaskConical size={12} />
              <span>LABO INTERACTIF</span>
            </button>
          </div>
          <span className="text-[10px] font-bold bg-rose-200 text-rose-800 px-2 py-1 rounded-full uppercase tracking-wider">Analytique</span>
        </div>
        <div className="p-8">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8 flex flex-col md:flex-row items-center gap-6">
            <div className="p-3 bg-white rounded-lg border shadow-sm shrink-0">
                <Table className="text-rose-500" size={32} />
            </div>
            <div>
                <p className="text-xs font-bold text-gray-700 uppercase mb-1">Étude de cas : Césarienne & Âge (PDF 3)</p>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                    "On veut savoir si le risque de césarienne est statistiquement différent entre les mères de &gt;40 ans et les 20-30 ans."
                </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-sm text-rose-900 mb-3 flex items-center gap-2">
                        <Users size={16} /> Étape 1 : Remplir le Tableau 2x2
                    </h4>
                    <div className="overflow-x-auto">
                        <table className="w-full text-center border-collapse font-mono text-[10px]">
                            <thead>
                                <tr className="bg-rose-100/50">
                                    <th className="p-2 border border-rose-200">Âge</th>
                                    <th className="p-2 border border-rose-200 text-rose-700">Césarienne (a,c)</th>
                                    <th className="p-2 border border-rose-200 text-green-700">Voie Basse (b,d)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border border-rose-200 font-bold bg-rose-50/30">&gt;40 ans</td>
                                    <td className="p-2 border border-rose-200">29</td>
                                    <td className="p-2 border border-rose-200">151</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-rose-200 font-bold bg-rose-50/30">20-30 ans</td>
                                    <td className="p-2 border border-rose-200">53</td>
                                    <td className="p-2 border border-rose-200">479</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                    <h4 className="font-bold text-xs text-rose-900 mb-2 underline">Formule Simplifiée (2x2) :</h4>
                    <div className="bg-white p-3 rounded border border-rose-200 font-mono text-[10px] text-center leading-relaxed">
                        X² = [ (ad - bc)² × T ] / [ (a+b)(c+d)(a+c)(b+d) ]
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-rose-200 rounded-full"></div>
                <div className="pl-6 space-y-4">
                    <h4 className="font-bold text-sm text-gray-800">Résolution Numérique :</h4>
                    <div className="space-y-2 text-[11px] text-gray-600 font-mono">
                        <p>• a*d = 29 * 479 = <b>13,891</b></p>
                        <p>• b*c = 151 * 53 = <b>8,003</b></p>
                        <p>• (ad - bc)² = (13,891 - 8,003)² = <b>34,668,224</b></p>
                        <p>• Total (T) = 180 + 532 = <b>712</b></p>
                        <p className="pt-2 text-rose-600 font-bold">X² observé = 4.99</p>
                    </div>
                    <div className="p-4 bg-gray-900 text-white rounded-xl">
                        <span className="text-yellow-400 font-bold block text-[10px] mb-1">Conclusion :</span>
                        <p className="text-[10px] leading-relaxed">
                            4.99 &gt; 3.84 (seuil). On rejette H0. <br/>
                            L'association est <strong>significative</strong>.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SAMPLE SIZE CALCULATION */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-cyan-50 px-6 py-5 border-b border-cyan-100 flex items-center justify-between">
          <h3 className="text-xl font-bold text-cyan-900">3. Taille d'Échantillon (Nécessaire)</h3>
          <span className="text-[10px] font-bold bg-cyan-200 text-cyan-800 px-2 py-1 rounded-full uppercase tracking-wider">Planification</span>
        </div>
        <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <div className="text-[9px] text-slate-400 uppercase font-bold mb-1">Paramètre Alpha (α)</div>
                    <div className="text-lg font-bold text-cyan-700">5%</div>
                    <p className="text-[9px] text-slate-500">Risque de 1ère espèce. Zα = 1.96</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <div className="text-[9px] text-slate-400 uppercase font-bold mb-1">Puissance (1-β)</div>
                    <div className="text-lg font-bold text-cyan-700">80%</div>
                    <p className="text-[9px] text-slate-500">Capacité de détection. Zβ = 0.84</p>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                    <div className="text-[9px] text-slate-400 uppercase font-bold mb-1">Incidence NE (I₀)</div>
                    <div className="text-lg font-bold text-cyan-700">10%</div>
                    <p className="text-[9px] text-slate-500">Taux attendu chez les non-exposés.</p>
                </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h4 className="text-cyan-400 font-bold text-sm mb-4 uppercase tracking-tighter">Logique de calcul (Exemple PDF 3, p. 5) :</h4>
                <div className="space-y-4">
                    <p className="text-white text-xs leading-relaxed">
                        Pour détecter un <b>Risque Relatif (RR) de 2.0</b> avec une puissance de 80% :
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[10px] text-slate-400 font-mono">
                        <li className="flex items-center gap-2"><ArrowRight size={12} className="text-cyan-500"/> I₀ (Incidence NE) = 0.10</li>
                        <li className="flex items-center gap-2"><ArrowRight size={12} className="text-cyan-500"/> I₁ (Incidence E) = 0.10 * 2 = 0.20</li>
                        <li className="flex items-center gap-2"><ArrowRight size={12} className="text-cyan-500"/> Moyenne (P) = (0.10 + 0.20) / 2 = 0.15</li>
                        <li className="flex items-center gap-2"><ArrowRight size={12} className="text-cyan-500"/> Différence (Δ) = 0.20 - 0.10 = 0.10</li>
                    </ul>
                    <div className="mt-6 p-4 bg-cyan-950/50 rounded-xl border border-cyan-800/50 text-center">
                        <span className="text-slate-500 text-[10px] uppercase block mb-1">Résultat :</span>
                        <span className="text-2xl font-black text-white tracking-widest">n = 195</span>
                        <span className="text-slate-400 text-xs block mt-1">Sujets par groupe (Total N=390)</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default CalculationWalkthroughView;
