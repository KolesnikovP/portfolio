import { useRef, Suspense} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs'

const Stars = (props: any) => {
  const ref = useRef({rotation: {x: 0, y: 0}});

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2})

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;
  })

  return (
    <group
      rotation={[0, 0, Math.PI / 4]}
    >
      <Points 
        ref={ref}
        positions={sphere as Float32Array} 
        frustumCulled
        stride={3}
        {...props}
        >
          <PointMaterial 
            transparent
            color='#f272c8'
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        camera={{position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <Stars />

          <Preload all/>
        </Suspense>
      </Canvas>
    </div> 
  );
};

export default StarsCanvas;
