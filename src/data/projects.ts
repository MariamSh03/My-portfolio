
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
    title: "Full Stack Game Store website",
    description: "A full‑stack Game Admin Panel featuring an ASP.NET Core (Web API/MVC) backend with EF Core and SQL Server, an Angular frontend, role/permission-based authorization, AutoMapper and Swagger integration, and comprehensive xUnit test coverage. ",
    tags: [".Net", "Angular", "c#", "SQL", "EF Core", "xUnit" , "CRUD",],
    imageUrl: "public/Main Page@2x.png",
    githubUrl: "https://github.com/MariamSh03/FullStackGameStore.git",
    featured: true,
  },
   {
    id: 5,
    title: "Voicemarket",
    description: "website for voice actors and buissness to connect. VoiceMarket.ge is a straightforward platform showcasing professional voice actors in Georgia. The site helps clients discover and connect with voice talent for various projects including commercials, audiobooks, animations, documentaries, and more.",
    tags: ["web", "tailwing", "frontend", "react", "typescript"],
    imageUrl: "public/voicemarket.png",
    githubUrl: "https://github.com/VoiceMarketGeorgia/VoiceMarket.git",
    demoUrl: "https://voice-market.vercel.app/",
  },
  {
    id: 2,
    title: "Gradiator",
    description: "This hackathon project is an AI-powered homework grading application built in collaboration with a team. It features a Tailwind + TypeScript UI, a FastAPI backend, and integrates the Gemini API for assessing handwritten assignments, with RAG-enhanced grading.",
    tags: ["AI", "RAG", "TypeScript", "Mathematics", "Hackathon"],
    imageUrl: "/gradiator-logo.png",
    githubUrl: "https://github.com/MariMamgo/Gradiator",
  },
  {
    id: 3,
    title: "Biological ODE Model",
    description: "A three-dimensional ODE system models the dynamic interplay of tumor growth, dystrophin expression, and a staging factor.",
    tags: ["Machine Learning", "Python", "Education", "AI"],
    imageUrl: "public/tumor.jpg",
    githubUrl: "https://github.com/MariamSh03/bilogicalModel.git",
    featured: true,
  },
  {
    id: 4,
    title: "PINN - Physics Informed Neural Networks",
    description: "Physics informed neural network for solving sysytem of ODEs",
    tags: ["Neural Networks", "Python", "Machine Learning", "Education", "AI"],
    imageUrl: "public/pinn.jpg",
    githubUrl: "https://github.com/MariamSh03/PINN.git",
  },
  {
    id: 12,
    title: "TODO List",
    description: "todo list app with .net core backend and angular frontend, CRUD operations, authentication and authorization with JWT tokens",
    tags: [".Net", "Angular", "SQL", "CRUD", "JWT"],
    imageUrl: "public/architecture.png",
    githubUrl: "https://github.com/MariamSh03/ToDoList.git",
  },
];

export default projects;
