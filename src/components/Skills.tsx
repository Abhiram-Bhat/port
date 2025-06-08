
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React/MERN Stack', level: 88 },
    { name: 'Machine Learning', level: 85 },
    { name: 'C/C++', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'DevOps', level: 78 },
    { name: 'SQL/MongoDB', level: 82 },
    { name: 'HTML/CSS', level: 90 }
  ];

  const fieldExpertise = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'DevOps & Cloud', level: 78 },
    { name: 'UI/UX Design', level: 75 }
  ];

  const tools = [
    'Visual Studio Code', 'Linux', 'Git', 'Docker', 'Tableau', 
    'Power BI', 'TensorFlow', 'PyTorch', 'MongoDB', 'MySQL',
    'AWS', 'Jenkins', 'Kubernetes', 'Lovable'
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape top-10 left-10 w-32 h-32 border border-primary/10 rounded-full" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape top-1/3 right-20 w-24 h-24 border border-primary/20 rotate-45" style={{ animationDelay: '2s' }}></div>
        <div className="floating-shape bottom-20 left-1/3 w-16 h-16 bg-primary/5 rounded-lg" style={{ animationDelay: '1s' }}></div>
        <div className="floating-shape bottom-1/4 right-10 w-20 h-20 border border-blue-400/10 rounded-full" style={{ animationDelay: '3s' }}></div>
        <div className="floating-shape top-2/3 left-20 w-12 h-12 bg-purple-500/5 rounded-lg rotate-12" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-bounce-in">
              My <span className="gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 animate-slide-up"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="glass-effect hover-glow animate-slide-in-left group">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text animate-gradient bg-gradient-to-r from-primary to-blue-400 group-hover:scale-105 transition-transform duration-300">Programming & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 stagger-fade-in">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="space-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary animate-enhanced-pulse-glow">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 animate-slide-in-right"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-glow animate-slide-in-right group">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text animate-gradient bg-gradient-to-r from-blue-400 to-purple-500 group-hover:scale-105 transition-transform duration-300">Field Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 mb-8 stagger-fade-in">
                  {fieldExpertise.map((field, index) => (
                    <div key={index} className="space-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex justify-between">
                        <span className="font-medium">{field.name}</span>
                        <span className="text-primary animate-enhanced-pulse-glow">{field.level}%</span>
                      </div>
                      <Progress 
                        value={field.level} 
                        className="h-2 animate-slide-in-left"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg animate-slide-up">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2 stagger-fade-in">
                    {tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-bounce-in morph-button"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-effect hover-glow animate-fade-in">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-500">What I Do Best</h3>
              <div className="grid md:grid-cols-4 gap-6 text-muted-foreground stagger-fade-in">
                <div className="animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                  <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
                  <p>Building intelligent models and data-driven applications</p>
                </div>
                <div className="animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                  <h4 className="font-semibold text-foreground mb-2">Web Development</h4>
                  <p>Creating responsive and interactive web applications</p>
                </div>
                <div className="animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                  <h4 className="font-semibold text-foreground mb-2">DevOps</h4>
                  <p>Streamlining deployment and infrastructure management</p>
                </div>
                <div className="animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                  <h4 className="font-semibold text-foreground mb-2">Problem Solving</h4>
                  <p>Analyzing complex problems and implementing efficient solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12 text-sm text-muted-foreground/70 animate-fade-in">
            <p>Built with passion using <span className="text-primary animate-enhanced-pulse-glow">Lovable</span> ✨</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
