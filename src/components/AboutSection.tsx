import { Terminal, Cpu, Brain, Zap } from "lucide-react";
import coverImg from "@/images/samudra_coverpic.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Terminal style */}
          <div className="relative">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-accent/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="ml-4 font-mono text-sm text-muted-foreground">samudra.tsx</span>
              </div>
              
              {/* Terminal content */}
              <div className="p-6 font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-accent">developer</span> = {"{"}
                </p>
                <p className="ml-4 text-muted-foreground">
                  <span className="text-foreground">name</span>:{" "}
                  <span className="text-primary">"Samudra Uduwaka"</span>,
                </p>
                <p className="ml-4 text-muted-foreground">
                  <span className="text-foreground">education</span>: [
                </p>
                <p className="ml-8 text-muted-foreground">
                  {"{"}university: <span className="text-primary">"University of Moratuwa"</span>,
                </p>
                <p className="ml-9 text-muted-foreground">
                  department: <span className="text-primary">"Electronic and Telecommunication Engineering"</span>{"}"},
                </p>
                <p className="ml-8 text-muted-foreground">
                  {"{"}institute: <span className="text-primary">"Java Institute for Advanced Technology"</span>,
                </p>
                <p className="ml-9 text-muted-foreground">
                  program: <span className="text-primary">"Software Engineering"</span>{"}"},
                </p>
                <p className="ml-4 text-muted-foreground">],</p>
                <p className="ml-4 text-muted-foreground">
                  <span className="text-foreground">skills</span>: [
                </p>
                <p className="ml-8 text-primary">"JavaScript", "Java", "PHP", "HTML",</p>
                <p className="ml-8 text-primary">"React", "Python", "C++", "Arduino",</p>
                <p className="ml-8 text-primary">"MATLAB"</p>
                <p className="ml-4 text-muted-foreground">],</p>
                <p className="ml-4 text-muted-foreground">
                  <span className="text-foreground">interests</span>: [
                </p>
                <p className="ml-8 text-primary">"Web development",</p>
                <p className="ml-8 text-primary">"Machine Learning",</p>
                <p className="ml-8 text-primary">"Artificial Intelligence",</p>
                <p className="ml-8 text-primary">"Embedded and IoT"</p>
                <p className="ml-4 text-muted-foreground">]</p>
                <p className="text-muted-foreground">{"}"};</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-lg -z-10" />
          </div>
          
          {/* Right side - Content */}
          <div>
            <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
              {"// ABOUT ME"}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Hello, <span className="text-gradient">I`m Samudra </span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              An enthusiastic Engineering undergraduate with a positive and quick decision-making 
              personality and great leadership while forwarding towards any better activity is the 
              rule of mine. Doing my best to fulfill any task given to me is the motto of my life.
            </p>
            
            <div className="space-y-6">
              {/* BSc Electronic and Telecommunication Engineering */}
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-lg mb-1">BSc (Hons) in Electronic and Telecommunication Engineering</h4>
                <p className="text-sm text-primary mb-2">University of Moratuwa, Sri Lanka • May 2021 - Present</p>
                <p className="text-sm text-muted-foreground">Final-year undergraduate at the Department of Electronic and Telecommunication Engineering</p>
                {/* <p className="text-sm text-muted-foreground font-semibold mt-1">CGPA: 3.67 (Until Sem 6)</p> */}
              </div>

              {/* BSc Software Engineering */}
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-lg mb-1">BSc (Hons) Software Engineering</h4>
                <p className="text-sm text-primary mb-2">Java Institute for Advanced Technology, Sri Lanka • Dec 2020 - Present</p>
                <p className="text-sm text-muted-foreground">Final-year undergraduate</p>
              </div>

              {/* GCE Advanced Level */}
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-lg mb-1">GCE Advanced Level</h4>
                <p className="text-sm text-primary mb-2">Devi Balika Vidyalaya Colombo 08 • Aug 2018 - Oct 2020</p>
                <p className="text-sm text-muted-foreground">3 A's in Physical Science stream - Z-Score: 2.2224</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
