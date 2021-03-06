/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
    nodes: {
        Wolf3D_Hair: THREE.SkinnedMesh;
        Wolf3D_Shirt: THREE.SkinnedMesh;
        EyeLeft: THREE.SkinnedMesh;
        EyeRight: THREE.SkinnedMesh;
        Wolf3D_Head: THREE.SkinnedMesh;
        Wolf3D_Teeth: THREE.SkinnedMesh;
        Hips: THREE.Bone;
    };
    materials: {
        Wolf3D_Hair: THREE.MeshStandardMaterial;
        Wolf3D_Shirt: THREE.MeshStandardMaterial;
        Wolf3D_Eye: THREE.MeshStandardMaterial;
        Wolf3D_Skin: THREE.MeshStandardMaterial;
        Wolf3D_Teeth: THREE.MeshStandardMaterial;
    };
};

type ActionName =
    | 'allGrip_L'
    | 'allGrip_R'
    | 'allOpen_L'
    | 'allOpen_R'
    | 'idle_eyes_2'
    | 'idle_eyes'
    | 'indexDown_L'
    | 'indexDown_R'
    | 'mrpDown_L'
    | 'mrpDown_R'
    | 'pinch_L'
    | 'pinch_R'
    | 'point_L'
    | 'point_R'
    | 'thumbDown_L'
    | 'thumbDown_R'
    | 'thumbsUp_L'
    | 'thumbsUp_R';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Alex({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>();
    const { nodes, materials, animations } = useGLTF('/alex.gltf') as GLTFResult;
    const { actions } = useAnimations<GLTFActions>(animations, group);

    return (
        <group ref={group} {...props} dispose={null}>
            <group>
                <group>
                    <primitive object={nodes.Hips} />
                    <skinnedMesh
                        geometry={nodes.Wolf3D_Hair.geometry}
                        material={materials.Wolf3D_Hair}
                        skeleton={nodes.Wolf3D_Hair.skeleton}
                    />
                    <skinnedMesh
                        geometry={nodes.Wolf3D_Shirt.geometry}
                        material={materials.Wolf3D_Shirt}
                        skeleton={nodes.Wolf3D_Shirt.skeleton}
                    />
                    <skinnedMesh
                        name="EyeLeft"
                        geometry={nodes.EyeLeft.geometry}
                        material={materials.Wolf3D_Eye}
                        skeleton={nodes.EyeLeft.skeleton}
                        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="EyeRight"
                        geometry={nodes.EyeRight.geometry}
                        material={materials.Wolf3D_Eye}
                        skeleton={nodes.EyeRight.skeleton}
                        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Head"
                        geometry={nodes.Wolf3D_Head.geometry}
                        material={materials.Wolf3D_Skin}
                        skeleton={nodes.Wolf3D_Head.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Teeth"
                        geometry={nodes.Wolf3D_Teeth.geometry}
                        material={materials.Wolf3D_Teeth}
                        skeleton={nodes.Wolf3D_Teeth.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/alex.gltf');
