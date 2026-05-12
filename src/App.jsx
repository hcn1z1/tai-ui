import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, ArrowLeft, Activity, Grid, Layers, Zap, LayoutGrid, Microscope, HeartPulse, ShieldAlert, Leaf, GraduationCap } from 'lucide-react';
import ChapterCard from './components/ChapterCard';
import Chapter1View from './components/Chapter1/Chapter1View';
import Chapter2View from './components/Chapter2/Chapter2View';
import Chapter3View from './components/Chapter3/Chapter3View';
import Chapter4View from './components/Chapter4/Chapter4View';
import QCMView from './components/QCM/QCMView';
import LoadingScreen from './components/LoadingScreen';

const MicrobioteStudyInterface = () => {
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState('home'); // 'home' or 'chapterX'

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  // Chapter Data
  const chapters = [
    { id: 1, title: 'Chapitre 1: Introduction au Microbiote', icon: <Microscope size={24} />, active: true },
    { id: 2, title: 'Chapitre 2: Diversité & Fonctions', icon: <Layers size={24} />, active: true },
    { id: 3, title: 'Chapitre 3: Pathologies & Dysbiose', icon: <ShieldAlert size={24} />, active: true },
    { id: 4, title: 'Chapitre 4: Phytocomposés & Santé', icon: <Leaf size={24} />, active: true },
    { id: 'qcm', title: 'QCM : Testez vos connaissances', icon: <GraduationCap size={24} />, active: true, special: true },
  ];

  const renderActiveChapter = () => {
    switch (activeView) {
      case 'chapter1': return <Chapter1View />;
      case 'chapter2': return <Chapter2View />;
      case 'chapter3': return <Chapter3View />;
      case 'chapter4': return <Chapter4View />;
      case 'chapterqcm': return <QCMView />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative overflow-x-hidden">
      {/* Background Decorations */}
      <div className="fixed -bottom-10 -left-10 text-[200px] opacity-10 select-none pointer-events-none grayscale-0 filter hue-rotate-[280deg]">
        🐌
      </div>
      <div className="fixed -top-10 -right-10 text-[250px] opacity-10 select-none pointer-events-none grayscale-0 filter hue-rotate-[280deg] -scale-x-100">
        🐐
      </div>

      {/* Header */}
      <header className="bg-pink-900 text-white p-4 shadow-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {activeView !== 'home' && (
              <button
                onClick={() => setActiveView('home')}
                className="p-1 hover:bg-pink-800 rounded transition"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h1 className="text-xl font-bold tracking-wide">
              Microbiote <span className="font-light opacity-80">| النملة الجادة لترفيع المادة</span>
            </h1>
          </div>
          <div className="text-sm bg-pink-800 px-3 py-1 rounded-full">
            2025/2026
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 relative z-10">

        {/* HOME VIEW: Chapter Grid */}
        {activeView === 'home' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Modules du Cours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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

export default MicrobioteStudyInterface;
