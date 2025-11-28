import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! Saya ${formData.name}%0A%0AEmail: ${formData.email}%0A%0APesan:%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message will be sent via WhatsApp.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12 text-center opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center space-y-3 border-border hover:border-primary transition-all duration-300 hover:shadow-card opacity-0 animate-fade-in animate-delay-100">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-1">Email</h3>
              <a href="mailto:ali@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ali@example.com
              </a>
            </div>
          </Card>
          
          <Card className="p-6 text-center space-y-3 border-border hover:border-primary transition-all duration-300 hover:shadow-card opacity-0 animate-fade-in animate-delay-200">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-1">WhatsApp</h3>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +62 812-3456-7890
              </a>
            </div>
          </Card>
          
          <Card className="p-6 text-center space-y-3 border-border hover:border-primary transition-all duration-300 hover:shadow-card opacity-0 animate-fade-in animate-delay-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-1">Social Media</h3>
              <p className="text-sm text-muted-foreground">
                LinkedIn, GitHub
              </p>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 border-border opacity-0 animate-fade-in animate-delay-400">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hi..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="border-border focus:border-primary resize-none"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full group">
              Send Message via WhatsApp
              <MessageSquare className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
