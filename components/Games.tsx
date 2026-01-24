'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Play, Download, Star, Gamepad2 } from 'lucide-react';

const games = [
  {
    id: 1,
    title: 'BBBlocks',
    description:
      'A captivating puzzle game with mechanics similar to Block Blast. Match blocks, clear lines, and achieve high scores in this addictive mobile game!',
    image: '/games/bbblocks.svg',
    status: 'Available Now',
    platforms: ['Android', 'iOS'],
    link: '/app-debug.apk', // Direct APK download
    color: 'from-cyan-500 via-blue-500 to-purple-600',
    rating: 4.8,
    downloads: '10K+',
    tags: ['Puzzle', 'Casual', 'Addictive'],
  },
  // Add more games here in the future
];

export default function Games() {
  return (
    <section id="games" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
        }}
      >
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
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
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-2xl shadow-xl">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-8">
            Our Games
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our collection of next-generation indie games crafted with passion, 
            innovation, and cutting-edge technology
          </p>
        </motion.div>

        {/* Enhanced Games Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Glassmorphism Game Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-white/20">
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Game Image */}
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Enhanced Status Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl border border-green-400/50">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      {game.status}
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-1 bg-yellow-500/90 backdrop-blur-sm text-white text-sm font-bold px-3 py-2 rounded-full shadow-xl">
                      <Star className="w-3 h-3" fill="white" />
                      {game.rating}
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Game Info */}
                <div className="relative p-6 sm:p-8 lg:p-10 space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                      {game.title}
                    </h3>
                    
                    {/* Game Stats */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Download className="w-4 h-4" />
                        <span className="text-sm font-medium">{game.downloads} downloads</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Platforms */}
                  <div className="flex gap-3 mb-8">
                    {game.platforms.map((platform) => (
                      <div
                        key={platform}
                        className="flex items-center gap-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-xl border border-gray-600/30"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="font-medium">{platform}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                    {game.description}
                  </p>

                  {/* Enhanced CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href={game.link}
                      className={`group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${game.color} text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <Download className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Download Now</span>
                    </a>
                    
                    <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action for More Games */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">More Games Coming Soon!</h3>
            <p className="text-gray-300 text-lg mb-6">
              Stay tuned for our upcoming releases. Follow us to get notified when new games launch.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Star className="w-5 h-5" />
              Stay Updated
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
