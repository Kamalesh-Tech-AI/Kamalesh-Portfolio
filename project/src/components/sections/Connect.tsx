import React, { useState } from 'react';
import { Send, Linkedin, Github, Mail } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import TypewriterText from '../ui/TypewriterText';

const Connect: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setMessage('');
      
      // Reset after a few seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="connect" className="py-20 px-4 md:px-8 relative overflow-hidden noise-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          <div className="md:w-1/2">
            <GlitchText 
              text="Connect" 
              className="heading-glitch text-2xl md:text-3xl mb-10 inline-block"
            />
            
            <div className="font-tech mb-8">
              <TypewriterText 
                text="> contact kamalesh --urgent" 
                className="text-primary-500 mb-2 block"
                speed={40}
              />
              <TypewriterText 
                text="> send.transmission('Hey Kamalesh, I dig your vibe.')" 
                className="text-neon-green mb-2 block"
                speed={40}
                delay={1500}
              />
            </div>
            
            <form onSubmit={handleSubmit} className="mb-10">
              <div className="mb-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full h-32 bg-dark-400 border border-primary-700 rounded-md p-3 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  disabled={isSending || isSent}
                />
              </div>
              
              <button 
                type="submit" 
                className={`btn-terminal flex items-center ${(isSending || isSent) ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSending || isSent || message.trim() === ''}
              >
                {isSending ? (
                  <>SENDING<span className="terminal-cursor ml-1"></span></>
                ) : isSent ? (
                  <>TRANSMISSION SENT</>
                ) : (
                  <>
                    <span>SEND TRANSMISSION</span>
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="font-tech text-xl mb-6 text-white">Direct Channels:</div>
            
            <div className="space-y-4">
              <a 
                href="mailto:kamalesh3703s@gmail.com" 
                className="flex items-center p-4 border border-primary-700 rounded-md hover:bg-dark-400 transition-colors duration-300"
              >
                <Mail size={20} className="text-primary-500 mr-3" />
                <div>
                  <div className="font-tech text-white">Email</div>
                  <div className="text-gray-400">kamalesh3703s@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/kamalesh-Tech-Ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-primary-700 rounded-md hover:bg-dark-400 transition-colors duration-300"
              >
                <Linkedin size={20} className="text-primary-500 mr-3" />
                <div>
                  <div className="font-tech text-white">LinkedIn</div>
                  <div className="text-gray-400">linkedin.com/in/kamalesh</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/Kamalesh-Tech-Ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-primary-700 rounded-md hover:bg-dark-400 transition-colors duration-300"
              >
                <Github size={20} className="text-primary-500 mr-3" />
                <div>
                  <div className="font-tech text-white">GitHub</div>
                  <div className="text-gray-400">github.com/Kamalesh-Tech-Ai</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;