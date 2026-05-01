import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';

const PASSWORD = "Zarkhy420@";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input === PASSWORD) {
      setAuthorized(true);
      setError("");
    } else {
      setError("The password you entered is incorrect.");
      setInput(""); // Clear input on failure for security
    }
  };

  if (authorized) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 font-sans">
      <div className="w-full max-w-[400px] bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 rounded-3xl p-8 transition-all">
        
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 p-4 rounded-2xl">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Protected Content
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Please enter your authorization code to view this page.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`w-full bg-slate-50 border ${
                error ? 'border-red-400 ring-red-100' : 'border-slate-200 ring-blue-100'
              } focus:border-blue-500 focus:ring-4 outline-none px-4 py-3.5 rounded-xl text-slate-900 transition-all placeholder:text-slate-400`}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Error Message */}
          <div className="h-2">
            {error && (
              <p className="text-red-500 text-xs font-medium flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                <span className="w-1 h-1 bg-red-500 rounded-full inline-block" />
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 active:scale-[0.98] transition-all text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
          >
            <ShieldCheck size={18} />
            Unlock Access
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">
            End-to-End Encrypted
          </p>
        </div>
      </div>
    </div>
  );
}