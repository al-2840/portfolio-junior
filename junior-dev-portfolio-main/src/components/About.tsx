import { Code2, Smartphone, Brain, Database, GitBranch, Palette } from "lucide-react";

const skills = [
  { name: "HTML & CSS", icon: Palette },
  { name: "JavaScript", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "Flask", icon: Database },
  { name: "GitHub", icon: GitBranch },
  { name: "AI & APIs", icon: Brain },
  { name: "Mobile Dev", icon: Smartphone },
  { name: "Web Development", icon: Code2 },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-100">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Saya adalah mahasiswa aktif semester awal jurusan IT yang memiliki passion besar dalam dunia teknologi.
              Fokus utama saya adalah mengembangkan kemampuan dalam web development, mobile development, dan AI engineering.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Melalui berbagai project dan pengalaman belajar, saya terus mengasah keterampilan teknis sekaligus
              membangun pemahaman mendalam tentang bagaimana teknologi dapat memberikan solusi yang bermanfaat.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Saya percaya bahwa kombinasi antara kreativitas, problem-solving, dan continuous learning adalah kunci
              untuk menjadi developer yang kompeten dan siap menghadapi tantangan di era digital.
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-heading font-semibold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-card group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
