
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20 relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-16 h-16 border border-primary/10 rounded-full animate-float opacity-30" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 bg-primary/5 rounded-lg animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Abhiram T A</h3>
            <p className="text-muted-foreground">
              AI/ML Engineering Student passionate about building intelligent systems
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/Abhiram-Bhat" 
               className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abhiram-t-a-4b6ba3249/" 
               className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="twitter.com/ABhat5408" 
               className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:abhiramta267@gmail.com" 
               className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
