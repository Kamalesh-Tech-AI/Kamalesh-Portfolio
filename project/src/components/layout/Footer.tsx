import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-500 py-8 px-4 border-t border-primary-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain size={24} className="text-primary-500 mr-2" />
            <span className="font-tech text-white">By The Only Me (KAMALESH)</span>
          </div>
          
          <div className="text-gray-500 font-tech text-sm">
            <span className="text-primary-500">&copy; {currentYear}</span> Kamalesh. All neural circuits reserved.
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-dark-400 text-center text-xs text-gray-600">
          <p>Running on a human brain with occasional caffeine injections.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;