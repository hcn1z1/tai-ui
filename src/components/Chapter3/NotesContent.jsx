import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Core Concepts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Core Concepts</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-bold mr-2 mt-0.5">Objective</span>
            <span>Improve clarity for human viewing or machine analysis. Highly subjective and domain-dependent.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-bold mr-2 mt-0.5">Connectivity</span>
            <span>Image processing typically uses <strong>8-connectivity</strong> (horizontal, vertical, and diagonal neighbors) to define pixel relationships.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-bold mr-2 mt-0.5">LSI Systems</span>
            <span><strong>Linear Shift-Invariant:</strong> Output depends linearly on input, and a shift in input causes identical shift in output. Allows use of convolution.</span>
          </li>
        </ul>
      </div>

      {/* Filter Types Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Spatial Filters</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 font-semibold uppercase text-xs">
              <tr>
                <th className="px-4 py-2">Filter</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Key Effect / Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-blue-700">Mean Filter</td>
                <td className="px-4 py-3">Linear</td>
                <td className="px-4 py-3">
                  <span className="block mb-1">Smooths image (averages neighbors).</span>
                  <span className="text-xs text-gray-500">Drawback: Blurs sharp edges.</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-blue-700">Median Filter</td>
                <td className="px-4 py-3">Non-Linear</td>
                <td className="px-4 py-3">
                  <span className="block mb-1">Replaces pixel with neighborhood median.</span>
                  <span className="text-xs text-gray-500">Excellent for "Salt & Pepper" noise. Preserves edges better than Mean.</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-blue-700">Gaussian Filter</td>
                <td className="px-4 py-3">Linear</td>
                <td className="px-4 py-3">
                  <span className="block mb-1">Weighted average (bell curve).</span>
                  <span className="text-xs text-gray-500">Controlled by Sigma (σ). Higher σ = more blur.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

       {/* Properties */}
       <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <h4 className="font-bold text-indigo-900 mb-2">Convolution Properties</h4>
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <div className="bg-white p-2 rounded shadow-sm">
            <div className="font-semibold">Commutativity</div>
            <div className="text-xs text-gray-500">f * g = g * f</div>
          </div>
          <div className="bg-white p-2 rounded shadow-sm">
            <div className="font-semibold">Associativity</div>
            <div className="text-xs text-gray-500">(f * g) * h = f * (g * h)</div>
          </div>
          <div className="bg-white p-2 rounded shadow-sm">
            <div className="font-semibold">Distributivity</div>
            <div className="text-xs text-gray-500">f * (g1 + g2)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
