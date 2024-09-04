import * as THREE from 'three';
import React, { useContext, createContext, useMemo, useRef, useEffect } from 'react';
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
  const scrollSpeedMultiplierRef = useRef(0); // Multiplier for adjusting speed while scrolling

  if (!instances) return null;

  // Rotate the model continuously with scroll-based speed adjustment
  useFrame(() => {
    if (groupRef.current) {
      const baseSpinSpeed = 0.01; // Base slow spin speed
      const scrollSpeedMultiplier = scrollSpeedMultiplierRef.current * 1.001; // Scroll-based speed boost

      // Log the current speed of the ring
      const currentSpeed = baseSpinSpeed + scrollSpeedMultiplier;

      // Apply the rotation
      groupRef.current.rotation.y += currentSpeed;

      if (scrollSpeedMultiplierRef.current >= 1) {
        groupRef.current.rotation.y = 0.1;  // Stop rotation when scroll is complete
      }
    }
  });

  // Listen for scroll event to adjust the speed multiplier
  useEffect(() => {
    const handleScrollRotation = (e) => {
      scrollSpeedMultiplierRef.current = e.detail; // Update the scroll speed multiplier with progress (0 to 1)
    };

    document.addEventListener('scrollRotation', handleScrollRotation);

    return () => {
      document.removeEventListener('scrollRotation', handleScrollRotation);
    };
  }, []);

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={[4, 4, 4]}> {/* Adjust the scale factor as needed */}
        <instances.File />
      </group>
    </group>
  );
}

useGLTF.preload('/The_ring_is_a_silver__0831021126_refine.glb');
