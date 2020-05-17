import React, { useState, useRef, useEffect } from "react";
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { useSpring, a  } from "react-spring/three";

import './style.css'

import Box from '../components/3dcomponents/box';
import Plane from '../components/3dcomponents/plane';
import Guitar from '../components/3dcomponents/guitar';
import SpaceShip from '../components/3dcomponents/spaceship';


import Controls from '../components/controls';

import Header from '../components/2dcomponents/Header/header';


export default () => (
  <div>
  <Header />
  <Canvas camera={{ position: [0, 0, 5]}} onCreated={({ gl })=> {
    gl.shadowMap.enabled = true
    gl.shadowMap.type = THREE.PCFSoftShadowMap
  }}>
    <fog attach="fog" args={["white", 15, 25]}/>
    <Controls />
    <Box position={[-1.2, 0, 0]} />
    <SpaceShip />
    {/* <Plane /> */}
    {/* <Guitar /> */}
    <ambientLight intensity={0.5} />
      <spotLight
        position={[15, 20, 5]}
        penumbra={1}
        castShadow
        />
  </Canvas>
  </div>
  )
