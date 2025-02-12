import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

export function Model({ path = "/assets/3d/duck.glb" }: { path?: string }) {
  const { scene } = useGLTF(path)
  const memoizedScene = useMemo(() => scene.clone(), [scene])
  return <primitive object={memoizedScene} scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]} />
}

useGLTF.preload("/assets/3d/duck.glb")

