import React, { useState } from 'react';
import { Calculator, FileText } from 'lucide-react';
import CalculationContent from './CalculationContent';
import NotesContent from './NotesContent';

const Chapter6View = () => {
  const [activeTab, setActiveTab] = useState('calculations'); // 'calculations' or 'notes'

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Chapter 6: Nutritional Assessment</h2>
      </div>

      {/* Toggle Tabs */}
      <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-200 inline-flex mb-8 w-full md:w-auto">
        <button
          onClick={() => setActiveTab('calculations')}
          className={`
            flex items-center justify-center space-x-2 px-6 py-2 rounded-md text-sm font-semibold transition-all flex-1 md:flex-none
            ${activeTab === 'calculations'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-50'}
          `}
        >
          <Calculator size={16} />
          <span>Calculations & Rules</span>
        </button>
        <button
          onClick={() => setActiveTab('notes')}
          className={`
            flex items-center justify-center space-x-2 px-6 py-2 rounded-md text-sm font-semibold transition-all flex-1 md:flex-none
            ${activeTab === 'notes'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-50'}
          `}
        >
          <FileText size={16} />
          <span>Notes & Definitions</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 gap-8">
        {activeTab === 'calculations' ? <CalculationContent /> : <NotesContent />}
      </div>
    </div>
  );
};

export default Chapter6View;
