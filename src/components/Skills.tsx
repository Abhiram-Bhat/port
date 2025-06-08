
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
    { name: 'SQL/MongoDB', level: 82 },
    { name: 'HTML/CSS', level: 90 }
  ];

  const fieldExpertise = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 75 }
  ];

  const tools = [
    'Visual Studio Code', 'Linux', 'Git', 'Docker', 'Tableau', 
    'Power BI', 'TensorFlow', 'PyTorch', 'MongoDB', 'MySQL'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="glass-effect hover-glow animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Programming & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-glow animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Field Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 mb-8">
                  {fieldExpertise.map((field, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{field.name}</span>
                        <span className="text-primary">{field.level}%</span>
                      </div>
                      <Progress 
                        value={field.level} 
                        className="h-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
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
              <h3 className="text-2xl font-bold mb-4 gradient-text">What I Do Best</h3>
              <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
                  <p>Building intelligent models and data-driven applications</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Web Development</h4>
                  <p>Creating responsive and interactive web applications</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Problem Solving</h4>
                  <p>Analyzing complex problems and implementing efficient solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
