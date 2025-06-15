import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/sections/Landing';
import Projects from './components/sections/Projects';
import MindDump from './components/sections/MindDump';
import RDConsole from './components/sections/RDConsole';


function App() {
  return (
    <div className="min-h-screen bg-dark-500 text-white font-sora">
      <Header />
      
      <main>
        <Landing />
        <Projects />
        <MindDump />
        <RDConsole />
        <LabFailures />
        <Connect />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
