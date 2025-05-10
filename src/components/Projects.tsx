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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {!project.comingSoon && (
                  <div className="flex gap-4">
                    <a href="#" className="flex items-center gap-2 text-teal-600 hover:text-teal-700">
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-teal-600 hover:text-teal-700">
                      <Eye size={20} />
                      <span>Demo</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-teal-600 hover:text-teal-700">
                      <ExternalLink size={20} />
                      <span>Live</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;