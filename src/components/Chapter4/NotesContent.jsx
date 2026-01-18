import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Edge Detection Fundamentals</h3>
        <p className="text-sm text-gray-700 mb-4">Edges are local changes in the image intensity. They typically occur on the boundary between two regions. Goal: Significant reduction in data while preserving structural properties.</p>
        <div className="bg-indigo-50 p-4 rounded border border-indigo-100">
          <h4 className="font-semibold text-indigo-900 text-xs mb-2">The Gradient</h4>
          <p className="text-[10px] text-gray-600">The gradient of an image f(x,y) at location (x,y) is a vector that points in the direction of maximum rate of change of f at (x,y).</p>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Detection Techniques</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-semibold text-indigo-900 text-sm mb-2">1. First-Order Derivatives (Gradients)</h4>
            <p className="text-xs text-gray-600 mb-2">Detects edges by searching for local maxima/minima in the first derivative.</p>
            <div className="grid grid-cols-3 gap-2 text-[10px] font-bold text-indigo-700">
              <div className="bg-white p-2 rounded border text-center">Sobel</div>
              <div className="bg-white p-2 rounded border text-center">Prewitt</div>
              <div className="bg-white p-2 rounded border text-center">Roberts</div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <h4 className="font-semibold text-indigo-900 text-sm mb-2">2. Second-Order Derivatives (Laplacians)</h4>
            <p className="text-xs text-gray-600 mb-2">Detects edges by searching for zero-crossings. Very sensitive to noise.</p>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-indigo-700">
              <div className="bg-white p-2 rounded border text-center">Laplacian</div>
              <div className="bg-white p-2 rounded border text-center">LoG (Laplacian of Gaussian)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Canny Detail */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">The Canny Algorithm</h3>
        <p className="text-xs text-gray-700 mb-3 font-semibold">Step-by-step Process:</p>
        <ol className="list-decimal list-inside text-xs text-gray-600 space-y-2">
          <li><span className="font-bold text-indigo-700">Gaussian Smoothing:</span> Reduces noise using a Gaussian blur.</li>
          <li><span className="font-bold text-indigo-700">Gradient Calculation:</span> Finds intensity gradients (Sobel typically).</li>
          <li><span className="font-bold text-indigo-700">Non-maximum Suppression:</span> Edge thinning (keeps only the local maxima).</li>
          <li><span className="font-bold text-indigo-700">Double Thresholding:</span> Identifies strong, weak, and non-relevant pixels.</li>
          <li><span className="font-bold text-indigo-700">Hysteresis:</span> Tracks weak edges; keeps them only if connected to strong edges.</li>
        </ol>
      </div>

      {/* Corner Detection */}
      <div className="bg-indigo-900 text-white p-6 rounded-lg shadow-md">
        <h4 className="font-bold mb-2">Corner Detection (Harris)</h4>
        <p className="text-xs opacity-90 leading-relaxed">
            Corners are regions with large intensity variations in all directions.
            The Harris detector uses a sliding window to calculate a <strong>Response Function (R)</strong> based on the eigenvalues of the gradient distribution matrix.
            <br/><br/>
            • <strong>R &gt; 0:</strong> Corner detected. <br/>
            • <strong>R &lt; 0:</strong> Edge detected. <br/>
            • <strong>|R| small:</strong> Flat region.
        </p>
      </div>
    </div>
  );
};

export default NotesContent;
