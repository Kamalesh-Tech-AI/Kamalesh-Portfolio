import React from 'react';
import Console from '../ui/Console';
import GlitchText from '../ui/GlitchText';

const RDConsole: React.FC = () => {
  return (
    <section id="console" className="py-20 px-4 md:px-8 relative overflow-hidden noise-bg">
      <div className="max-w-6xl mx-auto">
        <GlitchText 
          text="The R&D Console" 
          className="heading-glitch text-2xl md:text-3xl mb-10 inline-block"
        />
        
        <p className="text-gray-400 max-w-2xl mb-12">
          Interact with the console to navigate through my portfolio. Try commands like 
          <span className="font-tech text-primary-400"> run projects</span>,
          <span className="font-tech text-primary-400"> thoughts.kam</span>, or
          <span className="font-tech text-primary-400"> contact --now</span>.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Console className="shadow-lg shadow-primary-900/20" />
        </div>
      </div>
    </section>
  );
};

export default RDConsole;