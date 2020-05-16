import React, { useState, useRef } from "react";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { useSpring, a  } from "react-spring/three";

import './style.css'

import Box from '../components/box';
import Plane from '../components/plane';
import Header from '../components/header';

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useFrame(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
    )
}

export default () => (
  <div>
  <Header />
  <Canvas camera={{ position: [0, 0, 5]}} onCreated={({ gl })=> {
    gl.shadowMap.enabled = true
    gl.shadowMap.type = THREE.PCFSoftShadowMap
  }}>
    <fog attach="fog" args={["white", 5, 15]}/>
    <Controls />
    <Box />
    <Plane />
  </Canvas>
  </div>
  )
