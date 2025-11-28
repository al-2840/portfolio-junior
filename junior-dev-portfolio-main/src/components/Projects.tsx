import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Platform belanja online dengan fitur cart, payment gateway, dan admin dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "SQLite"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
  },
  {
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur real-time collaboration dan notifications.",
    tech: ["React", "Python", "Flask", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  },
  {
    title: "AI Chatbot",
    description: "Chatbot berbasis AI untuk customer service dengan natural language processing.",
    tech: ["Python", "Flask", "OpenAI API", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard cuaca interaktif dengan data real-time dan forecast visualization.",
    tech: ["JavaScript", "API Integration", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Berikut adalah beberapa project yang telah saya kerjakan. Setiap project mencerminkan
            perjalanan belajar dan pengembangan skill saya di berbagai teknologi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-card opacity-0 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-heading font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                    className="group/btn"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                      <ExternalLink className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    asChild
                    className="group/btn"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
