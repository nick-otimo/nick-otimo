import React, { useState, useEffect } from 'react';
import { Github, Eye, ExternalLink } from 'lucide-react';

const projects = [
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
    image: "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML/CSS", "JavaScript", "Bootstrap"],
    comingSoon: true
  },
  {
    id: 3,
    title: "Agricultural Data Dashboard",
    description: "Coming soon: An interactive dashboard for agricultural data visualization and trend analysis.",
    image: "https://images.pexels.com/photos/7947401/pexels-photo-7947401.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Dash", "Pandas"],
    comingSoon: true
  },
  {
    id: 4,
    title: "Smart Irrigation System",
    description: "Coming soon: A prototype IoT-based irrigation system that optimizes water usage for sustainable farming.",
    image: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["IoT", "Arduino", "Sensors"],
    comingSoon: true
  }
];
export default Projects;

