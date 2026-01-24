'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function Logo3D() {
  const logoRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={logoRef}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json" // You'd need to add this font
            size={0.8}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            LLG
            <meshPhongMaterial 
              color="#8b5cf6" 
              emissive="#4c1d95"
              emissiveIntensity={0.2}
            />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
}