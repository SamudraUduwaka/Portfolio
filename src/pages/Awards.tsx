import { ArrowLeft, Trophy, Award, Medal, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import deviBalika from "@/images/devi-balika-3As.jpeg";

const awards = [
  {
    title: "3 As for GCE Advanced Level",
    organization: "Devi Balika Vidyalaya",
    year: "2021",
    location: "Colombo, Sri Lanka",
    description: "Achieved 3 A passes in the GCE Advanced Level examination in Physical Science stream. Awarded a medal and prize at the school prize-giving ceremony in recognition of outstanding academic performance.",
    type: "Academic Excellence",
    image: deviBalika,
    featured: true,
  },
  {
    title: "Engineering Undergraduate - ENTC",
    organization: "University of Moratuwa",
    year: "2022 - Present",
    location: "Moratuwa, Sri Lanka",
    description: "Admitted to the prestigious Department of Electronic and Telecommunication Engineering at University of Moratuwa, one of Sri Lanka's leading engineering institutions. Also pursuing Software Engineering at Java Institute for Advanced Technology.",
    type: "Academic Achievement",
    featured: true,
  },
  {
    title: "GitHub Pull Shark x2",
    organization: "GitHub",
    year: "2024",
    description: "Earned the Pull Shark achievement twice for opening pull requests that have been merged across various open-source projects, demonstrating active contribution to the developer community.",
    type: "Open Source Contribution",
    featured: true,
  },
  {
    title: "GitHub Quickdraw Achievement",
    organization: "GitHub",
    year: "2024",
    description: "Recognized for quickly closing issues and responding to community contributions, showing responsiveness and dedication to project maintenance.",
    type: "Open Source Contribution",
    featured: true,
  },
  {
    title: "37+ GitHub Repositories",
    organization: "GitHub",
    year: "2023 - 2024",
    description: "Maintained and developed over 37 repositories covering full-stack development, machine learning, computer vision, and embedded systems, showcasing diverse technical expertise.",
    type: "Technical Achievement",
    featured: false,
  },
  {
    title: "26 GitHub Followers",
    organization: "GitHub Community",
    year: "2024",
    description: "Built a community of followers interested in software engineering, machine learning, and AI projects, demonstrating influence in the developer community.",
    type: "Community Recognition",
    featured: false,
  },
];

const Awards = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary font-mono text-sm block mb-2">// RECOGNITION</span>
              Honors & <span className="text-gradient">Awards</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognition for academic excellence, leadership, and contributions to the community
            </p>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
              >
                {/* Image Section */}
                {award.image && (
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                
                {/* Content Section */}
                <div className="p-5">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {award.type === "Academic Excellence" || award.type === "Academic Achievement" ? (
                        <Trophy className="h-5 w-5 text-primary" />
                      ) : award.type === "Leadership Recognition" ? (
                        <Award className="h-5 w-5 text-primary" />
                      ) : (
                        <Medal className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-mono text-primary block mb-1">
                        {award.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">
                    {award.organization}
                  </p>
                  
                  {award.location && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{award.location}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{award.year}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Interested in collaboration or have opportunities to discuss?
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => navigate('/#contact')}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Awards;
