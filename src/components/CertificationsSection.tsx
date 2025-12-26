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
  credentialId?: string;
}

const CertificationsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: "WSO2 Certified Identity Server Practitioner - V7.0",
      organization: "WSO2",
      date: "Issued Jan 2025",
      image: "/Portfolio/Certifications/WSO2 Certified Identity Server Practitioner - V7.0.png",
      link: "https://certification.wso2.com/certificate/CID-04873024/a09VM000007wH1FYAU",
    },
    {
      title: "Getting Started with Deep Learning",
      organization: "NVIDIA Deep Learning Institute",
      date: "Issued Dec 2025",
      image: "/Portfolio/Certifications/NVIDIA_DL.png",
      link: "https://learn.nvidia.com/certificates?id=TRPfacAQSVSKlGxeLLZ7kA",
    },
    {
      title: "Machine Learning Specialization",
      organization: "DeepLearning.AI & Stanford via Coursera",
      date: "Issued Nov 2023",
      image: "/Portfolio/Certifications/Machine learning specialization.png",
      link: "https://coursera.org/share/00c21a1aef4a7f4a1a2ec6ab34fadef6",
    },
    {
      title: "OpenCV Bootcamp",
      organization: "OpenCV University",
      date: "Issued Jun 2024",
      image: "/Portfolio/Certifications/OpenCV Bootcamp.png",
      link: "https://courses.opencv.org/certificates/d5dbf0436a2c4b3e99197f1dd0cb785c",
    },
    {
      title: "TensorFlow Keras Bootcamp",
      organization: "OpenCV University",
      date: "Issued Nov 2024",
      image: "/Portfolio/Certifications/TensorFlow Keras Bootcamp.png",
      link: "https://courses.opencv.org/certificates/b4bdd1ddae624aacbfffb9070119bd60",
    },
    {
      title: "Docker Training Course for the Absolute Beginner",
      organization: "KodeKloud",
      date: "Issued Feb 2025",
      image: "/Portfolio/Certifications/Docker Training Course for the Absolute Beginner.png",
      link: "https://learn.kodekloud.com/user/certificate/69357eda-da45-4dc4-a1f4-4be960af4366",
    },
    {
      title: "Introduction to Graph Theory",
      organization: "Coursera - University of California San Diego",
      date: "Issued Jun 2024",
      image: "/Portfolio/Certifications/Introduction to Graph Theory.png",
      link: "https://coursera.org/verify/VJTQCC6SU2PX",
    },
    {
      title: "Foundations of Project Management",
      organization: "Univerisity of Moratuwa - OpenU",
      date: "Issued Dec 2023",
      image: "/Portfolio/Certifications/Foundations of Project Management.png",
      link: "https://open.uom.lk/verify",
      credentialId: "wO79paJGFa",
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
