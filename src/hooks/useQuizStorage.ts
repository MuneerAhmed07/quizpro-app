import { useState, useEffect } from 'react';
import { QuizResult } from '../types';

export function useQuizStorage() {
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('quiz_results');
    if (saved) {
      try {
        setResults(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse quiz results', e);
      }
    }
  }, []);

  const saveResult = (result: QuizResult) => {
    const updated = [...results.filter(r => r.quizId !== result.quizId), result];
    setResults(updated);
    localStorage.setItem('quiz_results', JSON.stringify(updated));
  };

  const getResult = (quizId: string) => {
    return results.find(r => r.quizId === quizId);
  };

  return { results, saveResult, getResult };
}
