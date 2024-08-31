import * as THREE from 'three';
import React, { useContext, createContext, useMemo, useRef } from 'react';
import { useGLTF, Merged } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const context = createContext(null);

export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/The_ring_is_a_silver__0831021126_refine.glb');
  const instances = useMemo(() => ({
    File: nodes.file1,
  }), [nodes]);

  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances}>{children}</context.Provider>}
    </Merged>
  );
}

export function Model(props) {
  const instances = useContext(context);
  const groupRef = useRef();

  if (!instances) return null;

  // Rotate the model continuously
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={[5, 5, 5]}> {/* Adjust the scale factor as needed */}
        <instances.File />
      </group>
    </group>
  );
}

useGLTF.preload('/The_ring_is_a_silver__0831021126_refine.glb');
