import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import TypewriterText from '../ui/TypewriterText';
import GlitchText from '../ui/GlitchText';

const Landing: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="landing" className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center px-4 neural-grid">
      <div className="scan-line"></div>
      
      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-6">
          <GlitchText 
            text="[ SYSTEM.KAMALESH_ ∆ BOOTING... ]" 
            className="heading-glitch text-2xl md:text-4xl mb-12"
            delay={500}
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-tech text-white mb-6">
          <TypewriterText 
            text="Hi, I'm Kamalesh." 
            delay={2000}
            speed={80}
            className="block"
          />
          <TypewriterText 
            text="I build things that shouldn't exist yet." 
            delay={3500}
            speed={80}
            className="block text-primary-500 mt-2"
          />
        </h1>

        <div className={`mt-12 transition-opacity duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="#projects" 
            className="inline-flex items-center btn-terminal"
          >
            <span>VIEW EXPERIMENTS</span>
            <ArrowDown size={16} className="ml-2 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;