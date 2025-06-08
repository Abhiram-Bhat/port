
import { ChevronDown, Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle w-2 h-2 top-20 left-20 opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-3 h-3 top-40 right-32 opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="particle w-1 h-1 bottom-32 left-1/4 opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-2 h-2 top-60 right-20 opacity-50" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/9327d267-5771-4166-b64c-072bd9024d3e.png"
              alt="Abhiram Bhat"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="mb-6">
            <p className="text-primary font-mono text-lg mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Abhiram Bhat</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              AI/ML Engineering Student
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building intelligent systems and creating innovative AI solutions 
              that can positively impact industries through machine learning and deep learning technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild className="hover-glow">
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" asChild className="glass-effect hover-glow">
              <a href="#projects">
                View My Work
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/Abhiram-Bhat" 
               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abhiram-bhat-4b6ba3249/" 
               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/Abhiram_Bhat" 
               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:abhiramta267@gmail.com" 
               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center justify-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Sringeri, Karnataka</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
