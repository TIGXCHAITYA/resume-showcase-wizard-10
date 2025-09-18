import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  const achievements = [
    "7.57 CGPA in BCA",
    "Face Recognition System Project",
    "React & Bootstrap Certified",
    "Pursuing MCA (2025)"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A dedicated computer science student with hands-on experience in real-world projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main About Content */}
            <div className="space-y-6">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    My Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a motivated BCA graduate with a strong foundation in computer science and 
                    hands-on experience in real-world projects. My passion lies in creating innovative 
                    solutions using modern technologies.
                  </p>
                  <p>
                    Currently pursuing my Master's in Computer Applications at D.Y. Patil University, 
                    I'm constantly expanding my technical skills and exploring new technologies in the 
                    ever-evolving field of software development.
                  </p>
                  <p>
                    My approach combines theoretical knowledge with practical application, always 
                    striving to deliver efficient and user-friendly solutions that make a real impact.
                  </p>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-accent" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="p-3 text-sm justify-start bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-accent" />
                    Education Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Current - MCA */}
                  <div className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">Master of Computer Applications</h4>
                      <p className="text-sm text-primary font-medium">D.Y. Patil University, Pune-Ambi</p>
                      <p className="text-xs text-muted-foreground">2025 (Pursuing)</p>
                    </div>
                  </div>

                  {/* BCA */}
                  <div className="relative pl-6 border-l-2 border-accent/30">
                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">Bachelor of Computer Applications</h4>
                      <p className="text-sm text-accent font-medium">D.Y. Patil College, Pimpri-Pune</p>
                      <p className="text-xs text-muted-foreground">2025 • CGPA: 7.57</p>
                    </div>
                  </div>

                  {/* HSC */}
                  <div className="relative pl-6 border-l-2 border-muted/30">
                    <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-1" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">Higher Secondary Certificate</h4>
                      <p className="text-sm text-muted-foreground">Yashwantrao Chavan Institute, Satara</p>
                      <p className="text-xs text-muted-foreground">2022 • 56%</p>
                    </div>
                  </div>

                  {/* SSC */}
                  <div className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-1" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">Secondary School Certificate</h4>
                      <p className="text-sm text-muted-foreground">Holy Convent English Medium School</p>
                      <p className="text-xs text-muted-foreground">2020 • 86%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;