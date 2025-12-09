import { Award, Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const featuredAchievements = [
  {
    title: "3 As for GCE Advanced Level",
    organization: "Devi Balika Vidyalaya",
    year: "2021",
    description: "Achieved 3 A passes in GCE A/L examination with medal and prize",
    type: "Academic Excellence",
  },
  {
    title: "GitHub Pull Shark x2",
    organization: "GitHub",
    year: "2024",
    description: "Earned for opening merged pull requests across open-source projects",
    type: "Open Source",
  },
  {
    title: "Secretary - Electronic Club & IEEE SPS",
    organization: "University of Moratuwa",
    year: "2025",
    description: "Leading technical workshops and events in electronics and signal processing",
    type: "Leadership",
  },
];

const AchievementsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
            {"// RECOGNITION"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Awards & <span className="text-gradient">Achievements</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognition for academic excellence, competitions, and contributions
          </p>
        </div>

        {/* Featured Achievements */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {featuredAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 card-hover group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-mono text-primary block mb-1">
                      {achievement.type}
                    </span>
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.organization}
                    </p>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="hero-outline" 
            size="lg"
            onClick={() => navigate('/achievements')}
          >
            View All Achievements
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
