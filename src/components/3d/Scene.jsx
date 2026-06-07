import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShape() {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      wireframeRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <group>
        {/* Main shape */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color="#00a8ff"
            emissive="#00a8ff"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
            wireframe={false}
          />
        </mesh>

        {/* Wireframe overlay */}
        <mesh ref={wireframeRef} scale={1.1}>
          <icosahedronGeometry args={[2, 0]} />
          <meshBasicMaterial
            color="#00e5ff"
            wireframe={true}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Orbiting particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <OrbitingParticle key={i} index={i} />
        ))}
      </group>
    </Float>
  );
}

function OrbitingParticle({ index }) {
  const ref = useRef();
  const radius = 3.5 + Math.random() * 1.5;
  const speed = 0.5 + Math.random() * 0.5;
  const angleOffset = (index / 8) * Math.PI * 2;

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime() * speed + angleOffset;
      ref.current.position.x = Math.cos(time) * radius;
      ref.current.position.z = Math.sin(time) * radius;
      ref.current.position.y = Math.sin(time * 2) * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color="#7c3aed" />
    </mesh>
  );
}

function FloatingParticles() {
  const particlesRef = useRef();

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const particles = Array.from({ length: 50 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
    ],
    size: Math.random() * 0.05 + 0.02,
  }));

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 4, 4]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#00a8ff' : '#00e5ff'}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00a8ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />

      <AnimatedShape />
      <FloatingParticles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

export default Scene;