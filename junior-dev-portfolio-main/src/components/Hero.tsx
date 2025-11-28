import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-soft">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                Available for Opportunities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
              Hi, I'm <span className="text-primary">Ali</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-heading text-muted-foreground">
              Junior Developer & AI Enthusiast
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Mahasiswa IT yang fokus pada pembuatan website, aplikasi mobile, dan eksplorasi AI modern.
              Passionate about creating beautiful and functional digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
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
          
          <div className="relative opacity-0 animate-fade-in animate-delay-200">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src={avatarImage}
                alt="Ali - Junior Developer"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
