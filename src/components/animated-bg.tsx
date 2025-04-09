
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere({ position, color, speed, distort }) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((_state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * speed * 0.2;
      mesh.current.rotation.y += delta * speed * 0.3;
    }
  });

  return (
    <Sphere args={[1, 32, 32]} position={position} ref={mesh}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed * 2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function AnimatedBackground({ className }) {
  return (
    <div className={`absolute inset-0 -z-10 opacity-60 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6E42CA" />
        
        <AnimatedSphere 
          position={[-3, 0, 0]} 
          color="#6E42CA" 
          speed={0.5} 
          distort={0.4} 
        />
        <AnimatedSphere 
          position={[3, 1, -2]} 
          color="#2DD4BF" 
          speed={0.2} 
          distort={0.6} 
        />
        <AnimatedSphere 
          position={[0, -2, -1]} 
          color="#9cb3fd" 
          speed={0.3} 
          distort={0.5} 
        />
      </Canvas>
    </div>
  );
}
