import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Clock, CheckCircle2, Trophy, BarChart3, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { Topic as TopicType } from '../types';
import { useQuizStorage } from '../hooks/useQuizStorage';
import { fetchSubjectData } from '../services/dataService';

export default function Topic() {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();
  const [topic, setTopic] = useState<TopicType | null>(null);
  const [loading, setLoading] = useState(true);
  const { getResult } = useQuizStorage();

  useEffect(() => {
    if (!subjectId || !topicId) return;

    const loadData = async () => {
      try {
        const data = await fetchSubjectData(subjectId);
        const found = data.topics.find(t => t.id === topicId);
        setTopic(found || null);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    loadData();
  }, [subjectId, topicId]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!topic) return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Topic Not Found</h2>
      <Link to={`/subject/${subjectId}`} className="text-blue-600 font-semibold">Back to Subject</Link>
    </div>
  );

  return (
    <div className="bg-bg min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to={`/subject/${subjectId}`} className="btn-bento btn-bento-outline mb-8">
          <ArrowLeft size={16} /> Back to Topics
        </Link>

        <div className="bento-card mb-12 flex justify-between items-center bg-slate-900 text-black border-none">
          <div>
            <h1 className="text-2xl font-extrabold mb-2">{topic.name} Assessments</h1>
            <p className="text-slate-400 text-xs">
              Complete all quizzes to earn the {topic.name} Mastery Badge.
            </p>
          </div>
          <div className="hidden sm:block">
             <Trophy className="text-accent" size={40} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="adsense-placeholder h-20 !my-0">Ad Placement</div>
          {topic.quizzes.map((quiz, idx) => {
            const previousResult = getResult(quiz.id);
            return (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="bento-card flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                       <h3 className="font-extrabold text-text-main text-base group-hover:text-accent transition-colors">{quiz.title}</h3>
                       {previousResult && <span className="text-[9px] font-bold uppercase tracking-widest text-success bg-green-50 px-2 py-0.5 rounded">Legacy Pass</span>}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-text-sub font-medium">
                        <span className="flex items-center gap-1.5"><Clock size={12}/> {Math.floor(quiz.timeLimit / 60)} min</span>
                        <span className="flex items-center gap-1.5"><BarChart3 size={12}/> {quiz.questions.length} Qs</span>
                        {previousResult && <span className="flex items-center gap-1.5 text-accent"><Trophy size={12}/> Best: {previousResult.score}/{previousResult.total}</span>}
                    </div>
                  </div>
                  <div className="shrink-0 flex gap-3">
                    <Link 
                      to={`/quiz/${subjectId}/${topicId}/${quiz.id}`}
                      className="btn-bento btn-bento-primary w-full sm:w-auto"
                    >
                      {previousResult ? <RotateCcw size={14} /> : <Play size={14} fill="currentColor" />}
                      {previousResult ? 'Retry' : 'Start'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="adsense-placeholder h-32 mt-12">Recommended Products</div>
      </div>
    </div>
  );
}
