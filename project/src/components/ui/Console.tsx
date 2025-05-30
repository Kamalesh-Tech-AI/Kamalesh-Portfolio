import React, { useState, useEffect, useRef } from 'react';
import { Terminal, AlertCircle, CheckCircle2, XCircle, Cpu, Brain, Code, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from 'react-use';

interface ConsoleProps {
  className?: string;
}

interface CommandOutput {
  type: 'command' | 'response' | 'error' | 'success' | 'system';
  content: string;
  timestamp: string;
  icon?: React.ReactNode;
}

const Console: React.FC<ConsoleProps> = ({ className = '' }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<CommandOutput[]>([
    {
      type: 'system',
      content: 'SYNAPTIC.LAB OS v2.5.0 [Neural Enhanced]\nInitializing neural pathways...\nSystem ready. Type "help" for available commands.',
      timestamp: new Date().toISOString(),
      icon: <Brain size={16} className="text-primary-500" />
    }
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);
  const [systemLoad, setSystemLoad] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useInterval(() => {
    if (isProcessing) {
      setSystemLoad(prev => (prev + 10) % 100);
    } else {
      setSystemLoad(0);
    }
  }, 100);

  const addOutput = (newOutput: CommandOutput) => {
    setOutput(prev => [...prev, newOutput]);
  };

  const simulateProcessing = async () => {
    setIsProcessing(true);
    const duration = Math.random() * 1000 + 500;
    await new Promise(resolve => setTimeout(resolve, duration));
    setIsProcessing(false);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommand = async (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    const timestamp = new Date().toISOString();
    
    if (command === '') return;
    
    setHistory(prev => [command, ...prev]);
    setHistoryIndex(-1);
    
    addOutput({
      type: 'command',
      content: `> ${command}`,
      timestamp,
      icon: <Code size={16} className="text-neon-green" />
    });

    await simulateProcessing();
    
    switch (command) {
      case 'help':
        addOutput({
          type: 'response',
          content: `Available commands:
• run projects - View experimental projects
• thoughts.kam - Access thought database
• contact --now - Open communication channel
• failures.log - View lab failures
• system.stats - Display system metrics
• matrix.toggle - Toggle Matrix mode
• clear - Clear console
• exit - Terminate session`,
          timestamp,
          icon: <AlertCircle size={16} className="text-primary-500" />
        });
        break;

      case 'run projects':
        addOutput({
          type: 'success',
          content: 'Neural pathways activated...\nProject database accessed.\nInitiating visual interface...',
          timestamp,
          icon: <Brain size={16} className="text-neon-blue" />
        });
        setTimeout(() => scrollToSection('projects'), 1000);
        break;

      case 'thoughts.kam':
        addOutput({
          type: 'success',
          content: 'Accessing neural network...\nSynapse bridges established.\nStreaming consciousness data...',
          timestamp,
          icon: <Brain size={16} className="text-neon-blue" />
        });
        setTimeout(() => scrollToSection('mind-dump'), 1000);
        break;

      case 'contact --now':
        addOutput({
          type: 'success',
          content: 'Establishing quantum entanglement...\nSecure channel ready.\nInitiating contact protocols...',
          timestamp,
          icon: <Send size={16} className="text-neon-blue" />
        });
        setTimeout(() => scrollToSection('connect'), 1000);
        break;

      case 'failures.log':
        addOutput({
          type: 'success',
          content: 'Accessing failure database...\nAnalyzing error patterns...\nRendering insights...',
          timestamp,
          icon: <AlertCircle size={16} className="text-neon-blue" />
        });
        setTimeout(() => scrollToSection('lab-failures'), 1000);
        break;

      case 'system.stats':
        addOutput({
          type: 'system',
          content: `SYSTEM DIAGNOSTICS
• CPU Load: ${Math.floor(Math.random() * 100)}%
• Neural Capacity: ${Math.floor(Math.random() * 100)}%
• Quantum State: Stable
• Reality Distortion: ${matrixMode ? 'Active' : 'Inactive'}
• Time Dilation: Nominal`,
          timestamp,
          icon: <Cpu size={16} className="text-primary-500" />
        });
        break;

      case 'matrix.toggle':
        setMatrixMode(!matrixMode);
        document.body.classList.toggle('matrix-mode');
        addOutput({
          type: 'success',
          content: matrixMode ? 'Reality restored.' : 'Matrix mode activated. Reality distortion field enabled.',
          timestamp,
          icon: <Code size={16} className="text-neon-blue" />
        });
        break;

      case 'clear':
        setOutput([{
          type: 'system',
          content: 'Console buffer cleared.',
          timestamp,
          icon: <Brain size={16} className="text-primary-500" />
        }]);
        break;

      case 'exit':
        addOutput({
          type: 'system',
          content: 'Terminating session...\nNeural links disconnected.\nGoodbye.',
          timestamp,
          icon: <Brain size={16} className="text-primary-500" />
        });
        setTimeout(() => {
          setOutput([{
            type: 'system',
            content: 'SYNAPTIC.LAB OS v2.5.0 [Neural Enhanced]\nType "help" for available commands.',
            timestamp: new Date().toISOString(),
            icon: <Brain size={16} className="text-primary-500" />
          }]);
        }, 2000);
        break;

      default:
        addOutput({
          type: 'error',
          content: `Neural pathway not found: "${command}"\nType "help" for available commands.`,
          timestamp,
          icon: <XCircle size={16} className="text-red-500" />
        });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const getOutputStyle = (type: CommandOutput['type']) => {
    switch (type) {
      case 'command':
        return 'text-neon-green';
      case 'error':
        return 'text-red-500';
      case 'success':
        return 'text-neon-blue';
      case 'system':
        return 'text-primary-500';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div 
      className={`bg-dark-400 border border-primary-700 rounded-md overflow-hidden shadow-lg shadow-primary-900/20 ${className}`}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-dark-500 border-b border-primary-700">
        <div className="flex items-center">
          <Terminal size={16} className="text-primary-500 mr-2" />
          <span className="font-tech text-primary-500">SYNAPTIC.LAB OS v2.5.0</span>
        </div>
        {isProcessing && (
          <div className="flex items-center space-x-2">
            <div className="text-xs text-primary-500 font-tech">{systemLoad}%</div>
            <div className="w-16 h-1 bg-dark-400 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-500 transition-all duration-200"
                style={{ width: `${systemLoad}%` }}
              />
            </div>
          </div>
        )}
      </div>
      
      <div 
        ref={outputRef}
        className="px-4 py-3 h-64 overflow-y-auto font-tech text-sm"
      >
        <AnimatePresence>
          {output.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-start space-x-2 mb-2"
            >
              {item.icon}
              <div className={`whitespace-pre-line ${getOutputStyle(item.type)}`}>
                {item.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="flex items-center px-4 py-2 bg-dark-500 border-t border-primary-700">
        <span className="text-primary-500 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none font-tech text-white"
          placeholder={isProcessing ? 'Processing...' : 'Type a command...'}
          disabled={isProcessing}
        />
      </div>
    </div>
  );
};

export default Console;