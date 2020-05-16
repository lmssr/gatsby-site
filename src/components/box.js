import React, { useState, useRef } from "react";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { useSpring, a  } from "react-spring/three";

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "hotpink" : "gray"
  })


  return (
   <a.mesh
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
    onClick={() => setActive(!active)}
    scale={props.scale}
    castShadow
    >
      <ambientLight intensity={0.5} />
      <spotLight
        position={[0, 5, 10]}
        penumbra={1}
        castShadow
        />
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial
        attach="material"
        color={props.color} />
    </a.mesh>
  )
}

export default Box;
