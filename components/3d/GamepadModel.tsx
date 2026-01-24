'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function GamepadModel() {
  const gamepadRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gamepadRef.current) {
      gamepadRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      gamepadRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={gamepadRef} position={[2, 0, 0]}>
        {/* Main gamepad body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 1.8, 0.4]} />
          <meshPhongMaterial color="#2d1b69" />
        </mesh>
        
        {/* D-pad */}
        <mesh position={[-1, 0.2, 0.25]}>
          <boxGeometry args={[0.3, 0.1, 0.1]} />
          <meshPhongMaterial color="#1a1a2e" />
        </mesh>
        <mesh position={[-1, 0.2, 0.25]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.3, 0.1, 0.1]} />
          <meshPhongMaterial color="#1a1a2e" />
        </mesh>
        
        {/* Action buttons */}
        <mesh position={[1, 0.3, 0.25]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1]} />
          <meshPhongMaterial color="#ff6b6b" />
        </mesh>
        <mesh position={[1.4, 0, 0.25]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1]} />
          <meshPhongMaterial color="#4ecdc4" />
        </mesh>
        <mesh position={[1, -0.3, 0.25]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1]} />
          <meshPhongMaterial color="#45b7d1" />
        </mesh>
        <mesh position={[0.6, 0, 0.25]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1]} />
          <meshPhongMaterial color="#f9ca24" />
        </mesh>
        
        {/* Analog sticks */}
        <mesh position={[-0.5, -0.5, 0.3]}>
          <cylinderGeometry args={[0.2, 0.2, 0.2]} />
          <meshPhongMaterial color="#1a1a2e" />
        </mesh>
        <mesh position={[0.5, -0.7, 0.3]}>
          <cylinderGeometry args={[0.2, 0.2, 0.2]} />
          <meshPhongMaterial color="#1a1a2e" />
        </mesh>
      </group>
    </Float>
  );
}