import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { Subject as SubjectType } from '../types';
import { fetchSubjectData } from '../services/dataService';

export default function Subject() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<SubjectType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!subjectId) return;

    const loadData = async () => {
      try {
        const data = await fetchSubjectData(subjectId);
        setSubject(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };

    loadData();
  }, [subjectId]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (error || !subject) return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Subject Not Found</h2>
      <Link to="/" className="text-blue-600 font-semibold">Back to Home</Link>
    </div>
  );

  return (
    <div className="bg-bg min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="btn-bento btn-bento-outline mb-8">
          <ArrowLeft size={16} /> Back to Subjects
        </Link>

        <div className="bento-card mb-12">
          <h1 className="text-3xl font-extrabold text-text-main mb-3">{subject.subject}</h1>
          <p className="text-text-sub max-w-2xl text-sm">
            Explore focused areas in {subject.subject}. Each module contains several assessments to test your depth of understanding.
          </p>
        </div>

        <div className="adsense-placeholder h-24 mb-12">Banner Advertisement</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subject.topics.map((topic, idx) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                to={`/subject/${subjectId}/topic/${topic.id}`}
                className="group block bento-card relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                    <Layers size={20} />
                  </div>
                  <div className="text-[10px] font-bold text-text-sub uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                    {topic.quizzes.length} Lessons
                  </div>
                </div>
                <h3 className="font-extrabold text-text-main mb-2 truncate group-hover:text-accent transition-colors tracking-tight">
                  {topic.name}
                </h3>
                <p className="text-text-sub text-xs line-clamp-2 mb-6">
                  Master the core principles of {topic.name} with focused problem sets.
                </p>
                <div className="flex items-center gap-2 text-[11px] font-bold text-accent uppercase tracking-wider">
                  View Quizzes <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
