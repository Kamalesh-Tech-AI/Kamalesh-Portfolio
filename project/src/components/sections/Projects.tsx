import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import GlitchText from '../ui/GlitchText';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative overflow-hidden noise-bg">
      <div className="max-w-6xl mx-auto">
        <GlitchText 
          text="Experiments I've Run" 
          className="heading-glitch text-2xl md:text-3xl mb-10 inline-block"
        />
        
        <p className="text-gray-400 max-w-2xl mb-12">
          Each card represents a completed experiment. Click on any project to see details.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;