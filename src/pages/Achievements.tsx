import { ArrowLeft, Trophy, Award, Medal, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import deviBalika from "@/images/devi-balika-3As.jpeg";

const achievements = [
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

const Achievements = () => {
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
      {/* <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Awards & <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognition for academic excellence, leadership, and contributions to the community
            </p>
          </div>
        </div>
      </section> */}

      {/* Achievements Grid */}
      {/* <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
              > */}
                {/* Image Section */}
                {/* {achievement.image && (
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                 */}
                {/* Content Section */}
                {/* <div className="p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {achievement.type === "Academic Excellence" ? (
                        <Trophy className="h-4 w-4 text-primary" />
                      ) : achievement.type === "Leadership Recognition" ? (
                        <Award className="h-4 w-4 text-primary" />
                      ) : (
                        <Medal className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-mono text-primary block mb-1">
                        {achievement.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2 font-semibold">
                    {achievement.organization}
                  </p>
                  
                  {achievement.location && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>{achievement.location}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    <span>{achievement.year}</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary font-mono text-sm block mb-2">// CONTINUOUS LEARNING</span>
              Certifications & Courses
            </h2>
            <p className="text-muted-foreground mb-8">
              Actively pursuing knowledge through various online courses and certifications in AI, Machine Learning, and Software Development.
            </p>
            </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WSO2 Certified Identity Server Practitioner */}
            <a
              href="https://certification.wso2.com/web/certificate/CISPV70-1724839073973"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src="./Certifications/WSO2 Certified Identity Server Practitioner - V7.0.png"
                  alt="WSO2 Certified Identity Server Practitioner"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  WSO2 Certified Identity Server Practitioner - V7.0
                </h3>
                <p className="text-xs text-muted-foreground mb-1">WSO2</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Issued Aug 2024</span>
                </div>
              </div>
            </a>

            {/* NVIDIA Deep Learning */}
            <a
              href="https://courses.nvidia.com/certificates/63806f57f8b24b7ea24e72fa89fe1024/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src="./Certifications/NVIDIA_DL.png"
                  alt="NVIDIA Deep Learning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  Getting Started with Deep Learning
                </h3>
                <p className="text-xs text-muted-foreground mb-1">NVIDIA Deep Learning Institute</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Issued Mar 2024</span>
                </div>
              </div>
            </a>

            {/* Machine Learning Specialization */}
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src="./Certifications/Machine learning specialization.png"
                  alt="Machine Learning Specialization"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  Machine Learning Specialization
                </h3>
                <p className="text-xs text-muted-foreground mb-1">DeepLearning.AI & Stanford via Coursera</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Issued 2024</span>
                </div>
              </div>
            </a>

            {/* OpenCV Bootcamp */}
            <a
              href="https://courses.opencv.org/certificates/0c07d9a1e1234e74a43e3cd21dd9c8ca"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src="./Certifications/OpenCV Bootcamp.png"
                  alt="OpenCV Bootcamp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  OpenCV Bootcamp
                </h3>
                <p className="text-xs text-muted-foreground mb-1">OpenCV University</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Issued Apr 2024</span>
                </div>
              </div>
            </a>

            {/* TensorFlow Keras Bootcamp */}
            <a
              href="https://courses.opencv.org/certificates/5df7ff81c3a145c7bcce1f9b6afc5b67"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src="./Certifications/TensorFlow Keras Bootcamp.png"
                  alt="TensorFlow Keras Bootcamp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  TensorFlow Keras Bootcamp
                </h3>
                <p className="text-xs text-muted-foreground mb-1">OpenCV University</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Issued Apr 2024</span>
                </div>
              </div>
            </a>

            {/* Docker Training Course */}
            <a
              href="https://www.udemy.com/certificate/UC-8c24d97c-be7c-4bec-a12d-a8e2e5017f1c/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src="./Certifications/Docker Training Course for the Absolute Beginner.png"
                  alt="Docker Training Course"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  Docker Training Course for the Absolute Beginner
                </h3>
                <p className="text-xs text-muted-foreground mb-1">Udemy</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Issued Jan 2024</span>
                </div>
              </div>
            </a>

            {/* Introduction to Graph Theory */}
            <a
              href="https://www.udemy.com/certificate/UC-28df0d2b-2cac-419c-aa43-e65ce5cd3c05/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src="./Certifications/Introduction to Graph Theory.png"
                  alt="Introduction to Graph Theory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  Introduction to Graph Theory
                </h3>
                <p className="text-xs text-muted-foreground mb-1">Udemy</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Issued Jan 2024</span>
                </div>
              </div>
            </a>

            {/* Foundations of Project Management */}
            <a
              href="https://www.coursera.org/account/accomplishments/verify/BKZXMLBWSDPJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src="./Certifications/Foundations of Project Management.png"
                  alt="Foundations of Project Management"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  Foundations of Project Management
                </h3>
                <p className="text-xs text-muted-foreground mb-1">Google via Coursera</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Issued Sep 2023</span>
                </div>
              </div>
            </a>
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

export default Achievements;

