import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Image Features</h3>
        <p className="text-sm text-gray-700">A feature is a "distinctive" property of an object or region. Local features allow us to recognize objects despite occlusion, scale changes, or different viewpoints.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-[10px]">
            <div className="p-3 bg-gray-50 rounded border">
                <strong>Detectors:</strong> Find "where" interesting points are (Corners, Blobs).
            </div>
            <div className="p-3 bg-gray-50 rounded border">
                <strong>Descriptors:</strong> Describe "what" the region around the point looks like (Vector representation).
            </div>
        </div>
      </div>

      {/* SIFT Steps */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">SIFT: Detailed Pipeline</h3>
        <p className="text-xs text-gray-700 mb-4"><strong>Scale-Invariant Feature Transform</strong> follows four major stages:</p>
        <div className="space-y-4">
          <div className="p-4 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">1. Scale-space Extrema Detection</h4>
            <p className="text-xs text-gray-600">Search over all scales and image locations. It is implemented efficiently by using a <strong>Difference-of-Gaussian (DoG)</strong> function to identify potential interest points that are invariant to scale and orientation.</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">2. Keypoint Localization</h4>
            <p className="text-xs text-gray-600">At each candidate location, a detailed model is fit to determine location and scale. Keypoints are selected based on their stability (discarding low-contrast points or points along edges).</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">3. Orientation Assignment</h4>
            <p className="text-xs text-gray-600">One or more orientations are assigned to each keypoint location based on local image gradient directions. All future operations are performed relative to the assigned orientation, providing <strong>Rotation Invariance</strong>.</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded border border-indigo-100">
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">4. Keypoint Descriptor</h4>
            <p className="text-xs text-gray-600">The local image gradients are measured at the selected scale in the region around each keypoint. These are transformed into a representation (typically a 128-element vector) that allows for significant levels of local shape distortion and illumination change.</p>
          </div>
        </div>
      </div>

      {/* Matching */}
      <div className="bg-indigo-900 text-white p-6 rounded-lg shadow-md">
        <h4 className="font-bold mb-2">Feature Matching Rules</h4>
        <ul className="text-xs space-y-2 opacity-90">
            <li>• <strong>Nearest Neighbor:</strong> Find the descriptor with the minimum Euclidean distance.</li>
            <li>• <strong>Ratio Test:</strong> Reject matches where the distance ratio between the first and second nearest neighbor is greater than 0.8. This eliminates ambiguous matches.</li>
        </ul>
      </div>
    </div>
  );
};

export default NotesContent;
