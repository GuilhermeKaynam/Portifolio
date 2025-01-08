import React from 'react';
import { Code, Layout, Database } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Criação de sistemas personalizados para atender às necessidades específicas do seu negócio.'
    },
    {
      icon: Layout,
      title: 'Landing Pages',
      description: 'Design e desenvolvimento de landing pages otimizadas para conversão.'
    },
    {
      icon: Database,
      title: 'Consultoria em Tecnologia',
      description: 'Orientação especializada para escolha e implementação de soluções tecnológicas.'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Serviços</h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluções personalizadas para suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}