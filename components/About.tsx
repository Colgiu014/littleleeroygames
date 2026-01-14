'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Rocket, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love creating games that bring joy and excitement to players.',
  },
  {
    icon: Target,
    title: 'Quality',
    description: 'Every game is crafted with attention to detail and polish.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We push boundaries to create unique gaming experiences.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Our players are at the heart of everything we do.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Our Studio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Little Leeroy Games is an indie game studio based in Romania,
            dedicated to creating fun and engaging mobile games that players love.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-700">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Founded with a passion for game development, Little Leeroy Games
                represents the spirit of independent game creation. We believe
                that great games can come from anywhere, and we're proud to
                contribute to the global gaming community from Romania.
              </p>
              <p>
                Our first release, BBBlocks, showcases our commitment to
                creating polished, enjoyable experiences that players can enjoy
                anytime, anywhere. We're excited to continue growing and bringing
                more innovative games to mobile platforms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-800 rounded-xl p-6 h-full border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
