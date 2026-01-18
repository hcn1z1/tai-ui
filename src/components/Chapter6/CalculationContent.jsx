import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* DoG Calculation */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">1. Difference of Gaussians (DoG)</h3>
        <p className="text-sm text-gray-600 mb-4">SIFT approximates the scale-normalized Laplacian of Gaussian <span className="font-mono italic">σ²∇²G</span>:</p>
        <div className="bg-blue-900 text-white p-6 rounded-lg font-mono text-center text-sm shadow-inner leading-relaxed">
          D(x, y, σ) = (G(x, y, kσ) - G(x, y, σ)) * I(x, y) <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= L(x, y, kσ) - L(x, y, σ)
        </div>
        <p className="mt-4 text-[10px] text-gray-500 italic">
          * Successive blurred images are subtracted to find stable keypoints across scales.
        </p>
      </div>

      {/* Localization */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">2. Keypoint Localization & Refinement</h3>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <h4 className="font-semibold text-gray-800 text-xs mb-2">Taylor Expansion of Scale-Space D:</h4>
                <div className="font-mono text-[10px] bg-white p-3 rounded text-center">
                    D(x) = D + (∂Dᵀ/∂x)x + ½ xᵀ(∂²D/∂x²)x
                </div>
                <p className="text-[9px] text-gray-500 mt-2 italic">* x = (x, y, σ)ᵀ is the offset from the sample point.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-red-50 rounded border border-red-100">
                    <h5 className="font-bold text-red-900 text-[10px] mb-1 text-center">Contrast Thresholding</h5>
                    <div className="font-mono text-xs text-center">|D(x̂)| &lt; 0.03</div>
                    <p className="text-[9px] text-red-700 mt-1">Discards points with low contrast (unstable).</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded border border-yellow-100">
                    <h5 className="font-bold text-yellow-900 text-[10px] mb-1 text-center">Edge Rejection (Hessian Curve)</h5>
                    <div className="font-mono text-[10px] text-center">Tr(H)² / Det(H) &lt; (r+1)² / r</div>
                    <p className="text-[9px] text-yellow-700 mt-1">Eliminates points poorly localized along edges (threshold r=10).</p>
                </div>
            </div>
        </div>
      </div>

      {/* Magnitude and Orientation */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">3. Gradient & Orientation Calculation</h3>
        <p className="text-xs text-gray-600 mb-4">Calculated for each pixel L(x,y) at its closest scale σ:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="bg-blue-50 p-4 rounded border border-blue-100">
                <span className="font-bold block mb-2 text-blue-900 text-center">Magnitude (m)</span>
                <div className="bg-white p-2 rounded text-center">m = √[(L<sub>x+1</sub>-L<sub>x-1</sub>)² + (L<sub>y+1</sub>-L<sub>y-1</sub>)²]</div>
            </div>
            <div className="bg-blue-50 p-4 rounded border border-blue-100">
                <span className="font-bold block mb-2 text-blue-900 text-center">Orientation (θ)</span>
                <div className="bg-white p-2 rounded text-center">θ = tan⁻¹[ (L<sub>y+1</sub>-L<sub>y-1</sub>) / (L<sub>x+1</sub>-L<sub>x-1</sub>) ]</div>
            </div>
        </div>
      </div>

      {/* Matching Rules */}
      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
        <h4 className="font-bold mb-4">Matching & Ratio Test</h4>
        <div className="space-y-4">
            <div className="bg-blue-800 p-3 rounded">
                <span className="text-xs font-bold block mb-1">Euclidean Distance:</span>
                <div className="font-mono text-sm text-center">Dist = √ [ Σ (d<sub>ai</sub> - d<sub>bi</sub>)² ]</div>
            </div>
            <div className="bg-blue-800 p-3 rounded">
                <span className="text-xs font-bold block mb-1">Lowe's Ratio Test:</span>
                <div className="font-mono text-sm text-center text-yellow-400">Dist<sub>1</sub> / Dist<sub>2</sub> &lt; 0.8</div>
                <p className="text-[10px] mt-2 opacity-80">
                    Accept match only if the distance ratio between the nearest and next-nearest neighbor is less than 0.8.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
