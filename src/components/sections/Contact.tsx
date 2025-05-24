import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400">
            Let's discuss your project or just say hello
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-purple-500/10 rounded-xl mr-4">
                  <Mail size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <a href="mailto:email@example.com" className="text-lg hover:text-purple-500 transition-colors">
                    email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-purple-500/10 rounded-xl mr-4">
                  <Phone size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-lg hover:text-purple-500 transition-colors">
                    +12 (34) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-purple-500/10 rounded-xl mr-4">
                  <MapPin size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                  <p className="text-lg">
                    Mohan Babu University, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 rounded-xl hover:bg-purple-500/10 transition-colors group"
                >
                  <Github size={20} className="text-gray-400 group-hover:text-purple-500" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 rounded-xl hover:bg-purple-500/10 transition-colors group"
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-purple-500" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;