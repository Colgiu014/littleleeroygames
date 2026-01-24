'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function ContactScene() {
  const groupRef = useRef<THREE.Group>(null);
  const envelopeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    
    if (envelopeRef.current) {
      envelopeRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Envelope */}
        <mesh ref={envelopeRef} position={[0, 0, 0]}>
          <boxGeometry args={[2, 1.4, 0.1]} />
          <meshPhongMaterial color="#4c1d95" />
        </mesh>
        
        {/* Envelope flap */}
        <mesh position={[0, 0.7, 0.05]} rotation={[Math.PI / 6, 0, 0]}>
          <boxGeometry args={[2, 1, 0.1]} />
          <meshPhongMaterial color="#6d28d9" />
        </mesh>
        
        {/* Letter inside */}
        <mesh position={[0, -0.2, 0.1]}>
          <boxGeometry args={[1.6, 1, 0.05]} />
          <meshPhongMaterial color="#f8fafc" />
        </mesh>
      </Float>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={2 + i * 0.5} rotationIntensity={1} floatIntensity={2}>
          <mesh 
            position={[
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 2
            ]}
          >
            <sphereGeometry args={[0.1]} />
            <meshPhongMaterial color="#8b5cf6" transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}