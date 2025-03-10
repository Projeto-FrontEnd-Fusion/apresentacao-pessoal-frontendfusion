import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// IMPORT CSS 
import './Particles.css'
import React from 'react';

function TriangularParticles({ count = 100 }: { count?: number }) {
  const particlesRef = useRef<THREE.Group | null>(null);

  // Gera dados das partículas
  const particles = useMemo(() => {
    const particlesArray = [];
    for (let i = 0; i < count; i++) {
      particlesArray.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10, // Posição x aleatória
          (Math.random() - 0.5) * 10, // Posição y aleatória
          (Math.random() - 0.5) * 10  // Posição z aleatória
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        scale: Math.random() * 0.1 + 0.05 // Escala aleatória para tamanho do triângulo
      });
    }
    return particlesArray;
  }, [count]);

  // Anima os triângulos
  useFrame(() => {
    if (particlesRef.current) { // Verificação de nulidade
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh
          key={i}
          position={particle.position}
          rotation={particle.rotation}
          scale={particle.scale}
        >
          <coneGeometry args={[0.1, 0.2, 3]} /> {/* Triângulo pequeno */}
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
      ))}
    </group>
  );
}

// Canvas para renderizar a cena
export default function ParticleScene() {
  return (
    <div className="particles-container"> {/* Container com classe fixed */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <TriangularParticles count={200} /> {/* Ajuste o número de partículas */}
      </Canvas>
    </div>
  );
}
