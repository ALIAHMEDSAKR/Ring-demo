import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Instances, Model } from './Model';
import CameraController from './CameraController';

const ModelView = () => {
  return (
    <div>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={4.4} />
        <Instances>
          <Model />
        </Instances>
        <OrbitControls enableZoom={false} />
        <CameraController />  {/* Add the CameraController here */}
      </Canvas>
    </div>
  );
};

export default ModelView;
