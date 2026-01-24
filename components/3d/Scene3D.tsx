'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import FloatingCubes from './FloatingCubes';
import GamepadModel from './GamepadModel';

interface Scene3DProps {
  variant?: 'hero' | 'games' | 'background';
  className?: string;
}

export default function Scene3D({ variant = 'background', className = '' }: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          
          {variant === 'hero' && <GamepadModel />}
          {variant === 'games' && <FloatingCubes count={8} />}
          {variant === 'background' && <FloatingCubes count={12} spread={15} />}
        </Suspense>
      </Canvas>
    </div>
  );
}