import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Instances, Model } from './Model';

const ModelView = () => {
  return (
    <div>
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <ambientLight intensity={4.4} />  
            <Instances>
                <Model />
            </Instances>
            <OrbitControls />
        </Canvas>    
    </div>
  )
}

export default ModelView
