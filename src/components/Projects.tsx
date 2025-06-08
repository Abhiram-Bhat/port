
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Obstacle Avoidance with Object Detection & Voice Alert",
      description: "A smart AI-based assistive system for visually impaired people with real-time voice feedback and obstacle avoidance using computer vision and machine learning.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80",
      tags: ["Python", "OpenCV", "TensorFlow", "AI/ML", "Computer Vision"],
      github: "#",
      demo: "#"
    },
    {
      title: "Placement Management System",
      description: "A comprehensive web platform to manage student placement data with categories like Core, Mass, and Dream offers. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      tags: ["MERN Stack", "MongoDB", "React", "Node.js", "Express"],
      github: "#",
      demo: "#"
    },
    {
      title: "Hotel Management App",
      description: "A comprehensive hotel management program developed in C for booking, customer record management, and menu ordering with an intuitive interface.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=80",
      tags: ["C Programming", "Data Structures", "File Management", "CLI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fake News Detector",
      description: "An AI-powered application that uses natural language processing and machine learning algorithms to detect and classify fake news articles with high accuracy.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&q=80",
      tags: ["Python", "NLP", "Machine Learning", "Scikit-learn", "NLTK"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in AI/ML, web development, and software engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-effect hover-glow group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} className="flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.demo} className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="glass-effect hover-glow">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
