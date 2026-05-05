import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Navigation';

import Home from './pages/Home';
import Subject from './pages/Subject';
import Topic from './pages/Topic';
import Quiz from './pages/Quiz';
import About, { Contact, Privacy, Terms } from './pages/About';

import PasswordGate from './PasswordGate';

function App() {
  return (
    <PasswordGate>
    <Router basename="/quizpro-app/">
      <div className="flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-grow">
          <Routes>

            {/* Home */}
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />

            {/* Subjects */}
            <Route path="/subject/:subjectId" element={<Subject />} />

            {/* Topics */}
            <Route path="/subject/:subjectId/topic/:topicId" element={<Topic />} />

            {/* Quiz */}
            <Route path="/quiz/:subjectId/:topicId/:quizId" element={<Quiz />} />

            {/* Static Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  </PasswordGate>
  );
}

export default App;