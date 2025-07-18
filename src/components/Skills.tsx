import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "C/C++", level: "Intermediate" },
        { name: "Java", level: "Intermediate" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: "Intermediate" },
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
    { name: "Machine Learning", description: "Developing AI models and intelligent applications" }
  ];

  const tools = [
    'Visual Studio Code', 'Linux', 'Git', 'Docker', 'Tableau', 
    'Power BI', 'TensorFlow', 'PyTorch', 'MongoDB', 'MySQL',
    'AWS', 'Jenkins', 'Kubernetes'
  ];

  const whatIDoBest = [
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
    <section id="skills" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Enhanced background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape top-10 left-10 w-20 sm:w-32 h-20 sm:h-32 border border-primary/10 rounded-full" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape top-1/3 right-20 w-16 sm:w-24 h-16 sm:h-24 border border-primary/20 rotate-45" style={{ animationDelay: '2s' }}></div>
        <div className="floating-shape bottom-20 left-1/3 w-12 sm:w-16 h-12 sm:h-16 bg-primary/5 rounded-lg" style={{ animationDelay: '1s' }}></div>
        <div className="floating-shape bottom-1/4 right-10 w-16 sm:w-20 h-16 sm:h-20 border border-blue-400/10 rounded-full" style={{ animationDelay: '3s' }}></div>
        <div className="floating-shape top-2/3 left-20 w-8 sm:w-12 h-8 sm:h-12 bg-purple-500/5 rounded-lg rotate-12" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-bounce-in">
              My <span className="gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-500">Skills</span>
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-primary mx-auto mb-4 sm:mb-6 animate-slide-up"></div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto animate-slide-up px-4">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          {/* Programming & Technologies Section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center gradient-text animate-gradient bg-gradient-to-r from-primary to-blue-400">Programming & Technologies</h3>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {skillCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="glass-effect hover-glow animate-slide-in-left group" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-base sm:text-lg text-center group-hover:scale-105 transition-transform duration-300">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 sm:space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex justify-between items-center animate-slide-up" style={{ animationDelay: `${skillIndex * 0.1}s` }}>
                          <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
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
          <div className="mb-8 sm:mb-12">
            <Card className="glass-effect hover-glow animate-slide-in-right">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl gradient-text animate-gradient bg-gradient-to-r from-blue-400 to-purple-500 text-center">Field Expertise</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  {fieldExpertise.map((field, index) => (
                    <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base">{field.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{field.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tools & Platforms */}
          <div className="mb-8 sm:mb-12">
            <Card className="glass-effect hover-glow animate-fade-in">
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg text-center animate-slide-up">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="px-2 sm:px-3 py-1 text-xs border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-bounce-in"
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
            <CardContent className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-400 to-purple-500">What I Do Best</h3>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
                {whatIDoBest.map((item, index) => (
                  <div key={index} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h4 className="font-semibold text-foreground mb-2 text-xs sm:text-sm">{item.title}</h4>
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
