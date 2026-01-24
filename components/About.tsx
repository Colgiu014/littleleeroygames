'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Rocket, Users, Award, Code, Globe, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love creating games that bring joy and excitement to players worldwide.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Quality',
    description: 'Every game is meticulously crafted with attention to detail and polish.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We push technological boundaries to create unique gaming experiences.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Our players are at the heart of everything we do and create.',
    color: 'from-green-500 to-emerald-500',
  },
];

const achievements = [
  { icon: Award, label: 'Games Published', value: '1+' },
  { icon: Users, label: 'Happy Players', value: '10K+' },
  { icon: Code, label: 'Lines of Code', value: '50K+' },
  { icon: Globe, label: 'Countries Reached', value: '20+' },
];

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-8">
            About Our Studio
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Little Leeroy Games is a cutting-edge indie game studio based in Romania, 
            pioneering the future of interactive entertainment through innovative technology and creative excellence.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                  Our Story
                </h3>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Founded with an unwavering passion for game development, Little Leeroy Games 
                    represents the next generation of independent game creation. We believe that 
                    revolutionary gaming experiences can emerge from anywhere, and we're proudly 
                    leading this charge from Romania.
                  </p>
                  <p>
                    Our debut title, <span className="text-cyan-400 font-semibold">BBBlocks</span>, 
                    exemplifies our commitment to creating polished, immersive experiences that 
                    players can enjoy across all platforms. We're just getting started on our 
                    mission to reshape mobile gaming.
                  </p>
                </div>
              </div>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white mb-2">{achievement.value}</div>
                    <div className="text-sm text-gray-400">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-center text-white mb-12 sm:mb-16">
            What Drives Us
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group perspective-1000"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20 shadow-2xl group-hover:shadow-purple-500/20">
                  <div className="relative mb-5 sm:mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                    <div className={`relative bg-gradient-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Journey?</h3>
            <p className="text-gray-300 text-lg mb-8">
              Follow our development process and be the first to experience our upcoming games.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              Connect With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
