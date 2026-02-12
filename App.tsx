
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <AnimatedBackground />
      
      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Static Visual Decoration Overlay */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default App;
