'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function InteractiveGame() {
  const cubeRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
      sphereRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.5) * 1;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh 
          ref={cubeRef} 
          position={[0, 0, 0]}
          onClick={(e) => {
            e.stopPropagation();
            if (cubeRef.current) {
              cubeRef.current.material = new THREE.MeshPhongMaterial({
                color: `hsl(${Math.random() * 360}, 70%, 50%)`
              });
            }
          }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshPhongMaterial color="#8b5cf6" />
        </mesh>
      </Float>
      
      <mesh 
        ref={sphereRef} 
        position={[2, 0, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          if (sphereRef.current) {
            sphereRef.current.scale.setScalar(1.5);
          }
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          if (sphereRef.current) {
            sphereRef.current.scale.setScalar(1);
          }
        }}
      >
        <sphereGeometry args={[0.5]} />
        <meshPhongMaterial color="#ec4899" />
      </mesh>
      
      <mesh position={[-2, 0, 0]}>
        <octahedronGeometry args={[0.7]} />
        <meshPhongMaterial 
          color="#06d6a0" 
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}