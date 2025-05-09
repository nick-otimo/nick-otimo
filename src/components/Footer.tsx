import React from 'react';
import { Heart, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="absolute right-10 bottom-10 z-10">
        <button
          onClick={scrollToTop}
          className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Nick Otimo</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Agricultural & Biosystems Engineering student with a passion for technology and innovation in agriculture. Building sustainable solutions for a better future.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-teal-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Nairobi, Kenya</span>
              </li>
              <li>
                <a href="mailto:nickotimo36@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors">nickotimo36@gmail.com</a>
              </li>
              <li>
                <a href="tel:+254742296931" className="text-gray-400 hover:text-teal-400 transition-colors">+254 742 296 931</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 &lt;&lt;&lt; Nick Otimo &gt;&gt;&gt; All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm flex items-center">
            Made with 
            <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> 
            and a passion for innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;