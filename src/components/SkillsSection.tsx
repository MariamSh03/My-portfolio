
import React from 'react';
import { Code, BrainCircuit, PiSquare, Database, Server, Layout } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-secondary/30 border border-border/50 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skillsData = [
    {
      title: "Mathematics",
      icon: <PiSquare size={24} />,
      skills: ["Linear Algebra", "Calculus", "Graph Theory", "Statistics", "Numerical Analysis"]
    },
    {
      title: ".NET Development",
      icon: <Code size={24} />,
      skills: ["C#", "ASP.NET Core", "Entity Framework", "LINQ", "Xamarin"]
    },
    {
      title: "Artificial Intelligence",
      icon: <BrainCircuit size={24} />,
      skills: ["Machine Learning", "Neural Networks", "Natural Language Processing", "TensorFlow", "PyTorch"]
    },
    {
      title: "Backend Technologies",
      icon: <Server size={24} />,
      skills: ["SQL", "NoSQL", "RESTful APIs", "Microservices", "Docker"]
    },
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Responsive Design"]
    },
    {
      title: "Database Systems",
      icon: <Database size={24} />,
      skills: ["SQL Server", "MongoDB", "PostgreSQL", "Redis", "Database Design"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title">
          My <span className="math-gradient">Skills</span>
        </h2>
        <p className="section-subtitle">
          A diverse skill set spanning mathematics, software engineering, and artificial intelligence
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillSet, index) => (
            <SkillCard 
              key={index} 
              title={skillSet.title} 
              skills={skillSet.skills} 
              icon={skillSet.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
