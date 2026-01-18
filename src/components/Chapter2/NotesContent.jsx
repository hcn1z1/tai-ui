import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Image Manipulation Overview</h3>
        <p className="text-sm text-gray-700">Manipulation techniques aim to enhance the visual quality of an image or prepare it for further analysis. The most basic operations are <strong>Point Transforms</strong>, where each output pixel's value depends only on the corresponding input pixel's value.</p>
      </div>

      {/* Arithmetic Operations */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Arithmetic Operations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold mr-2 mt-0.5">Addition</span>
              <span><strong>Brightness:</strong> Adding a constant. <strong>Blending:</strong> Summing two images to create a composite.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-bold mr-2 mt-0.5">Subtraction</span>
              <span><strong>Differencing:</strong> Detecting changes between frames or removing background.</span>
            </li>
          </ul>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-bold mr-2 mt-0.5">Multiplication</span>
              <span><strong>Contrast Scaling:</strong> Multiplying by a constant &gt; 1 increases contrast.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-bold mr-2 mt-0.5">Normalization</span>
              <span>Prevents <strong>Saturation</strong> (overflow) where pixel values clip or wrap around.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Logical Operations */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Logical Operations (Bit-wise)</h3>
        <p className="text-sm text-gray-600 mb-4">Operations performed between corresponding bits of pixel representations:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="p-3 bg-gray-50 rounded border text-center">
                <div className="font-bold text-indigo-900 text-sm">NOT</div>
                <div className="text-[10px] text-gray-500 italic">Inversion</div>
            </div>
            <div className="p-3 bg-gray-50 rounded border text-center">
                <div className="font-bold text-indigo-900 text-sm">AND</div>
                <div className="text-[10px] text-gray-500 italic">Masking</div>
            </div>
            <div className="p-3 bg-gray-50 rounded border text-center">
                <div className="font-bold text-indigo-900 text-sm">OR</div>
                <div className="text-[10px] text-gray-500 italic">Merging</div>
            </div>
            <div className="p-3 bg-gray-50 rounded border text-center">
                <div className="font-bold text-indigo-900 text-sm">XOR</div>
                <div className="text-[10px] text-gray-500 italic">Change Detection</div>
            </div>
        </div>
      </div>

      {/* Point Transforms */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Non-Linear Point Transforms</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-xs">
              <tr>
                <th className="px-4 py-2">Transform</th>
                <th className="px-4 py-2">Primary Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              <tr>
                <td className="px-4 py-3 font-medium text-indigo-700">Logarithmic</td>
                <td className="px-4 py-3">Compresses high intensity dynamic range; expands dark regions.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-indigo-700">Exponential</td>
                <td className="px-4 py-3">Inverse of Log. Expands bright regions; compresses dark regions.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-indigo-700">Gamma Correction</td>
                <td className="px-4 py-3">General power-law transform for display correction and contrast.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-indigo-700">Thresholding</td>
                <td className="px-4 py-3">Binarization. Essential for separating object from background.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Histogram */}
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <h4 className="font-bold text-indigo-900 mb-2">The Image Histogram</h4>
        <p className="text-xs text-gray-700 leading-relaxed">
            A graph showing the number of pixels in an image at each different intensity value. For an 8-bit image, it plots frequencies for values 0 to 255.
            <br/><br/>
            <strong>Bi-modal histograms:</strong> Two distinct peaks, typically representing object and background, making them ideal for automatic threshold selection.
        </p>
      </div>
    </div>
  );
};

export default NotesContent;
