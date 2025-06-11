
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "C/C++", level: "Intermediate" },
        { name: "Java", level: "Intermediate" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" }
      ]
    },
    {
      title: "AI/ML & Data",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "PyTorch", level: "Intermediate" },
        { name: "Data Analysis", level: "Advanced" }
      ]
    }
  ];

  const fieldExpertise = [
    { name: "Frontend Development", description: "Building responsive and interactive user interfaces" },
    { name: "Backend Development", description: "Creating robust server-side applications" },
    { name: "DevOps & Cloud", description: "Streamlining deployment and infrastructure" },
    { name: "UI/UX Design", description: "Designing user-centered digital experiences" }
  ];

  const tools = [
    'Visual Studio Code', 'Linux', 'Git', 'Docker', 'Tableau', 
    'Power BI', 'TensorFlow', 'PyTorch', 'MongoDB', 'MySQL',
    'AWS', 'Jenkins', 'Kubernetes'
  ];

  const whatIDoB est = [
    {
      title: "Machine Learning",
      description: "Building intelligent models and data-driven applications"
    },
    {
      title: "Web Development", 
      description: "Creating responsive and interactive web applications"
    },
    {
      title: "DevOps",
      description: "Streamlining deployment and infrastructure management"
    },
    {
      title: "Problem Solving",
      description: "Analyzing complex problems and implementing efficient solutions"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-primary text-primary-foreground";
      case "Intermediate": return "bg-blue-500/20 text-blue-400 border-blue-400/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
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
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-bounce-in">
              My <span className="gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-500">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6 animate-slide-up"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          {/* Programming & Technologies Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text animate-gradient bg-gradient-to-r from-primary to-blue-400">Programming & Technologies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="glass-effect hover-glow animate-slide-in-left group" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-center group-hover:scale-105 transition-transform duration-300">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex justify-between items-center animate-slide-up" style={{ animationDelay: `${skillIndex * 0.1}s` }}>
                          <span className="font-medium text-sm">{skill.name}</span>
                          <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Field Expertise */}
          <div className="mb-12">
            <Card className="glass-effect hover-glow animate-slide-in-right">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl gradient-text animate-gradient bg-gradient-to-r from-blue-400 to-purple-500 text-center">Field Expertise</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {fieldExpertise.map((field, index) => (
                    <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h4 className="font-semibold mb-2 text-primary">{field.name}</h4>
                      <p className="text-sm text-muted-foreground">{field.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tools & Platforms */}
          <div className="mb-12">
            <Card className="glass-effect hover-glow animate-fade-in">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-lg text-center animate-slide-up">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="px-3 py-1 text-xs border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-bounce-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What I Do Best */}
          <Card className="glass-effect hover-glow animate-fade-in">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-6 gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-500">What I Do Best</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whatIDoB est.map((item, index) => (
                  <div key={index} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
