import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Chaitanya V. Yadav
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Software Developer & BCA Graduate
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions with Python, React, and modern web technologies. 
            Currently pursuing MCA and building the future, one line of code at a time.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Pune, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+91 8767365473</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span>chaitanyayadav2305@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="glow" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" asChild>
              <a href="https://www.linkedin.com/in/chaitanya-yadav-533208382" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" asChild>
              <a href="mailto:chaitanyayadav2305@gmail.com">
                <Mail className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" asChild>
              <a href="tel:+918767365473">
                <Phone className="w-6 h-6" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;