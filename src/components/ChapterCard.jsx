import React from 'react';

const ChapterCard = ({ chapter, onClick }) => {
  const isAvailable = chapter.active;

  return (
    <div
      onClick={() => isAvailable ? onClick() : null}
      className={`
        p-6 rounded-xl border-2 transition-all cursor-pointer shadow-sm group
        ${isAvailable
          ? chapter.special
            ? 'border-indigo-500 bg-indigo-50/30 hover:shadow-lg hover:border-indigo-600'
            : 'border-blue-500 bg-white hover:shadow-lg hover:border-blue-600'
          : 'border-transparent bg-white hover:bg-gray-50 opacity-70 hover:opacity-100'}
      `}
    >
      <div className={`mb-4 p-3 rounded-full inline-block ${isAvailable ? chapter.special ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
        {chapter.icon}
      </div>
      <h3 className={`font-bold text-lg mb-2 ${isAvailable ? 'text-gray-900' : 'text-gray-600'}`}>
        {chapter.title}
      </h3>
      {isAvailable ? (
        <span className={`text-xs font-semibold px-2 py-1 rounded ${chapter.special ? 'text-indigo-600 bg-indigo-50' : 'text-blue-600 bg-blue-50'}`}>
          {chapter.special ? 'Reference Guide' : 'Available Now'}
        </span>
      ) : (
        <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded">
          Locked
        </span>
      )}
    </div>
  );
};

export default ChapterCard;
