'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Play } from 'lucide-react';

const games = [
  {
    id: 1,
    title: 'BBBlocks',
    description:
      'A captivating puzzle game with mechanics similar to Block Blast. Match blocks, clear lines, and achieve high scores in this addictive mobile game!',
    image: '/games/bbblocks.svg',
    status: 'Available Now',
    platforms: ['Android', 'iOS'],
    link: 'https://github.com/Colgiu014/littleleeroygames/raw/main/debug.apk', // Direct APK download
    color: 'from-cyan-500 to-blue-600',
  },
  // Add more games here in the future
];

export default function Games() {
  return (
    <section id="games" className="py-20 bg-gray-900">
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
            Our Games
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our collection of indie games crafted with passion and
            creativity
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                {/* Game Image */}
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow-lg">
                      {game.status}
                    </span>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {game.title}
                  </h3>

                  {/* Platforms */}
                  <div className="flex gap-2 mb-4">
                    {game.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {game.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={game.link}
                      className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${game.color} text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300`}
                    >
                      <Play size={20} />
                      Play Now
                    </a>
                    <a
                      href={game.link}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            More exciting games coming soon! Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
