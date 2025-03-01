import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 h-full bg-white dark:bg-gray-800 hover:shadow-xl"
    >
      {project.image ? (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <Github className="text-white" size={48} />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          {project.type === 'frontend' ? (
            <>
              <ExternalLink size={16} className="mr-2" />
              Visitar Site
            </>
          ) : (
            <>
              <Github size={16} className="mr-2" />
              Ver no GitHub
            </>
          )}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;