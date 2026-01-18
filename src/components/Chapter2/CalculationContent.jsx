import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Arithmetic Formulas */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">1. Point Transform Formulas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-2">Logarithmic Transform</h4>
            <div className="font-mono text-sm bg-white p-2 rounded border border-blue-200">
              I<sub>out</sub> = c · ln(1 + I<sub>in</sub>)
            </div>
            <p className="text-[10px] text-blue-700 mt-2">Used to expand dark regions.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-2">Exponential Transform</h4>
            <div className="font-mono text-sm bg-white p-2 rounded border border-blue-200">
              I<sub>out</sub> = e<sup>(I<sub>in</sub>)</sup>
            </div>
            <p className="text-[10px] text-blue-700 mt-2">Enhances details in bright regions.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-2">Gamma (Power-Law)</h4>
            <div className="font-mono text-sm bg-white p-2 rounded border border-blue-200">
              I<sub>out</sub> = c · I<sub>in</sub><sup>γ</sup>
            </div>
            <p className="text-[10px] text-blue-700 mt-2">γ &gt; 1: High-value contrast.<br/>γ &lt; 1: Low-value contrast.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-2">Image NOT (Inversion)</h4>
            <div className="font-mono text-sm bg-white p-2 rounded border border-blue-200">
              P<sub>out</sub> = (L - 1) - P<sub>in</sub>
            </div>
            <p className="text-[10px] text-blue-700 mt-2">Where L is the number of intensity levels (e.g., 256).</p>
          </div>
        </div>
      </div>

      {/* Normalization & Contrast Stretching */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">2. Normalization / Contrast Stretching</h3>
        <p className="text-sm text-gray-600 mb-4">Stretches the input intensity range [min, max] to a target range [0, L-1]:</p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-lg text-center shadow-inner">
          I<sub>norm</sub> = (I - I<sub>min</sub>) · [ (L - 1) / (I<sub>max</sub> - I<sub>min</sub>) ]
        </div>
        <div className="mt-4 p-3 bg-gray-50 border rounded text-[10px] text-gray-500 italic">
            * Example: If image range is [50, 150], it stretches values to [0, 255] for full 8-bit dynamic range.
        </div>
      </div>

      {/* Thresholding */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">3. Thresholding Rule</h3>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
          <p className="text-sm text-yellow-900 font-mono mb-2">
            if (I<sub>in</sub>(i,j) &gt; T) then I<sub>out</sub>(i,j) = 1<br/>
            else I<sub>out</sub>(i,j) = 0
          </p>
          <div className="text-[10px] text-yellow-700">
            <strong>Optimal T:</strong> Often found at the valley of a bi-modal histogram.
          </div>
        </div>
      </div>

      {/* Histogram Calculation */}
      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
        <h4 className="font-bold mb-2">Histogram Function</h4>
        <p className="text-sm opacity-90 mb-4">
          For each possible intensity level <span className="italic">v</span> in the range [0, L-1]:
        </p>
        <div className="bg-blue-800 p-4 rounded font-mono text-base text-center">
          h(v) = Count of pixels with value <span className="italic">v</span>
        </div>
        <p className="mt-4 text-[10px] opacity-70 italic text-center">
            * Normalizing the histogram: p(v) = h(v) / (N × M), where p(v) is the probability of intensity v.
        </p>
      </div>
    </div>
  );
};

export default CalculationContent;
