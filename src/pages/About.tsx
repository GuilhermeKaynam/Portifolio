import React from 'react';
import { Code, Database, Server, Palette } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Sobre Mim
              </h1>
              <div className="h-1 w-20 bg-blue-600 mb-8"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Desenvolvedor FullStack apaixonado por tecnologia e inovação, com experiência em desenvolvimento web e mobile.
              </p>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 blur opacity-70"></div>
                <div className="relative rounded-lg overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img 
                    src="https://i.imgur.com/hyzQ6av.jpeg" 
                    alt="Guilherme Kaynam" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Minha História" 
            subtitle="Conheça um pouco mais sobre minha trajetória"
          />
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Sou Guilherme Kaynam, desenvolvedor FullStack apaixonado por tecnologia e inovação. Meu primeiro contato com a programação aconteceu aos 14 anos, e desde então, venho aprimorando minhas habilidades e explorando novas tecnologias. Com uma formação sólida pelo bootcamp da Generation Brasil, desenvolvi expertise em Java, Spring Boot, React, MySQL e diversas outras tecnologias, sempre focado em criar soluções eficientes e inovadoras.
            </p>
            <p>
              Ao longo da minha trajetória, participei do desenvolvimento de projetos desafiadores, como um sistema de gestão para lava rápido, um e-commerce completo e o InovaMed – um sistema para consultórios médicos que integra agendamento de consultas, gerenciamento de pacientes e dashboards administrativos. Além disso, recentemente finalizei os sites BuffetGrill e TCTurismo, desenvolvidos com React e Tailwind, priorizando desempenho e experiência do usuário.
            </p>
            <p>
              Sempre em busca de aprendizado contínuo, encaro cada novo desafio como uma oportunidade de crescimento. Minha missão é transformar ideias em realidade, criando soluções tecnológicas que geram impacto e valor.
            </p>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Minhas Habilidades" 
            subtitle="Tecnologias e ferramentas que utilizo no dia a dia"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard 
              title="Front-end" 
              skills={skills.frontend}
              icon={<Code size={28} />}
            />
            <SkillCard 
              title="Back-end" 
              skills={skills.backend}
              icon={<Server size={28} />}
            />
            <SkillCard 
              title="DevOps & Outros" 
              skills={skills.devops}
              icon={<Database size={28} />}
            />
            <SkillCard 
              title="Design" 
              skills={skills.design}
              icon={<Palette size={28} />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;