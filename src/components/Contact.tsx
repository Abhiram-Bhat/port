
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <Card className="glass-effect hover-glow mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:abhiramta267@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          abhiramta267@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-muted-foreground">Sringeri, Karnataka</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mt-6">
                    <h3 className="font-semibold mb-4">Follow Me</h3>
                    <div className="flex gap-4">
                      <a href="https://github.com/Abhiram-Bhat" 
                         className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/abhiram-bhat-4b6ba3249/" 
                         className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="https://twitter.com/Abhiram_Bhat" 
                         className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-in-right">
              <Card className="glass-effect hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-secondary/50 border-border focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-secondary/50 border-border focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-secondary/50 border-border focus:border-primary resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full hover-glow">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
