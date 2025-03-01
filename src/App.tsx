import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router basename='/'>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/curriculo" element={<Resume />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;