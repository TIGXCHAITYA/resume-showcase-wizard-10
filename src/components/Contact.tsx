import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is a portfolio demo, we'll show a toast message
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chaitanyayadav2305@gmail.com",
      href: "mailto:chaitanyayadav2305@gmail.com",
      description: "Feel free to send me an email"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8767365473",
      href: "tel:+918767365473",
      description: "Available for calls during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, Maharashtra 411034",
      href: "#",
      description: "Based in Pune, India"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "chaitanya-yadav-533208382",
      href: "https://www.linkedin.com/in/chaitanya-yadav-533208382",
      description: "Let's connect professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/20 border border-muted/30 hover:bg-muted/30 transition-colors">
                      <contact.icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{contact.title}</h4>
                        {contact.href !== "#" ? (
                          <a 
                            href={contact.href} 
                            className="text-primary hover:text-primary-glow font-medium block mb-1"
                            target={contact.href.startsWith('http') ? '_blank' : '_self'}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium mb-1">{contact.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="card-glow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Ready to Work Together?</h3>
                    <p className="text-muted-foreground mb-6">
                      I'm always interested in discussing new opportunities, innovative projects, 
                      and collaborating with fellow developers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button variant="hero" asChild>
                        <a href="mailto:chaitanyayadav2305@gmail.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Send Email
                        </a>
                      </Button>
                      <Button variant="glow" asChild>
                        <a href="https://www.linkedin.com/in/chaitanya-yadav-533208382" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Send className="w-6 h-6 text-accent" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button type="submit" variant="accent" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;