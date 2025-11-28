import { Briefcase, GraduationCap, Heart } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "Mahasiswa IT",
    organization: "Universitas",
    period: "2024 - Present",
    description: "Aktif mengikuti perkuliahan dengan fokus pada web development, mobile development, dan AI engineering. Terlibat dalam berbagai project kampus dan workshop teknologi.",
  },
  {
    icon: Heart,
    title: "Pengajar IT",
    organization: "Pesantren Al-Hikmah",
    period: "2024",
    description: "Mengajar dasar-dasar pemrograman dan literasi digital kepada santri. Membantu mereka memahami pentingnya teknologi di era modern.",
  },
  {
    icon: Briefcase,
    title: "Anggota Organisasi",
    organization: "Himpunan Mahasiswa IT",
    period: "2024 - Present",
    description: "Aktif dalam kegiatan organisasi kampus, berkontribusi dalam event teknologi dan workshop untuk mahasiswa.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Experience & Activities</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div 
                key={exp.title}
                className="flex gap-6 p-6 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-card opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-heading font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.organization}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
