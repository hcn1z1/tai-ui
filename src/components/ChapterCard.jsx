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
            ? 'border-rose-500 bg-rose-50/30 hover:shadow-lg hover:border-rose-600'
            : 'border-pink-500 bg-white hover:shadow-lg hover:border-pink-600'
          : 'border-transparent bg-white hover:bg-gray-50 opacity-70 hover:opacity-100'}
      `}
    >
      <div className={`mb-4 p-3 rounded-full inline-block ${isAvailable ? chapter.special ? 'bg-rose-100 text-rose-600' : 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-500'}`}>
        {chapter.icon}
      </div>
      <h3 className={`font-bold text-lg mb-2 ${isAvailable ? 'text-gray-900' : 'text-gray-600'}`}>
        {chapter.title}
      </h3>
      {isAvailable ? (
        <span className={`text-xs font-semibold px-2 py-1 rounded ${chapter.special ? 'text-rose-600 bg-rose-50' : 'text-pink-600 bg-pink-50'}`}>
          {chapter.special ? 'Guide de Référence' : 'Disponible'}
        </span>
      ) : (
        <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded">
          Verrouillé
        </span>
      )}
    </div>
  );
};

export default ChapterCard;
