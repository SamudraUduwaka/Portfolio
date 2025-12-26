import { Calendar } from "lucide-react";

const CertificationsSection = () => {
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
          {/* WSO2 Certified Identity Server Practitioner */}
          <a
            href="https://certification.wso2.com/web/certificate/CISPV70-1724839073973"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
          >
            <div className="aspect-video bg-muted overflow-hidden">
              <img
                src="/Portfolio/Certifications/WSO2 Certified Identity Server Practitioner - V7.0.png"
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
                src="/Portfolio/Certifications/NVIDIA_DL.png"
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
                src="/Portfolio/Certifications/Machine learning specialization.png"
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
                src="/Portfolio/Certifications/OpenCV Bootcamp.png"
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
                src="/Portfolio/Certifications/TensorFlow Keras Bootcamp.png"
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
                src="/Portfolio/Certifications/Docker Training Course for the Absolute Beginner.png"
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
                src="/Portfolio/Certifications/Introduction to Graph Theory.png"
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
                src="/Portfolio/Certifications/Foundations of Project Management.png"
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
  );
};

export default CertificationsSection;
