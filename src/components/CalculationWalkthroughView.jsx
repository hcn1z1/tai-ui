import React, { useState } from 'react';
import { Calculator, ArrowRight, Target, Maximize, Scissors, Binary, FlaskConical } from 'lucide-react';
import InteractiveCalculationOverlay from './InteractiveCalculationOverlay';

const CalculationWalkthroughView = () => {
  const [activeLab, setActiveLab] = useState(null);

  return (
    <div className="animate-fade-in space-y-8 pb-12">
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
        Detailed line-by-line breakdown of complex image processing algorithms.
      </p>

      {/* 1. SOBEL EDGE DETECTION */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
        <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-blue-900">1. Calculating Edges with Sobel</h3>
            <button
              onClick={() => setActiveLab('sobel')}
              className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              <FlaskConical size={12} />
              <span>INTERACTIVE LAB</span>
            </button>
          </div>
          <span className="text-[10px] font-bold bg-blue-200 text-blue-800 px-2 py-1 rounded-full uppercase tracking-wider">Gradient Operator</span>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700 underline decoration-blue-300">The Process:</p>
              <ul className="space-y-3">
                <li className="flex items-start text-xs">
                  <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                  <span>Select a 3x3 pixel neighborhood around target pixel <b>P(x,y)</b>.</span>
                </li>
                <li className="flex items-start text-xs">
                  <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                  <span>Calculate Horizontal Gradient <b>G<sub>x</sub></b>: Convolve the neighborhood with the Gx kernel. Sum (Kernel Value × Pixel Intensity).</span>
                </li>
                <li className="flex items-start text-xs">
                  <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                  <span>Calculate Vertical Gradient <b>G<sub>y</sub></b>: Convolve with Gy kernel. This detects horizontal edges.</span>
                </li>
                <li className="flex items-start text-xs">
                  <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
                  <span>Combine: Calculate Magnitude <b>G = √(G<sub>x</sub>² + G<sub>y</sub>²)</b>.</span>
                </li>
                <li className="flex items-start text-xs">
                  <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">5</span>
                  <span>Angle: Calculate <b>θ = atan2(G<sub>y</sub>, G<sub>x</sub>)</b> to find edge orientation.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase">Example Numerical Calculation:</p>
                <div className="font-mono text-[11px] space-y-2">
                    <div className="bg-white p-2 rounded border border-gray-100">
                        <span className="text-blue-700">Neighborhood I:</span><br/>
                        [10, 20, 10]<br/>
                        [10, 20, 10]<br/>
                        [10, 20, 10]
                    </div>
                    <div className="text-gray-500">G<sub>x</sub> = (-1*10 + 0*20 + 1*10) + (-2*10 + 0*20 + 2*10) + (-1*10 + 0*20 + 1*10) = <b>0</b></div>
                    <div className="text-gray-500">G<sub>y</sub> = (-1*10 + -2*20 + -1*10) + (0*10 + 0*20 + 0*10) + (1*10 + 2*20 + 1*10) = <b>0</b></div>
                    <p className="text-[9px] italic text-red-600">No gradient found in a uniform vertical stripe pattern with this specific symmetry.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LAPLACIAN EDGE DETECTION */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-red-50 px-6 py-4 border-b border-red-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-red-900">2. Calculating Edges with Laplacian</h3>
            <button
              onClick={() => setActiveLab('laplacian')}
              className="flex items-center space-x-1 px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-full hover:bg-red-700 transition-colors shadow-sm"
            >
              <FlaskConical size={12} />
              <span>INTERACTIVE LAB</span>
            </button>
          </div>
          <span className="text-[10px] font-bold bg-red-200 text-red-800 px-2 py-1 rounded-full uppercase tracking-wider">2nd Derivative</span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 text-xs">
                <p className="font-semibold">Line-by-Line Logic:</p>
                <div className="bg-gray-50 p-3 rounded space-y-2">
                    <div><b>1. Input:</b> Grayscale image I(x,y).</div>
                    <div><b>2. Kernel Selection:</b> Use a 3x3 kernel (Sum = 0). Center is typically 4 or 8, neighbors are -1.</div>
                    <div><b>3. Summing Neighbors:</b>
                        <br/><span className="text-gray-500 font-mono">L(x,y) = [I(x+1,y) + I(x-1,y) + I(x,y+1) + I(x,y-1)] - 4*I(x,y)</span>
                    </div>
                    <div><b>4. Identifying Edges:</b> Look for <b>Zero Crossings</b>. The second derivative passes through zero at the center of an edge.</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4 bg-red-50 rounded-lg">
                <div className="text-xs font-bold mb-2">Edge Profile</div>
                <div className="w-full h-24 flex items-end space-x-1">
                    <div className="w-4 h-4 bg-blue-200"></div>
                    <div className="w-4 h-8 bg-blue-300"></div>
                    <div className="w-4 h-16 bg-blue-500"></div>
                    <div className="w-4 h-16 bg-blue-500"></div>
                    <div className="w-4 h-8 bg-blue-300"></div>
                    <div className="w-4 h-4 bg-blue-200"></div>
                </div>
                <p className="text-[9px] mt-4 text-center">Laplacian peaks at intensity changes and crosses zero at the exact edge boundary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GAUSSIAN KERNEL CALCULATION */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-cyan-50 px-6 py-4 border-b border-cyan-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-cyan-900">3. Gaussian Matrix Construction</h3>
            <button
              onClick={() => setActiveLab('gaussian')}
              className="flex items-center space-x-1 px-3 py-1 bg-cyan-600 text-white text-[10px] font-bold rounded-full hover:bg-cyan-700 transition-colors shadow-sm"
            >
              <FlaskConical size={12} />
              <span>INTERACTIVE LAB</span>
            </button>
          </div>
          <span className="text-[10px] font-bold bg-cyan-200 text-cyan-800 px-2 py-1 rounded-full uppercase tracking-wider">Smoothing Filter</span>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-xs text-gray-600">Steps to generate a (2k+1)×(2k+1) Gaussian matrix given <b>σ</b> (sigma) and <b>k</b> (radius):</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-3">
                <div className="flex items-start">
                  <span className="font-bold text-cyan-700 mr-2">1.</span>
                  <p className="text-[11px]"><b>Define Size:</b> The kernel size is N = 2k + 1. If k=1, size is 3x3. If k=2, size is 5x5.</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-cyan-700 mr-2">2.</span>
                  <p className="text-[11px]"><b>Set Coordinates:</b> Map pixel indices (i, j) to relative offsets (x, y) where the center is (0,0).<br/>
                  <span className="italic opacity-70">x = i - k, y = j - k</span></p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-cyan-700 mr-2">3.</span>
                  <p className="text-[11px]"><b>Compute Unnormalized:</b> For each cell, calculate:<br/>
                  <span className="font-mono bg-white p-1 rounded border inline-block mt-1">G'(x,y) = e^-( (x²+y²) / 2σ² )</span></p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-cyan-700 mr-2">4.</span>
                  <p className="text-[11px]"><b>Normalize:</b> Divide each value by the sum of all values in the matrix to ensure Sum(G) = 1.</p>
                </div>
              </div>
            </div>
            <div className="bg-cyan-900 text-cyan-50 p-4 rounded-lg font-mono text-[10px] space-y-2">
                <p className="text-cyan-300 border-b border-cyan-800 pb-1 mb-2 uppercase text-[9px]">Manual Example (σ=1.0, k=1):</p>
                <div className="grid grid-cols-3 gap-1 text-center">
                    <div className="bg-cyan-800 p-1">0.36</div><div className="bg-cyan-800 p-1">0.60</div><div className="bg-cyan-800 p-1">0.36</div>
                    <div className="bg-cyan-800 p-1">0.60</div><div className="bg-cyan-800 p-1">1.00</div><div className="bg-cyan-800 p-1">0.60</div>
                    <div className="bg-cyan-800 p-1">0.36</div><div className="bg-cyan-800 p-1">0.60</div><div className="bg-cyan-800 p-1">0.36</div>
                </div>
                <p className="pt-2 text-[9px]">1. Sum of all cells ≈ 4.84</p>
                <p className="text-[9px]">2. Divide center (1.00 / 4.84) ≈ 0.206</p>
                <p className="text-[9px] text-cyan-400">Final Center Weight: 0.206</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIFT PIPELINE */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-green-50 px-6 py-4 border-b border-green-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-green-900">4. SIFT (Scale-Invariant Feature Transform)</h3>
            <button
              onClick={() => setActiveLab('sift')}
              className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white text-[10px] font-bold rounded-full hover:bg-green-700 transition-colors shadow-sm"
            >
              <FlaskConical size={12} />
              <span>INTERACTIVE LAB</span>
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="relative border-l-2 border-green-200 ml-3 pl-8 space-y-8">
              {/* Step 1 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-4 border-white shadow-sm">1</span>
                <h4 className="font-bold text-sm text-green-800">Scale-Space Extrema Detection</h4>
                <p className="text-xs text-gray-600 mt-1">
                  <b>How:</b> Subtract adjacent blurred images (Difference of Gaussians). Search for local maxima/minima across scales.
                  <br/><span className="font-mono bg-gray-100 p-0.5 px-1 mt-1 block">DoG(x,y,σ) = L(x,y,kσ) - L(x,y,σ)</span>
                </p>
              </div>
              {/* Step 2 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-4 border-white shadow-sm">2</span>
                <h4 className="font-bold text-sm text-green-800">Keypoint Localization</h4>
                <p className="text-xs text-gray-600 mt-1">
                  <b>How:</b> Perform sub-pixel localization using Taylor expansion. Discard points with low contrast or points on edges (unstable).
                </p>
              </div>
              {/* Step 3 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-4 border-white shadow-sm">3</span>
                <h4 className="font-bold text-sm text-green-800">Orientation Assignment</h4>
                <p className="text-xs text-gray-600 mt-1">
                  <b>How:</b> Create a histogram of local gradient directions. Assign the peak orientation to the keypoint to achieve <b>Rotation Invariance</b>.
                </p>
              </div>
              {/* Step 4 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-4 border-white shadow-sm">4</span>
                <h4 className="font-bold text-sm text-green-800">Keypoint Descriptor</h4>
                <p className="text-xs text-gray-600 mt-1">
                  <b>How:</b> Take a 16x16 window around the keypoint. Divide into 4x4 subregions. For each subregion, create 8-bin orientation histogram.
                  Result: <b>4x4x8 = 128 elements</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRUCTURING ELEMENT (SE) */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-yellow-50 px-6 py-4 border-b border-yellow-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-yellow-900">5. Morphological SE Operations</h3>
            <button
              onClick={() => setActiveLab('morphology')}
              className="flex items-center space-x-1 px-3 py-1 bg-yellow-600 text-white text-[10px] font-bold rounded-full hover:bg-yellow-700 transition-colors shadow-sm"
            >
              <FlaskConical size={12} />
              <span>INTERACTIVE LAB</span>
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-bold mb-3 flex items-center text-yellow-800">
                    <Binary size={16} className="mr-2"/> Calculation Logic: Erosion
                </h4>
                <div className="space-y-3 text-xs">
                    <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        <p><b>Step 1:</b> Center the SE (B) on image pixel (z).</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        <p><b>Step 2:</b> Check if <b>B<sub>z</sub> ⊆ A</b> (Does the SE <u>FIT</u> entirely?)</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        <p><b>Step 3:</b> If all '1's in SE overlap with '1's in image, result is <b>1</b>. Else <b>0</b>.</p>
                    </div>
                    <div className="mt-4 p-2 bg-white rounded border border-gray-200 italic text-[10px]">
                        Result: Objects smaller than SE are removed.
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-bold mb-3 flex items-center text-yellow-800">
                    <Maximize size={16} className="mr-2"/> Calculation Logic: Dilation
                </h4>
                <div className="space-y-3 text-xs">
                    <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                        <p><b>Step 1:</b> Reflect SE around origin (if not symmetric).</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                        <p><b>Step 2:</b> Check if <b>B̂<sub>z</sub> ∩ A ≠ ∅</b> (Does the SE <u>HIT</u>?)</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                        <p><b>Step 3:</b> If at least one '1' in SE overlaps with a '1' in image, result is <b>1</b>.</p>
                    </div>
                    <div className="mt-4 p-2 bg-white rounded border border-gray-200 italic text-[10px]">
                        Result: Objects grow; gaps are filled.
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HARRIS CORNER DETECTION */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-indigo-900">6. Harris Corner Detection</h3>
            <button
              onClick={() => setActiveLab('harris')}
              className="flex items-center space-x-1 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <FlaskConical size={12} />
              <span>INTERACTIVE LAB</span>
            </button>
          </div>
          <span className="text-[10px] font-bold bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full uppercase tracking-wider">Feature Detection</span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-indigo-800">The Harris Algorithm:</h4>
              <div className="space-y-3 text-xs text-gray-700">
                <p><b>1. Derivatives:</b> Calculate Ix and Iy using Sobel operators.</p>
                <p><b>2. Products:</b> Compute Ix², Iy², and IxIy for each pixel.</p>
                <p><b>3. Weighted Sum:</b> Apply a Gaussian or box filter to the products to get M = Σ w * [[Ix², IxIy], [IxIy, Iy²]].</p>
                <p><b>4. Score:</b> R = det(M) - k(trace(M))², where k is typically 0.04 to 0.06.</p>
              </div>
            </div>
            <div className="bg-indigo-900 text-indigo-100 p-5 rounded-lg font-mono text-[10px] leading-relaxed">
              <p className="text-indigo-300 mb-2 uppercase border-b border-indigo-800 pb-1">Response Interpretation:</p>
              <ul className="space-y-2">
                <li><span className="text-green-400">R &gt; 0:</span> Corner (both λ1, λ2 are large)</li>
                <li><span className="text-red-400">R &lt; 0:</span> Edge (one λ is much larger than other)</li>
                <li><span className="text-gray-400">|R| small:</span> Flat region (both λ are small)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculationWalkthroughView;
