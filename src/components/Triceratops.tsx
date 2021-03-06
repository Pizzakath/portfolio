/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Splootcrate (https://sketchfab.com/Splootcrate)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/triceratops-head-7d468540483e475eb49b217c032f2e18
title: Triceratops Head
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, SpotLight, Sparkles } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
    nodes: {
        defaultMaterial: THREE.Mesh;
    };
    materials: {
        Trikey_Shader: THREE.MeshStandardMaterial;
    };
};

export default function Triceratops({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF('/triceratops/scene.gltf') as GLTFResult;
    useFrame(({ clock, camera, v = new THREE.Vector3() }) => {
        group.current.rotation.y = Math.sin(clock.getElapsedTime()) / 11;
    });
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <Sparkles count={10} scale={6} size={6} speed={0.2} />
                    <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Trikey_Shader} />
                </group>
                <pointLight castShadow position={[2, 0, 0]} />
                <pointLight castShadow position={[-2, 0, 0]} />
                {/* <spotLight castShadow angle={Math.PI / 3} intensity={6} distance={3} position={[-5, 6, 0]} /> */}
                {/* <Lights /> */}
            </group>
        </group>
    );
}

const Lights = () => {
    const front = useRef<THREE.Group>();
    return (
        <>
            <pointLight position={[0, 0, 2]} intensity={5} color={'#975BF4'} distance={10} />
            <spotLight
                castShadow
                ref={front}
                penumbra={0}
                angle={Math.PI / 3}
                position={[10, 2.8, 0]}
                distance={11}
                intensity={6}
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
            />
        </>
    );
};
useGLTF.preload('/triceratops/scene.gltf');
