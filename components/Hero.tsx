'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Sparkles, ChevronDown, Zap, Stars } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Glassmorphism Content Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 sm:space-y-8"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="flex items-center justify-center mb-6 sm:mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-4 sm:p-6 rounded-full shadow-xl">
                    <Gamepad2 className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight">
                  Little Leeroy Games
                </h1>
                
                <div className="flex items-center justify-center gap-3">
                  <Stars className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <p className="text-xl sm:text-2xl text-white font-bold tracking-wide">
                    Next-Gen Indie Studio
                  </p>
                  <Stars className="w-6 h-6 text-pink-400 animate-pulse" />
                </div>
              </motion.div>

              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  Crafting immersive, interactive gaming experiences that push the boundaries of 
                  mobile entertainment. Where creativity meets cutting-edge technology.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-white">Interactive 3D Games</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-white">Innovative Gameplay</span>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              >
                <a
                  href="#games"
                  className="group px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <Gamepad2 className="w-5 h-5" />
                    Explore Our Games
                  </span>
                </a>
                
                <a
                  href="#contact"
                  className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative">Get in Touch</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
    </section>
  );
}
