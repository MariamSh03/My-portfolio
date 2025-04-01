
import React from 'react';
import { Github, Linkedin, Mail, Code, BrainCircuit, PiSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mariam Shonia</h3>
            <p className="text-muted-foreground mb-4">
              Mathematics Student<br />
              .NET Software Engineer<br />
              AI Enthusiast
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/MariamSh03" aria-label="GitHub" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mariam-shonia-b6934122a/" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mshonia18@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Interests</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <PiSquare size={16} className="text-primary" />
                <span>Mathematics</span>
              </li>
              <li className="flex items-center gap-2">
                <Code size={16} className="text-primary" />
                <span>Software Engineering</span>
              </li>
              <li className="flex items-center gap-2">
                <BrainCircuit size={16} className="text-primary" />
                <span>Artificial Intelligence</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">
              Interested in collaboration? Let's connect!
            </p>
            <a href="mailto:mshonia18@gmail.com" className="text-primary hover:underline">
              mshonia18@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mariam Shonia. All rights reserved.</p>
          <p className="text-sm mt-1">
            Built with React, Tailwind CSS, and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
