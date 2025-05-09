import React, { useState, useEffect } from 'react';
import { Github, Eye, ExternalLink } from 'lucide-react';
const Projects = (
  {
    id: 1,
    title: "Project Hostara",
    description: "Coming soon: A desktop application focusing on user interface design and seamless functionality implementation.",
    image: "https://github.com/NICKOTIMO/nick-otimo/blob/main/photo.jpg",
    technologies: ["React", "Electron", "Node.js"],
    comingSoon: true
  },
  {
    id: 2,
    title: "AgroXTREME Website Development",
    description: "Coming soon: The official AgroXTREME Limited website to showcase agricultural innovations and services.",
    image: "https://github.com/NICKOTIMO/nick-otimo/blob/main/gr%20xtreme%20(1).png",
    technologies: ["HTML/CSS", "JavaScript", "Bootstrap"],
    comingSoon: true
  },
  ) => {
  return (
    <section id="projects" className="snap-start">
      <div className="pt-10">Projects</div>
    </section>
  );
};

export default Projects;
