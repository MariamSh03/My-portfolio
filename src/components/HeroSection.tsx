
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="math-gradient">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
              Mathematics Student & .NET Developer
            </h2>
            <p className="text-lg mb-8 max-w-md">
              Exploring the intersection of mathematics, software engineering, and artificial intelligence. 
              Creating elegant solutions to complex problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="default" size="lg">
                View Projects
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/yourusername" aria-label="GitHub" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email" className="hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative floating-animation">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-75"></div>
              <div className="relative bg-card rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80 border-2 border-primary/50">
                {/* Replace with your actual photo */}
                <img
                  src="/placeholder.svg" 
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" aria-label="Scroll to Projects">
            <ArrowDown size={32} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
