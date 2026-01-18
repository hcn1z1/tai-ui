import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Roberts & Prewitt */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">1. Gradient Kernels</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Roberts */}
            <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 text-xs">Roberts Cross (2x2)</h4>
                <div className="flex gap-4 items-center">
                    <div className="font-mono bg-gray-100 p-2 rounded border grid grid-cols-2 gap-1 text-[10px] w-16 text-center">
                        <span>1</span><span>0</span><span>0</span><span>-1</span>
                    </div>
                    <div className="font-mono bg-gray-100 p-2 rounded border grid grid-cols-2 gap-1 text-[10px] w-16 text-center">
                        <span>0</span><span>1</span><span>-1</span><span>0</span>
                    </div>
                </div>
                <p className="text-[10px] text-gray-500 italic">Simplest, but very sensitive to noise.</p>
            </div>

            {/* Prewitt */}
            <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 text-xs">Prewitt Operators (3x3)</h4>
                <div className="flex gap-4 items-center">
                    <div className="font-mono bg-gray-100 p-2 rounded border grid grid-cols-3 gap-1 text-[10px] w-24 text-center">
                        <span>-1</span><span>0</span><span>1</span>
                        <span>-1</span><span>0</span><span>1</span>
                        <span>-1</span><span>0</span><span>1</span>
                    </div>
                    <div className="font-mono bg-gray-100 p-2 rounded border grid grid-cols-3 gap-1 text-[10px] w-24 text-center">
                        <span>-1</span><span>-1</span><span>-1</span>
                        <span>0</span><span>0</span><span>0</span>
                        <span>1</span><span>1</span><span>1</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Sobel */}
        <div className="mt-8 space-y-4 border-t pt-4">
            <h4 className="font-semibold text-gray-700 text-xs">Sobel Operators (Standard)</h4>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="text-center">
                    <div className="font-mono bg-gray-100 p-3 rounded border grid grid-cols-3 gap-2 text-xs w-32">
                        <span>-1</span><span>0</span><span>1</span>
                        <span>-2</span><span>0</span><span>2</span>
                        <span>-1</span><span>0</span><span>1</span>
                    </div>
                    <span className="text-[10px] font-bold">Gx</span>
                </div>
                <div className="text-center">
                    <div className="font-mono bg-gray-100 p-3 rounded border grid grid-cols-3 gap-2 text-xs w-32">
                        <span>-1</span><span>-2</span><span>-1</span>
                        <span>0</span><span>0</span><span>0</span>
                        <span>1</span><span>2</span><span>1</span>
                    </div>
                    <span className="text-[10px] font-bold">Gy</span>
                </div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-100 font-mono text-xs text-center">
                G = √(Gx² + Gy²) | θ = arctan(Gy / Gx)
            </div>
        </div>
      </div>

      {/* Laplacian of Gaussian */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">2. LoG (Laplacian of Gaussian)</h3>
        <p className="text-sm text-gray-600 mb-4">Combines Gaussian smoothing with the Laplacian to reduce noise sensitivity:</p>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg text-center font-mono text-sm leading-relaxed">
            LoG(x,y) = - [ 1 / (πσ⁴) ] · [ 1 - (x²+y²)/2σ² ] · e<sup>-(x²+y²)/2σ²</sup>
        </div>
        <div className="mt-4 flex justify-center">
            <div className="text-center">
                <h4 className="text-[10px] font-bold text-gray-400 mb-2">Approximate 5x5 LoG Kernel</h4>
                <div className="font-mono bg-gray-100 p-3 rounded border grid grid-cols-5 gap-1 text-[10px] w-48 text-center">
                    <span>0</span><span>0</span><span>-1</span><span>0</span><span>0</span>
                    <span>0</span><span>-1</span><span>-2</span><span>-1</span><span>0</span>
                    <span>-1</span><span>-2</span><span>16</span><span>-2</span><span>-1</span>
                    <span>0</span><span>-1</span><span>-2</span><span>-1</span><span>0</span>
                    <span>0</span><span>0</span><span>-1</span><span>0</span><span>0</span>
                </div>
            </div>
        </div>
      </div>

      {/* Harris Matrix */}
      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
        <h4 className="font-bold mb-4">Harris Corner Matrix (M)</h4>
        <div className="bg-blue-800 p-4 rounded font-mono text-sm mb-4">
            M = Σ<sub>w</sub> [ Ix² &nbsp;&nbsp; IxIy ] <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ IxIy &nbsp; Iy² ]
        </div>
        <h4 className="font-bold mb-2 text-xs">Response Function (R):</h4>
        <div className="bg-blue-800 p-3 rounded font-mono text-xs">
            R = det(M) - k · (trace(M))²
        </div>
        <p className="mt-3 text-[10px] text-blue-200 italic">
            * det(M) = λ₁λ₂ | trace(M) = λ₁ + λ₂
        </p>
      </div>
    </div>
  );
};

export default CalculationContent;
