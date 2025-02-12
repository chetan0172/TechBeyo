"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Box } from "@react-three/drei"

const TechIcon = ({ position, rotation, scale, color, text }) => {
  const mesh = useRef()

  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
    mesh.current.rotation.y += 0.01
  })

  return (
    <group position={position}>
      <Box ref={mesh} args={[1, 1, 1]} scale={scale}>
        <meshStandardMaterial color={color} />
      </Box>
      <Text position={[0, -0.8, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        {text}
      </Text>
    </group>
  )
}

export const PortfolioHeader = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <TechIcon position={[-2, 2, 0]} rotation={[0.5, 0.5, 0]} scale={[0.8, 0.8, 0.8]} color="#FF9900" text="AWS" />
      <TechIcon
        position={[-0.5, 2, 0]}
        rotation={[0.5, 0.5, 0]}
        scale={[0.8, 0.8, 0.8]}
        color="#2496ED"
        text="Docker"
      />
      <TechIcon
        position={[1, 2, 0]}
        rotation={[0.5, 0.5, 0]}
        scale={[0.8, 0.8, 0.8]}
        color="#326CE5"
        text="Kubernetes"
      />
      <TechIcon position={[2.5, 2, 0]} rotation={[0.5, 0.5, 0]} scale={[0.8, 0.8, 0.8]} color="#4A154B" text="CI/CD" />
    </>
  )
}

