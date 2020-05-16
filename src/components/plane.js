import React, { useState, useRef } from "react";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { useSpring, a  } from "react-spring/three";

const Plane = () => (
  <mesh
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, -0.5, 0]}
    receiveShadow
    >
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial
      attach="material"
      color="white" />
  </mesh>
)

export default Plane
