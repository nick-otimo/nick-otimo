import React from 'react';
import { Heart, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="absolute bottom-10 right-10 z-10">
        <button
          onClick={scrollToTop}
          className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          {/* Bio Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Nick Otimo
            </h3>
            <p className="text-gray-400 max-w-md">
              Agricultural & Biosystems Engineering student with a passion for tech and innovation in agriculture. Building sustainable solutions for a better future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#work', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Nairobi, Kenya</li>
              <li>
                <a
                  href="mailto:nickotimo36@gmail.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  nickotimo36@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254742296931"
                  className="hover:text-teal-400 transition-colors"
                >
                  +254 742 296 931
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nick Otimo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
