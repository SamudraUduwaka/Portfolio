import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FypSection from "@/components/FypSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Fixed background for Hero and About sections */}
        <div className="relative z-0">
          <div className="fixed inset-0 z-0 h-screen">
            <img 
              src="/src/images/samudra_coverpic.png"
              alt="Cover" 
              className="w-full h-screen object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/55 to-background" />
          </div>
          <div className="fixed inset-0 circuit-grid opacity-10 z-[1] h-screen" />
          
          <div className="relative z-10">
            <HeroSection />
            <AboutSection />
          </div>
        </div>
        <div className="relative z-20 bg-background">
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <FypSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
