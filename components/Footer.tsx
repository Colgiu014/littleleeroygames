'use client';

import Link from 'next/link';
import { Gamepad2, Mail, Heart, Github, Twitter, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { section: 'Company', links: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Games', href: '#games' },
      { name: 'Contact', href: '#contact' },
    ]},
    { section: 'Games', links: [
      { name: 'BBBlocks', href: '/app-debug.apk' },
      { name: 'Coming Soon', href: '#games' },
      { name: 'Game Updates', href: '#games' },
    ]},
    { section: 'Support', links: [
      { name: 'Help Center', href: '#contact' },
      { name: 'Bug Reports', href: '#contact' },
      { name: 'Feature Requests', href: '#contact' },
    ]},
  ];

  return (
    <footer 
      className="relative bg-black/90 backdrop-blur-xl border-t border-white/10 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a0b2e 50%, #000000 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center space-x-3 group mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-xl">
                    <Gamepad2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Little Leeroy Games
                  </div>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Next-Gen Gaming
                  </div>
                </div>
              </Link>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Pioneering the future of interactive entertainment through innovative 
                technology and creative excellence. Based in Romania, creating for the world.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-white font-bold text-lg mb-6">{section.section}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="w-6 h-6 text-purple-400" />
                Stay in the Loop
              </h3>
              <p className="text-gray-400">
                Get notified about our latest games, updates, and exclusive content.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 focus:outline-none transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Little Leeroy Games. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>in Romania</span>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-2xl flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
