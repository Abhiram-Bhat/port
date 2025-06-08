
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Abhiram Bhat</h3>
            <p className="text-muted-foreground">
              AI/ML Engineering Student passionate about building intelligent systems
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/Abhiram-Bhat" 
               className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abhiram-bhat-4b6ba3249/" 
               className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/Abhiram_Bhat" 
               className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:abhiramta267@gmail.com" 
               className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Abhiram Bhat
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
