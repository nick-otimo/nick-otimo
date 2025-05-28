import React, { useState, useEffect } from 'react';
import { Linkedin, Facebook, Instagram, Mail, Phone, MessageCircle, BookIcon as TiktokIcon, Twitter, Github, Send } from 'lucide-react';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: <Linkedin className="w-5 h-5" />, 
    url: 'https://www.linkedin.com/in/nick-otimo-8718262a4/',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  { 
    name: 'Facebook', 
    icon: <Facebook className="w-5 h-5" />, 
    url: 'https://www.facebook.com/profile.php?id=100088992733458',
    color: 'bg-blue-700 hover:bg-blue-800'
  },
  { 
    name: 'Instagram', 
    icon: <Instagram className="w-5 h-5" />, 
    url: 'https://www.instagram.com/your-username',
    color: 'bg-pink-600 hover:bg-pink-700'
  },
  { 
    name: 'Email', 
    icon: <Mail className="w-5 h-5" />, 
    url: 'mailto:nickotimo36@gmail.com',
    color: 'bg-red-600 hover:bg-red-700'
  },
  { 
    name: 'Phone', 
    icon: <Phone className="w-5 h-5" />, 
    url: 'tel:+254742296931',
    color: 'bg-green-600 hover:bg-green-700'
  },
  { 
    name: 'WhatsApp', 
    icon: <MessageCircle className="w-5 h-5" />, 
    url: 'https://wa.me/254742296931',
    color: 'bg-green-500 hover:bg-green-600'
  },
  { 
    name: 'TikTok', 
    icon: <TiktokIcon className="w-5 h-5" />, 
    url: 'https://www.tiktok.com/@nick_extrimity',
    color: 'bg-black hover:bg-gray-800'
  },
  { 
    name: 'Twitter', 
    icon: <Twitter className="w-5 h-5" />, 
    url: 'https://x.com/otimo_nick',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  { 
    name: 'GitHub', 
    icon: <Github className="w-5 h-5" />, 
    url: 'https://github.com/NICKOTIMO',
    color: 'bg-gray-800 hover:bg-gray-900'
  }
];

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
            Contact Me
          </span>
          <span className="block h-1 w-24 bg-teal-600 dark:bg-teal-400 mx-auto mt-2"></span>
        </h2>
        
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's connect and talk about technology based Agriculture! Feel free to reach out for collaborations, inquiries, or just a friendly chat.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Connect With Me</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-3 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 ${link.color}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {link.icon}
                    <span className="text-xs mt-2">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nairobi, Kenya
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Working remotely and available for global opportunities
              </p>
            </div>
          </div>
          
          <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center">
                  <div className="bg-green-100 dark:bg-green-800 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-green-700 dark:text-green-300">Message sent successfully! I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
