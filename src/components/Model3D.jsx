import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Shape({ shape, color, wire }) {
  const mesh = useRef()
  const wireMesh = useRef()

  useFrame((_, delta) => {
    const t = Date.now() * 0.001
    mesh.current.rotation.y += delta * 0.7
    mesh.current.rotation.x = Math.sin(t * 0.4) * 0.3
    wireMesh.current.rotation.y = mesh.current.rotation.y
    wireMesh.current.rotation.x = mesh.current.rotation.x
  })

  const geo = {
    torusKnot:   <torusKnotGeometry args={[0.55, 0.18, 128, 32, 2, 3]} />,
    box:         <boxGeometry args={[1.3, 1.3, 1.3]} />,
    sphere:      <sphereGeometry args={[0.9, 32, 32]} />,
    cone:        <coneGeometry args={[0.75, 1.7, 7]} />,
    torus:       <torusGeometry args={[0.7, 0.3, 16, 80]} />,
    octahedron:  <octahedronGeometry args={[1.0]} />,
    icosahedron: <icosahedronGeometry args={[1.0]} />,
    cylinder:    <cylinderGeometry args={[0.55, 0.7, 1.7, 8]} />,
    tree:        <coneGeometry args={[0.8, 1.8, 6]} />,
    castle:      <boxGeometry args={[1.1, 1.5, 1.1]} />,
  }[shape] || <sphereGeometry args={[0.9, 32, 32]} />

  return (
    <>
      <mesh ref={mesh}>
        {geo}
        <meshStandardMaterial color={color} metalness={0.55} roughness={0.3} />
      </mesh>
      <mesh ref={wireMesh}>
        {geo}
        <meshBasicMaterial color={wire} wireframe transparent opacity={0.18} />
      </mesh>
    </>
  )
}

export default function Model3D({ shape, color, wire, size = 220 }) {
  return (
    <Canvas
      style={{ width: '100%', height: size }}
      camera={{ position: [0, 0, 3.2], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, -3, -3]} intensity={0.6} color={color} />
      <pointLight position={[0, 4, -4]} intensity={0.5} color={wire} />
      <Shape shape={shape} color={color} wire={wire} />
    </Canvas>
  )
}
