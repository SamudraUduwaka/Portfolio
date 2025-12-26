import { Award, Trophy, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import comfixFinalistsImg from "@/images/comfix_finalists.jpg";
import comfixCertificateImg from "@/images/comfix_finalist_certificate.jpeg";
import codesprintTop10Img from "@/images/codesprint_top10_certificate.jpg";
import codesprintTop50Img from "@/images/codesprint_top50.jpg";
import sliotNexifyImg from "@/images/Team_Nexify_SLIOT.jpg";
import pullSharkImg from "@/images/pull-shark-default-498c279a747d.png";

interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  type: string;
  image?: string;
  images?: string[];
}

const featuredAchievements: Achievement[] = [
  {
    title: "ComFiX - Team AdHoc Finalists",
    organization: "IIT Sri Lanka & IEEE Student Branch",
    year: "2024",
    description: "Secured finalist position in ComFiX Challenge with Team AdHoc.",
    type: "Competition",
    images: [comfixFinalistsImg, comfixCertificateImg],
  },
  {
    title: "CodeSprint Top 10",
    organization: "IEEE Computer Society and IEEE Student Branch IIT",
    year: "2024",
    description: "Achieved Top 10 position in CodeSprint competition.",
    type: "Competition",
    images: [codesprintTop10Img, codesprintTop50Img],
  },
  {
    title: "SLIoT Challenge - Team Nexify Semi-Finalists",
    organization: "Sri Lanka IoT Challenge",
    year: "2024",
    description: "Reached semi-finals with Team Nexify in the national IoT innovation challenge, presenting IoT-based solution for real-world problems.",
    type: "Competition",
    image: sliotNexifyImg,
  },
  {
    title: "GitHub Pull Shark x2",
    organization: "GitHub",
    year: "2025",
    description: "Earned for opening merged pull requests across open-source projects, contributing to the global developer community.",
    type: "Open Source",
    image: pullSharkImg,
  },
];

const AchievementsSection = () => {
  const navigate = useNavigate();
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set([...prev, src]));
  };

  return (
    <section id="achievements" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
            {"// RECOGNITION"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Awards & <span className="text-gradient">Achievements</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognition for competitive programming, hackathons, and open-source contributions
          </p>
        </div>

        {/* Featured Achievements */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                {/* Image Section */}
                {(achievement.image || achievement.images) && (
                  <div className="w-full aspect-video bg-muted overflow-hidden cursor-pointer relative">
                    {achievement.images ? (
                      <div className="grid grid-cols-2 gap-0.5 h-full">
                        {achievement.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="overflow-hidden relative"
                            onClick={() => {
                              setSelectedAchievement(achievement);
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
                              alt={`${achievement.title} ${idx + 1}`}
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
                        setSelectedAchievement(achievement);
                        setSelectedImageIndex(0);
                      }}>
                        {achievement.image && !loadedImages.has(achievement.image) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-muted">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                          </div>
                        )}
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className={`w-full h-full object-cover group-hover:scale-105 transition-transform ${
                            achievement.image && !loadedImages.has(achievement.image) ? 'opacity-0' : 'opacity-100'
                          }`}
                          onLoad={() => achievement.image && handleImageLoad(achievement.image)}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Content Section */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-primary/10 rounded">
                      <Trophy className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">{achievement.type}</span>
                  </div>
                  
                  <h4 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {achievement.organization}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="font-mono">{achievement.year}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Image Modal */}
        <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-primary/20">
            <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-6 w-6 text-white hover:text-primary" />
              <span className="sr-only">Close</span>
            </DialogClose>
            {selectedAchievement && (
              <div className="relative">
                <img
                  src={selectedAchievement.images ? selectedAchievement.images[selectedImageIndex] : selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {selectedAchievement.type}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {selectedAchievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-1">{selectedAchievement.organization}</p>
                  <p className="text-gray-400 text-xs">{selectedAchievement.year}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        {/* <div className="text-center">
          <Button 
            variant="hero-outline" 
            size="lg"
            onClick={() => navigate('/achievements')}
          >
            View All Achievements
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default AchievementsSection;
