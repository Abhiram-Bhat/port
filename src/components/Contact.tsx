
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create a more comprehensive mailto link
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(
        `Hello Abhiram,\n\nI am reaching out to you through your portfolio website.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      
      // Create and click a temporary link to open email client
      const mailtoLink = `mailto:abhiramta267@gmail.com?subject=${subject}&body=${body}`;
      const tempLink = document.createElement('a');
      tempLink.href = mailtoLink;
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      
      // Show success message
      toast({
        title: "Email Client Opened Successfully!",
        description: "Your email client should now be open with your message pre-filled. Please send the email to complete your inquiry.",
      });

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error opening email client:', error);
      
      // Fallback: provide manual email instructions
      toast({
        title: "Email Client Error",
        description: `Please send your message manually to: abhiramta267@gmail.com`,
        variant: "destructive",
      });
      
      // Copy email to clipboard as fallback
      try {
        await navigator.clipboard.writeText('abhiramta267@gmail.com');
        toast({
          title: "Email Copied!",
          description: "My email address has been copied to your clipboard.",
        });
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="animate-slide-in-left">
              <Card className="glass-effect hover-glow mb-6 sm:mb-8">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl gradient-text">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base">Email</h3>
                      <a 
                        href="mailto:abhiramta267@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                      >
                        abhiramta267@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">Location</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">Sringeri, Karnataka</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mt-6">
                    <h3 className="font-semibold mb-4 text-sm sm:text-base">Follow Me</h3>
                    <div className="flex gap-3 sm:gap-4">
                      <a href="https://github.com/Abhiram-Bhat" 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/abhiram-bhat-4b6ba3249/" 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="https://twitter.com/Abhiram_Bhat" 
                         target="_blank"
                         rel="noopener noreferrer"
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
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl gradient-text">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-secondary/50 border-border focus:border-primary h-11 sm:h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-secondary/50 border-border focus:border-primary h-11 sm:h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message *"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-secondary/50 border-border focus:border-primary resize-none min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full hover-glow h-11 sm:h-12"
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
                    </Button>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs text-muted-foreground">
                      * All fields are required
                    </p>
                  </div>
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
