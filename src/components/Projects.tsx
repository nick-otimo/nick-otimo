import React, { useState, useEffect } from 'react';
import { Github, Eye, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Extrimity Water Tank",
    description: "Water Tank design.",
    image: "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/496820414_662729790080810_5049069045802209242_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3MhF9MSp0JYQ7kNvwHRRCED&_nc_oc=Adk4dGgkktyNzkgRjF5H8gbTaVDLQimgNyNq9xlRk3WKrU_7oqPOhB--wJUIBhU0wt4&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=hRmdW4pV1Ug69-68A-O12w&oh=00_AfIDr6mZe8ckS279DgXEm33F7WjO8ZmTdUO97Jk-hAYlfg&oe=682A48DA",
    technologies: ["Autodesk Inventor"],
    comingSoon: false
  },
  {
    id: 2,
    title: "Project Hostara",
    description: "Coming soon: A desktop application focusing on user interface design and seamless functionality implementation.",
    image: "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/496526337_659673323719790_8994599267912308178_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=25McYtRQQY4Q7kNvwEc6kjR&_nc_oc=AdknDpVr2aYMLU_P6Ji2CVa-Z-9QivWOpl_J856PYc2nAmr5pfN390eW4ZS0pzfPEcg&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=tcSaiq-nvwSSIcqOmU_k-A&oh=00_AfJ-1AEjd3TPFYNzTXs6StOo3_Ysz552_J8mSnhxkCb2Ww&oe=6824DA80",
    technologies: ["React", "Electron", "Node.js"],
    comingSoon: true
  },
  {
    id: 3,
    title: "AgroXTREME Website ",
    description: "Coming soon: The official Agricultural technology company website to showcase agricultural innovations and services.",
    image: "/images/gr xtreme (1).png",
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
