
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from "@/components/ui/button";
import projects from '@/data/projects';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const categories = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title">
          My <span className="math-gradient">Projects</span>
        </h2>
        <p className="section-subtitle">
          Explore my work across mathematics, software engineering, and artificial intelligence
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
