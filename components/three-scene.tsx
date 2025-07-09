"use client"

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Preload, Environment } from "@react-three/drei"
import * as THREE from "three"
import dynamic from "next/dynamic"

const InteractiveRobot = dynamic(() => import("./interactive-robot").then(mod => mod.InteractiveRobot), {
  ssr: false,
})

function RobotModel({ mouse, isMouseActive }: { mouse: { x: number, y: number }, isMouseActive: boolean }) {
  const modelRef = useRef<THREE.Group>(null!)
  const { scene } = useGLTF("/assets/3d/robot.glb")

  useEffect(() => {
    if (scene) {
      // 1. GUNAKAN ROTASI AWAL YANG ANDA MINTA
      scene.rotation.set(0, 0.7, 0); 
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // 2. ATUR LOGIKA BARU UNTUK TARGET ROTASI
      // Target rotasi sekarang adalah posisi awal (0.7) ditambah pergerakan mouse
      const targetRotationY = isMouseActive ? 0.7 + (mouse.x * 1.2) : 0.7;
      const targetRotationX = isMouseActive ? mouse.y * 0.8 : 0;

      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotationY,
        0.07
      )
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        targetRotationX,
        0.07
      )
    }
  })

  return (
    <group ref={modelRef}>
      <primitive
        object={scene}
        scale={5.5}
        position-y={0}
      />
    </group>
  )
}

function RobotCanvas({ mouse, isMouseActive }: { mouse: { x: number, y: number }, isMouseActive: boolean }) {
  return (
    <Canvas
      shadows
      frameloop="always" 
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RobotModel mouse={mouse} isMouseActive={isMouseActive} />
        <Environment preset="city" />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export function ThreeScene() {
  const [globalMouse, setGlobalMouse] = useState({ x: 0, y: 0 });
  const [isMouseActive, setIsMouseActive] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout>();
  const [hasEngaged, setHasEngaged] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
      setGlobalMouse({ x: mouseX, y: mouseY });

      if (hasEngaged) {
        setIsMouseActive(true);
        if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = setTimeout(() => {
          setIsMouseActive(false);
        }, 2000);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, [hasEngaged]);

  return (
    <div 
      className="flex h-full w-full items-center justify-center"
      onMouseEnter={() => {
        if (!hasEngaged) setHasEngaged(true);
      }}
    >
      <div className="w-2/3 h-full">
        <RobotCanvas mouse={globalMouse} isMouseActive={isMouseActive} />
      </div>
      <div className="w-1/3 h-full border-l bg-background/20">
        <InteractiveRobot />
      </div>
    </div>
  )
}