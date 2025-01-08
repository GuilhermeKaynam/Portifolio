import React, { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              Guilherme Kaynam
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">
              Sobre
            </a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600">
              Projetos
            </a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600">
              Serviços
            </a>
            <a href="#resume" className="text-gray-700 hover:text-indigo-600">
              Currículo
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">
              Contato
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Projetos
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Serviços
            </a>
            <a
              href="#resume"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Currículo
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
