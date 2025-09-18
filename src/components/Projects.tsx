import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Shield, Users, Zap } from "lucide-react";

const Projects = () => {
  const mainProject = {
    title: "FRAS - Face Recognition Attendance System",
    description: "A secure and efficient attendance system using face recognition technology. Integrated OpenCV and Python to automate attendance marking, enhancing accuracy and eliminating proxy attendance.",
    type: "Research Project",
    technologies: ["Python", "OpenCV", "Face Recognition", "Computer Vision", "Real-time Processing"],
    features: [
      {
        icon: Shield,
        title: "Secure Authentication",
        description: "Advanced face recognition algorithms ensure accurate identity verification"
      },
      {
        icon: Zap,
        title: "Real-time Processing",
        description: "Instant face detection and attendance marking with live feedback"
      },
      {
        icon: Users,
        title: "Multi-user Support",
        description: "Handles multiple users with individual profile management"
      },
      {
        icon: Eye,
        title: "Anti-proxy System",
        description: "Eliminates fraudulent attendance with biometric verification"
      }
    ],
    achievements: [
      "Developed complete end-to-end solution",
      "Implemented real-time face detection",
      "Created user-friendly interface",
      "Integrated data logging system"
    ]
  };

  const futureProjects = [
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio built with React and Tailwind CSS",
      status: "In Progress",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Web Application Project",
      description: "Planning to build a full-stack web application using React and modern backend technologies",
      status: "Planned",
      technologies: ["React", "Node.js", "Database"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical expertise through innovative projects and solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Main Project - FRAS */}
          <Card className="card-glow">
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <Badge variant="outline" className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {mainProject.type}
                  </Badge>
                  <CardTitle className="text-3xl md:text-4xl gradient-accent-text">
                    {mainProject.title}
                  </CardTitle>
                </div>
                <div className="flex gap-3">
                  <Button variant="glow" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="accent" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Project Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {mainProject.description}
              </p>

              {/* Technologies Used */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {mainProject.technologies.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="px-3 py-2 bg-accent/10 text-accent border-accent/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-semibold text-foreground mb-6">Key Features & Innovations</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {mainProject.features.map((feature, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/20 border border-muted/30">
                      <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-medium text-foreground mb-1">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Project Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {mainProject.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {futureProjects.map((project, index) => (
                <Card key={index} className="card-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant={project.status === "In Progress" ? "default" : "secondary"}
                        className={project.status === "In Progress" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;