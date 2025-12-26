import { ExternalLink, Users, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import rotaractImg1 from "@/images/Rotaract-induction1.jpg";
import rotaractImg2 from "@/images/Rotaract-induction2.jpg";
import repsImg from "@/images/reps2-3.jpeg";
import eclubImg from "@/images/eclub_secretary.jpg";
import ieslImg from "@/images/iesl.jpg";
import spsImg from "@/images/ieeespsmoratuwa_logo.jpg";

const featuredActivities = [
  {
    title: "Secretary",
    organization: "Electronic Club of University of Moratuwa",
    period: "Aug 2025 - Present",
    type: "Leadership Position",
    description: "Leading the Electronic Club, organizing technical workshops, competitions, and projects to foster innovation and hands-on learning among students.",
    featured: true,
    image: eclubImg,
  },
  {
    title: "Executive Director",
    organization: "Team Coordination and HR Management - Morawings IESL",
    period: "Oct 2023 - Present",
    type: "Leadership Position",
    description: "Overseeing team coordination and human resource management, managing volunteer recruitment, and ensuring effective collaboration across projects.",
    featured: true,
    image: ieslImg,
  },
  {
    title: "Secretary",
    organization: "IEEE Signal Processing Society Student Branch UoM",
    period: "Jan 2025 - Present",
    type: "Leadership Position",
    description: "Managing IEEE SPS activities, coordinating events, webinars, and workshops focused on signal processing, machine learning, and related technologies.",
    featured: true,
    image: spsImg,
  },
  {
    title: "Batch Representative",
    organization: "For Semester 2 and 3 at ENTC UoM",
    period: "May 2023 - Feb 2024",
    type: "Student Representative",
    description: "Represented the batch in departmental meetings, communicated student concerns to faculty, and facilitated academic coordination.",
    featured: true,
    image: repsImg,
  },
  {
    title: "Inducted Member",
    organization: "Rotaract Club of University of Moratuwa",
    period: "May 2023 - Jun 2024",
    type: "Volunteer Service",
    description: "Active participant in community service projects, social initiatives, and leadership development programs.",
    featured: true,
    images: [rotaractImg1, rotaractImg2],
  },
];

const ExtracurricularSection = () => {
  const navigate = useNavigate();

  return (
    <section id="extracurricular" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
            {"// LEADERSHIP & INVOLVEMENT"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Extracurricular <span className="text-gradient">Activities</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Active involvement in student organizations, leadership roles, and volunteer work contributing to personal growth and community development
          </p>
        </div>

        {/* Featured Activities Grid */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                {/* Image Section */}
                {(activity.image || activity.images) && (
                  <div className="w-full aspect-video bg-muted overflow-hidden">
                    {activity.images ? (
                      <div className="grid grid-cols-2 gap-0.5 h-full">
                        {activity.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="overflow-hidden relative"
                          >
                            <img
                              src={img}
                              alt={`${activity.organization} ${idx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <img
                        src={activity.image}
                        alt={activity.organization}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                )}
                
                {/* Content Section */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-primary/10 rounded">
                      {activity.type === "Leadership Position" ? (
                        <Award className="h-4 w-4 text-primary" />
                      ) : (
                        <Users className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">{activity.type}</span>
                  </div>
                  
                  <h4 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {activity.organization}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    <span>{activity.period}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {activity.description}
                  </p>
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
