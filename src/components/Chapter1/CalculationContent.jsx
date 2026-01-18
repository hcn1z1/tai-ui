import React from 'react';

const CalculationContent = () => {
  return (
    <div className="space-y-6">
      {/* RGB to Grayscale */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">1. RGB to Grayscale Conversion</h3>
        <p className="text-sm text-gray-600 mb-4">
          Weighted average based on human visual sensitivity (ITU-R BT.601 standard):
        </p>
        <div className="bg-blue-900 text-white p-6 rounded-lg text-center font-mono text-lg shadow-inner">
          Y' = 0.299·R + 0.587·G + 0.114·B
        </div>
        <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-100 text-xs text-yellow-800">
          <strong>Note:</strong> We are most sensitive to Green, then Red, and least to Blue. Simple averaging (R+G+B)/3 does not reflect human perception.
        </div>
      </div>

      {/* Coordinate Conversion */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">2. Coordinate System Conversion</h3>
        <p className="text-sm text-gray-600 mb-4">
          Transforming between Cartesian <span className="font-mono bg-gray-100 px-1">(x, y)</span> and Polar <span className="font-mono bg-gray-100 px-1">(r, θ)</span>:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-2">Cartesian to Polar</h4>
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-white p-2 rounded">r = √(x² + y²)</div>
              <div className="bg-white p-2 rounded">θ = arctan(y / x)</div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-900 text-sm mb-2">Polar to Cartesian</h4>
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-white p-2 rounded">x = r · cos(θ)</div>
              <div className="bg-white p-2 rounded">y = r · sin(θ)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantization & Bit Depth */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">3. Quantization & Bit Depth</h3>
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <p className="text-sm text-gray-700 mb-2">Discrete intensity levels <span className="font-bold italic">L</span> given bit depth <span className="font-bold italic">k</span>:</p>
          <div className="font-mono text-xl text-center py-4 text-blue-900">
            L = 2<sup>k</sup>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="text-[10px] text-gray-500 border-r pr-4">
              <span className="font-bold">k = 1 bit:</span> L = 2 (Binary)
            </div>
            <div className="text-[10px] text-gray-500">
              <span className="font-bold">k = 8 bits:</span> L = 256 (Grayscale)
            </div>
          </div>
        </div>
      </div>

      {/* Storage Requirements */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">4. Image Storage Calculation</h3>
        <p className="text-sm text-gray-600 mb-2">Total bits required for an <span className="italic">N × M</span> image with bit depth <span className="italic">k</span>:</p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-center font-mono text-lg">
          Total Bits = N × M × k
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-3 bg-gray-50 rounded border text-xs">
                <span className="font-bold block text-gray-700">Example: Gray 512x512</span>
                512 × 512 × 8 bits = 2,097,152 bits<br/>
                = 262,144 bytes = 256 KB
            </div>
            <div className="p-3 bg-gray-50 rounded border text-xs">
                <span className="font-bold block text-gray-700">Example: RGB 512x512</span>
                512 × 512 × 24 bits = 6,291,456 bits<br/>
                = 786,432 bytes = 768 KB
            </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationContent;
