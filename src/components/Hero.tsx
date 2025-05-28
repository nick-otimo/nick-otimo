import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import TypewriterComponent from '../utils/Typewriter';

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToProjects = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16"
    >
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-8 inline-block rounded-full border-4 border-teal-600 dark:border-teal-400 p-1 overflow-hidden">
          <img 
            src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/484517236_642993778677041_1731029337715033826_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFI3nL-7EyNbsqslAaJGwbaGEucsWu-08oYS5yxa77TyjQbOmWwfbBMiwhVj9s4WGyhGqkEVXTpccfDtJ0Dheab&_nc_ohc=EPWugW5gCMUQ7kNvwE8XtRY&_nc_oc=AdkxDwDoyrap__XGDv1s3awDQdjzwkHiuymWygsBmSzIGR7qXdvhkC2-GMyEvOhZK1k&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=6d016gbJwJpjssJ4K0zVuQ&oh=00_AfIpiE4rML2cktNZcPPPTfLbeKdkDYkngaZSNB-v4CCSuQ&oe=6826AEF1" 
            alt="Nick Otimo" 
            className="w-36 h-36 object-cover rounded-full"
          />
        </div>
        
     <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-mono bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
  Hi, I'M NICK OTIMO
     </h1>

        <div className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 h-20">
          <TypewriterComponent 
            texts={[
              "Agricultural and Biosystems Engineering student",
              "Aspiring Software Developer",
              "AgTech Pioneer",
              "Stem advocate",
              "Aspiring Data Analyst"
            ]} 
          />
        </div>
        
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 mt-4">
          Welcome to my world!
        </p>
        
        <button 
          onClick={scrollToProjects}
          className="px-8 py-3 bg-teal-600 dark:bg-teal-500 text-white font-medium rounded-full hover:bg-teal-700 dark:hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg"
        >
          View My Work
        </button>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToProjects}
          className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
        >
          <ChevronDown className="h-10 w-10" />
        </button>
      </div>
      
      {/* Background decoration - animated gradient orbs */}
      <div className="absolute top-1/3 -left-10 w-72 h-72 bg-purple-500/20 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/3 -right-10 w-72 h-72 bg-teal-500/20 dark:bg-teal-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Hero;
