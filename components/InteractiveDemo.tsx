'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import InteractiveGame from './3d/InteractiveGame';

export default function InteractiveDemo() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
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
            Interactive 3D Demo
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the future of gaming with our interactive 3D technology. 
            Click and drag to interact with the objects below!
          </p>
        </motion.div>

        {/* 3D Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
        >
          <div className="h-96 w-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
            <Suspense 
              fallback={
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
                </div>
              }
            >
              <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <Environment preset="night" />
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                <InteractiveGame />
                <OrbitControls 
                  enableZoom={true} 
                  enablePan={false} 
                  maxDistance={15} 
                  minDistance={3}
                  enableDamping={true}
                  dampingFactor={0.05}
                />
              </Canvas>
            </Suspense>
          </div>
          
          {/* Instructions */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              🖱️ <strong>Click</strong> the purple cube to change colors • 
              🖱️ <strong>Hover</strong> over the pink sphere to scale it • 
              🖱️ <strong>Drag</strong> to rotate the scene
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            This is just a glimpse of what's possible with modern web technology. 
            Our games push these boundaries even further!
          </p>
          <a
            href="#games"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore Our Games
          </a>
        </motion.div>
      </div>
    </section>
  );
}