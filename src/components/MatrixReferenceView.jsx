import React from 'react';
import { LayoutGrid, Database, Activity, Search, AlertCircle, Apple } from 'lucide-react';

const FormulaBox = ({ title, description, formula, type = "default" }) => {
    const bgColors = {
        "default": "bg-white",
        "primary": "bg-blue-50",
        "accent": "bg-indigo-50",
        "danger": "bg-red-50",
        "success": "bg-green-50"
    };

    return (
        <div className={`${bgColors[type]} p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col h-full`}>
            <h4 className="font-bold text-blue-900 text-sm mb-1">{title}</h4>
            <p className="text-[10px] text-gray-500 mb-4 italic leading-tight">{description}</p>
            <div className="mt-auto flex justify-center">
                <div className="bg-gray-900 text-white p-3 rounded font-mono text-[11px] text-center w-full shadow-inner overflow-x-auto">
                    {formula}
                </div>
            </div>
        </div>
    );
};

const MatrixReferenceView = () => {
  return (
    <div className="animate-fade-in space-y-10 pb-20">
      <div className="flex items-center space-x-3 mb-2">
        <LayoutGrid className="text-blue-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-800">Stats Cheat Sheet</h2>
      </div>
      <p className="text-gray-500 italic border-l-4 border-blue-400 pl-4">A complete reference guide for Biostatistics and Nutritional Epidemiology.</p>

      {/* 1. DATA & VARIABLES */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">
          <Database size={20} className="text-blue-500" />
          I. Nature des Variables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-sm text-blue-800 mb-3 uppercase tracking-wider">Quantitatives (Mesurables)</h4>
                <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-bold text-xs block text-blue-700">Continue</span>
                        <p className="text-[10px] text-gray-600">Peut prendre n'importe quelle valeur dans un intervalle (ex: Taille, Poids, Glycémie).</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-bold text-xs block text-blue-700">Discrète</span>
                        <p className="text-[10px] text-gray-600">Valeurs entières uniquement, souvent des comptages (ex: Nombre d'enfants, Fréquence cardiaque).</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-sm text-indigo-800 mb-3 uppercase tracking-wider">Qualitatives (Catégorielles)</h4>
                <div className="space-y-3">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                        <span className="font-bold text-xs block text-indigo-700">Nominale</span>
                        <p className="text-[10px] text-gray-600">Catégories sans ordre intrinsèque (ex: Groupe sanguin A/B/O, Sexe, Couleur des yeux).</p>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded-lg">
                        <span className="font-bold text-xs block text-indigo-700">Ordonnée (Ordinal)</span>
                        <p className="text-[10px] text-gray-600">Relation d'ordre entre les catégories (ex: Stade cancer I/II/III, Niveau d'éducation).</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. FREQUENCY METRICS */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-700 mb-4 border-l-4 border-green-500 pl-3">
          <Activity size={20} className="text-green-500" />
          II. Mesures de Fréquence
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormulaBox
                title="Prévalence (P)"
                description="Stock de malades à un instant t. Mesure transversale."
                formula="P = Cas / Pop_Totale"
                type="primary"
            />
            <FormulaBox
                title="Incidence Cumulée (IC)"
                description="Risque de survenue sur [t0, t1]. Mesure longitudinale."
                formula="IC = Nouv_Cas / Pop_Risque"
                type="primary"
            />
            <FormulaBox
                title="Taux d'Incidence (TI)"
                description="Vitesse d'apparition (Densité). Dénominateur en Personnes-Temps."
                formula="TI = Nouv_Cas / PT"
                type="primary"
            />
        </div>
      </section>

      {/* 3. ASSOCIATION MEASURES */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-700 mb-4 border-l-4 border-indigo-500 pl-3">
          <Search size={20} className="text-indigo-500" />
          III. Mesures d'Association
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FormulaBox
                title="Risque Relatif (RR)"
                description="Cohorte. Rapport des incidences."
                formula="RR = Ie / Ine"
                type="accent"
            />
            <FormulaBox
                title="Odds Ratio (OR)"
                description="Cas-Témoins. Rapport des cotes d'expo."
                formula="OR = (ad) / (bc)"
                type="accent"
            />
            <FormulaBox
                title="Risque Attribuable (RA)"
                description="Excès de risque lié au facteur."
                formula="RA = Ie - Ine"
                type="accent"
            />
            <FormulaBox
                title="Test du Chi-2 (X²)"
                description="Significativité de l'association."
                formula="X² = Σ (O-E)² / E"
                type="danger"
            />
        </div>
      </section>

      {/* 4. NUTRITIONAL ASSESSMENT METHODS */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-700 mb-4 border-l-4 border-orange-500 pl-3">
          <Apple size={20} className="text-orange-500" />
          IV. Méthodes d'Évaluation Nutritionnelle
        </h3>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-[10px] text-left border-collapse">
                    <thead className="bg-gray-800 text-white font-bold uppercase tracking-tighter">
                        <tr>
                            <th className="p-3 border border-gray-700">Méthode</th>
                            <th className="p-3 border border-gray-700">Description</th>
                            <th className="p-3 border border-gray-700">Avantages</th>
                            <th className="p-3 border border-gray-700">Inconvénients</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="p-3 border font-bold bg-gray-50">Rappel des 24h</td>
                            <td className="p-3 border italic">Description de tout ce qui a été mangé la veille.</td>
                            <td className="p-3 border text-green-700 font-semibold">Rapide (20 min), peu contraignant, récent.</td>
                            <td className="p-3 border text-red-700">Biais de mémoire, 1 jour ≠ conso habituelle.</td>
                        </tr>
                        <tr>
                            <td className="p-3 border font-bold bg-gray-50">FFQ (Fréquence)</td>
                            <td className="p-3 border italic">Liste d'aliments prédéfinis + fréquence de conso.</td>
                            <td className="p-3 border text-green-700 font-semibold">Grande échelle, faible coût, conso habituelle.</td>
                            <td className="p-3 border text-red-700">Mémorisation difficile des quantités, liste fermée.</td>
                        </tr>
                        <tr>
                            <td className="p-3 border font-bold bg-gray-50">Enregistrement</td>
                            <td className="p-3 border italic">Note en temps réel (pesée ou estimation visuelle).</td>
                            <td className="p-3 border text-green-700 font-semibold">Méthode de référence, précis, pas de mémoire.</td>
                            <td className="p-3 border text-red-700">Très contraignant, risque de changer d'alimentation.</td>
                        </tr>
                        <tr>
                            <td className="p-3 border font-bold bg-gray-50">Histoire Diet.</td>
                            <td className="p-3 border italic">Entretien approfondi sur les habitudes typiques.</td>
                            <td className="p-3 border text-green-700 font-semibold">Information très complète, long terme.</td>
                            <td className="p-3 border text-red-700">Long, coûteux, dépend de l'enquêteur.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* 5. BIASES & ERRORS */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-700 mb-4 border-l-4 border-red-500 pl-3">
          <AlertCircle size={20} className="text-red-500" />
          V. Biais et Erreurs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-red-50 rounded-xl border border-red-100">
                <h4 className="font-bold text-sm text-red-900 mb-2">Biais Systématiques</h4>
                <ul className="text-[10px] text-red-800 space-y-2 list-disc list-inside">
                    <li><strong>Biais de Sélection :</strong> Échantillon non représentatif (ex: perdus de vue).</li>
                    <li><strong>Biais de Classement :</strong> Erreur dans la mesure de l'expo ou maladie.</li>
                    <li><strong>Biais de Confusion :</strong> Existence d'un tiers facteur lié à l'expo et à la maladie.</li>
                    <li><strong>Biais de Mémorisation :</strong> Oubli sélectif (fréquent en Cas-Témoins).</li>
                </ul>
            </div>
            <div className="p-5 bg-yellow-50 rounded-xl border border-yellow-100">
                <h4 className="font-bold text-sm text-yellow-900 mb-2">Erreurs Aléatoires</h4>
                <p className="text-[10px] text-yellow-800 mb-2 italic">Dues au hasard (fluctuations d'échantillonnage).</p>
                <div className="bg-white p-3 rounded-lg border border-yellow-200">
                    <span className="font-bold text-[11px] block mb-1">Solution :</span>
                    <ul className="text-[10px] text-gray-600 space-y-1">
                        <li>• Augmenter la taille de l'échantillon (N).</li>
                        <li>• Augmenter la durée de l'étude.</li>
                        <li>• Répéter les mesures (ex: plusieurs rappels de 24h).</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 6. SAMPLE SIZE FORMULA (BONUS) */}
      <section className="pb-10">
        <h3 className="text-lg font-bold text-gray-700 mb-4 border-l-4 border-gray-400 pl-3">VI. Calcul de l'Échantillon (Cohorte)</h3>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-xl">
            <p className="text-xs text-gray-400 mb-4 italic">Nombre de sujets nécessaires par cohorte pour un risque α et une puissance 1-β.</p>
            <div className="bg-gray-800 p-4 rounded-lg font-mono text-xs text-center border border-gray-700 overflow-x-auto leading-loose">
                n ≥ [ (Zα√2P(1-P) + Zβ√I₁(1-I₁) + I₀(1-I₀)) / (I₁ - I₀) ]²
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-[9px] text-gray-400">
                <div><span className="text-blue-400 font-bold">Zα:</span> 1.96 (pour α=5%)</div>
                <div><span className="text-blue-400 font-bold">Zβ:</span> 0.84 (pour β=20%)</div>
                <div><span className="text-blue-400 font-bold">I₀:</span> Incidence chez NE</div>
                <div><span className="text-blue-400 font-bold">I₁:</span> Incidence chez E (I₁ = RR * I₀)</div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MatrixReferenceView;
