import React from 'react';
import { LayoutGrid } from 'lucide-react';

const MatrixBox = ({ title, description, matrix, size = "3" }) => {
    const gridCols = {
        "2": "grid-cols-2",
        "3": "grid-cols-3",
        "5": "grid-cols-5"
    };

    return (
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col h-full">
            <h4 className="font-bold text-blue-900 text-sm mb-1">{title}</h4>
            <p className="text-[10px] text-gray-500 mb-4 italic">{description}</p>
            <div className="mt-auto flex justify-center">
                <div className={`grid ${gridCols[size]} gap-2 font-mono text-xs bg-gray-100 p-3 rounded border border-gray-300 text-center w-fit`}>
                    {matrix.map((val, i) => (
                        <span key={i} className="w-8">{val}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const MatrixReferenceView = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex items-center space-x-3 mb-6">
        <LayoutGrid className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Complete Matrix Reference</h2>
      </div>

      {/* Chapter 3: Enhancement */}
      <section>
        <h3 className="text-lg font-bold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">Chapter 3: Image Enhancement</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MatrixBox
                title="Mean Filter (3x3)"
                description="Used for noise reduction and smoothing. All weights are equal to 1/N."
                matrix={["1/9", "1/9", "1/9", "1/9", "1/9", "1/9", "1/9", "1/9", "1/9"]}
            />
            <MatrixBox
                title="Example Image (TD3)"
                description="A sample grayscale intensity matrix used for manual calculation practice."
                size="5"
                matrix={[
                    "12", "25", "37", "45", "60",
                    "20", "40", "80", "100", "120",
                    "30", "70", "150", "180", "200",
                    "50", "110", "210", "225", "255",
                    "60", "120", "220", "240", "255"
                ]}
            />
        </div>
      </section>

      {/* Chapter 4: Edge Detection */}
      <section>
        <h3 className="text-lg font-bold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">Chapter 4: Edge Detection Kernels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MatrixBox
                title="Roberts Cross (Gx)"
                description="First-order gradient kernel. Diagonal edge detection."
                size="2"
                matrix={["1", "0", "0", "-1"]}
            />
            <MatrixBox
                title="Roberts Cross (Gy)"
                description="First-order gradient kernel. Diagonal edge detection."
                size="2"
                matrix={["0", "1", "-1", "0"]}
            />
            <MatrixBox
                title="Prewitt (Gx)"
                description="First-order operator. Detects vertical edges."
                matrix={["-1", "0", "1", "-1", "0", "1", "-1", "0", "1"]}
            />
            <MatrixBox
                title="Prewitt (Gy)"
                description="First-order operator. Detects horizontal edges."
                matrix={["-1", "-1", "-1", "0", "0", "0", "1", "1", "1"]}
            />
            <MatrixBox
                title="Sobel (Gx)"
                description="Gradient operator with smoothing. Vertical edges."
                matrix={["-1", "0", "1", "-2", "0", "2", "-1", "0", "1"]}
            />
            <MatrixBox
                title="Sobel (Gy)"
                description="Gradient operator with smoothing. Horizontal edges."
                matrix={["1", "2", "1", "0", "0", "0", "-1", "-2", "-1"]}
            />
            <MatrixBox
                title="Laplacian Kernel"
                description="Second-order derivative operator. Rotation invariant."
                matrix={["0", "1", "0", "1", "-4", "1", "0", "1", "0"]}
            />
            <MatrixBox
                title="LoG (Approx 5x5)"
                description="Laplacian of Gaussian. Reduces noise before edge detection."
                size="5"
                matrix={[
                    "0", "0", "-1", "0", "0",
                    "0", "-1", "-2", "-1", "0",
                    "-1", "-2", "16", "-2", "-1",
                    "0", "-1", "-2", "-1", "0",
                    "0", "0", "-1", "0", "0"
                ]}
            />
        </div>
      </section>

      {/* Chapter 5: Morphology */}
      <section>
        <h3 className="text-lg font-bold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">Chapter 5: Structuring Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MatrixBox
                title="SE: Square (3x3)"
                description="Basic morphological probe. Affects all neighbors equally."
                matrix={["1", "1", "1", "1", "1", "1", "1", "1", "1"]}
            />
            <MatrixBox
                title="SE: Cross (3x3)"
                description="Standard 4-connectivity structuring element."
                matrix={["0", "1", "0", "1", "1", "1", "0", "1", "0"]}
            />
        </div>
      </section>

      {/* Special Matrices */}
      <section className="pb-12">
        <h3 className="text-lg font-bold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">Special Purpose Matrices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-900 text-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-sm mb-2">Hessian Matrix (SIFT/Harris)</h4>
                <p className="text-xs opacity-80 mb-4">Used to calculate principal curvatures for edge rejection and corner detection.</p>
                <div className="bg-indigo-800 p-4 rounded font-mono text-xs text-center">
                    H = [ D<sub>xx</sub> &nbsp; D<sub>xy</sub> ] <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;[ D<sub>xy</sub> &nbsp; D<sub>yy</sub> ]
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MatrixReferenceView;
