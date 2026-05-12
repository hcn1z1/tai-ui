import React, { useState, useEffect, useMemo } from 'react';
import { X, Play, Pause, SkipForward, SkipBack, RefreshCw, Calculator, Table, Activity, TrendingUp, Info } from 'lucide-react';

const InteractiveCalculationOverlay = ({ algorithm, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoDelay, setAutoDelay] = useState(1000);
  
  // Local state for interactive inputs
  const [inputData, setInputData] = useState([10, 15, 20]); // For variance
  const [table2x2, setTable2x2] = useState({ a: 29, b: 151, c: 53, d: 479 }); // For Chi2/OR/RR

  const algorithmData = useMemo(() => {
    switch (algorithm) {
      case 'variance': {
        const n = inputData.length;
        const sum = inputData.reduce((a, b) => a + b, 0);
        const mean = sum / n;
        const steps = [];

        // Step 0: Intro
        steps.push({
          title: "Introduction: Dispersion",
          description: `Calcul de l'écart-type pour la série : [${inputData.join(', ')}]`,
          formula: "s = √[ Σ(xᵢ - x̄)² / (n - 1) ]",
          data: { inputData, mean: null, deviations: [], squares: [], sumSq: null },
          math: `Nombre de données (n) = ${n}`
        });

        // Step 1: Mean
        steps.push({
          title: "Étape 1 : Calculer la moyenne (x̄)",
          description: "La somme des valeurs divisée par l'effectif total.",
          formula: `x̄ = (${inputData.join(' + ')}) / ${n}`,
          data: { inputData, mean, deviations: [], squares: [], sumSq: null },
          math: `x̄ = ${sum} / ${n} = ${mean.toFixed(2)}`
        });

        // Steps for each deviation
        const deviations = inputData.map(x => x - mean);
        const squares = deviations.map(d => d * d);
        let currentSumSq = 0;

        inputData.forEach((x, i) => {
            currentSumSq += squares[i];
            steps.push({
                title: `Étape 2.${i+1} : Écart à la moyenne`,
                description: `Calcul de l'écart au carré pour la valeur x${i+1} = ${x}`,
                formula: `(x${i+1} - x̄)² = (${x} - ${mean.toFixed(2)})²`,
                data: { 
                    inputData, mean, 
                    deviations: deviations.slice(0, i + 1), 
                    squares: squares.slice(0, i + 1),
                    sumSq: null,
                    activeIdx: i
                },
                math: `${x} - ${mean.toFixed(2)} = ${deviations[i].toFixed(2)} \n→ ${deviations[i].toFixed(2)}² = ${squares[i].toFixed(2)}`
            });
        });

        // Step: Sum of squares
        steps.push({
            title: "Étape 3 : Somme des Carrés (SCE)",
            description: "Additionner tous les écarts élevés au carré.",
            formula: "Σ(xᵢ - x̄)²",
            data: { inputData, mean, deviations, squares, sumSq: currentSumSq },
            math: `${squares.map(s => s.toFixed(2)).join(' + ')} \n= ${currentSumSq.toFixed(2)}`
        });

        // Step: Variance
        const variance = currentSumSq / (n - 1);
        steps.push({
            title: "Étape 4 : Variance (s²)",
            description: "Diviser par le degré de liberté (n - 1).",
            formula: `s² = SCE / (${n} - 1)`,
            data: { inputData, mean, deviations, squares, sumSq: currentSumSq, variance },
            math: `${currentSumSq.toFixed(2)} / ${n-1} = ${variance.toFixed(2)}`
        });

        // Final Step: SD
        const sd = Math.sqrt(variance);
        steps.push({
            title: "Étape Finale : Écart-type (s)",
            description: "La racine carrée de la variance.",
            formula: "s = √s²",
            data: { inputData, mean, deviations, squares, sumSq: currentSumSq, variance, sd },
            math: `√${variance.toFixed(2)} = ${sd.toFixed(3)}`
        });

        return { steps, type: 'list' };
      }

      case 'chi2': {
        const { a, b, c, d } = table2x2;
        const row1 = a + b;
        const row2 = c + d;
        const col1 = a + c;
        const col2 = b + d;
        const T = a + b + c + d;

        const steps = [];

        // Observed Table
        steps.push({
            title: "Tableau de Contingence (Observé)",
            description: "Données brutes de l'étude (Effectifs observés).",
            formula: "X² = Σ [ (Oᵢⱼ - Eᵢⱼ)² / Eᵢⱼ ]",
            table: { a, b, c, d, row1, row2, col1, col2, T },
            math: `Total (T) = ${T}\nL'association est-elle due au hasard ?`,
            mode: 'observed'
        });

        // Expected Table Calculation
        const ea = (row1 * col1) / T;
        const eb = (row1 * col2) / T;
        const ec = (row2 * col1) / T;
        const ed = (row2 * col2) / T;

        steps.push({
            title: "Calcul des Effectifs Attendus (E)",
            description: "Ce qu'on attendrait si l'Exposition et la Maladie étaient indépendantes.",
            formula: "Eᵢⱼ = (Total Ligne × Total Colonne) / T",
            table: { a: ea, b: eb, c: ec, d: ed, row1, row2, col1, col2, T },
            math: `Ex: E(a) = (${row1} × ${col1}) / ${T} = ${ea.toFixed(2)}`,
            mode: 'expected'
        });

        // Chi2 components
        const ca = Math.pow(a - ea, 2) / ea;
        const cb = Math.pow(b - eb, 2) / eb;
        const cc = Math.pow(c - ec, 2) / ec;
        const cd = Math.pow(d - ed, 2) / ed;
        const totalX2 = ca + cb + cc + cd;

        steps.push({
            title: "Calcul du Chi-2 (Composantes)",
            description: "Mesure de l'écart entre l'observé et l'attendu pour chaque case.",
            formula: "(O - E)² / E",
            table: { a: ca, b: cb, c: cc, d: cd, T: totalX2 },
            math: `Case (a): (${a} - ${ea.toFixed(1)})² / ${ea.toFixed(1)} = ${ca.toFixed(3)}\nTotal X² = ${totalX2.toFixed(3)}`,
            mode: 'components'
        });

        // Final Decision
        const isSignificant = totalX2 > 3.84;
        steps.push({
            title: "Résultat et Décision",
            description: "Comparaison avec la valeur seuil (3.84 pour α=5% et ddl=1).",
            formula: "X² obs vs X² seuil",
            table: { a, b, c, d, T: totalX2 },
            math: `X² observé = ${totalX2.toFixed(3)}\nX² seuil (1ddl, 5%) = 3.84\n\nConclusion: ${isSignificant ? 'REJET de H0 (Significatif)' : 'NON REJET de H0 (Non significatif)'}`,
            mode: 'decision',
            highlight: isSignificant ? 'success' : 'neutral'
        });

        return { steps, type: 'table' };
      }

      default:
        return { steps: [] };
    }
  }, [algorithm, inputData, table2x2]);

  const step = algorithmData.steps[currentStep] || algorithmData.steps[0];

  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < algorithmData.steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, autoDelay);
    } else if (currentStep === algorithmData.steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, algorithmData.steps.length, autoDelay]);

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-50 px-8 py-6 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">{step.title}</h3>
              <p className="text-slate-500 text-sm font-medium">{step.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200 text-slate-400 hover:text-slate-600 rounded-full transition-all"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col lg:flex-row gap-10">

          {/* Visual Display */}
          <div className="flex-1 flex flex-col items-center justify-center">
            
            {algorithm === 'variance' && (
                <div className="w-full space-y-8">
                    {/* Data Points */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {step.data.inputData.map((val, i) => (
                            <div key={i} className={`
                                relative w-16 h-16 rounded-2xl flex flex-col items-center justify-center transition-all duration-500
                                ${step.data.activeIdx === i ? 'bg-indigo-600 text-white scale-110 shadow-xl shadow-indigo-200 ring-4 ring-indigo-100' : 'bg-slate-100 text-slate-400'}
                            `}>
                                <span className="text-[10px] absolute top-1 opacity-60">x{i+1}</span>
                                <span className="text-lg font-bold">{val}</span>
                            </div>
                        ))}
                    </div>

                    {/* Calculation Progress Table */}
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm overflow-hidden">
                        <table className="w-full text-sm text-center border-collapse">
                            <thead>
                                <tr className="text-[10px] text-slate-400 uppercase font-black tracking-widest border-b border-slate-200">
                                    <th className="pb-3">xᵢ</th>
                                    <th className="pb-3">x̄</th>
                                    <th className="pb-3">(xᵢ - x̄)</th>
                                    <th className="pb-3">(xᵢ - x̄)²</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono">
                                {step.data.inputData.map((val, i) => (
                                    <tr key={i} className={`transition-opacity duration-300 ${i <= (step.data.activeIdx ?? -1) || currentStep > 2 ? 'opacity-100' : 'opacity-0'}`}>
                                        <td className="py-2 font-bold text-slate-700">{val}</td>
                                        <td className="py-2 text-slate-400">{step.data.mean?.toFixed(1) || '?'}</td>
                                        <td className="py-2 text-indigo-600">{step.data.deviations[i]?.toFixed(1) || '?'}</td>
                                        <td className="py-2 font-bold text-indigo-700">{step.data.squares[i]?.toFixed(1) || '?'}</td>
                                    </tr>
                                ))}
                                {currentStep >= (step.data.inputData.length + 2) && (
                                    <tr className="border-t-2 border-slate-200 bg-white">
                                        <td colSpan="3" className="py-3 text-right pr-4 font-bold text-slate-500 uppercase text-[10px]">Somme (SCE) =</td>
                                        <td className="py-3 font-black text-indigo-900">{step.data.sumSq?.toFixed(1)}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {algorithm === 'chi2' && (
                <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-6 shadow-xl relative overflow-hidden">
                    {step.mode === 'decision' && (
                        <div className={`absolute top-0 left-0 right-0 h-2 ${step.highlight === 'success' ? 'bg-green-500' : 'bg-slate-400'}`}></div>
                    )}
                    <h4 className="text-center text-[10px] font-black text-slate-400 uppercase mb-4 tracking-[0.2em]">
                        {step.mode === 'observed' ? 'Effectifs Observés (O)' : step.mode === 'expected' ? 'Effectifs Attendus (E)' : 'Contribution au X²'}
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="p-2"></div>
                        <div className="p-2 text-center text-[10px] font-bold text-slate-500">M+</div>
                        <div className="p-2 text-center text-[10px] font-bold text-slate-500">M-</div>

                        <div className="p-2 flex items-center font-bold text-xs text-slate-500">E+</div>
                        <div className="aspect-square bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center font-mono font-bold text-indigo-600 shadow-inner">
                            {typeof step.table.a === 'number' ? step.table.a.toFixed(step.mode === 'observed' ? 0 : 2) : step.table.a}
                        </div>
                        <div className="aspect-square bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center font-mono font-bold text-slate-600 shadow-inner">
                            {typeof step.table.b === 'number' ? step.table.b.toFixed(step.mode === 'observed' ? 0 : 2) : step.table.b}
                        </div>

                        <div className="p-2 flex items-center font-bold text-xs text-slate-500">E-</div>
                        <div className="aspect-square bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center font-mono font-bold text-slate-600 shadow-inner">
                            {typeof step.table.c === 'number' ? step.table.c.toFixed(step.mode === 'observed' ? 0 : 2) : step.table.c}
                        </div>
                        <div className="aspect-square bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center font-mono font-bold text-slate-600 shadow-inner">
                            {typeof step.table.d === 'number' ? step.table.d.toFixed(step.mode === 'observed' ? 0 : 2) : step.table.d}
                        </div>
                    </div>
                    {step.table.T && (
                        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center px-2">
                            <span className="text-[10px] font-black text-slate-400 uppercase">{step.mode === 'components' || step.mode === 'decision' ? 'Total X²' : 'Total (T)'}</span>
                            <span className="text-xl font-black text-indigo-900">{step.table.T.toFixed(3)}</span>
                        </div>
                    )}
                </div>
            )}

          </div>

          {/* Math & Logic Sidebar */}
          <div className="w-full lg:w-96 flex flex-col gap-6">
            
            {/* Control Panel (Mini) */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mode Interactif</span>
                    <TrendingUp size={16} className="text-indigo-400" />
                </div>
                <div className="space-y-4">
                    {algorithm === 'variance' && (
                        <div>
                            <label className="text-[10px] text-slate-400 block mb-2 font-bold">Modifier les données (Série) :</label>
                            <div className="flex gap-2">
                                {[10, 15, 20, 25].map(preset => (
                                    <button 
                                        key={preset}
                                        onClick={() => { setInputData([preset-5, preset, preset+5]); handleReset(); }}
                                        className="bg-slate-800 hover:bg-indigo-600 px-3 py-1 rounded-lg text-xs font-mono transition-colors"
                                    >
                                        {preset}±5
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {algorithm === 'chi2' && (
                        <div>
                            <label className="text-[10px] text-slate-400 block mb-2 font-bold">Changer Effectifs (Case A) :</label>
                            <input 
                                type="range" min="10" max="100" value={table2x2.a}
                                onChange={(e) => { setTable2x2({...table2x2, a: parseInt(e.target.value)}); handleReset(); }}
                                className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                            />
                            <div className="flex justify-between text-[8px] font-bold text-slate-500 mt-1 uppercase">
                                <span>Faible Risque</span>
                                <span>Fort Risque</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Formula Card */}
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
              <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3 flex items-center">
                <Info size={14} className="mr-2" /> Formule en cours
              </h4>
              <div className="bg-white p-4 rounded-xl shadow-sm font-mono text-sm text-indigo-900 border border-indigo-200 break-words leading-relaxed">
                {step.formula || "Analyse en cours..."}
              </div>
            </div>

            {/* Step math details */}
            <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                <Activity size={14} className="mr-2" /> Résolution Directe
              </h4>
              <div className="whitespace-pre-line font-mono text-xs text-slate-700 leading-loose">
                {step.math}
              </div>
              
              <div className="mt-auto pt-6">
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase mb-2">
                    <span>Étape {currentStep + 1} / {algorithmData.steps.length}</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                    className="bg-indigo-600 h-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / algorithmData.steps.length) * 100}%` }}
                    ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleReset}
              className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl transition-all border border-transparent hover:border-slate-200"
              title="Reset"
            >
              <RefreshCw size={22} />
            </button>
            <div className="w-px h-8 bg-slate-200 mx-2"></div>
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="p-3 text-slate-400 hover:text-slate-800 disabled:opacity-20 transition-all"
            >
              <SkipBack size={24} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`
                flex items-center space-x-3 px-8 py-3 rounded-2xl font-black transition-all shadow-lg
                ${isPlaying
                  ? 'bg-amber-100 text-amber-600 border border-amber-200 hover:bg-amber-200'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'}
              `}
            >
              {isPlaying ? (
                <>
                  <Pause size={20} fill="currentColor" />
                  <span className="uppercase text-xs tracking-widest">Pause</span>
                </>
              ) : (
                <>
                  <Play size={20} fill="currentColor" />
                  <span className="uppercase text-xs tracking-widest">Lecture Auto</span>
                </>
              )}
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(algorithmData.steps.length - 1, currentStep + 1))}
              disabled={currentStep === algorithmData.steps.length - 1}
              className="p-3 text-slate-400 hover:text-slate-800 disabled:opacity-20 transition-all"
            >
              <SkipForward size={24} />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
             <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[10px] font-black text-slate-400 uppercase">Vitesse:</span>
                <select
                    value={autoDelay}
                    onChange={(e) => setAutoDelay(Number(e.target.value))}
                    className="bg-transparent text-xs text-slate-800 font-bold focus:outline-none cursor-pointer"
                >
                    <option value={2000}>Lente</option>
                    <option value={1000}>Normale</option>
                    <option value={400}>Rapide</option>
                </select>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCalculationOverlay;
