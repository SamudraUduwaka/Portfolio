import { Calendar, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

interface Certificate {
  title: string;
  organization: string;
  date: string;
  image: string;
  link: string;
}

const CertificationsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: "WSO2 Certified Identity Server Practitioner - V7.0",
      organization: "WSO2",
      date: "Issued Aug 2024",
      image: "/Portfolio/Certifications/WSO2 Certified Identity Server Practitioner - V7.0.png",
      link: "https://certification.wso2.com/web/certificate/CISPV70-1724839073973",
    },
    {
      title: "Getting Started with Deep Learning",
      organization: "NVIDIA Deep Learning Institute",
      date: "Issued Mar 2024",
      image: "/Portfolio/Certifications/NVIDIA_DL.png",
      link: "https://courses.nvidia.com/certificates/63806f57f8b24b7ea24e72fa89fe1024/",
    },
    {
      title: "Machine Learning Specialization",
      organization: "DeepLearning.AI & Stanford via Coursera",
      date: "Issued 2024",
      image: "/Portfolio/Certifications/Machine learning specialization.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XXXXXXXXX",
    },
    {
      title: "OpenCV Bootcamp",
      organization: "OpenCV University",
      date: "Issued Apr 2024",
      image: "/Portfolio/Certifications/OpenCV Bootcamp.png",
      link: "https://courses.opencv.org/certificates/0c07d9a1e1234e74a43e3cd21dd9c8ca",
    },
    {
      title: "TensorFlow Keras Bootcamp",
      organization: "OpenCV University",
      date: "Issued Apr 2024",
      image: "/Portfolio/Certifications/TensorFlow Keras Bootcamp.png",
      link: "https://courses.opencv.org/certificates/5df7ff81c3a145c7bcce1f9b6afc5b67",
    },
    {
      title: "Docker Training Course for the Absolute Beginner",
      organization: "Udemy",
      date: "Issued Jan 2024",
      image: "/Portfolio/Certifications/Docker Training Course for the Absolute Beginner.png",
      link: "https://www.udemy.com/certificate/UC-8c24d97c-be7c-4bec-a12d-a8e2e5017f1c/",
    },
    {
      title: "Introduction to Graph Theory",
      organization: "Udemy",
      date: "Issued Jan 2024",
      image: "/Portfolio/Certifications/Introduction to Graph Theory.png",
      link: "https://www.udemy.com/certificate/UC-28df0d2b-2cac-419c-aa43-e65ce5cd3c05/",
    },
    {
      title: "Foundations of Project Management",
      organization: "Google via Coursera",
      date: "Issued Sep 2023",
      image: "/Portfolio/Certifications/Foundations of Project Management.png",
      link: "https://www.coursera.org/account/accomplishments/verify/BKZXMLBWSDPJ",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
            {"// CONTINUOUS LEARNING"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Certifications & <span className="text-gradient">Courses</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Actively pursuing knowledge through various online courses and certifications in AI, Machine Learning, and Software Development.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div 
                className="aspect-video bg-muted overflow-hidden cursor-pointer"
                onClick={() => setSelectedCertificate(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-1">{cert.organization}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3" />
                  <span>{cert.date}</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-primary/20">
            <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-6 w-6 text-white hover:text-primary" />
              <span className="sr-only">Close</span>
            </DialogClose>
            {selectedCertificate && (
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{selectedCertificate.organization}</p>
                  <a
                    href={selectedCertificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Verify Certificate →
                  </a>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CertificationsSection;
