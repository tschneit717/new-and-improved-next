/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as ThreeJS from 'three'
import styles from './Three.module.css'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import {
  fragmentShader,
  getDefaultUniforms, vertexShader
} from './utils'

export default function Three(): JSX.Element {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0, pixelRatio: 0 })
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight, pixelRatio: window.devicePixelRatio })
  }, [])
  const pointsRef = useRef()
  const materialRef = useRef()

  const uniforms = {
    ...getDefaultUniforms(windowSize),
    u_pointsize: { value: 2.25 },
    // wave 1
    u_noise_freq_1: { value: 6.0 },
    u_noise_amp_1: { value: 0.6 },
    u_spd_modifier_1: { value: 1.0 },
    // wave 2
    u_noise_freq_2: { value: 2.0 },
    u_noise_amp_2: { value: 0.1 },
    u_spd_modifier_2: { value: 0.8 }
  }

  // Mesh
  const geometry = new ThreeJS.PlaneGeometry(20, 20, 180, 180)
  const material = new ThreeJS.ShaderMaterial({
    uniforms,
    vertexShader: vertexShader(),
    fragmentShader: fragmentShader()
  })

  const PointsComponent = () => {
    const xRotation = 3.1415 / -2.135154
    const yRotation = 3.1415 / -0.8
    useFrame(() => {
      materialRef.current.uniforms.u_time.value += 0.001
      pointsRef.current.rotation.x += 0.00002
      pointsRef.current.rotation.y += 0.00002
    })
    return (
      <points
      ref={pointsRef}
      rotation={[xRotation, yRotation, 0]}
    >
      <planeGeometry {...geometry} />
      <shaderMaterial ref={materialRef} {...material} />
    </points>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Canvas
        className={styles.canvas}>
        <color attach={'background'} args={['#071013']} />
        <camera
          position={[20, -2.1333, 2]}
          fov={120}
        ></camera>
        <PointsComponent/>
      </Canvas>,
    </div>
  )
}
