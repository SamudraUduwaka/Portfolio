import { ArrowLeft, Github, ExternalLink, Folder, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import batteryChargerImg from "@/images/Lead-acid-battery-charger.jpeg";
import batteryChargerGroupImg from "@/images/Lead-acid-battery-charger-group.jpeg";

const allProjects = [
  {
    title: "Meshtastic Network for Disaster Management - FYP",
    description: "Final Year Project (Ongoing) focusing on evaluation and adaptation of Meshtastic Network for disaster management. Individual contribution includes implementing voice communication over Meshtastic using Android and iOS apps, developing analytics dashboard for network monitoring, conducting related research, and verifying with simulations.",
    tech: ["Kotlin", "React.js", "Node Package Manager", "Python", "Swift", "Meshtastic Framework"],
    github: "https://github.com/Meshtastic-DM",
    category: "Research & Development",
    year: "2024 - Present",
    featured: true,
  },
  {
    title: "Custom Page Editor for Asgardeo and IS - Internship",
    description: "Main internship project developing a custom page editor for the product Console for page customizations in end user facing portals. Implemented front-end design, back-end Content Management, Runtime, and Portal Customization API using OpenAPI spec designed for REST API.",
    tech: ["React.js", "MUI", "Oxygen UI", "CodeMirror", "Java", "Maven", "Swagger"],
    github: "https://github.com/SamudraUduwaka/Page-Editor-Backend-Jinjava",
    links: {
      docs: "https://is.docs.wso2.com/"
    },
    category: "Internship Project",
    year: "2024",
    featured: true,
  },
  {
    title: "Ballerina Connector - Internship On-boarding",
    description: "Developed a Ballerina Connector for Hubspot Marketing Campaigns API Spec as part of internship on-boarding project. Worked with Ballerina language and multiple frameworks.",
    tech: ["Ballerina", "VScode", "Gradle", "Rancher for Docker", "Github"],
    github: "https://github.com/SamudraUduwaka/module-ballerinax-hubspot.marketing.campaigns",
    category: "Internship Project",
    year: "2024",
    featured: true,
  },
  {
    title: "Transformer Maintenance Record Keeper",
    description: "Full-stack system to record transformer inspections, detect anomalies, and generate maintenance reports. Built with modern TypeScript stack for CEB utility management. Features real-time monitoring, automated alerts, and comprehensive reporting capabilities.",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Express"],
    github: "https://github.com/SamudraUduwaka/Transformer-maintenance-record-keeper-team-backslash",
    category: "Full-Stack Development",
    year: "2024",
    featured: true,
  },
  {
    title: "Flower Exchange - LSEG",
    description: "A basic trading system for flowers, allowing traders to submit buy/sell orders. The Exchange Application processes these orders against an order book and generates execution reports, handling full, partial fills, and unfilled orders. Implements efficient order matching algorithms with FIFO priority.",
    tech: ["C++", "Data Structures", "Algorithms", "Order Matching"],
    github: "https://github.com/SamudraUduwaka/Flower-Exchange-LSEG",
    category: "Algorithms & Systems",
    year: "2024",
    featured: true,
  },
  {
    title: "Lead Acid Battery Charger",
    description: "Semester course project involving the design and development of a lead acid battery charger system. Implemented circuit design, testing, and optimization for efficient charging. Includes safety features and voltage regulation mechanisms.",
    tech: ["Circuit Design", "Electronics", "Embedded Systems", "Testing"],
    github: null,
    category: "Hardware Project",
    year: "2023",
    images: [batteryChargerImg, batteryChargerGroupImg],
    featured: true,
  },
  {
    title: "3D Scanner",
    description: "3D Scanner machine developed as a Level 2 University project. Complete hardware-software integration for 3D object scanning and reconstruction. Uses stepper motors, sensors, and processing algorithms to create 3D models of physical objects.",
    tech: ["C++", "Embedded Systems", "3D Reconstruction", "Arduino"],
    github: "https://github.com/SamudraUduwaka/3D-Scanner",
    category: "Embedded Systems",
    year: "2024",
    featured: true,
  },
  {
    title: "Automatic MCQ Grader",
    description: "Automated MCQ grading process using image processing techniques. Detects and analyzes answer sheets, performs optical mark recognition, and generates grading reports automatically. Reduces manual grading effort and improves accuracy.",
    tech: ["Python", "Image Processing", "OpenCV", "Pattern Recognition"],
    github: "https://github.com/SamudraUduwaka/Automatic-MCQ-Grader",
    category: "Computer Vision",
    year: "2024",
    featured: true,
  },
  {
    title: "eShop - E-commerce Web Application",
    description: "A fully functional e-commerce web application with complete shopping cart functionality, user authentication, product management, and order processing. Includes database management for products, users, and transactions.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Web Development"],
    github: "https://github.com/SamudraUduwaka/eShop-Ecommerce-Web-Application",
    category: "Web Development",
    year: "2024",
    featured: false,
  },
  {
    title: "Success International - School Management",
    description: "A fully functional PHP-based web application for school management platform named 'Success International'. Features student management, grade tracking, attendance monitoring, and administrative tools.",
    tech: ["PHP", "MySQL", "JavaScript", "Web Development"],
    github: "https://github.com/SamudraUduwaka/SuccessInternational-Web-App",
    category: "Web Development",
    year: "2024",
    featured: false,
  },
  {
    title: "NewTech - Online Tech Store",
    description: "A fully functional PHP-based web application for an online tech store named 'NewTech'. Includes product catalog, shopping cart, user authentication, and order management system.",
    tech: ["PHP", "MySQL", "JavaScript", "E-commerce"],
    github: "https://github.com/SamudraUduwaka/NewTech-php-Web-Application",
    category: "Web Development",
    year: "2024",
    featured: false,
  },
  {
    title: "Todo App - Flutter",
    description: "A guided Flutter project implementing a Todo App with task management features. Includes task creation, editing, deletion, and status tracking with a clean mobile UI.",
    tech: ["Flutter", "Dart", "Mobile Development"],
    github: "https://github.com/SamudraUduwaka/Todo-App",
    category: "Mobile Development",
    year: "2024",
    featured: false,
  },
  {
    title: "Basic Layout Composer with Drag and Drop",
    description: "Basic Layout Composer with Drag and Drop feature in Canvas using React.js and CraftJS. Provides intuitive interface for building layouts with visual components.",
    tech: ["React.js", "CraftJS", "VScode", "React+Vite"],
    github: "https://github.com/SamudraUduwaka/layout-builder-demo-CraftJS",
    category: "Web Development",
    year: "2024",
    featured: false,
  },
  {
    title: "Mini Trading System - LSEG Flower Exchange",
    description: "Mini Trading System implementing LSEG Flower Exchange Application with C++ for data handling and order matching algorithms.",
    tech: ["C++", "Data Handling", "VScode"],
    github: "https://github.com/SamudraUduwaka/Flower-Exchange-LSEG",
    category: "Algorithms & Systems",
    year: "2024",
    featured: false,
  },
  {
    title: "Rajasi - Restaurant Web Application",
    description: "A fully functional PHP-based restaurant web application with menu management, order processing, and customer interface. Features semantic UI for enhanced user experience.",
    tech: ["PHP", "HTML", "JS", "CSS", "MySQL", "VScode", "XAMPP", "workbench", "Bootstrap", "Semantic UI"],
    github: "https://github.com/SamudraUduwaka/Rajasi-Cousines",
    category: "Web Development",
    year: "2024",
    featured: false,
  },
  {
    title: "Adaptive Traffic Control System",
    description: "Intelligent traffic control system using C++ and Python with Kaggle integration and ESP32 CAM module for real-time traffic monitoring and adaptive signal control.",
    tech: ["C++", "Python", "Kaggle", "ESP32 CAM module"],
    github: null,
    category: "IoT & Smart Systems",
    year: "2023",
    featured: false,
  },
];

const practiceLabs = [
  {
    title: "Neural Networks Assignment",
    description: "Implementation and experimentation with various neural network architectures. Covers feedforward networks, backpropagation, activation functions, and optimization techniques for different learning tasks.",
    tech: ["Python", "Jupyter Notebook", "Neural Networks", "Deep Learning"],
    github: "https://github.com/SamudraUduwaka/Neural-Networks-Assignment",
    year: "2024",
  },
  {
    title: "Machine Learning Course Labs",
    description: "Comprehensive collection of lab tasks from machine learning course. Includes practical implementations of supervised learning, unsupervised learning, regression, classification, and model evaluation techniques.",
    tech: ["Python", "Jupyter Notebook", "scikit-learn", "Machine Learning"],
    github: "https://github.com/SamudraUduwaka/Machine-Learning-Course-Labs",
    year: "2024",
  },
  {
    title: "OpenCV Computer Vision Labs",
    description: "Included all the labs completed during enrollment in OpenCV bootcamp. Covers image processing, feature detection, object tracking, and machine vision applications with practical implementations.",
    tech: ["Python", "OpenCV", "Image Processing", "Machine Vision"],
    github: "https://github.com/SamudraUduwaka/Opencv-Labs",
    year: "2024",
  },
  {
    title: "Pattern Recognition Notebooks",
    description: "EN3150 Pattern Recognition course materials covering classification, clustering, and machine learning algorithms. Includes implementations of various pattern recognition techniques and statistical methods.",
    tech: ["Python", "Jupyter Notebook", "Pattern Recognition", "Classification"],
    github: "https://github.com/SamudraUduwaka/Pattern-Recognition-Notebooks",
    year: "2024",
  },
  {
    title: "Intensity Transformations and Neighborhood Filtering",
    description: "EN3160 Assignment on Intensity Transformations and Neighborhood Filtering. Implements various image enhancement techniques including histogram equalization, spatial filtering, and edge detection methods.",
    tech: ["Python", "Jupyter Notebook", "Image Processing", "OpenCV"],
    github: "https://github.com/SamudraUduwaka/Intensity-Transformations-and-Neighborhood-Filtering",
    year: "2024",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const featuredProjects = allProjects.filter(p => p.featured);
  const otherProjects = allProjects.filter(p => !p.featured);

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
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive collection of my work spanning full-stack development, machine learning,
              embedded systems, and computer vision
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-primary font-mono text-sm block mb-2">// FEATURED</span>
            Major Projects
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden card-hover"
              >
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* Image/Visual Section */}
                  <div className="md:col-span-1">
                    {project.images ? (
                      <div className="grid grid-cols-2 gap-2">
                        {project.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${project.title} ${idx + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg border border-border overflow-hidden group">
                        <div className="absolute inset-0 circuit-grid opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Folder className="h-16 w-16 text-primary/50" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs font-mono text-primary">{project.category}</span>
                        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-primary font-mono text-sm block mb-2">// ADDITIONAL</span>
              Other Notable Projects
            </h2>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 card-hover group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="h-10 w-10 text-primary" />
                    <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <span className="text-xs font-mono text-primary block mb-2">{project.category}</span>
                  <h5 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h5>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="font-mono text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hands-on Practice Labs */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-primary font-mono text-sm block mb-2">// LEARNING & PRACTICE</span>
            Hands-on Practice Labs
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceLabs.map((lab, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 card-hover group"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="h-10 w-10 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground">{lab.year}</span>
                </div>
                
                <h5 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {lab.title}
                </h5>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {lab.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {lab.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {lab.github && (
                  <a 
                    href={lab.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore More on GitHub</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Check out my GitHub profile for more projects, contributions, and code samples
          </p>
          <a href="https://github.com/SamudraUduwaka?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              View All on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
