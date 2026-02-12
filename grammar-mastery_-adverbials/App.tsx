
import React, { useState, useMemo, useCallback } from 'react';
import { SESSIONS } from './constants';
import { Session, UserAnswer } from './types';

export default function App() {
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, UserAnswer>>({});
  const [viewSummary, setViewSummary] = useState(false);

  const currentSession = useMemo(() => 
    SESSIONS.find(s => s.id === currentSessionId), 
    [currentSessionId]
  );

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        questionId,
        answer: value,
        submitted: false
      }
    }));
  };

  const calculateScore = useCallback((sessionQuestions: typeof SESSIONS[0]['questions']) => {
    const sessionAnswers = sessionQuestions.map(q => answers[q.id]);
    const correctCount = sessionAnswers.filter(a => {
      const q = sessionQuestions.find(sq => sq.id === a?.questionId);
      if (!q || !a) return false;
      const normalizedAns = a.answer.trim().toLowerCase().replace(/[.,!?;:]/g, '');
      const normalizedCorrect = typeof q.correctAnswer === 'string' 
        ? q.correctAnswer.trim().toLowerCase().replace(/[.,!?;:]/g, '')
        : '';
      return normalizedAns === normalizedCorrect;
    }).length;
    
    return ((10 * correctCount) / sessionQuestions.length).toFixed(1);
  }, [answers]);

  const submitSession = () => {
    if (!currentSession) return;
    
    const newAnswers = { ...answers };
    currentSession.questions.forEach(q => {
      const userAns = newAnswers[q.id];
      if (userAns) {
        const normalizedAns = userAns.answer.trim().toLowerCase().replace(/[.,!?;:]/g, '');
        const normalizedCorrect = typeof q.correctAnswer === 'string' 
          ? q.correctAnswer.trim().toLowerCase().replace(/[.,!?;:]/g, '')
          : '';
        newAnswers[q.id] = {
          ...userAns,
          submitted: true,
          isCorrect: normalizedAns === normalizedCorrect
        };
      } else {
         newAnswers[q.id] = {
          questionId: q.id,
          answer: '',
          submitted: true,
          isCorrect: false
        };
      }
    });
    setAnswers(newAnswers);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetProgress = () => {
    if (confirm('Bạn có chắc muốn xóa hết kết quả và làm lại?')) {
      setAnswers({});
      setViewSummary(false);
      setCurrentSessionId(null);
    }
  };

  if (!currentSessionId) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center">
        <header className="max-w-4xl w-full text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Grammar Exercises</h1>
          <p className="text-slate-600 text-lg italic">TRUTH AND VIEWPOINT ADVERBS</p>
          <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
             <h2 className="text-xl font-semibold mb-2">Chào mừng bạn!</h2>
             <p className="text-slate-500">Ứng dụng bao gồm 100 câu hỏi chia làm 4 sessions. Bạn sẽ được chấm điểm trên thang điểm 10 dựa vào số câu đúng.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {SESSIONS.map((session) => (
            <button
              key={session.id}
              onClick={() => setCurrentSessionId(session.id)}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-all text-left group"
            >
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 mb-2">{session.title}</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">{session.description}</p>
              <div className="flex justify-between items-center text-xs font-medium text-slate-400">
                <span>{session.questions.length} Questions</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Start Session →</span>
              </div>
            </button>
          ))}
        </div>

        <footer className="mt-20 text-slate-400 text-sm">
          &copy; 2024 Grammar Mastery App. No answers revealed until submitted.
        </footer>
      </div>
    );
  }

  const sessionIsSubmitted = currentSession.questions.every(q => answers[q.id]?.submitted);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentSessionId(null)}
            className="text-slate-500 hover:text-slate-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          </button>
          <div>
            <h2 className="font-bold text-slate-900 leading-tight">{currentSession.title}</h2>
            <p className="text-xs text-slate-500">{currentSession.questions.length} questions</p>
          </div>
        </div>
        <div className="flex gap-2">
            {!sessionIsSubmitted ? (
               <button 
               onClick={submitSession}
               className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
             >
               Nộp bài
             </button>
            ) : (
                <div className="flex items-center gap-3">
                    <span className="text-indigo-600 font-bold text-lg">Score: {calculateScore(currentSession.questions)} / 10</span>
                    <button 
                        onClick={() => setCurrentSessionId(null)}
                        className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                        Quay lại menu
                    </button>
                </div>
            )}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-10 px-6">
        <div className="mb-8">
            <h3 className="text-indigo-600 font-semibold uppercase tracking-wider text-sm mb-2">Instructions</h3>
            <p className="text-slate-600">{currentSession.description}</p>
        </div>

        <div className="space-y-6">
          {currentSession.questions.map((q, index) => {
            const userAnswer = answers[q.id];
            const isSubmitted = userAnswer?.submitted;
            const isCorrect = userAnswer?.isCorrect;

            return (
              <div 
                key={q.id}
                className={`p-6 bg-white rounded-2xl border transition-all ${
                  isSubmitted 
                    ? isCorrect 
                      ? 'border-emerald-200 bg-emerald-50/30' 
                      : 'border-rose-200 bg-rose-50/30'
                    : 'border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500">
                    {index + 1}
                  </span>
                  <div className="flex-grow">
                    <p className="text-lg font-medium text-slate-800 mb-4">{q.prompt}</p>
                    
                    {q.type === 'multiple-choice' ? (
                      <div className="grid grid-cols-1 gap-3">
                        {q.options?.map((opt) => (
                          <label 
                            key={opt}
                            className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                              userAnswer?.answer === opt 
                                ? 'border-indigo-500 bg-indigo-50' 
                                : 'border-slate-100 hover:border-slate-300'
                            } ${isSubmitted && 'pointer-events-none opacity-80'}`}
                          >
                            <input 
                              type="radio" 
                              name={`q-${q.id}`} 
                              value={opt}
                              checked={userAnswer?.answer === opt}
                              onChange={(e) => handleAnswer(q.id, e.target.value)}
                              className="w-4 h-4 text-indigo-600"
                            />
                            <span className="ml-3 text-slate-700">{opt}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <input 
                          type="text"
                          placeholder="Nhập câu trả lời tại đây..."
                          value={userAnswer?.answer || ''}
                          onChange={(e) => handleAnswer(q.id, e.target.value)}
                          disabled={isSubmitted}
                          className={`w-full p-3 rounded-xl border-2 focus:ring-4 focus:outline-none transition-all ${
                            isSubmitted 
                              ? 'bg-transparent border-transparent' 
                              : 'border-slate-100 focus:border-indigo-500 focus:ring-indigo-100 bg-slate-50'
                          }`}
                        />
                      </div>
                    )}

                    {isSubmitted && (
                      <div className={`mt-4 flex items-center gap-2 font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {isCorrect ? (
                          <><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Đúng</>
                        ) : (
                          <><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg> Sai</>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 mb-20 flex justify-center">
             {!sessionIsSubmitted ? (
                <button 
                    onClick={submitSession}
                    className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all hover:-translate-y-1"
                >
                    Nộp bài để xem điểm
                </button>
             ) : (
                <button 
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setCurrentSessionId(null);
                    }}
                    className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all"
                >
                    Hoàn thành & Quay lại Menu
                </button>
             )}
        </div>
      </main>
    </div>
  );
}
