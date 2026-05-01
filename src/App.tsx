import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import SoftSkills from './pages/SoftSkills';
import SoftSkillsWeek from './pages/SoftSkillsWeek';
import Resume from './pages/Resume';
import SoftSkillsWeek1 from './pages/week/week1';
import SoftSkillsWeek2 from './pages/week/week2';
import SoftSkillsWeek6 from './pages/week/week6';
import EssayWriting from './pages/EssayWriting';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/softskills/overview" element={<SoftSkills />} />
            <Route path="/softskills/week1" element={<SoftSkillsWeek1 />} />
            <Route path="/softskills/week2" element={<SoftSkillsWeek2 />} />
            <Route path="/softskills/week6" element={<SoftSkillsWeek6 />} />
            <Route path="/softskills/essay-writing" element={<EssayWriting />} />
            <Route path="/softskills/week:weekNumber" element={<SoftSkillsWeek />} />
            <Route path="*" element={<h1 className='text-center mt-10 text-xl text-white'>Page Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
