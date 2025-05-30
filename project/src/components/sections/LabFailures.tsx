import React from 'react';
import { failures } from '../../data/failures';
import FailureCard from '../ui/FailureCard';
import GlitchText from '../ui/GlitchText';

const LabFailures: React.FC = () => {
  return (
    <section id="lab-failures" className="py-20 px-4 md:px-8 bg-dark-400 relative overflow-hidden noise-bg">
      <div className="max-w-6xl mx-auto">
        <GlitchText 
          text="Lab Failures & Half-Ideas" 
          className="heading-glitch text-2xl md:text-3xl mb-10 inline-block"
        />
        
        <p className="text-gray-400 max-w-2xl mb-12">
          Not everything works out as planned. These are the experiments that failed, but taught valuable lessons.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {failures.map(failure => (
            <FailureCard key={failure.id} failure={failure} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabFailures;