import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Navigation';
import Home from './pages/Home';
import Subject from './pages/Subject';
import Topic from './pages/Topic';
import Quiz from './pages/Quiz';
import About, { Contact, Privacy, Terms } from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subject/:subjectId" element={<Subject />} />
            <Route path="/subject/:subjectId/topic/:topicId" element={<Topic />} />
            <Route path="/quiz/:subjectId/:topicId/:quizId" element={<Quiz />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
