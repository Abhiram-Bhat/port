
import { Code, Brain, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI/ML Focused",
      description: "Specializing in machine learning models and intelligent systems"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Full Stack Developer",
      description: "Proficient in MERN stack and modern web technologies"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovation Driven",
      description: "Creating AI solutions that positively impact industries"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Enhanced background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape top-10 left-10 w-32 h-32 border border-primary/10 rounded-full" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape top-1/3 right-20 w-24 h-24 border border-primary/20 rotate-45" style={{ animationDelay: '2s' }}></div>
        <div className="floating-shape bottom-20 left-1/3 w-16 h-16 bg-primary/5 rounded-lg" style={{ animationDelay: '1s' }}></div>
        <div className="floating-shape bottom-1/4 right-10 w-20 h-20 border border-blue-400/10 rounded-full" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-bounce-in">
              About <span className="gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 animate-slide-up"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up">
                I am an AI/ML Engineering student with a strong passion for building intelligent systems. 
                I specialize in developing machine learning models, working on real-world data-driven 
                applications, and exploring deep learning and AI technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up">
                My goal is to create innovative AI solutions that can positively impact industries. 
                I enjoy working on challenging problems that require creative thinking and technical expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or learning about the latest advancements in artificial intelligence.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-purple-500 rounded-lg blur opacity-30 animate-enhanced-pulse-glow"></div>
                <Card className="relative glass-effect hover-glow animate-bounce-in">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 gradient-text animate-gradient bg-gradient-to-r from-primary to-blue-400">Quick Facts</h3>
                    <ul className="space-y-3 text-muted-foreground stagger-fade-in">
                      <li className="animate-slide-up">🎓 AI/ML Engineering Student</li>
                      <li className="animate-slide-up">💻 Full Stack Developer</li>
                      <li className="animate-slide-up">🌟 Machine Learning Enthusiast</li>
                      <li className="animate-slide-up">🚀 Open Source Contributor</li>
                      <li className="animate-slide-up">📍 Based in Sringeri, Karnataka</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-fade-in">
            {highlights.map((item, index) => (
              <Card key={index} className="glass-effect hover-glow animate-bounce-in group" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 animate-slide-up">{item.title}</h3>
                  <p className="text-muted-foreground animate-slide-up">{item.description}</p>
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
