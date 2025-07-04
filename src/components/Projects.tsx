import WATERTANK2 from './images/WATERTANK2.png';
import NICK1 from './images/nickenergy.jpg';
import NICK2 from './images/nickenergy1.jpg';
import GRXTREME from './images/gr xtreme (1).png';

image: WATERTANK2,
images: [NICK1, NICK2],
image: GRXTREME,


import React from 'react';
import { Github, Eye, ExternalLink } from 'lucide-react';

import WATERTANK2 from './images/WATERTANK2.png';
import NICK1 from './images/nickenergy.jpg';
import NICK2 from './images/nickenergy1.jpg';
import GRXTREME from './images/gr xtreme (1).png';

const projects = {
  engineering: [
    {
      id: 1,
      title: "Extrimity Water Tank",
      description: "Innovative water tank design optimized for efficient water storage and distribution.",
      image: WATERTANK2,
      technologies: ["Autodesk Inventor", "3D Modeling", "Engineering Analysis"],
      comingSoon: false,
      github: "https://github.com",
      demo: "#",
      live: "#"
    }
  ],
  iot: [
    {
      id: 2,
      title: "Smart Irrigation System",
      description: "Coming soon: Automated irrigation system with soil moisture monitoring and remote control.",
      image: "https://images.pexels.com/photos/3912928/pexels-photo-3912928.jpeg",
      technologies: ["Arduino", "IoT", "Sensors"],
      comingSoon: true
    }
  ],
  dataScience: [
    {
      id: 3,
      title: "Crop Yield Prediction",
      description: "Coming soon: Machine learning model for predicting crop yields based on environmental data.",
      image: "https://images.pexels.com/photos/7675860/pexels-photo-7675860.jpeg",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      comingSoon: true
    }
  ],
  solarEnergy: [
    {
      id: 4,
      title: "Photovoltaic Installation",
      description: "Successfully learnt how to install solar panel battery, Inverter, achieving both DC and AC outputs",
      images: [NICK1, NICK2],
      technologies: ["React", "Solar Engineering", "Calculations"],
      comingSoon: false
    }
  ],
  arcGIS: [
    {
      id: 5,
      title: "Farm Mapping System",
      description: "Coming soon: GIS-based farm mapping and analysis tool.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      technologies: ["ArcGIS", "Mapping", "Spatial Analysis"],
      comingSoon: true
    }
  ],
  other: [
    {
      id: 7,
      title: "AgroXTREME Website",
      description: "The official Agricultural technology company website to showcase agricultural innovations and services.",
      image: GRXTREME,
      technologies: ["HTML/CSS", "JavaScript", "Bootstrap"],
      comingSoon: true
    }
  ]
};

const ProjectSection = ({ title, projects }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-b-2 border-teal-600 dark:border-teal-400 pb-2 font-mono">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="relative aspect-square overflow-hidden">
            {/* Use the first image if it's an array */}
            <img 
              src={Array.isArray(project.images) ? project.images[0] : project.image} 
              alt={project.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            {project.comingSoon && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-semibold font-mono">Coming Soon</span>
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 font-mono">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-mono">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 rounded-full text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            {!project.comingSoon && (
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-mono">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-mono">
                    <Eye size={20} />
                    <span>Demo</span>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-mono">
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative font-mono">
          <span className="bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
            My Projects
          </span>
          <span className="block h-1 w-20 bg-teal-600 dark:bg-teal-400 mx-auto mt-2"></span>
        </h2>

        <ProjectSection title="Engineering Design Projects" projects={projects.engineering} />
        <ProjectSection title="IoT Projects" projects={projects.iot} />
        <ProjectSection title="Data Science Projects" projects={projects.dataScience} />
        <ProjectSection title="Solar Energy Projects" projects={projects.solarEnergy} />
        <ProjectSection title="ArcGIS Projects" projects={projects.arcGIS} />
        <ProjectSection title="Other Projects" projects={projects.other} />
      </div>
    </section>
  );
};

export default Projects;

