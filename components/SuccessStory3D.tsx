import type React from "react"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Sphere, Torus } from "@react-three/drei"
import type * as THREE from "three"

interface SuccessStory3DProps {
  type: string
}

export const SuccessStory3D: React.FC<SuccessStory3DProps> = ({ type }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y += 0.01
    }
  })

  switch (type) {
    case "cloud":
      return (
        <group ref={meshRef}>
          <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#4285F4" />
          </Sphere>
          <Sphere args={[0.3, 32, 32]} position={[0.6, 0.2, 0]}>
            <meshStandardMaterial color="#4285F4" />
          </Sphere>
          <Sphere args={[0.2, 32, 32]} position={[-0.5, 0.1, 0]}>
            <meshStandardMaterial color="#4285F4" />
          </Sphere>
        </group>
      )
    case "kubernetes":
      return (
        <group ref={meshRef}>
          <Box args={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#326CE5" />
          </Box>
          <Sphere args={[0.2, 32, 32]} position={[0.6, 0.6, 0]}>
            <meshStandardMaterial color="#326CE5" />
          </Sphere>
          <Sphere args={[0.2, 32, 32]} position={[-0.6, -0.6, 0]}>
            <meshStandardMaterial color="#326CE5" />
          </Sphere>
        </group>
      )
    case "devops":
      return (
        <group ref={meshRef}>
          <Torus args={[0.5, 0.2, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#FF6F61" />
          </Torus>
          <Box args={[0.4, 0.4, 0.4]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#FF6F61" />
          </Box>
        </group>
      )
    case "serverless":
      return (
        <group ref={meshRef}>
          <Box args={[0.8, 0.1, 0.8]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#FF9900" />
          </Box>
          <Box args={[0.1, 0.8, 0.1]} position={[0.35, 0.35, 0]}>
            <meshStandardMaterial color="#FF9900" />
          </Box>
          <Box args={[0.1, 0.8, 0.1]} position={[-0.35, 0.35, 0]}>
            <meshStandardMaterial color="#FF9900" />
          </Box>
        </group>
      )
    case "ml":
      return (
        <group ref={meshRef}>
          <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#34A853" />
          </Sphere>
          <Box args={[0.2, 0.2, 0.2]} position={[0.6, 0, 0]}>
            <meshStandardMaterial color="#34A853" />
          </Box>
          <Box args={[0.2, 0.2, 0.2]} position={[-0.6, 0, 0]}>
            <meshStandardMaterial color="#34A853" />
          </Box>
          <Box args={[0.2, 0.2, 0.2]} position={[0, 0.6, 0]}>
            <meshStandardMaterial color="#34A853" />
          </Box>
          <Box args={[0.2, 0.2, 0.2]} position={[0, -0.6, 0]}>
            <meshStandardMaterial color="#34A853" />
          </Box>
        </group>
      )
    case "webapp":
      return (
        <group ref={meshRef}>
          <Box args={[0.8, 0.5, 0.1]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#61DAFB" />
          </Box>
          <Sphere args={[0.15, 32, 32]} position={[0.3, 0.2, 0.1]}>
            <meshStandardMaterial color="#61DAFB" />
          </Sphere>
          <Sphere args={[0.15, 32, 32]} position={[-0.3, -0.2, 0.1]}>
            <meshStandardMaterial color="#61DAFB" />
          </Sphere>
        </group>
      )
    default:
      return (
        <Box args={[1, 1, 1]} ref={meshRef}>
          <meshStandardMaterial color="#CCCCCC" />
        </Box>
      )
  }
}

