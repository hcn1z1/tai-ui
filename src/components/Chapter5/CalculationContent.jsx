import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Set Theory Logic */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">1. Set Theory & Logical Relationships</h3>
        <p className="text-sm text-gray-600 mb-4">A = Image Set, B = SE Set, B<sub>z</sub> = SE translated by vector z:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded border border-green-100">
            <h4 className="font-semibold text-green-900 text-sm mb-1">Fit</h4>
            <div className="font-mono text-xs text-green-700">B<sub>z</sub> ⊆ A</div>
            <p className="text-[10px] mt-1 text-green-600">SE completely contained in object.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-1">Hit</h4>
            <div className="font-mono text-xs text-blue-700">B<sub>z</sub> ∩ A ≠ ∅</div>
            <p className="text-[10px] mt-1 text-blue-600">At least one point in SE overlaps object.</p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-100">
            <h4 className="font-semibold text-red-900 text-sm mb-1">Miss</h4>
            <div className="font-mono text-xs text-red-700">B<sub>z</sub> ∩ A = ∅</div>
            <p className="text-[10px] mt-1 text-red-600">SE does not overlap the object at all.</p>
          </div>
        </div>
      </div>

      {/* Primary Operations */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">2. Binary Morphology Formulas</h3>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 p-4 rounded border gap-2">
            <div>
                <span className="text-sm font-bold text-gray-700">Erosion (A ⊖ B)</span>
                <p className="text-[10px] text-gray-500 italic">Shrinks objects. Kept where SE fits.</p>
            </div>
            <div className="font-mono text-xs bg-white px-2 py-1 rounded shadow-sm">{"{ z | (B)z ⊆ A }"}</div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 p-4 rounded border gap-2">
            <div>
                <span className="text-sm font-bold text-gray-700">Dilation (A ⊕ B)</span>
                <p className="text-[10px] text-gray-500 italic">Expands objects. Reflected SE (B̂) hits A.</p>
            </div>
            <div className="font-mono text-xs bg-white px-2 py-1 rounded shadow-sm">{"{ z | (B̂)z ∩ A ≠ ∅ }"}</div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 p-4 rounded border gap-2">
            <div>
                <span className="text-sm font-bold text-gray-700">Hit-or-Miss Transform (A ⊛ B)</span>
                <p className="text-[10px] text-gray-500 italic">Detects specific patterns. B = (B1, B2).</p>
            </div>
            <div className="font-mono text-xs bg-white px-2 py-1 rounded shadow-sm">{"(A ⊖ B1) ∩ (Aᶜ ⊖ B2)"}</div>
          </div>
        </div>
      </div>

      {/* Grayscale Morphology */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">3. Grayscale Morphology</h3>
        <p className="text-xs text-gray-600 mb-4">Applied to image <span className="italic">f</span> and structuring element <span className="italic">b</span>:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 rounded border border-indigo-100">
                <h4 className="font-bold text-indigo-900 text-xs mb-2">Grayscale Dilation</h4>
                <div className="font-mono text-[10px] bg-white p-2 rounded">
                    (f ⊕ b)(s,t) = max{"{ f(s-x, t-y) + b(x,y) | (s-x, t-y) ∈ D_f, (x,y) ∈ D_b }"}
                </div>
            </div>
            <div className="p-4 bg-indigo-50 rounded border border-indigo-100">
                <h4 className="font-bold text-indigo-900 text-xs mb-2">Grayscale Erosion</h4>
                <div className="font-mono text-[10px] bg-white p-2 rounded">
                    (f ⊖ b)(s,t) = min{"{ f(s+x, t+y) - b(x,y) | (s+x, t+y) ∈ D_f, (x,y) ∈ D_b }"}
                </div>
            </div>
        </div>
      </div>

      {/* Duality & Properties */}
      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
        <h4 className="font-bold mb-4">Properties & Duality</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-[10px]">
            <div className="space-y-2">
                <div className="text-blue-200 uppercase font-bold border-b border-blue-800 pb-1">Set Duality</div>
                <div className="bg-blue-800 p-2 rounded">(A ⊖ B)ᶜ = Aᶜ ⊕ B̂</div>
                <div className="bg-blue-800 p-2 rounded">(A ⊕ B)ᶜ = Aᶜ ⊖ B̂</div>
            </div>
            <div className="space-y-2">
                <div className="text-blue-200 uppercase font-bold border-b border-blue-800 pb-1">Combined Ops</div>
                <div className="bg-blue-800 p-2 rounded">Opening: A ∘ B = (A ⊖ B) ⊕ B</div>
                <div className="bg-blue-800 p-2 rounded">Closing: A ● B = (A ⊕ B) ⊖ B</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
