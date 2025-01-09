import React, { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Code2, MapPin, Phone, Mail, Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

export function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 1,
      filename: 'curriculo-guilherme-kaynam.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <section id="resume" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Currículo</h2>
          <p className="mt-4 text-xl text-gray-600">Guilherme Kaynam de Lima Muniz</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-gray-600">
            <span className="flex items-center whitespace-nowrap">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              Poá, SP
            </span>
            <span className="flex items-center whitespace-nowrap">
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              (11) 95232-6058
            </span>
            <span className="flex items-center whitespace-nowrap">
              <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
              GuilhermeKaynam2006@gmail.com
            </span>
          </div>
          <button
            onClick={downloadPDF}
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Baixar PDF
          </button>
        </div>

        <div ref={resumeRef} className="space-y-12">
          {/* Experiência */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">Experiência Profissional</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Desenvolvedor Full Stack</h4>
                <p className="text-gray-600">Freelancer • 2023 - Presente</p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Desenvolvimento de sistemas web completos</li>
                  <li>Criação de APIs RESTful</li>
                  <li>Implementação de interfaces responsivas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Educação */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">Educação</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Bootcamp Desenvolvedor Full Stack Java Jr.</h4>
                <p className="text-gray-600">Generation Brasil • 2023</p>
                <p className="mt-2 text-gray-600">
                  Formação intensiva em desenvolvimento web com foco em Java, Spring Boot e React.
                </p>
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div>
            <div className="flex items-center mb-6">
              <Code2 className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">Habilidades Técnicas</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Frontend</h4>
                <ul className="mt-2 text-gray-600">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>HTML/CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Backend</h4>
                <ul className="mt-2 text-gray-600">
                  <li>Java</li>
                  <li>Spring Boot</li>
                  <li>Node.js</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Banco de Dados</h4>
                <ul className="mt-2 text-gray-600">
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">Certificações</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Desenvolvedor Full Stack Java Jr.</h4>
                <p className="text-gray-600">Generation Brasil • 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}