import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold gradient-text">Chaitanya Yadav</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Software Developer and BCA Graduate passionate about creating innovative solutions 
                with modern technologies. Currently pursuing MCA and building the future, one line of code at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Me</a>
                <a href="#skills" className="text-muted-foreground hover:text-primary text-sm transition-colors">Skills</a>
                <a href="#projects" className="text-muted-foreground hover:text-primary text-sm transition-colors">Projects</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <a 
                    href="mailto:chaitanyayadav2305@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    chaitanyayadav2305@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <a 
                    href="tel:+918767365473" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8767365473
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="icon" className="w-9 h-9" asChild>
                  <a 
                    href="https://www.linkedin.com/in/chaitanya-yadav-533208382" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="w-9 h-9" asChild>
                  <a 
                    href="mailto:chaitanyayadav2305@gmail.com"
                    aria-label="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="w-9 h-9" asChild>
                  <a 
                    href="tel:+918767365473"
                    aria-label="Phone Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-border/50" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>&copy; {currentYear} Chaitanya Yadav. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and React</span>
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
