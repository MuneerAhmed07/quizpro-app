import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Calculator, BookOpenText, Book, Search, ArrowRight, Zap, Trophy, Clock, RotateCcw, TreePalm } from 'lucide-react';
import { motion } from 'motion/react';

const subjects = [
  { id: 'computer', name: 'Computer Science', icon: Monitor, color: 'text-blue-600', bg: 'bg-blue-50', description: 'Networking, Programming, Hardware and more.' },
  { id: 'math', name: 'Mathematics', icon: Calculator, color: 'text-emerald-600', bg: 'bg-emerald-50', description: 'Algebra, Geometry, and Calculus challenges.' },
  { id: 'pakstudy', name: 'Pak Study', icon: Book, color: 'text-amber-600', bg: 'bg-amber-50', description: 'History, Geography, and Civic studies of Pakistan.' },
  { id: 'fia', name: 'FIA', icon: BookOpenText, color: 'text-red-600', bg: 'bg-amber-50', description: 'FIA test preparation including MCQs, past papers, syllabus, and key topics like GK, English, IT, and current affairs.' },
  { id: 'fgei', name: 'FGEI', icon: BookOpenText, color: 'text-blue-600', bg: 'bg-amber-50', description: 'Preparation for FGEI teaching and non-teaching posts including past papers, MCQs, syllabus, pedagogy, subject knowledge, English, and general knowledge.' },
  { id: 'islamic', name: 'Islamic Study', icon: TreePalm, color: 'text-green-600', bg: 'bg-amber-50', description: 'Islamic Studies preparation with MCQs, past papers, important topics, and exam-focused content.' },
];

export default function Home() {
  const [search, setSearch] = React.useState('');
  
  const filteredSubjects = subjects.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.description.toLowerCase().includes(search.toLowerCase())
  );

  const clearProgress = () => {
    if (window.confirm('Are you sure you want to clear all your quiz history?')) {
      localStorage.removeItem('quiz_results');
      window.location.reload();
    }
  };

  return (
    <div className="bg-bg min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-6 auto-rows-[160px]">
          
          {/* Welcome Card - Large */}
          <div className="col-span-12 lg:col-span-8 row-span-2 bento-card relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Interactive Learning</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6 leading-tight">
                Master any subject with <span className="text-accent underline decoration-accent/20">Quiz Pro</span>
              </h1>
              <p className="text-text-sub text-lg max-w-xl mb-8">
                Expert-curated quizzes designed to help you prepare, track progress, and excel in your educational journey.
              </p>
              <div className="flex items-center gap-4">
                <button className="btn-bento btn-bento-primary shadow-lg shadow-accent/20">
                  Explore Now <ArrowRight size={18} />
                </button>
                <div className="relative">
                  
                  <input 
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search subject..." 
                    className="search-pill pl-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card - Vertical */}
          <div className="col-span-12 md:col-span-4 row-span-2 bento-card flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-sub">System Activity</h3>
              <Zap className="text-amber-500" size={20} />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span>General Accuracy</span>
                  <span className="text-accent">68%</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[68%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span>New Quizzes</span>
                  <span className="text-success">12 Today</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-success w-[40%]" />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-border mt-4">
              <p className="text-xs text-text-sub leading-relaxed">
                Join <span className="font-bold text-text-main">4,250+</span> learners today and climb the global leaderboard.
              </p>
            </div>
          </div>

          {/* Ad Section - Wide */}
          <div className="col-span-12 row-span-1 adsense-placeholder !my-0 !h-auto">
            Google AdSense Responsive Banner Area
          </div>

          {/* Subjects Section Header */}
          <div className="col-span-12 mt-4">
             <div className="flex justify-between items-end">
                <h2 className="text-xl font-extrabold text-text-main">Popular Subjects</h2>
                <Link to="/" className="text-xs font-bold text-accent uppercase tracking-widest hover:underline">View All</Link>
             </div>
          </div>

          {/* Subject Cards - Grid */}
          {filteredSubjects.map((subject, idx) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1"
            >
              <Link to={`/subject/${subject.id}`} className="group bento-card h-full flex items-center gap-5 hover:border-accent">
                <div className={`w-12 h-12 flex-shrink-0 ${subject.bg} ${subject.color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <subject.icon size={24} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-bold text-text-main truncate group-hover:text-accent transition-colors">{subject.name}</h3>
                  <p className="text-xs text-text-sub truncate">{subject.description}</p>
                </div>
                <ArrowRight size={16} className="text-border group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}

          {/* Feature Highlight */}
          <div className="col-span-12 md:col-span-6 row-span-1 bento-card bg-slate-100 flex items-center justify-between">
             <div className="flex items-center gap-6">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border">
                  <RotateCcw className="text-text-sub" size={20} />
               </div>
               <div>
                  <h4 className="font-bold text-sm text-text-main">Privacy & Data</h4>
                  <p className="text-text-sub text-xs mt-1">Manage your local storage settings.</p>
               </div>
             </div>
             <button 
                onClick={clearProgress}
                className="btn-bento btn-bento-outline border-slate-300 text-[10px] uppercase tracking-tighter"
              >
                Clear Progress
              </button>
          </div>

        </div>
      </div>
    </div>
  );
}
