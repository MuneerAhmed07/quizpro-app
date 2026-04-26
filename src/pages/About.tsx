import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Users, Shield, Globe, Heart, Check } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8 text-center">About QuizPro</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">
            QuizPro is an interactive learning platform designed to help students and professionals master complex subjects through engaging assessments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Our Mission</h3>
              <p className="text-slate-500 text-sm">To democratize education by providing high-quality testing materials to everyone, regardless of their location or background.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Our Community</h3>
              <p className="text-slate-500 text-sm">Join thousands of learners who use our platform daily to improve their grades and technical skills.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="space-y-4 text-slate-600 mb-12">
            <li className="flex items-start gap-3">
              <Heart className="text-rose-500 mt-1 flex-shrink-0" size={18} />
              <span>Expertly curated questions by subject matter specialists.</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="text-blue-500 mt-1 flex-shrink-0" size={18} />
              <span>Secure platform with real-time progress tracking.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
              <span>100% free to use for individual learners worldwide.</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

// Reuse the structure for other pages
export function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-display font-bold text-slate-900 mb-12 text-center">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl">
          <Mail className="mx-auto mb-4 text-blue-600" size={32} />
          <div className="font-bold mb-1">Email Us</div>
          <div className="text-slate-500 text-sm">support@quizpro.com</div>
        </div>
        <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl">
          <Phone className="mx-auto mb-4 text-blue-600" size={32} />
          <div className="font-bold mb-1">Call Us</div>
          <div className="text-slate-500 text-sm">+1 (555) 123-4567</div>
        </div>
        <div className="text-center p-8 bg-white border border-slate-200 rounded-2xl">
          <MapPin className="mx-auto mb-4 text-blue-600" size={32} />
          <div className="font-bold mb-1">Visit Us</div>
          <div className="text-slate-500 text-sm">123 Quiz Ave, Brain City</div>
        </div>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="hello@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
            <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-32" placeholder="How can we help?"></textarea>
          </div>
          <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 prose prose-slate">
      <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <p className="text-slate-600">Last updated: April 23, 2026</p>
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
        <p className="text-slate-600 leading-relaxed">
          We collect minimal information required to provide our quiz services. This includes your score history stored locally on your device and optional contact information if you reach out to us.
        </p>
        <h2 className="text-2xl font-bold text-slate-900">2. How We Use Information</h2>
        <p className="text-slate-600 leading-relaxed">
          The data collected is used solely to track your educational progress and improve the quality of our content. We do not sell your personal data to third parties.
        </p>
        <h2 className="text-2xl font-bold text-slate-900">3. Local Storage</h2>
        <p className="text-slate-600 leading-relaxed">
          Our application uses LocalStorage to keep your quiz results. You can clear this data at any time by clearing your browser cache or using the "Reset Progress" feature in settings.
        </p>
      </section>
    </div>
  );
}

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 prose prose-slate">
      <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Terms & Conditions</h1>
      <p className="text-slate-600">Last updated: April 23, 2026</p>
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">1. Acceptable Use</h2>
        <p className="text-slate-600 leading-relaxed">
          By using QuizPro, you agree to use the platform for educational purposes only. Any attempt to scrape content or disrupt service is strictly prohibited.
        </p>
        <h2 className="text-2xl font-bold text-slate-900">2. Content Ownership</h2>
        <p className="text-slate-600 leading-relaxed">
          All quiz materials, including questions, descriptions, and designs, are the intellectual property of QuizPro unless otherwise stated.
        </p>
        <h2 className="text-2xl font-bold text-slate-900">3. Limitation of Liability</h2>
        <p className="text-slate-600 leading-relaxed">
          QuizPro provides content "as-is" and does not guarantee the accuracy or medical/legal validity of any educational material provided.
        </p>
      </section>
    </div>
  );
}
