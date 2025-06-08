
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
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am an AI/ML Engineering student with a strong passion for building intelligent systems. 
                I specialize in developing machine learning models, working on real-world data-driven 
                applications, and exploring deep learning and AI technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My goal is to create innovative AI solutions that can positively impact industries. 
                I enjoy working on challenging problems that require creative thinking and technical expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or learning about the latest advancements in artificial intelligence.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-lg blur opacity-30"></div>
                <Card className="relative glass-effect hover-glow">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">Quick Facts</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>🎓 AI/ML Engineering Student</li>
                      <li>💻 Full Stack Developer</li>
                      <li>🌟 Machine Learning Enthusiast</li>
                      <li>🚀 Open Source Contributor</li>
                      <li>📍 Based in Sringeri, Karnataka</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="glass-effect hover-glow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
