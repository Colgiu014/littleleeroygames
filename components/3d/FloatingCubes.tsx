'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import * as THREE from 'three';

interface FloatingCubesProps {
  count?: number;
  spread?: number;
}

export default function FloatingCubes({ count = 10, spread = 8 }: FloatingCubesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const tempObject = useMemo(() => new THREE.Object3D(), []);
  
  const cubes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: new Vector3(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      ),
      rotation: new Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      scale: 0.3 + Math.random() * 0.7,
      speed: 0.01 + Math.random() * 0.02,
    }));
  }, [count, spread]);

  useFrame((state) => {
    if (!meshRef.current) return;

    cubes.forEach((cube, i) => {
      cube.rotation.x += cube.speed;
      cube.rotation.y += cube.speed * 0.5;
      cube.rotation.z += cube.speed * 0.3;
      
      cube.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01;
      
      tempObject.position.copy(cube.position);
      tempObject.rotation.set(cube.rotation.x, cube.rotation.y, cube.rotation.z);
      tempObject.scale.setScalar(cube.scale);
      tempObject.updateMatrix();
      
      meshRef.current!.setMatrixAt(i, tempObject.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial 
        color="#8b5cf6" 
        transparent 
        opacity={0.6}
        emissive="#4c1d95"
        emissiveIntensity={0.2}
      />
    </instancedMesh>
  );
}