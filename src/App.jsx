import React, { useState } from 'react';
import { BookOpen, FileText, ArrowLeft, Activity, Grid, Layers, Zap, LayoutGrid, Calculator } from 'lucide-react';
import ChapterCard from './components/ChapterCard';
import Chapter1View from './components/Chapter1/Chapter1View';
import Chapter2View from './components/Chapter2/Chapter2View';
import Chapter3View from './components/Chapter3/Chapter3View';
import Chapter4View from './components/Chapter4/Chapter4View';
import Chapter5View from './components/Chapter5/Chapter5View';
import Chapter6View from './components/Chapter6/Chapter6View';
import MatrixReferenceView from './components/MatrixReferenceView';
import CalculationWalkthroughView from './components/CalculationWalkthroughView';

const TAIStudyInterface = () => {
  const [activeView, setActiveView] = useState('home'); // 'home' or 'chapterX'

  // Chapter Data
  const chapters = [
    { id: 1, title: 'Chapter 1: Image Representation', icon: <Grid size={24} />, active: true },
    { id: 2, title: 'Chapter 2: Image Manipulation', icon: <Layers size={24} />, active: true },
    { id: 3, title: 'Chapter 3: Image Enhancement', icon: <Zap size={24} />, active: true },
    { id: 4, title: 'Chapter 4: Edge Detection', icon: <Activity size={24} />, active: true },
    { id: 5, title: 'Chapter 5: Image Morphology', icon: <BookOpen size={24} />, active: true },
    { id: 6, title: 'Chapter 6: Features', icon: <FileText size={24} />, active: true },
    { id: 'matrix', title: 'Matrices Cheat Sheet', icon: <LayoutGrid size={24} />, active: true, special: true },
    { id: 'calculation', title: 'Step-by-Step Calculations', icon: <Calculator size={24} />, active: true, special: true },
  ];

  const renderActiveChapter = () => {
    switch (activeView) {
      case 'chapter1': return <Chapter1View />;
      case 'chapter2': return <Chapter2View />;
      case 'chapter3': return <Chapter3View />;
      case 'chapter4': return <Chapter4View />;
      case 'chapter5': return <Chapter5View />;
      case 'chapter6': return <Chapter6View />;
      case 'chaptermatrix': return <MatrixReferenceView />;
      case 'chaptercalculation': return <CalculationWalkthroughView />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {activeView !== 'home' && (
              <button
                onClick={() => setActiveView('home')}
                className="p-1 hover:bg-blue-800 rounded transition"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h1 className="text-xl font-bold tracking-wide">
              TAI <span className="font-light opacity-80">| Image Analysis & Treatment</span>
            </h1>
          </div>
          <div className="text-sm bg-blue-800 px-3 py-1 rounded-full">
            2025/2026
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">

        {/* HOME VIEW: Chapter Grid */}
        {activeView === 'home' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  onClick={() => setActiveView(`chapter${chapter.id}`)}
                />
              ))}
            </div>
          </div>
        )}

        {/* CHAPTER VIEWS */}
        {activeView !== 'home' && renderActiveChapter()}
      </main>
    </div>
  );
};

export default TAIStudyInterface;
