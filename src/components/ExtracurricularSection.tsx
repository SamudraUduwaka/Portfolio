import { ExternalLink, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const featuredActivities = [
  {
    title: "Secretary",
    organization: "Electronic Club of University of Moratuwa",
    period: "Aug 2025 - Present",
    featured: true,
  },
  {
    title: "Executive Director",
    organization: "Team Coordination and Human Resource Management - Morawings IESL Student Chapter UoM",
    period: "Oct 2023 - Present",
    featured: true,
  },
  {
    title: "Secretary",
    organization: "IEEE Signal Processing Society Student Branch University of Moratuwa",
    period: "Jan 2025 - Present",
    featured: true,
  },
  {
    title: "Batch Representative",
    organization: "For Semester 2 and 3 at ENTC UoM",
    period: "May 2023 - Feb 2024",
    featured: true,
  },
  {
    title: "Inducted Member",
    organization: "Rotaract Club of University of Moratuwa",
    period: "May 2023 - Jun 2024",
    featured: true,
  },
];

const ExtracurricularSection = () => {
  const navigate = useNavigate();

  return (
    <section id="extracurricular" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
            {"// LEADERSHIP & INVOLVEMENT"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Extracurricular <span className="text-gradient">Activities</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Active involvement in student organizations, clubs, and leadership roles
          </p>
        </div>

        {/* Featured Activities Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 card-hover group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors mb-1">
                      {activity.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-tight">
                      {activity.organization}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <Calendar className="h-3 w-3" />
                  {activity.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="hero-outline" 
            size="lg"
            onClick={() => navigate('/extracurricular')}
          >
            View All Activities
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
