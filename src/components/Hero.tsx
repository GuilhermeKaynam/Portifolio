import React from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 reveal">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transformando ideias em soluções digitais
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Desenvolvedor Full Stack especializado em criar experiências
              digitais excepcionais
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Entre em contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Ver projetos
              </a>
            </div>
          </div>
          <div className="md:w-1/2 reveal delay-200">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
