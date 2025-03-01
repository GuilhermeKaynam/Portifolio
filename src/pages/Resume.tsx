import React from 'react';
import { Download, BookOpen, Briefcase, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <SectionTitle 
              title="Meu Currículo" 
              subtitle="Minha trajetória profissional e acadêmica"
            />
            
            <a 
              href="https://docs.google.com/document/d/1yQ4uMIJcpSf8BI2gnV8W3C919_U7KTR9/edit?usp=sharing&ouid=102930765598739647253&rtpof=true&sd=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 mt-4 md:mt-0"
            >
              <Download size={18} className="mr-2" />
              Download CV
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Personal Info */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Informações Pessoais</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Nome</h4>
                    <p className="text-gray-900 dark:text-white">Guilherme Kaynam de Lima Muniz</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Localização</h4>
                    <p className="text-gray-900 dark:text-white">Poá – SP</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Telefone</h4>
                    <p className="text-gray-900 dark:text-white">(11) 95232-6058</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <p className="text-gray-900 dark:text-white">GuilhermeKaynam2006@gmail.com</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</h4>
                    <a 
                      href="https://github.com/GuilhermeKaynam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      github.com/GuilhermeKaynam
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/guilherme-kaynam/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      linkedin.com/in/guilherme-kaynam
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Resume Content */}
            <div className="md:col-span-2">
              {/* Professional Summary */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8">
                <h3 className="flex items-center text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  <Briefcase size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                  Resumo Profissional
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300">
                  Sou desenvolvedor FullStack formado pelo bootcamp da Generation Brasil, com experiência em Java, Spring, React e MySQL, criando projetos completos como sistemas de e-commerce e gerenciamento de serviços. Meu primeiro contato com programação foi aos 14 anos, e desde então, desenvolvo habilidades técnicas e comportamentais como proatividade, resolução de problemas e aprendizado rápido. Estou em transição para o mercado de trabalho, pronto para aplicar habilidades em projetos inovadores e de impacto.
                </p>
              </div>
              
              {/* Education */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8">
                <h3 className="flex items-center text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  <BookOpen size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                  Educação
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Bootcamp - Desenvolvedor Full Stack</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">02/2025</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Generation Brasil</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Ensino Médio</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">12/2023</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">E.E Batuira</p>
                  </div>
                </div>
              </div>
              
              {/* Work Experience */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8">
                <h3 className="flex items-center text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  <Briefcase size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                  Experiência Profissional
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Auxiliar de Escritório</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">01/2024 - 05/2024</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Farmácia Drogabay Poá</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Organizei e digitalizei mais de 1000 documentos, otimizando o tempo de recuperação de informações pela equipe administrativa.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Jovem Aprendiz</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">07/2023 - 12/2023</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Farmácia Drogabay Poá</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Desenvolvedor Front End</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">03/2019 - 06/2020</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Hello Wordpress</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Desenvolvi e mantive websites responsivos para pequenos negócios utilizando WordPress e Elementor, melhorando a visibilidade online dos clientes.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Courses & Certifications */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="flex items-center text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  <Award size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                  Cursos & Certificações
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Coletivo Online</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">08/2024</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Instituto Coca-Cola</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Trilha Digital Coders 24</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">06/2024</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Ada Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;