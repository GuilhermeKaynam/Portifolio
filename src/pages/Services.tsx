import React from 'react';
import { Code, Database, Layout, Globe, Smartphone, Server } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web responsivas, modernas e otimizadas para SEO, utilizando as mais recentes tecnologias como React, Next.js e Tailwind CSS.",
    icon: <Globe size={40} />
  },
  {
    id: 2,
    title: "Desenvolvimento Front-end",
    description: "Implementação de interfaces de usuário intuitivas e atraentes, com foco em usabilidade, acessibilidade e performance.",
    icon: <Layout size={40} />
  },
  {
    id: 3,
    title: "Desenvolvimento Back-end",
    description: "Construção de APIs robustas e escaláveis utilizando Java, Spring Boot e bancos de dados relacionais como MySQL e PostgreSQL.",
    icon: <Server size={40} />
  },
  {
    id: 4,
    title: "Desenvolvimento Full-Stack",
    description: "Soluções completas que integram front-end e back-end, garantindo uma experiência coesa e eficiente para o usuário final.",
    icon: <Code size={40} />
  },
  {
    id: 5,
    title: "Desenvolvimento Mobile",
    description: "Criação de aplicativos móveis responsivos e intuitivos para iOS e Android utilizando tecnologias modernas.",
    icon: <Smartphone size={40} />
  },
  {
    id: 6,
    title: "Banco de Dados",
    description: "Modelagem, implementação e otimização de bancos de dados relacionais e não-relacionais, garantindo segurança e performance.",
    icon: <Database size={40} />
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Meus Serviços" 
            subtitle="Soluções personalizadas para atender às suas necessidades"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map(service => (
              <div 
                key={service.id} 
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Meu Processo de Trabalho" 
            subtitle="Como transformo suas ideias em realidade"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Descoberta</h3>
              <p className="text-gray-700 dark:text-gray-300">Entendimento profundo das suas necessidades e objetivos do projeto.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Planejamento</h3>
              <p className="text-gray-700 dark:text-gray-300">Definição de escopo, tecnologias e cronograma para o desenvolvimento.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Desenvolvimento</h3>
              <p className="text-gray-700 dark:text-gray-300">Implementação da solução com foco em qualidade e boas práticas.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Entrega</h3>
              <p className="text-gray-700 dark:text-gray-300">Testes, refinamentos e lançamento da solução finalizada.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;