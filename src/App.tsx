import React, { useState, useEffect } from 'react';
import { Code2, Mail, Github, Linkedin, MessageSquare, ScrollText, User, Briefcase, FolderGit2, ArrowUp } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Resume />
        <Contact />
      </main>
      <Footer />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 animate-fade-in"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}