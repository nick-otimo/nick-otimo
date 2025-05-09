import React, { useState, useEffect } from 'react';

const skills = [
  { name: "stem Outreaches", level: 10 },
  { name: "Software Development", level: 65 },
  { name: "Data Analysis", level: 50 },
  { name: "Communication and Networking", level: 70 },
  { name: "AgTech Innovation", level: 75 }
];

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimate(true);
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
          <span className="block h-1 w-20 bg-teal-600 dark:bg-teal-400 mx-auto mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Agricultural and Biosystems Engineering student with a keen interest in technology and its applications in agriculture. I believe in the power of innovation to transform the agricultural landscape.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My goal is to leverage technology to create sustainable solutions that benefit farmers and the environment. I'm constantly exploring new technologies and methodologies that can be applied to agricultural challenges.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As the C.E.O of Agro XTREME Limited, I'm working to bridge the gap between traditional farming practices and cutting-edge technology, making agriculture more efficient, sustainable, and profitable.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 h-2.5 rounded-full transition-all duration-1500 ease-out" 
                      style={{ 
                        width: animate ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
