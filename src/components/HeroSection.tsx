import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/images/samudra_main.jpg";
import coverImg from "@/images/samudra_coverpic.png";

const roles = [
  "Software Engineer",
  "ML & AI Enthusiast",
  "Full-Stack Developer",
  "Computer Vision Explorer",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-200 z-[1]" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="animate-slide-up mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse" />
            <img 
              src={profileImg} 
              alt="Samudra Uduwaka" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
          </div>
        </div>

        <div className="animate-slide-up">
          <p className="font-mono text-primary mb-4 text-sm tracking-widest">
            {"<hello world />"}
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up animation-delay-200">
          <span className="text-foreground">I'm </span>
          <span className="text-gradient">Samudra Uduwaka</span>
        </h1>
        
        <div className="h-12 md:h-16 flex items-center justify-center animate-slide-up animation-delay-400">
          <span className="font-mono text-xl md:text-3xl text-muted-foreground">
            {displayText}
            <span className="typing-cursor ml-1" />
          </span>
        </div>
        
        <p className="text-muted-foreground max-w-2xl mx-auto mt-6 mb-10 text-lg animate-slide-up animation-delay-600">
          Final Year Undergraduate at University of Moratuwa
          <br />
          <span className="text-primary/80">Electronic & Telecommunication Engineering</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
          <Button variant="hero" size="lg" onClick={scrollToAbout}>
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <a href="/src/public/CV/Samudra_Uduwaka_CV.pdf" download="Samudra_Uduwaka_CV.pdf">
            <Button variant="hero-outline" size="lg">
              Download CV
            </Button>
          </a>
        </div>
        
        <div className="flex gap-6 justify-center mt-12 animate-slide-up animation-delay-600">
          <a 
            href="https://github.com/SamudraUduwaka" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/samudra-uduwaka" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:samudrauduwaka@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
