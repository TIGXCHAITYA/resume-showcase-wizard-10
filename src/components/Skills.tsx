import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Globe, Award, Terminal, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-primary",
      skills: [
        { name: "Python", level: 85, description: "OpenCV, Face Recognition" },
        { name: "C Language", level: 75, description: "System Programming" },
        { name: "JavaScript", level: 70, description: "React Framework" }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "text-accent",
      skills: [
        { name: "HTML5", level: 90, description: "Semantic Structure" },
        { name: "CSS3", level: 85, description: "Modern Styling" },
        { name: "Bootstrap", level: 80, description: "Responsive Design" },
        { name: "React", level: 75, description: "Component Architecture" }
      ]
    },
    {
      title: "System & Database",
      icon: Database,
      color: "text-success",
      skills: [
        { name: "File System Management", level: 80, description: "Data Organization" },
        { name: "Multi-User Systems", level: 75, description: "Access Control" },
        { name: "Version Control", level: 70, description: "Git & GitHub" }
      ]
    }
  ];

  const certifications = [
    {
      title: "React JavaScript",
      institution: "Success Institute of Technology",
      date: "February 2024",
      icon: "⚛️"
    },
    {
      title: "Bootstrap Web Design",
      institution: "Sai Computer Education Centre",
      date: "March 2024",
      icon: "🎨"
    }
  ];

  const tools = [
    "VS Code", "Git & GitHub", "Bootstrap", "OpenCV", 
    "Python Libraries", "Web APIs", "Linux", "Windows"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional certifications
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Technical Skills */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications & Tools */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent" />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/20 border border-muted/30">
                    <div className="text-2xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-sm text-primary font-medium">{cert.institution}</p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-primary" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="px-3 py-2 bg-card/50 border-primary/20 text-foreground hover:border-primary/40 hover:bg-primary/10"
                    >
                      <Layers className="w-3 h-3 mr-2" />
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;