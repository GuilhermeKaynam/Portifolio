import React from 'react';
import { ArrowRight, Code, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  // Get only 3 projects for the homepage
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Guilherme Kaynam
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6">
                Desenvolvedor FullStack
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                Transformando ideias em realidade através de soluções tecnológicas inovadoras e de alto impacto.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projetos" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Ver Projetos
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link 
                  to="/contato" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  Contato
                </Link>
              </div>
              
              <div className="flex mt-8 space-x-4">
                <a 
                  href="https://github.com/GuilhermeKaynam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/guilherme-kaynam/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:GuilhermeKaynam2006@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur opacity-70 animate-pulse"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl h-64 w-64 md:h-80 md:w-80">
                  <img 
                    src="https://i.imgur.com/hyzQ6av.jpeg" 
                    alt="Guilherme Kaynam" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Sobre Mim" 
            subtitle="Desenvolvedor FullStack apaixonado por tecnologia e inovação"
          />
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Sou Guilherme Kaynam, desenvolvedor FullStack apaixonado por tecnologia e inovação. Meu primeiro contato com a programação aconteceu aos 14 anos, e desde então, venho aprimorando minhas habilidades e explorando novas tecnologias.
            </p>
            <div className="mt-8">
              <Link 
                to="/sobre" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                Saiba mais sobre mim
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Projetos em Destaque" 
            subtitle="Conheça alguns dos meus trabalhos mais recentes"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/projetos" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Ver Todos os Projetos
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estou disponível para novos projetos e oportunidades. Entre em contato para discutirmos como posso ajudar a transformar suas ideias em realidade.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            Entre em Contato
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;