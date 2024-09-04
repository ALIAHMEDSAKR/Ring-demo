import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import gsap from 'gsap';

const CameraController = () => {
  const { camera } = useThree();

  useEffect(() => {
    const handleZoomAndPosition = (e) => {
      const progress = e.detail;
      const zoomInPosition = { x: -15, y: 1, z: 1 };  // Target position
      const zoomOutPosition = { x: 0, y: 0, z: 10 }; // Original position

      const targetFov = 40; // FOV when zoomed in
      const originalFov = 75; // FOV when zoomed out

      // Animate the position of the camera
      gsap.to(camera.position, {
        x: zoomOutPosition.x + (zoomInPosition.x - zoomOutPosition.x) * progress,
        y: zoomOutPosition.y + (zoomInPosition.y - zoomOutPosition.y) * progress,
        z: zoomOutPosition.z + (zoomInPosition.z - zoomOutPosition.z) * progress,
        duration: 0.5,
        ease: "power2.out", // Smooth easing function
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      });

      // Animate the FOV of the camera
      gsap.to(camera, {
        fov: originalFov + (targetFov - originalFov) * progress,
        duration: 0.5,
        ease: "power2.out", // Smooth easing function
        onUpdate: () => {
          camera.updateProjectionMatrix();
        },
      });
    };

    document.addEventListener('scrollRotation', handleZoomAndPosition);

    return () => {
      document.removeEventListener('scrollRotation', handleZoomAndPosition);
    };
  }, [camera]);

  return null;
};

export default CameraController;
