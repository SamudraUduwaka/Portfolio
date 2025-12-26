import { ExternalLink, Users, Calendar, Award, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import rotaractImg1 from "@/images/Rotaract-induction1.jpg";
import rotaractImg2 from "@/images/Rotaract-induction2.jpg";
import repsImg from "@/images/reps2-3.jpeg";
import eclubImg from "@/images/eclub_secretary.jpg";
import ieslImg from "@/images/iesl.jpg";
import spsImg from "@/images/ieeespsmoratuwa_logo.jpg";

interface Activity {
  title: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  featured: boolean;
  image?: string;
  images?: string[];
}

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
    period: "Sept 2025 - Present",
    type: "Leadership Position",
    description: "Overseeing team coordination and human resource management, managing volunteer recruitment, and ensuring effective collaboration across projects.",
    featured: true,
    image: ieslImg,
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
    title: "Secretary",
    organization: "IEEE Signal Processing Society Student Branch UoM",
    period: "Jan 2025 - Present",
    type: "Leadership Position",
    description: "Managing IEEE SPS activities, coordinating events, webinars, and workshops focused on signal processing, machine learning, and related technologies.",
    featured: true,
    image: spsImg,
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
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set([...prev, src]));
  };

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
                  <div className="w-full aspect-video bg-muted overflow-hidden cursor-pointer relative">
                    {activity.images ? (
                      <div className="grid grid-cols-2 gap-0.5 h-full">
                        {activity.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="overflow-hidden relative"
                            onClick={() => {
                              setSelectedActivity(activity);
                              setSelectedImageIndex(idx);
                            }}
                          >
                            {!loadedImages.has(img) && (
                              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                              </div>
                            )}
                            <img
                              src={img}
                              alt={`${activity.organization} ${idx + 1}`}
                              className={`w-full h-full object-cover group-hover:scale-105 transition-transform ${
                                !loadedImages.has(img) ? 'opacity-0' : 'opacity-100'
                              }`}
                              onLoad={() => handleImageLoad(img)}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div onClick={() => {
                        setSelectedActivity(activity);
                        setSelectedImageIndex(0);
                      }}>
                        {activity.image && !loadedImages.has(activity.image) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-muted">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                          </div>
                        )}
                        <img
                          src={activity.image}
                          alt={activity.organization}
                          className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform ${
                            activity.image && !loadedImages.has(activity.image) ? 'opacity-0' : 'opacity-100'
                          }`}
                          style={{ objectPosition: 'center 40%' }}
                          onLoad={() => activity.image && handleImageLoad(activity.image)}
                        />
                      </div>
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
        {/* <div className="text-center">
          <Button 
            variant="hero-outline" 
            size="lg"
            onClick={() => navigate('/extracurricular')}
          >
            View All Activities
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div> */}

        {/* Activity Image Modal */}
        <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-primary/20">
            <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-6 w-6 text-white hover:text-primary" />
              <span className="sr-only">Close</span>
            </DialogClose>
            {selectedActivity && (
              <div className="relative">
                <img
                  src={selectedActivity.images ? selectedActivity.images[selectedImageIndex] : selectedActivity.image}
                  alt={selectedActivity.organization}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {selectedActivity.type === "Leadership Position" ? (
                      <Award className="h-5 w-5 text-primary" />
                    ) : (
                      <Users className="h-5 w-5 text-primary" />
                    )}
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {selectedActivity.type}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {selectedActivity.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-1">{selectedActivity.organization}</p>
                  <p className="text-gray-400 text-xs">{selectedActivity.period}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
