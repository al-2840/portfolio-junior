import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-semibold text-lg mb-2">Ali</p>
            <p className="text-sm text-muted-foreground">
              Junior Developer & AI Enthusiast
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a 
              href="mailto:ali@example.com"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-accent fill-accent" /> by Ali © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
