
import { ChevronDown, Github, Linkedin, Twitter, Mail, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const roles = [
    "AI/ML Engineering Student",
    "DevOps Enthusiast", 
    "Full Stack Developer",
    "Problem Solver",
    "Innovation Driver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-16">
      {/* Enhanced background particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle w-2 h-2 top-20 left-20 opacity-70" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-3 h-3 top-40 right-32 opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="particle w-1 h-1 bottom-32 left-1/4 opacity-90" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-2 h-2 top-60 right-20 opacity-60" style={{ animationDelay: '1.5s' }}></div>
        <div className="particle w-4 h-4 top-10 left-1/2 opacity-40" style={{ animationDelay: '3s' }}></div>
        <div className="particle w-1 h-1 bottom-20 right-1/4 opacity-80" style={{ animationDelay: '2.5s' }}></div>
        <div className="particle w-3 h-3 top-3/4 left-10 opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-2 h-2 bottom-40 right-1/3 opacity-70" style={{ animationDelay: '3.5s' }}></div>
      </div>

      {/* Enhanced floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-lg" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape top-1/3 right-20 w-16 h-16 border border-primary/30 rotate-45" style={{ animationDelay: '2s' }}></div>
        <div className="floating-shape bottom-1/4 left-1/4 w-12 h-12 bg-primary/10 rounded-full" style={{ animationDelay: '4s' }}></div>
        <div className="floating-shape top-2/3 right-1/4 w-14 h-14 border border-blue-400/20 rounded-lg rotate-12" style={{ animationDelay: '1s' }}></div>
        <div className="floating-shape bottom-1/3 right-10 w-8 h-8 bg-blue-400/10 rounded-full" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="stagger-fade-in max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <img 
              src="/lovable-uploads/9327d267-5771-4166-b64c-072bd9024d3e.png"
              alt="Abhiram T A"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-primary/30 shadow-2xl hover:scale-110 transition-all duration-500 animate-bounce-in shadow-primary/20"
            />
          </div>
          
          <div className="mb-6 sm:mb-8">
            <p className="text-primary font-mono text-sm sm:text-lg mb-2 animate-slide-up">Hello, I'm</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-bounce-in">
              <span className="gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-500">Abhiram T A</span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 sm:mb-6 h-8 sm:h-12 flex items-center justify-center">
              <span className="animate-fade-in" key={currentTextIndex}>
                {roles[currentTextIndex]}
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up px-4">
              Passionate about building intelligent systems and creating innovative AI solutions 
              that can positively impact industries through machine learning and deep learning technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
            <Button 
              onClick={() => setIsResumeOpen(true)}
              className="hover-glow morph-button relative overflow-hidden group bg-gradient-to-r from-primary via-blue-500 to-purple-500 hover:from-purple-500 hover:via-blue-500 hover:to-primary transition-all duration-500 animate-enhanced-pulse-glow animate-gradient w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <FileText className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10">View My Resume</span>
            </Button>
            <Button asChild className="hover-glow morph-button animate-slide-up w-full sm:w-auto">
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" asChild className="glass-effect hover-glow morph-button animate-slide-up w-full sm:w-auto">
              <a href="#projects">
                View My Work
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 stagger-fade-in">
            <a href="https://github.com/Abhiram-Bhat" 
               className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125 transform animate-rotate-scale">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abhiram-bhat-4b6ba3249/" 
               className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125 transform animate-rotate-scale">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://twitter.com/Abhiram_Bhat" 
               className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125 transform animate-rotate-scale">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="mailto:abhiramta267@gmail.com" 
               className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125 transform animate-rotate-scale">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="flex items-center justify-center text-muted-foreground animate-slide-up text-sm sm:text-base">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Sringeri, Karnataka</span>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-enhanced-pulse-glow" />
        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default Hero;
