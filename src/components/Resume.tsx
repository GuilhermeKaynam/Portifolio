import React, { useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  MapPin,
  Phone,
  Mail,
  Download,
} from "lucide-react";
import html2pdf from "html2pdf.js";

export function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 1,
      filename: "curriculo-guilherme-kaynam.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <section id="resume" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Currículo</h2>
          <p className="mt-4 text-xl text-gray-600">
            Guilherme Kaynam de Lima Muniz
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-gray-600 w-full">
            <span className="flex items-center whitespace-nowrap">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              Poá, SP
            </span>
            <span className="flex items-center whitespace-nowrap">
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              (11) 95232-6058
            </span>
            <span className="flex items-center whitespace-nowrap break-all">
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

        <div ref={resumeRef}>
          {/* Resumo */}
          <div className="mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Resumo Profissional
              </h3>
              <p className="text-gray-600">
                Sou desenvolvedor FullStack formado pelo bootcamp da Generation
                Brasil, com experiência em Java, Spring, React e MySQL, criando
                projetos completos como sistemas de e-commerce e gerenciamento
                de serviços. Meu primeiro contato com programação foi aos 14
                anos, e desde então, desenvolvo habilidades técnicas e
                comportamentais como proatividade, resolução de problemas e
                aprendizado rápido. Estou em transição para o mercado de
                trabalho, pronto para aplicar habilidades em projetos inovadores
                e de impacto.
              </p>
            </div>
          </div>

          {/* Experiência */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Experiência Profissional
              </h3>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  Desenvolvedor Front End
                </h4>
                <p className="text-indigo-600">
                  Hello Wordpress • 03/2019 - 06/2020
                </p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>
                    Desenvolvi e mantive websites responsivos para pequenos
                    negócios utilizando WordPress e Elementor, melhorando a
                    visibilidade online dos clientes
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  Farmácia Drogabay Poá
                </h4>
                <p className="text-indigo-600">
                  Auxiliar de Escritório • 01/2024 - 05/2024
                </p>
                <p className="text-indigo-600">
                  Jovem Aprendiz • 07/2023 - 12/2023
                </p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>
                    Organizei e digitalizei mais de 1000 documentos, otimizando
                    o tempo de recuperação de informações pela equipe
                    administrativa
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Educação */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">Educação</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  Bootcamp - Desenvolvedor Full Stack
                </h4>
                <p className="text-indigo-600">
                  Generation Brasil • Conclusão: 01/2025
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  Ensino Médio
                </h4>
                <p className="text-indigo-600">
                  E.E Batuira • Conclusão: 12/2023
                </p>
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Code2 className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Habilidades Técnicas
              </h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">
                HTML, CSS, JavaScript, React, Bootstrap, JAVA, Spring, SQL, Git,
                APIs REST, GPT-4
              </p>
            </div>
          </div>

          {/* Idiomas e Cursos */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Idiomas e Cursos
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Idiomas</h4>
                <p className="text-gray-600">Português - Nativo</p>
                <p className="text-gray-600">Inglês - Básico</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Coletivo Online</h4>
                <p className="text-gray-600">
                  Instituto Coca-Cola • Conclusão: 08/2024
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">
                  Trilha Digital Coders 24
                </h4>
                <p className="text-gray-600">Ada Tech • Conclusão: 06/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
