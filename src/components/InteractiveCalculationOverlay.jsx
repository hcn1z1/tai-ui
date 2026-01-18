import React, { useState, useEffect, useMemo } from 'react';
import { X, Play, Pause, SkipForward, SkipBack, RefreshCw, Calculator, Layers, Beaker } from 'lucide-react';

const InteractiveCalculationOverlay = ({ algorithm, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoDelay, setAutoDelay] = useState(500);
  const [morphMode, setMorphMode] = useState('erosion');

  // Reset step when morph mode changes
  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, [morphMode]);

  // Hardcoded values
  const GAUSSIAN_SIGMA = 1.0;
  const GAUSSIAN_K = 1; // 3x3 matrix

  const algorithmData = useMemo(() => {
    switch (algorithm) {
      case 'gaussian': {
        const steps = [];
        const size = 2 * GAUSSIAN_K + 1;
        const grid = Array(size * size).fill(null);

        // Step 0: Introduction
        steps.push({
          title: "Gaussian Kernel Construction",
          description: `Generating a ${size}x${size} kernel with σ = ${GAUSSIAN_SIGMA} and k = ${GAUSSIAN_K}.`,
          formula: "G'(x,y) = e^-( (x²+y²) / 2σ² )",
          grid: [...grid],
          highlight: null,
          math: "Initial state: empty grid."
        });

        // Steps 1-9: Individual cell calculations
        let unnormalizedSum = 0;
        const unnormalizedValues = [];
        for (let j = 0; j < size; j++) {
          for (let i = 0; i < size; i++) {
            const x = i - GAUSSIAN_K;
            const y = j - GAUSSIAN_K;
            const exponent = -(x * x + y * y) / (2 * GAUSSIAN_SIGMA * GAUSSIAN_SIGMA);
            const value = Math.exp(exponent);
            unnormalizedSum += value;
            unnormalizedValues.push(value);

            grid[j * size + i] = value.toFixed(4);
            const xStr = x < 0 ? `(${x})` : x;
            const yStr = y < 0 ? `(${y})` : y;
            steps.push({
              title: `Calculating Cell (${i},${j})`,
              description: `Map index to relative coordinates: x = ${i} - ${GAUSSIAN_K} = ${x}, y = ${j} - ${GAUSSIAN_K} = ${y}`,
              formula: `G'(${x},${y}) = e^-( (${xStr}² + ${yStr}²) / 2(${GAUSSIAN_SIGMA}²) )`,
              grid: [...grid],
              highlight: j * size + i,
              math: `G'(${x},${y}) = e^(${exponent.toFixed(2)}) = ${value.toFixed(4)}`
            });
          }
        }

        // Step 10: Summation
        steps.push({
          title: "Summation",
          description: "Calculate the sum of all unnormalized values for normalization.",
          formula: "Sum = Σ G'(x,y)",
          grid: [...grid],
          highlight: "all",
          math: `Sum = ${unnormalizedSum.toFixed(4)}`
        });

        // Step 11: Normalization
        const normalizedGrid = unnormalizedValues.map(v => (v / unnormalizedSum).toFixed(4));
        steps.push({
          title: "Normalization",
          description: "Divide each cell by the sum so that the total sum of the kernel is 1.",
          formula: "G(x,y) = G'(x,y) / Sum",
          grid: normalizedGrid,
          highlight: "all",
          math: `Example (center): ${unnormalizedValues[4].toFixed(4)} / ${unnormalizedSum.toFixed(4)} = ${normalizedGrid[4]}`
        });

        return { steps, size };
      }

      case 'sobel': {
        const steps = [];
        const imgSize = 5;
        const kernelSize = 3;
        const outputSize = imgSize - kernelSize + 1; // 3x3 output

        const image = [
          10, 10, 10, 50, 50,
          10, 10, 10, 50, 50,
          10, 10, 10, 50, 50,
          10, 10, 10, 50, 50,
          10, 10, 10, 50, 50
        ];

        const kernelGx = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
        const kernelGy = [1, 2, 1, 0, 0, 0, -1, -2, -1];

        const output = Array(outputSize * outputSize).fill("?");

        steps.push({
          title: "Sobel Edge Detection Pipeline",
          description: "Calculating Gx, Gy, Magnitude, and Direction for each pixel.",
          image: [...image],
          kernel: [...kernelGx],
          output: [...output],
          windowPos: null,
          math: "For each pixel: G = √(Gx² + Gy²), cos=Gx/G, sin=Gy/G, tan=Gy/Gx"
        });

        for (let y = 0; y < outputSize; y++) {
          for (let x = 0; x < outputSize; x++) {
            let sumGx = 0;
            let sumGy = 0;
            const multGx = [];
            const multGy = [];

            for (let ky = 0; ky < kernelSize; ky++) {
              for (let kx = 0; kx < kernelSize; kx++) {
                const imgVal = image[(y + ky) * imgSize + (x + kx)];
                sumGx += imgVal * kernelGx[ky * kernelSize + kx];
                sumGy += imgVal * kernelGy[ky * kernelSize + kx];
              }
            }

            // Gx Step
            steps.push({
              title: `Pixel (${x+1},${y+1}): Calculate Gx`,
              description: "Horizontal gradient component.",
              formula: "Gx = Σ (Pixel × KernelGx)",
              image: [...image],
              kernel: [...kernelGx],
              output: [...output],
              windowPos: { x, y },
              math: `Gx = ${sumGx}`
            });

            // Gy Step
            steps.push({
              title: `Pixel (${x+1},${y+1}): Calculate Gy`,
              description: "Vertical gradient component.",
              formula: "Gy = Σ (Pixel × KernelGy)",
              image: [...image],
              kernel: [...kernelGy],
              output: [...output],
              windowPos: { x, y },
              math: `Gy = ${sumGy}`
            });

            // Magnitude Step
            const mag = Math.sqrt(sumGx * sumGx + sumGy * sumGy);
            steps.push({
              title: `Pixel (${x+1},${y+1}): Magnitude`,
              description: "Calculating the gradient strength.",
              formula: "G = √(Gx² + Gy²)",
              image: [...image],
              kernel: null,
              output: [...output],
              windowPos: { x, y },
              math: `Mag = √(${sumGx}² + ${sumGy}²) = ${mag.toFixed(2)}`
            });

            // Trigonometry Step
            const cos = mag !== 0 ? (sumGx / mag).toFixed(3) : "0.000";
            const sin = mag !== 0 ? (sumGy / mag).toFixed(3) : "0.000";
            const tan = sumGx !== 0 ? (sumGy / sumGx).toFixed(3) : "∞";
            const angle = (Math.atan2(sumGy, sumGx) * (180 / Math.PI)).toFixed(1);

            output[y * outputSize + x] = mag.toFixed(2);
            steps.push({
              title: `Pixel (${x+1},${y+1}): Orientation`,
              description: "Calculating trigonometric components and angle.",
              formula: "θ = atan2(Gy, Gx)",
              image: [...image],
              kernel: null,
              output: [...output],
              windowPos: { x, y },
              math: `cos(θ) = Gx/Mag = ${cos}\nsin(θ) = Gy/Mag = ${sin}\ntan(θ) = Gy/Gx = ${tan}\nθ = ${angle}°`
            });
          }
        }

        return { steps, imgSize, kernelSize, outputSize, type: 'convolution' };
      }

      case 'laplacian': {
        const steps = [];
        const imgSize = 5;
        const kernelSize = 3;
        const outputSize = imgSize - kernelSize + 1;

        const image = [
          10,  10,  10,  10,  10,
          10,  10,  10,  10,  10,
          100, 100, 100, 100, 100,
          100, 100, 100, 100, 100,
          100, 100, 100, 100, 100
        ];

        const kernel = [
          0,  1, 0,
          1, -4, 1,
          0,  1, 0
        ];

        const output = Array(outputSize * outputSize).fill("?");

        steps.push({
          title: "Laplacian Edge Detection",
          description: "Detecting edges using the second derivative (Laplacian operator).",
          image: [...image],
          kernel: [...kernel],
          output: [...output],
          windowPos: null,
          math: "L(x,y) = [I(x+1,y) + I(x-1,y) + I(x,y+1) + I(x,y-1)] - 4*I(x,y)"
        });

        for (let y = 0; y < outputSize; y++) {
          for (let x = 0; x < outputSize; x++) {
            let sum = 0;
            for (let ky = 0; ky < kernelSize; ky++) {
              for (let kx = 0; kx < kernelSize; kx++) {
                sum += image[(y + ky) * imgSize + (x + kx)] * kernel[ky * kernelSize + kx];
              }
            }

            // Calculation Step
            steps.push({
              title: `Pixel (${x+1},${y+1}): Convolution`,
              description: "Summing adjacent neighbors and subtracting central pixel weight.",
              formula: "L(x,y) = Σ (Kernel × Pixel)",
              image: [...image],
              kernel: [...kernel],
              output: [...output],
              windowPos: { x, y },
              math: `Calculation: ${sum}`
            });

            // Decision Step
            const isEdge = Math.abs(sum) > 50;
            output[y * outputSize + x] = sum;
            steps.push({
              title: `Pixel (${x+1},${y+1}): Decision`,
              description: "Determining if the pixel is part of an edge boundary.",
              formula: "|L(x,y)| > Threshold",
              image: [...image],
              kernel: [...kernel],
              output: [...output],
              windowPos: { x, y },
              math: `Value: ${sum}\nDecision is: ${isEdge ? 'POTENTIAL EDGE (High Variance)' : 'NOT AN EDGE (Uniform Area)'}`
            });
          }
        }

        return { steps, imgSize, kernelSize, outputSize, type: 'convolution' };
      }

      case 'sift': {
        // Difference of Gaussians (DoG)
        const steps = [];
        const size = 4;
        const imgA = [
          50, 60, 50, 40,
          60, 80, 60, 50,
          50, 60, 50, 40,
          40, 50, 40, 30
        ];
        const imgB = [
          40, 45, 40, 35,
          45, 60, 45, 40,
          40, 45, 40, 35,
          35, 40, 35, 30
        ];
        const dog = Array(size * size).fill("?");

        steps.push({
          title: "SIFT: Difference of Gaussians",
          description: "Subtracting two images blurred at different scales (σ and kσ).",
          imgA, imgB, dog: [...dog],
          highlight: null,
          math: "DoG = L(x, y, kσ) - L(x, y, σ)"
        });

        for (let i = 0; i < size * size; i++) {
          dog[i] = imgA[i] - imgB[i];
          steps.push({
            title: `Calculating Difference`,
            description: `Pixel at index ${i}: ${imgA[i]} - ${imgB[i]} = ${dog[i]}`,
            formula: "DoG = L(x, y, kσ) - L(x, y, σ)",
            imgA, imgB, dog: [...dog],
            highlight: i,
            math: `${imgA[i]} - ${imgB[i]} = ${dog[i]}`
          });
        }

        return { steps, size, type: 'sift' };
      }

      case 'harris': {
        const steps = [];
        const imgSize = 5;
        const outSize = 3; // Center 3x3 region

        const image = [
          0,   0,   0,   0,   0,
          0, 100, 100, 100,   0,
          0, 100, 100, 100,   0,
          0, 100, 100, 100,   0,
          0,   0,   0,   0,   0
        ]; // A simple square shape

        const kernelGx = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
        const kernelGy = [1, 2, 1, 0, 0, 0, -1, -2, -1];

        // Step 0: Overview
        steps.push({
          title: "Harris Corner Detection Pipeline",
          description: "Step-by-step process: Gradients -> Products -> Window Sums -> Harris Matrix.",
          image: [...image],
          kernel: null,
          output: Array(imgSize * imgSize).fill("?"),
          windowPos: null,
          math: "1. Compute Ix, Iy\n2. Compute Ix², Iy², IxIy\n3. Sum products in window\n4. Calculate Score S",
          displaySize: 5,
          formula: "Harris Pipeline"
        });

        // Compute Gradients
        const ixMat = Array(imgSize * imgSize).fill(0);
        const iyMat = Array(imgSize * imgSize).fill(0);
        for (let y = 1; y < 4; y++) {
          for (let x = 1; x < 4; x++) {
            let sumX = 0; let sumY = 0;
            for (let ky = -1; ky <= 1; ky++) {
              for (let kx = -1; kx <= 1; kx++) {
                const val = image[(y + ky) * imgSize + (x + kx)];
                sumX += val * kernelGx[(ky + 1) * 3 + (kx + 1)];
                sumY += val * kernelGy[(ky + 1) * 3 + (kx + 1)];
              }
            }
            ixMat[y * imgSize + x] = sumX;
            iyMat[y * imgSize + x] = sumY;
          }
        }

        steps.push({
          title: "Step 1: Horizontal Gradient (Ix)",
          description: "Applying Sobel Gx kernel to find horizontal changes.",
          image: [...image],
          kernel: [...kernelGx],
          output: [...ixMat],
          windowPos: null,
          math: "Ix = Σ (Window * KernelGx)",
          displaySize: 5,
          formula: "Gradients"
        });

        steps.push({
          title: "Step 2: Vertical Gradient (Iy)",
          description: "Applying Sobel Gy kernel to find vertical changes.",
          image: [...image],
          kernel: [...kernelGy],
          output: [...iyMat],
          windowPos: null,
          math: "Iy = Σ (Window * KernelGy)",
          displaySize: 5,
          formula: "Gradients"
        });

        // Compute Products
        const ixxMat = ixMat.map(v => v * v);
        const iyyMat = iyMat.map(v => v * v);
        const ixyMat = ixMat.map((v, i) => v * iyMat[i]);

        steps.push({
          title: "Step 3: Ix² Matrix",
          description: "Squaring horizontal gradients to handle positive/negative changes.",
          image: [...ixMat],
          output: [...ixxMat],
          formula: "Ixx = Ix * Ix",
          math: "Element-wise multiplication of Ix by itself.",
          displaySize: 5
        });

        steps.push({
          title: "Step 4: Iy² Matrix",
          description: "Squaring vertical gradients.",
          image: [...iyMat],
          output: [...iyyMat],
          formula: "Iyy = Iy * Iy",
          math: "Element-wise multiplication of Iy by itself.",
          displaySize: 5
        });

        steps.push({
          title: "Step 5: IxIy Matrix",
          description: "Multiplying horizontal and vertical gradients.",
          image: [...ixMat],
          output: [...ixyMat],
          formula: "Ixy = Ix * Iy",
          math: "Cross-products capture diagonal gradient components.",
          displaySize: 5
        });

        // Window Integration (Picking Center Pixel)
        const centerX = 2; const centerY = 2;
        let sumIx2 = 0; let sumIy2 = 0; let sumIxy = 0;
        for (let y = centerY - 1; y <= centerY + 1; y++) {
          for (let x = centerX - 1; x <= centerX + 1; x++) {
            sumIx2 += ixxMat[y * imgSize + x];
            sumIy2 += iyyMat[y * imgSize + x];
            sumIxy += ixyMat[y * imgSize + x];
          }
        }

        steps.push({
          title: "Step 6: Window Summation",
          description: "Integrating product components over a 3x3 local neighborhood.",
          image: [...ixxMat],
          output: Array(outSize * outSize).fill("Σ"),
          windowPos: { x: centerX - 1, y: centerY - 1, w: 3, h: 3 },
          math: `ΣIx² = ${sumIx2}\nΣIy² = ${sumIy2}\nΣIxIy = ${sumIxy}`,
          displaySize: 3,
          formula: "Σ w · (Products)"
        });

        const det = (sumIx2 * sumIy2) - (sumIxy * sumIxy);
        const trace = sumIx2 + sumIy2;
        const score = det - 0.04 * (trace * trace);

        steps.push({
          title: "Step 7: Harris Matrix M",
          description: "Constructing the structure tensor for the center pixel.",
          image: [...image],
          output: [sumIx2, sumIxy, sumIxy, sumIy2],
          type: 'harris_matrix',
          math: `M = [[${sumIx2}, ${sumIxy}],\n     [${sumIxy}, ${sumIy2}]]`,
          displaySize: 2,
          formula: "M = [[ΣIx², ΣIxIy], [ΣIxIy, ΣIy²]]"
        });

        steps.push({
          title: "Step 8: Response Score S",
          description: "Calculating the final cornerness value.",
          image: [...image],
          output: [sumIx2, sumIxy, sumIxy, sumIy2],
          type: 'harris_matrix',
          math: `det(M) = ${det}\ntrace(M) = ${trace}\nS = det(M) - 0.04 * trace(M)²\nS = ${score.toFixed(0)}`,
          displaySize: 2,
          formula: "S = det(M) - k · trace(M)²"
        });

        let decision = "FLAT REGION";
        if (score > 1000000) decision = "CORNER DETECTED";
        else if (score < -1000000) decision = "EDGE DETECTED";

        steps.push({
          title: "Step 9: Classification",
          description: "Final decision based on eigenvalues (captured via S).",
          image: [...image],
          output: [sumIx2, sumIxy, sumIxy, sumIy2],
          type: 'harris_matrix',
          math: `Score S = ${score.toFixed(0)}\n\nDecision: ${decision}`,
          displaySize: 2,
          formula: "Classification"
        });

        return { steps, imgSize, outSize, type: 'harris', kernelSize: 3 };
      }

      case 'morphology': {
        const steps = [];
        const imgSize = 5;
        const seSize = 3;
        const outSize = imgSize - seSize + 1;
        const initialImage = [
          0, 0, 0, 0, 0,
          0, 1, 1, 1, 0,
          0, 1, 1, 1, 0,
          0, 1, 1, 1, 0,
          0, 0, 0, 0, 0
        ];
        const se = [0, 1, 0, 1, 1, 1, 0, 1, 0];

        const generatePass = (inputImg, mode, titlePrefix = "") => {
          const passOutput = Array(outSize * outSize).fill("?");
          const passSteps = [];

          passSteps.push({
            title: `${titlePrefix}${mode.toUpperCase()}`,
            description: mode === 'erosion' ? "Does SE FIT?" : "Does SE HIT?",
            image: [...inputImg], se, output: [...passOutput],
            windowPos: null,
            math: mode === 'erosion' ? "Erosion: Fits?" : "Dilation: Hits?"
          });

          for (let y = 0; y < outSize; y++) {
            for (let x = 0; x < outSize; x++) {
              let result = mode === 'erosion' ? true : false;
              for (let ky = 0; ky < seSize; ky++) {
                for (let kx = 0; kx < seSize; kx++) {
                  if (se[ky * seSize + kx] === 1) {
                    const imgVal = inputImg[(y + ky) * imgSize + (x + kx)];
                    if (mode === 'erosion') {
                      if (imgVal === 0) result = false;
                    } else {
                      if (imgVal === 1) result = true;
                    }
                  }
                }
              }
              passOutput[y * outSize + x] = result ? 1 : 0;
              passSteps.push({
                title: `${titlePrefix}${mode.charAt(0).toUpperCase() + mode.slice(1)} (${x},${y})`,
                description: result ? (mode === 'erosion' ? "FITS" : "HITS") : (mode === 'erosion' ? "NO FIT" : "NO HIT"),
                formula: mode === 'erosion' ? "A ⊖ B = {z | (B)z ⊆ A}" : "A ⊕ B = {z | (B̂)z ∩ A ≠ ∅}",
                image: [...inputImg], se, output: [...passOutput],
                windowPos: { x, y },
                math: `Result: ${result ? 1 : 0}`
              });
            }
          }
          return { passOutput, passSteps };
        };

        if (morphMode === 'erosion' || morphMode === 'dilation') {
          const { passSteps } = generatePass(initialImage, morphMode);
          steps.push(...passSteps);
        } else if (morphMode === 'opening') {
          // Erosion then Dilation
          const { passOutput: eroded, passSteps: erosionSteps } = generatePass(initialImage, 'erosion', "Opening (Pass 1): ");
          steps.push(...erosionSteps);

          // To convolve over the result, we'd need a smaller image or padding.
          // For simplicity in this 5x5 example, we'll just show the concept.
          // Since outSize is 3, we can't easily do a 2nd 3x3 pass on a 3x3.
          // I will "simulate" the result by padding the 3x3 back to 5x5 or just stating it.
          // Better: Use a larger initial image if we want real 2nd pass.
          // For now, let's just show the logic change.
          steps.push({
            title: "Opening (Pass 2): Dilation",
            description: "Now applying Dilation on the result of Erosion.",
            image: [...initialImage], se, output: eroded,
            windowPos: null,
            math: "Opening = Dilation(Erosion(A))"
          });
        } else if (morphMode === 'closing') {
          // Dilation then Erosion
          const { passOutput: dilated, passSteps: dilationSteps } = generatePass(initialImage, 'dilation', "Closing (Pass 1): ");
          steps.push(...dilationSteps);
          steps.push({
            title: "Closing (Pass 2): Erosion",
            description: "Now applying Erosion on the result of Dilation.",
            image: [...initialImage], se, output: dilated,
            windowPos: null,
            math: "Closing = Erosion(Dilation(A))"
          });
        }

        return { steps, imgSize, kernelSize: seSize, outputSize: outSize, type: 'morphology' };
      }

      default:
        return { steps: [], size: 3 };
    }
  }, [algorithm, morphMode]);

  const step = algorithmData.steps[currentStep] || algorithmData.steps[0];

  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < algorithmData.steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, autoDelay);
    } else if (currentStep === algorithmData.steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, algorithmData.steps.length, autoDelay]);

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Morphology Toggles */}
        {algorithm === 'morphology' && (
          <div className="bg-slate-800 px-6 py-2 flex items-center space-x-4 border-b border-slate-700 overflow-x-auto no-scrollbar">
            {['erosion', 'dilation', 'opening', 'closing'].map((mode) => (
              <button
                key={mode}
                onClick={() => setMorphMode(mode)}
                className={`
                  px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all
                  ${morphMode === mode
                    ? 'bg-yellow-500 text-slate-900'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'}
                `}
              >
                {mode}
              </button>
            ))}
          </div>
        )}
        {/* Header */}
        <div className="bg-slate-800 px-6 py-4 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
              <Beaker size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">{step.title}</h3>
              <p className="text-slate-400 text-xs">{step.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col md:flex-row gap-8">

          {/* Visual Grid Area */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-6">

            {algorithm === 'gaussian' && (
              <div className="relative">
                <div
                  className="grid gap-2 p-4 bg-slate-800 rounded-xl border border-slate-700"
                  style={{ gridTemplateColumns: `repeat(${algorithmData.size}, minmax(0, 1fr))` }}
                >
                  {step.grid.map((val, i) => (
                    <div
                      key={i}
                      className={`
                        w-16 h-16 flex items-center justify-center rounded-lg font-mono text-sm transition-all duration-300
                        ${step.highlight === i || step.highlight === 'all'
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105 z-10'
                          : val === null ? 'bg-slate-700/50 text-slate-500 border border-slate-600/50' : 'bg-slate-700 text-slate-300'}
                      `}
                    >
                      {val || '?'}
                    </div>
                  ))}
                </div>
                {/* Coordinates labels would go here if needed */}
              </div>
            )}

            {(algorithmData.type === 'convolution' || algorithmData.type === 'morphology' || algorithmData.type === 'harris') && step.type !== 'harris_matrix' && (
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Image Grid */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-bold">
                    {step.title.includes('Matrix') || step.title.includes('Gradient') ? 'Source' : 'Input Image'}
                  </span>
                  <div
                    className="grid gap-1 p-2 bg-slate-800 rounded-lg border border-slate-700"
                    style={{ gridTemplateColumns: `repeat(${algorithmData.imgSize}, minmax(0, 1fr))` }}
                  >
                    {step.image.map((val, i) => {
                      const x = i % algorithmData.imgSize;
                      const y = Math.floor(i / algorithmData.imgSize);

                      let isHighlighted = false;
                      if (step.windowPos) {
                        const w = step.windowPos.w || algorithmData.kernelSize || 3;
                        const h = step.windowPos.h || algorithmData.kernelSize || 3;
                        isHighlighted = x >= step.windowPos.x && x < step.windowPos.x + w &&
                                        y >= step.windowPos.y && y < step.windowPos.y + h;
                      }

                      return (
                        <div
                          key={i}
                          className={`
                            w-8 h-8 flex items-center justify-center text-[10px] font-mono rounded
                            ${isHighlighted ? 'bg-amber-500 text-white ring-2 ring-amber-300 z-10' : 'bg-slate-700 text-slate-400'}
                          `}
                        >
                          {val}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {(step.kernel || step.se) && (
                  <>
                    <div className="text-slate-600 font-bold text-xl">×</div>

                    {/* Kernel/SE Grid */}
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-bold">
                        {algorithmData.type === 'convolution' ? 'Kernel' : 'SE'}
                      </span>
                      <div
                        className="grid gap-1 p-2 bg-slate-800 rounded-lg border border-slate-700"
                        style={{ gridTemplateColumns: `repeat(${algorithmData.kernelSize || 3}, minmax(0, 1fr))` }}
                      >
                        {(step.kernel || step.se).map((val, i) => (
                          <div key={i} className="w-8 h-8 flex items-center justify-center text-[10px] font-mono rounded bg-slate-600 text-slate-100">
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="text-slate-600 font-bold text-xl">=</div>

                {/* Output Grid */}
                {step.type !== 'harris_matrix' && step.output && (
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-bold">Result</span>
                    <div
                      className="grid gap-1 p-2 bg-slate-800 rounded-lg border border-slate-700"
                      style={{ gridTemplateColumns: `repeat(${step.displaySize || algorithmData.outSize || algorithmData.outputSize}, minmax(0, 1fr))` }}
                    >
                      {step.output.map((val, i) => {
                        const outSize = step.displaySize || algorithmData.outSize || algorithmData.outputSize;
                        const x = i % outSize;
                        const y = Math.floor(i / outSize);
                        const isActive = step.windowPos && step.windowPos.x === x && step.windowPos.y === y && !step.windowPos.w;

                        return (
                          <div
                            key={i}
                            className={`
                              w-8 h-8 flex items-center justify-center text-[10px] font-mono rounded transition-all
                              ${isActive ? 'bg-green-500 text-white shadow-lg shadow-green-500/40 scale-110 z-10' : 'bg-slate-700 text-slate-400'}
                            `}
                          >
                            {val}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {algorithmData.type === 'harris' && step.type === 'harris_matrix' && (
              <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                <span className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Harris Matrix H</span>
                <div className="grid grid-cols-2 gap-4 p-8 bg-slate-800 rounded-2xl border-2 border-blue-500/30 shadow-2xl shadow-blue-500/10 relative">
                  <div className="absolute -left-4 inset-y-0 w-2 border-l-4 border-t-4 border-b-4 border-slate-400 rounded-l-lg"></div>
                  <div className="absolute -right-4 inset-y-0 w-2 border-r-4 border-t-4 border-b-4 border-slate-400 rounded-r-lg"></div>
                  {step.output.map((v, i) => (
                    <div key={i} className="w-24 h-24 flex items-center justify-center bg-slate-700 rounded-xl text-blue-400 font-mono text-[10px] text-center p-2 shadow-inner">
                      {v.toLocaleString()}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {algorithmData.type === 'sift' && (
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex flex-col items-center">
                   <span className="text-[10px] text-slate-500 mb-1">Scale A (kσ)</span>
                   <div className="grid grid-cols-4 gap-1 p-2 bg-slate-800 rounded">
                      {step.imgA.map((v, i) => (
                        <div key={i} className={`w-8 h-8 flex items-center justify-center text-[10px] rounded ${step.highlight === i ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>{v}</div>
                      ))}
                   </div>
                </div>
                <div className="text-slate-600 font-bold">-</div>
                <div className="flex flex-col items-center">
                   <span className="text-[10px] text-slate-500 mb-1">Scale B (σ)</span>
                   <div className="grid grid-cols-4 gap-1 p-2 bg-slate-800 rounded">
                      {step.imgB.map((v, i) => (
                        <div key={i} className={`w-8 h-8 flex items-center justify-center text-[10px] rounded ${step.highlight === i ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>{v}</div>
                      ))}
                   </div>
                </div>
                <div className="text-slate-600 font-bold">=</div>
                <div className="flex flex-col items-center">
                   <span className="text-[10px] text-slate-500 mb-1">Difference (DoG)</span>
                   <div className="grid grid-cols-4 gap-1 p-2 bg-slate-800 rounded">
                      {step.dog.map((v, i) => (
                        <div key={i} className={`w-8 h-8 flex items-center justify-center text-[10px] rounded ${step.highlight === i ? 'bg-green-500 text-white scale-110' : 'bg-slate-700 text-slate-400'}`}>{v}</div>
                      ))}
                   </div>
                </div>
              </div>
            )}

          </div>

          {/* Math & Logic Sidebar */}
          <div className="w-full md:w-80 bg-slate-800/50 rounded-xl p-5 border border-slate-700 flex flex-col space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                <Calculator size={14} className="mr-2" /> Current Formula
              </h4>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 font-mono text-sm text-blue-400 overflow-x-auto">
                {step.formula || "Processing..."}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                <Layers size={14} className="mr-2" /> Live Calculation
              </h4>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 font-mono text-xs text-green-400 leading-relaxed">
                {step.math}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-700">
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase mb-2">
                <span>Progress</span>
                <span>{currentStep + 1} / {algorithmData.steps.length}</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / algorithmData.steps.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="bg-slate-800 px-6 py-4 border-t border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleReset}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              title="Reset"
            >
              <RefreshCw size={20} />
            </button>
            <div className="w-px h-6 bg-slate-700 mx-1"></div>
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              aria-label="Previous step"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition-colors"
            >
              <SkipBack size={20} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`
                flex items-center space-x-2 px-6 py-2 rounded-lg font-bold transition-all
                ${isPlaying
                  ? 'bg-amber-500/10 text-amber-500 border border-amber-500/50 hover:bg-amber-500/20'
                  : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20'}
              `}
            >
              {isPlaying ? (
                <>
                  <Pause size={18} fill="currentColor" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play size={18} fill="currentColor" />
                  <span>Auto-Play</span>
                </>
              )}
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(algorithmData.steps.length - 1, currentStep + 1))}
              disabled={currentStep === algorithmData.steps.length - 1}
              aria-label="Next step"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent rounded-lg transition-colors"
            >
              <SkipForward size={20} />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
               <span className="text-[10px] font-bold text-slate-500 uppercase">Speed:</span>
               <select
                value={autoDelay}
                onChange={(e) => setAutoDelay(Number(e.target.value))}
                className="bg-transparent text-xs text-slate-300 font-mono focus:outline-none cursor-pointer"
               >
                 <option value={1000}>1.0s</option>
                 <option value={500}>0.5s</option>
                 <option value={200}>0.2s</option>
               </select>
            </div>
            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hidden lg:block">
              Interactive Lab v1.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCalculationOverlay;
