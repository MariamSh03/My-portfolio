
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mathematical Visualization Tool",
    description: "An interactive web application for visualizing complex mathematical concepts and formulas in real-time, built with React and D3.js",
    tags: ["Mathematics", "React", "D3.js", "Visualization"],
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/math-visualization",
    demoUrl: "https://math-viz.example.com",
    featured: true,
  },
  {
    id: 2,
    title: ".NET Core Microservices Framework",
    description: "A scalable microservices architecture template using .NET Core, implementing clean architecture, CQRS, and event sourcing patterns",
    tags: [".NET Core", "Microservices", "Docker", "CQRS"],
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/dotnet-microservices",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered Study Assistant",
    description: "A machine learning application that helps students optimize their study schedule based on learning patterns and memory retention curves",
    tags: ["Machine Learning", "Python", "Education", "AI"],
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/study-ai-assistant",
    demoUrl: "https://study-ai.example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Computational Geometry Library",
    description: "A C# library implementing various computational geometry algorithms for spatial analysis and manipulation",
    tags: ["C#", "Geometry", "Mathematics", "Algorithms"],
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/comp-geometry",
  },
  {
    id: 5,
    title: "Neural Network Playground",
    description: "An interactive web application for building and training simple neural networks in the browser",
    tags: ["Neural Networks", "JavaScript", "Machine Learning", "Education"],
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/neural-playground",
    demoUrl: "https://neural.example.com",
  },
  {
    id: 6,
    title: "Graph Theory Explorer",
    description: "A tool for exploring graph theory concepts through visualization and interactive examples",
    tags: ["Graph Theory", "TypeScript", "Mathematics", "Visualization"],
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/graph-explorer",
  }
];

export default projects;
