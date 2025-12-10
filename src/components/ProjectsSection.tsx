import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Custom Page Editor for Asgardeo and IS",
    description: "Main internship project developing a custom page editor for the Product Console for page customizations in end user facing portals. Implemented front-end design, back-end Content Management, Runtime, and Portal Customization API.",
    tech: ["React TypeScript","Java", "OxygenUI", "CodeMirror", "Maven", "Git"],
    github: "https://is.docs.wso2.com/en/next/guides/branding/customize-layouts-with-editor/",
    featured: true,
  },
  {
    title: "Transformer Maintenance Record Keeper",
    description: "Full-stack system to record transformer inspections, detect anomalies, and generate maintenance reports. Built with modern TypeScript stack for CEB utility management.",
    tech: ["Java", "React TypeScript", "Python", "Node.js", "MySQL", "Image Processing and ML"],
    github: "https://github.com/SamudraUduwaka/Transformer-maintenance-record-keeper-team-backslash",
    featured: true,
  },
  {
    title: "Mini Trading System - LSEG Flower Exchange",
    description: "Mini Trading System implementing LSEG Flower Exchange Application with C++ for data handling and order matching algorithms.",
    tech: ["C++", "Data Handling", "Algorithms"],
    github: "https://github.com/SamudraUduwaka/Flower-Exchange-LSEG",
    featured: false,
  },
  {
    title: "eShop - E-commerce Web Application",
    description: "A fully functional e-commerce web application with complete shopping cart functionality, user authentication, product management, and order processing.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Payhere Sandbox for payment gateway"],
    github: "https://github.com/SamudraUduwaka/eShop-Ecommerce-Web-Application",
    featured: false,
  },
  {
    title: "Success International - School Management",
    description: "A fully functional PHP-based web application for school management platform. Features student management, grade tracking, attendance monitoring, and administrative tools.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Payhere Sandbox for payment gateway"],
    github: "https://github.com/SamudraUduwaka/SuccessInternational-Web-App",
    featured: false,
  },
  {
    title: "Automatic MCQ Grader",
    description: "Automated MCQ grading process using image processing techniques. Detects and analyzes answer sheets, performs optical mark recognition, and generates grading reports automatically.",
    tech: ["Python", "OpenCV", "Image Processing"],
    github: "https://github.com/SamudraUduwaka/Automatic-MCQ-Grader",
    featured: false,
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
            {"// PROJECTS"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h3>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                {/* Project image placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg border border-border overflow-hidden group">
                  <div className="absolute inset-0 circuit-grid opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-primary/50 text-lg">
                      {`<project_${index + 1}/>`}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}>
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h4 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h4>
                <div className="bg-card border border-border rounded-lg p-6 mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h4 className="font-mono text-center text-xl mb-8">Other Noteworthy Projects</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 card-hover group"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <h5 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h5>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="font-mono text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate('/projects')}
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <a href="https://github.com/SamudraUduwaka?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
