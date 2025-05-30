import React from 'react';
import { thoughts } from '../../data/thoughts';
import ThoughtCard from '../ui/ThoughtCard';
import GlitchText from '../ui/GlitchText';

const MindDump: React.FC = () => {
  return (
    <section id="mind-dump" className="py-20 px-4 md:px-8 bg-dark-400 relative overflow-hidden noise-bg">
      <div className="max-w-6xl mx-auto">
        <GlitchText 
          text="Inside My Head" 
          className="heading-glitch text-2xl md:text-3xl mb-10 inline-block"
        />
        
        <p className="text-gray-400 max-w-2xl mb-12">
          Raw thoughts. Unfiltered ideas. Questions that keep me awake at night.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {thoughts.map(thought => (
            <ThoughtCard key={thought.id} thought={thought} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MindDump;