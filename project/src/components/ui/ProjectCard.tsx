import React, { useState } from 'react';
import { Project } from '../../data/projects';
import { X } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="relative border border-primary-700 bg-dark-400 p-5 rounded-md cursor-pointer red-pulse group hover:border-primary-500 transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute top-2 right-2 font-tech text-primary-500 text-xs">[{project.id}]</div>
        <h3 className="font-tech text-xl mb-2 text-white group-hover:text-primary-500 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 rounded-sm text-xs bg-dark-500 text-primary-300 font-tech"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-400 border border-primary-600 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-primary-500 hover:text-primary-300"
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              <div className="font-tech text-primary-500 mb-2">[{project.id}]</div>
              <h2 className="text-2xl font-tech text-white mb-4">{project.title}</h2>
              
              {project.image && (
                <div className="mb-4 rounded-md overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                </div>
              )}
              
              <div className="mb-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-tech text-primary-400 mb-2">PROBLEM</h3>
                <p className="text-gray-300">{project.problem}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-tech text-primary-400 mb-2">INSIGHT</h3>
                <p className="text-gray-300">{project.insight}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 rounded-sm text-xs bg-dark-500 text-primary-300 font-tech"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;