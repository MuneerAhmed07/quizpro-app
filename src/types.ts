export interface Question {
  question: string;
  options: string[];
  answer: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  timeLimit: number;
  questions: Question[];
}

export interface Topic {
  id: string;
  name: string;
  quizzes: Quiz[];
}

export interface Subject {
  id: string;
  subject: string;
  icon: string;
  topics: Topic[];
}

export interface QuizResult {
  quizId: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
  answers: number[];
}
