
import { Code, Brain, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "AI/ML Focused",
      description: "Specializing in machine learning models and intelligent systems"
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Full Stack Developer",
      description: "Proficient in MERN stack and modern web technologies"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Innovation Driven",
      description: "Creating AI solutions that positively impact industries"
    }
  ];

  const quickFacts = [
    { icon: "🎓", text: "AI/ML Engineering Student" },
    { icon: "💻", text: "Full Stack Developer" },
    { icon: "🌟", text: "Machine Learning Enthusiast" },
    { icon: "🚀", text: "Open Source Contributor" },
    { icon: "📍", text: "Based in Sringeri, Karnataka" }
  ];

  return (
    <section id="about" className="py-16 bg-secondary/20 relative overflow-hidden">
      {/* Enhanced background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape top-10 left-10 w-32 h-32 border border-primary/10 rounded-full" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape top-1/3 right-20 w-24 h-24 border border-primary/20 rotate-45" style={{ animationDelay: '2s' }}></div>
        <div className="floating-shape bottom-20 left-1/3 w-16 h-16 bg-primary/5 rounded-lg" style={{ animationDelay: '1s' }}></div>
        <div className="floating-shape bottom-1/4 right-10 w-20 h-20 border border-blue-400/10 rounded-full" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-bounce-in">
              About <span className="gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-500">Me</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6 animate-slide-up"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 animate-slide-in-left space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up">
                I am an AI/ML Engineering student with a strong passion for building intelligent systems. 
                I specialize in developing machine learning models, working on real-world data-driven 
                applications, and exploring deep learning and AI technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up">
                My goal is to create innovative AI solutions that can positively impact industries. 
                I enjoy working on challenging problems that require creative thinking and technical expertise.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <Card className="glass-effect hover-glow animate-bounce-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 gradient-text animate-gradient bg-gradient-to-r from-primary to-blue-400">Quick Facts</h3>
                  <ul className="space-y-3">
                    {quickFacts.map((fact, index) => (
                      <li key={index} className="animate-slide-up flex items-center text-sm text-muted-foreground" style={{ animationDelay: `${index * 0.1}s` }}>
                        <span className="mr-3 text-lg">{fact.icon}</span>
                        <span>{fact.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-fade-in">
            {highlights.map((item, index) => (
              <Card key={index} className="glass-effect hover-glow animate-bounce-in group" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 animate-slide-up">{item.title}</h3>
                  <p className="text-sm text-muted-foreground animate-slide-up">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
