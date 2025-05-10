import React, { useState, useEffect } from 'react';
import { Github, Eye, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Project Hostara",
    description: "I was involved in the development of the desktop application for the whole project, focusing on user interface design and functionality implementation.",
    image: "https://github.com/NICKOTIMO/nick-otimo/blob/main/photo.jpg",
    technologies: ["React", "Electron", "Node.js"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "AgroXTREME Website Development",
    description: "Designed and developed the official website for AgroXTREME Limited, showcasing our services, products, and agricultural innovations.",
    image: "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML/CSS", "JavaScript", "Bootstrap"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Agricultural Data Dashboard",
    description: "Created an interactive dashboard for visualizing agricultural data, helping farmers make informed decisions based on historical trends.",
    image: "https://images.pexels.com/photos/7947401/pexels-photo-7947401.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Dash", "Pandas"],
    liveLink: "#",
    githubLink: "#"
  },
];

const Projects = () => {
  return (
    <div>
      {/* Projects component implementation will go here */}
    </div>
  );
};

export default Projects;