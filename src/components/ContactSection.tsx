import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
            {"// GET IN TOUCH"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h3>
          <p className="text-muted-foreground text-lg mb-12">
            I'm currently looking for software engineering and machine learning opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span>samudrauduwaka@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>

          <a href="mailto:samudrauduwaka@gmail.com">
            <Button variant="hero" size="lg" className="group">
              Say Hello
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Decorative circuit lines */}
        <div className="relative mt-24">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
