import React from 'react';
import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-8">
          <Code2 className="h-8 w-8 text-indigo-400" />
          <span className="ml-2 text-xl font-bold">Guilherme Kaynam</span>
        </div>
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}