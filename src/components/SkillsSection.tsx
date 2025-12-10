const skills = {
  "Languages": ["Java", "Python", "TypeScript", "C++", "PHP"],
  "Frameworks": ["React", "Node.js", "Flutter", "FastAPI", "Spring"],
  "ML/AI": ["TensorFlow", "OpenCV", "Pattern Recognition", "Neural Networks", "Computer Vision"],
  "Tools": ["Git", "Docker", "Android Studio", "VS Code", "Jupyter"],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest mb-2">
            {"// SKILLS"}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Tech <span className="text-gradient">Stack</span>
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div 
              key={category}
              className="bg-card border border-border rounded-lg p-6 card-hover"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h4 className="font-mono text-primary mb-4 text-lg">{`<${category}/>`}</h4>
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li 
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="w-2 h-2 bg-primary/50 rounded-full group-hover:bg-primary group-hover:shadow-[0_0_10px_hsl(var(--primary))] transition-all" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Progress indicators */}
        {/* <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid gap-6">
            {[
              { name: "Software Development", level: 90 },
              { name: "Machine Learning & AI", level: 85 },
              { name: "Computer Vision", level: 80 },
              { name: "Embedded Systems", level: 75 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
