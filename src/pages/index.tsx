import ZombieScene from '@/components/ZombieScene';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, FirstPersonControls, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import Zombie from '@/components/Zombie';
import Stitch from '@/components/Stitch';
import * as THREE from 'three';

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>Alexandre Prévot</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <div className="absolute top-0 left-0 h-screen w-screen">
                    <Canvas id="#canvas-container" camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={0.5} />
                        <Box />
                        <pointLight position={[0, -1.0, 2]} />
                        <OrbitControls />
                    </Canvas>
                </div>
            </main>
        </div>
    );
};

export default Home;

const Box = props => {
    const ref = useRef<THREE.Mesh>();
    useFrame(() => {
        // ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01;
    });
    return (
        <mesh {...props} ref={ref} position={[0, 0, 0]}>
            <boxGeometry />
            <meshStandardMaterial color={'blue'} />
            <Html transform distanceFactor={5}>
                <div className="rounded-xl bg-red-400 p-4 text-white">Je suis un cube</div>
            </Html>
        </mesh>
    );
};
