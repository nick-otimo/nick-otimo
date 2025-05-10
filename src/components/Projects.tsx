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
    image: "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/496077000_659669833720139_1784315667198857297_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VbmCnlEaDkMQ7kNvwFGGc36&_nc_oc=Adn_llhwivlsNXvF5JOGgCg32bR4AV01BaKPFSRlBsiLZKNKB3RsI4yGsTyVl8MOC4U&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=RZYeGjseSmefdTyXs8aG1g&oh=00_AfKykJXYGBE55qhPU9T5qExuc5GJbtFBAF-M5kQUDzy9Zw&oe=6824E138",
    technologies: ["HTML/CSS", "JavaScript", "Bootstrap"],
    comingSoon: true
  },
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
