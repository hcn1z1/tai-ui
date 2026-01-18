import React from 'react';

const NotesContent = () => {
  return (
    <div className="space-y-6">
      {/* Concept */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Mathematical Morphology</h3>
        <p className="text-sm text-gray-700 mb-3">Morphology is a theory for the analysis of spatial structures. It is based on <strong>Set Theory</strong> and typically operates on binary images, where an image is seen as a set of foreground pixels.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
                <h4 className="font-bold text-indigo-900 text-xs mb-1">Object A</h4>
                <p className="text-[10px] text-gray-600">The set of all foreground (1) pixels in the image.</p>
            </div>
            <div className="p-3 bg-indigo-50 rounded border border-indigo-100">
                <h4 className="font-bold text-indigo-900 text-xs mb-1">Structuring Element B</h4>
                <p className="text-[10px] text-gray-600">A small probe or template used to examine the image structure.</p>
            </div>
        </div>
      </div>

      {/* Operations */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-4 border-b pb-2">Fundamental Operations</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-24 font-bold text-sm text-indigo-700 shrink-0">Erosion</div>
            <div className="text-xs text-gray-600">Shrinks foreground. A pixel is kept only if the entire SE fits inside the object. <strong>Removes noise and small details.</strong></div>
          </div>
          <div className="flex gap-4 border-t pt-4">
            <div className="w-24 font-bold text-sm text-indigo-700 shrink-0">Dilation</div>
            <div className="text-xs text-gray-600">Grows foreground. A pixel is added if at least one SE pixel hits the object. <strong>Fills holes and gaps.</strong></div>
          </div>
          <div className="flex gap-4 border-t pt-4">
            <div className="w-24 font-bold text-sm text-indigo-700 shrink-0">Opening</div>
            <div className="text-xs text-gray-600">Erosion followed by Dilation. Smoothes contours and removes small protrusions/noise while keeping object size mostly intact.</div>
          </div>
          <div className="flex gap-4 border-t pt-4">
            <div className="w-24 font-bold text-sm text-indigo-700 shrink-0">Closing</div>
            <div className="text-xs text-gray-600">Dilation followed by Erosion. Fills narrow breaks and long thin gulfs, eliminates small holes, and smoothes sections of contours.</div>
          </div>
        </div>
      </div>

       {/* SE Definitions */}
       <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <h4 className="font-bold text-indigo-900 mb-2">Structuring Element (SE) Geometry</h4>
        <p className="text-xs text-gray-700 mb-3">The shape and size of the SE determines the effect of the morphological operation:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="bg-white p-2 rounded shadow-sm text-center text-[10px]">
            <strong>Square:</strong> Isotropic (same in all directions)
          </div>
          <div className="bg-white p-2 rounded shadow-sm text-center text-[10px]">
            <strong>Disk:</strong> Good for preserving rounded features
          </div>
          <div className="bg-white p-2 rounded shadow-sm text-center text-[10px]">
            <strong>Line:</strong> Detects or emphasizes linear structures
          </div>
          <div className="bg-white p-2 rounded shadow-sm text-center text-[10px]">
            <strong>Cross:</strong> 4-connectivity approximation
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContent;
