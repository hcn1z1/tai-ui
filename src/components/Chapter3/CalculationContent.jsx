import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* Distance Measures */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">1. Distance Measures</h3>
        <p className="text-sm text-gray-600 mb-4">
          Given pixels <span className="font-mono bg-gray-100 px-1">p(x,y)</span> and <span className="font-mono bg-gray-100 px-1">q(s,t)</span>:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-2">Euclidean (De)</h4>
            <div className="font-mono text-sm">
              √[(x-s)² + (y-t)²]
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-2">Manhattan (D4)</h4>
            <div className="font-mono text-sm">
              |x-s| + |y-t|
            </div>
            <div className="text-xs text-blue-700 mt-1">Diamond shape</div>
          </div>
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-2">Chessboard (D8)</h4>
            <div className="font-mono text-sm">
              max(|x-s|, |y-t|)
            </div>
            <div className="text-xs text-blue-700 mt-1">Square shape</div>
          </div>
        </div>
      </div>

      {/* Convolution & Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">2. Linear Filters & Kernels</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
                <h4 className="font-semibold text-gray-700 text-xs mb-2">The Mean Filter (3x3)</h4>
                <div className="font-mono bg-gray-100 p-4 rounded text-center border border-gray-300">
                    <div className="grid grid-cols-3 gap-2 text-[10px]">
                    <span>1/9</span><span>1/9</span><span>1/9</span>
                    <span>1/9</span><span>1/9</span><span>1/9</span>
                    <span>1/9</span><span>1/9</span><span>1/9</span>
                    </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 italic">* General weight = 1/(N×M)</p>
            </div>
            <div className="bg-indigo-900 text-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-xs mb-2">Gaussian Filter Formula</h4>
                <div className="font-mono text-[10px] leading-relaxed">
                    G(x,y) = [ 1 / (2πσ²) ] · e<sup>-(x²+y²)/(2σ²)</sup>
                </div>
                <p className="text-[9px] mt-2 opacity-80">
                    σ (Sigma) controls the spread/blurring. Larger σ = smoother result.
                </p>
            </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 text-xs mb-2 underline">Convolution Algorithm Steps:</h4>
          <ol className="list-decimal list-inside text-xs text-gray-700 space-y-1 bg-gray-50 p-4 rounded border">
            <li><strong>Rotate:</strong> Kernel by 180° (Flip H & V).</li>
            <li><strong>Slide:</strong> Kernel over image pixel (x,y).</li>
            <li><strong>Multiply:</strong> Overlapping kernel and image values.</li>
            <li><strong>Sum:</strong> All products to get the new pixel value.</li>
          </ol>
        </div>
      </div>

      {/* Practical Matrix */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">3. Practice Matrix (TD3)</h3>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div>
            <p className="text-xs text-gray-600 mb-2 font-mono">Image Matrix I (0-255):</p>
            <div className="font-mono bg-gray-900 text-green-400 p-4 rounded-lg inline-block text-xs">
              <div className="grid grid-cols-5 gap-4 text-center">
                <span>12</span><span>25</span><span>37</span><span>45</span><span>60</span>
                <span>20</span><span>40</span><span>80</span><span>100</span><span>120</span>
                <span>30</span><span>70</span><span>150</span><span>180</span><span>200</span>
                <span>50</span><span>110</span><span>210</span><span>225</span><span>255</span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded border border-yellow-200 flex-1 h-full">
            <h4 className="font-semibold text-yellow-900 text-sm mb-2 underline">Target Pixels</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="font-bold">A(1, 2)</span> = Intensity 80 (Row 2, Col 3)</li>
              <li><span className="font-bold">B(4, 4)</span> = Intensity 225 (Row 4, Col 4)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
