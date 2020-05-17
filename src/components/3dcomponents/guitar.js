import React, { useState, useRef, useEffect } from "react";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { useSpring, a  } from "react-spring/three";

const Guitar = () => {
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load('/guitar/scene.gltf', setModel)

  })

  return model ? <primitive object={model.scene} /> : null
}

export default Guitar
