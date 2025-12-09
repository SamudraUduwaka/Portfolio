import { ArrowLeft, Calendar, Users, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import rotaractImg1 from "@/images/Rotaract-induction1.jpg";
import rotaractImg2 from "@/images/Rotaract-induction2.jpg";
import repsImg from "@/images/reps2-3.jpeg";
import eclubImg from "@/images/eclub_secretary.jpg";
import ieslImg from "@/images/iesl.jpg";
import spsImg from "@/images/ieeespsmoratuwa_logo.jpg";

const activities = [
  {
    title: "Secretary",
    organization: "Electronic Club of University of Moratuwa",
    period: "Aug 2025 - Present",
    type: "Leadership Position",
    description: "Leading the Electronic Club, organizing technical workshops, competitions, and projects to foster innovation and hands-on learning among students in electronics and embedded systems.",
    featured: true,
    image: eclubImg,
  },
  {
    title: "Executive Director of Team Coordination and Human Resource Management",
    organization: "Morawings - IESL Student Chapter UoM",
    period: "Oct 2023 - Present",
    type: "Leadership Position",
    description: "Overseeing team coordination and human resource management for Morawings, managing volunteer recruitment, team building activities, and ensuring effective collaboration across projects.",
    featured: true,
    image: ieslImg,
  },
  {
    title: "Secretary",
    organization: "IEEE Signal Processing Society Student Branch University of Moratuwa",
    period: "Jan 2025 - Present",
    type: "Leadership Position",
    description: "Managing the IEEE SPS Student Branch activities, coordinating events, webinars, and workshops focused on signal processing, machine learning, and related technologies.",
    featured: true,
    image: spsImg,
  },
  {
    title: "Batch Representative for Semester 2 and 3",
    organization: "Department of Electronic and Telecommunication Engineering, UoM",
    period: "May 2023 - Feb 2024",
    type: "Student Representative",
    description: "Represented the batch in departmental meetings, communicated student concerns and suggestions to faculty, and facilitated academic and extracurricular coordination.",
    featured: true,
    image: repsImg,
  },
  {
    title: "Inducted Member",
    organization: "Rotaract Club of University of Moratuwa",
    period: "May 2023 - Jun 2024",
    type: "Volunteer Service",
    description: "Active participant in community service projects, social initiatives, and leadership development programs organized by the Rotaract Club.",
    featured: true,
    images: [rotaractImg1, rotaractImg2],
  },
];

const Extracurricular = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Extracurricular <span className="text-gradient">Activities</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Leadership roles, volunteer work, and active participation in student organizations
              contributing to personal growth and community development
            </p>
          </div>
        </div>
      </section>

      {/* Featured Leadership Positions */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-primary font-mono text-sm block mb-2">// FEATURED</span>
            Leadership Positions
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20 flex flex-col relative"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
                {/* Image Section */}
                {(activity.image || activity.images) && (
                  <div className="w-full relative aspect-square">
                    {activity.images ? (
                      <div className="grid grid-rows-2 gap-0.5 h-full">
                        {activity.images.map((img, idx) => (
                          <a
                            key={idx}
                            href={img}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overflow-hidden bg-muted relative group/img h-full"
                          >
                            <img
                              src={img}
                              alt={`${activity.organization} ${idx + 1}`}
                              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/10 transition-all" />
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={activity.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-square overflow-hidden bg-muted relative group/img"
                      >
                        <img
                          src={activity.image}
                          alt={activity.organization}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/10 transition-all" />
                      </a>
                    )}
                  </div>
                )}
                
                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col relative z-20">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                      {activity.type === "Leadership Position" ? (
                        <Award className="h-5 w-5 text-primary" />
                      ) : (
                        <Users className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-mono text-primary block mb-1 uppercase tracking-wider">{activity.type}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 font-semibold line-clamp-2">
                    {activity.organization}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 bg-secondary/50 px-3 py-1.5 rounded-full w-fit">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <span className="font-medium">{activity.period}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 mt-auto">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            I'm always open to new opportunities for leadership, volunteering, and making a positive impact.
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

export default Extracurricular;
