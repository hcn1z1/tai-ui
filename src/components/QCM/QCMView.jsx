import React, { useState, useEffect } from 'react';
import { qcmQuestions } from '../../data/qcmData';
import { RefreshCw, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const QCMView = () => {
  const [step, setStep] = useState('intro'); // intro, quiz, result
  const [prediction, setPrediction] = useState(null); // 'goat' or 'snail'
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    // Shuffle and pick 20 random questions
    const shuffled = [...qcmQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 20));
  }, []);

  const handlePrediction = (choice) => {
    setPrediction(choice);
    setStep('quiz');
  };

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    const isCorrect = selectedAnswer === questions[currentIdx].answer;
    if (isCorrect) setScore(score + 1);

    // Save user answer
    setUserAnswers([...userAnswers, {
      question: questions[currentIdx].question,
      selected: selectedAnswer,
      correct: questions[currentIdx].answer,
      isCorrect
    }]);

    if (currentIdx + 1 < 20) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer(null);
    } else {
      setStep('result');
    }
  };

  const resetQuiz = () => {
    const shuffled = [...qcmQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 20));
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setPrediction(null);
    setStep('intro');
  };

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      
      {/* Intro Step */}
      {step === 'intro' && (
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center relative overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Testez vos connaissances !</h2>
          <p className="text-gray-600 mb-8">
            Avant de commencer ce QCM de 20 questions aléatoires, faites un pronostic. Pensez-vous finir comme un <strong>Escargot</strong> ou comme une <strong>Chèvre</strong> ?
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 items-center mb-8">
            <button 
              onClick={() => handlePrediction('snail')}
              className="group flex flex-col items-center p-6 border-4 border-transparent hover:border-[#f9429e] rounded-2xl bg-gray-50 hover:bg-[#f9429e]/10 transition-all cursor-pointer w-48"
            >
              <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">🐌</div>
              <h3 className="font-bold text-gray-800">Escargot</h3>
              <p className="text-xs text-gray-500">&lt; 12 / 20</p>
            </button>

            <div className="text-xl font-bold text-gray-300">OU</div>

            <button 
              onClick={() => handlePrediction('goat')}
              className="group flex flex-col items-center p-6 border-4 border-transparent hover:border-[#f9429e] rounded-2xl bg-gray-50 hover:bg-[#f9429e]/10 transition-all cursor-pointer w-48"
            >
              <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">🐐</div>
              <h3 className="font-bold text-gray-800">Chèvre</h3>
              <p className="text-xs text-gray-500">&ge; 12 / 20</p>
            </button>
          </div>
          
          <p className="text-sm text-gray-400 italic">Choisissez un profil pour démarrer le quiz.</p>
        </div>
      )}

      {/* Quiz Step */}
      {step === 'quiz' && questions.length > 0 && (
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
            <h3 className="text-xl font-bold text-[#f9429e]">Question {currentIdx + 1} / 20</h3>
            <span className="text-sm font-semibold bg-[#f9429e]/10 text-[#f9429e] px-3 py-1 rounded-full">
              Score actuel: {score}
            </span>
          </div>

          <h2 className="text-lg text-gray-800 font-semibold mb-6">
            {questions[currentIdx].question}
          </h2>

          <div className="space-y-3">
            {questions[currentIdx].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerSelect(option)}
                className={`
                  w-full text-left p-4 rounded-lg border-2 transition-all
                  ${selectedAnswer === option 
                    ? 'border-[#f9429e] bg-[#f9429e]/10 text-[#f9429e] font-semibold' 
                    : 'border-gray-200 hover:border-[#f9429e]/50 hover:bg-gray-50 text-gray-700'
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              disabled={!selectedAnswer}
              onClick={handleNext}
              className={`
                flex items-center space-x-2 px-6 py-3 rounded-lg font-bold transition-all
                ${selectedAnswer 
                  ? 'bg-[#f9429e] text-white hover:bg-[#d9227e] shadow-md hover:shadow-lg' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
              `}
            >
              <span>{currentIdx === 19 ? 'Terminer' : 'Suivant'}</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Result Step */}
      {step === 'result' && (
        <div className="space-y-8 pb-12">
          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 text-center animate-fade-in relative overflow-hidden">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Résultat du QCM</h2>
            
            <div className="my-8 flex flex-col items-center justify-center">
              <div className="text-9xl mb-6">
                {score >= 12 ? '🐐' : '🐌'}
              </div>
              
              <div className="text-4xl font-extrabold mb-4" style={{ color: '#f9429e' }}>
                {score} / 20
              </div>
              
              <div className="text-2xl font-bold text-gray-800 mb-2">
                {score >= 12 ? 'YOU ARE A GOAT !' : 'YOU ARE A SNAIL !'}
              </div>
              <p className="text-gray-500 mb-8">
                {score >= 12 
                  ? 'Félicitations, vous maîtrisez bien le sujet du microbiote et des phytocomposés !' 
                  : 'Il va falloir revoir certains concepts fondamentaux du cours.'}
              </p>

              {prediction === (score >= 12 ? 'goat' : 'snail') ? (
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold border border-green-100 flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  🎯 Pronostic correct !
                </div>
              ) : (
                <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-bold border border-orange-100 flex items-center gap-2">
                  <XCircle size={16} />
                  😅 Pronostic manqué !
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-900 transition-all shadow-md"
              >
                <RefreshCw size={20} />
                <span>Recommencer</span>
              </button>
            </div>
          </div>

          {/* Correction Section */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              Correction Détaillée
            </h3>
            <div className="space-y-6">
              {userAnswers.map((ans, idx) => (
                <div key={idx} className={`p-4 rounded-lg border-l-4 ${ans.isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                  <p className="font-bold text-gray-800 mb-2">{idx + 1}. {ans.question}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Votre réponse :</span>
                      <p className={`font-semibold ${ans.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {ans.selected}
                      </p>
                    </div>
                    {!ans.isCorrect && (
                      <div>
                        <span className="text-gray-500">Réponse correcte :</span>
                        <p className="font-semibold text-green-600">
                          {ans.correct}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default QCMView;
