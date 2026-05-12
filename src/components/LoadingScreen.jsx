import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setStep] = useState(0); // 0: Snail, 1: Horse, 2: Text

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000), // Show Snail for 1s
      setTimeout(() => setStep(2), 2000), // Show Horse for 1s
      setTimeout(() => setStep(3), 3500), // Show Text for 1.5s
      setTimeout(() => onComplete(), 4500) // End sequence
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden">
      <div className="text-center">
        {phase === 0 && (
          <div className="animate-bounce-in text-[120px] filter hue-rotate-[280deg]">
            🐌
          </div>
        )}
        
        {phase === 1 && (
          <div className="animate-bounce-in text-[150px] filter hue-rotate-[280deg]">
            🐴
          </div>
        )}

        {phase === 2 && (
          <div className="animate-fade-in space-y-4">
             <div className="flex justify-center gap-4 text-4xl mb-4">
                <span className="filter hue-rotate-[280deg]">🐌</span>
                <span className="filter hue-rotate-[280deg]">🐴</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-pink-600 animate-pulse tracking-tight" dir="rtl">
                النملة الجادة لترفيع المادة
             </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
