import { FirstPersonControls, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Zombie from '@/components/Zombie';

const ZombieScene = () => {
    return (
        <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <Zombie position={[0, 0, 5]} />

            {/* <Environment preset="sunset" background /> */}
            <directionalLight intensity={0.5} />
            <pointLight position={[0, -2, 15]} />
            {/* <FirstPersonControls
                activeLook={true}
                lookSpeed={0.5}
                movementSpeed={3}
                verticalMin={0}
                verticalMax={Math.PI}
                lookVertical={true}
                enabled={true}
            /> */}
            <OrbitControls />
            <axesHelper scale={3} />
        </Suspense>
    );
};

export default ZombieScene;
