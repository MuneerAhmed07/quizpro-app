import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Trophy, 
  RotateCcw,
  Home,
  Check,
  X
} from 'lucide-react';
import { Quiz as QuizType, QuizResult } from '../types';
import { useQuizStorage } from '../hooks/useQuizStorage';
import { fetchSubjectData } from '../services/dataService';

export default function Quiz() {
  const { subjectId, topicId, quizId } = useParams<{ subjectId: string; topicId: string; quizId: string }>();
  const navigate = useNavigate();
  const { saveResult } = useQuizStorage();

  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Load Data
  useEffect(() => {
    if (!subjectId || !topicId || !quizId) return;

    const loadData = async () => {
      try {
        const data = await fetchSubjectData(subjectId);
        const topic = data.topics.find(t => t.id === topicId);
        const q = topic?.quizzes.find(qz => qz.id === quizId);
        
        if (q) {
          setQuiz(q);
          setSelectedAnswers(new Array(q.questions.length).fill(null));
          setTimeLeft(q.timeLimit);
          setTimerActive(true);
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    loadData();
  }, [subjectId, topicId, quizId]);

  // Timer Effect
  useEffect(() => {
    let interval: any;
    if (timerActive && timeLeft > 0 && !isSubmitted) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive && !isSubmitted) {
      handleSubmit();
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, isSubmitted]);

  const handleSubmit = useCallback(() => {
    if (!quiz) return;
    
    setIsSubmitted(true);
    setTimerActive(false);

    let score = 0;
    selectedAnswers.forEach((ans, idx) => {
      if (ans === quiz.questions[idx].answer) score++;
    });

    const result: QuizResult = {
      quizId: quiz.id,
      score,
      total: quiz.questions.length,
      percentage: Math.round((score / quiz.questions.length) * 100),
      date: new Date().toISOString(),
      answers: selectedAnswers as number[]
    };

    saveResult(result);
  }, [quiz, selectedAnswers, saveResult]);

  const handleOptionSelect = (optionIdx: number) => {
    if (isSubmitted) return;
    const updated = [...selectedAnswers];
    updated[currentIdx] = optionIdx;
    setSelectedAnswers(updated);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!quiz) return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Quiz Not Found</h2>
      <Link to="/" className="text-blue-600">Back to Home</Link>
    </div>
  );

  const currentQuestion = quiz.questions[currentIdx];
  const progressPercentage = ((currentIdx + 1) / quiz.questions.length) * 100;

  if (isSubmitted) {
    const score = selectedAnswers.filter((ans, idx) => ans === quiz.questions[idx].answer).length;
    const percentage = Math.round((score / quiz.questions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bento-card !p-0 overflow-hidden"
        >
          <div className="bg-slate-900 p-12 text-center text-white">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-accent/20">
              <Trophy size={32} />
            </div>
            <h1 className="text-2xl font-bold mb-2">Quiz Completed!</h1>
            <p className="text-slate-400 text-sm mb-8">{quiz.title}</p>
            
            <div className="flex justify-center gap-12">
              <div className="text-center">
                <div className="stat-value !text-white">{score}/{quiz.questions.length}</div>
                <div className="stat-label">Total Score</div>
              </div>
              <div className="w-px bg-slate-800" />
              <div className="text-center">
                <div className="stat-value !text-accent">{percentage}%</div>
                <div className="stat-label">Accuracy</div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <h2 className="text-sm font-bold text-text-main uppercase tracking-widest border-b border-border pb-4">Question Review</h2>
            {quiz.questions.map((q, qIdx) => {
              const userAns = selectedAnswers[qIdx];
              const isCorrect = userAns === q.answer;
              return (
                <div key={qIdx} className="p-5 rounded-xl border border-border bg-slate-50/50">
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
                      isCorrect ? 'bg-success' : 'bg-error'
                    } text-white`}>
                      {qIdx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-text-main text-sm mb-4">{q.question}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, oIdx) => {
                          const isOptionCorrect = oIdx === q.answer;
                          const isOptionSelected = oIdx === userAns;
                          let statusClass = 'border-border text-text-sub';
                          if (isOptionCorrect) statusClass = 'border-success bg-green-50 text-success font-bold';
                          else if (isOptionSelected && !isCorrect) statusClass = 'border-error bg-red-50 text-error font-bold';

                          return (
                            <div key={oIdx} className={`px-4 py-2.5 rounded-lg border text-xs flex items-center justify-between bg-white ${statusClass}`}>
                              {opt}
                              {isOptionCorrect && <Check size={14} />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-8 flex gap-4">
              <button 
                onClick={() => window.location.reload()}
                className="btn-bento btn-bento-primary flex-1"
              >
                <RotateCcw size={16} /> Retake Quiz
              </button>
              <Link 
                to={`/subject/${subjectId}/topic/${topicId}`}
                className="btn-bento btn-bento-outline flex-1"
              >
                <Home size={16} /> Back to Topic
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bento-card mb-6">
          <div className="card-title">
            {quiz.title} <span>Question {currentIdx + 1} of {quiz.questions.length}</span>
          </div>
          <div className="progress-container">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              className="progress-bar"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold text-text-sub uppercase tracking-widest mt-2">
             <div className="flex items-center gap-1.5">
                <Clock size={12} className={timeLeft < 30 ? 'text-error' : ''} />
                <span className={timeLeft < 30 ? 'text-error' : ''}>{formatTime(timeLeft)} Remaining</span>
             </div>
             <div>{Math.round(progressPercentage)}% Complete</div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bento-card min-h-[450px] flex flex-col"
          >
            <h2 className="quiz-question mb-4 rounded-xl font-bold bg-blue-500 text-white p-5">{currentQuestion.question}</h2>

            <div className="options-list space-y-3 flex-1">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentIdx] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`option group ${isSelected ? 'selected' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors ${
                        isSelected ? 'bg-accent text-white shadow-md shadow-accent/20' : 'bg-slate-100 text-text-sub border border-border group-hover:bg-white group-hover:border-accent group-hover:text-accent'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className={`font-medium transition-colors ${isSelected ? 'text-accent' : 'text-text-main group-hover:text-text-main'}`}>
                        {option}
                      </span>
                    </div>
                    {isSelected ? (
                      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        <CheckCircle2 size={18} className="text-accent" />
                      </motion.div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-border group-hover:border-accent transition-colors" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(prev => prev - 1)}
                className="btn-bento btn-bento-outline"
              >
                ← Previous
              </button>

              {currentIdx === quiz.questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="btn-bento btn-bento-primary !bg-success hover:!bg-emerald-600"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={() => setCurrentIdx(prev => prev + 1)}
                  className="btn-bento btn-bento-primary"
                >
                  Next Question →
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="adsense-placeholder h-32">Sponsored Content</div>
      </div>
    </div>
  );
}
