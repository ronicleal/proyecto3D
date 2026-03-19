import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Sky } from "@react-three/drei"
import { Isla } from "./components/Isla"
import { Interface } from "./components/Interface"

export function App() {
  return (
    <div className='relative h-dvh w-full bg-[#f0f4f8]'>
      <Canvas camera={{ position: [0, 5, 15], fov: 45 }}>
        <Suspense fallback={null}> 


          <Environment
            files="/goegap_road_1k.exr"
            background 
          />

          <Sky
            distance={450000} 
            sunPosition={[0, 1, 0]} 
            inclination={0}
            azimuth={0.25}
          />

          <OrbitControls
            enableZoom={false} 
            makeDefault
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Isla scale={0.5} />
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>

      <Interface />
    </div>

  )
}

export default App
