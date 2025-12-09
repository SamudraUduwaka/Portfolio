import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Visiting Instructor",
    company: "University of Moratuwa",
    department: "Department of Electronic and Telecommunication Engineering",
    period: "Sept 2025 - Dec 2025",
    description: "Conducting Raspberry-pi and Omnet++ simulation workshops for batch 24",
    // skills: ["Raspberry-pi", "Omnet++", "Workshop Instruction"],
    logo: "./logos/uom-logo.jpg",
  },
  {
    title: "Intern Software Engineer (Full-time)",
    company: "WSO2 Sri Lanka",
    // department: "Identity and Access Management - sub-team: Auth and Reg",
    period: "Dec 2024 - May 2025",
    description: "Identity and Access Management - sub-team: Auth and Reg",
    // skills: ["React", "Ballerina", "Java", "MySQL", "h2 db"],
    logo: "./logos/wso2-logo.png",
  },
  {
    title: "Trainee Software Engineer (Part-time)",
    company: "Crytec Labs",
    // department: "Mobile application development, Web application development",
    period: "Jun 2024 - Dec 2024",
    description: "Mobile application development, Web application development",
    // skills: ["Flutter", "React JS"],
    logo: "./logos/crytec-logo.png",
  },
  {
    title: "Co-founder and Developer",
    company: "ApexRow Solutions(Pvt) Ltd",
    // department: "Co-founder and Developer",
    period: "Feb 2022 - March 2024",
    description: "Web application development, Software Application Development",
    // skills: ["HTML", "CSS", "JS", "PHP", "Java", "MySQL"],
    logo: "./logos/apexrow-solutions-logo.png",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
              {"// WORK EXPERIENCE"}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h3>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-background border border-border rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-20 h-20 object-contain"
                        onError={(e) => {
                          // Fallback to company initials if logo fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-2xl font-bold text-primary">${exp.company.charAt(0)}</span>`;
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.department}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Skills */}
                    {/* <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
