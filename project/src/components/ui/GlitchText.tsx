import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return <div className={`opacity-0 ${className}`}>{text}</div>;

  return (
    <div 
      className={`glitch ${className}`} 
      data-text={text}
    >
      {text}
    </div>
  );
};

export default GlitchText;