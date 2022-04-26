import type { NextPage } from 'next';
import Head from 'next/head';
import { Canvas } from '@react-three/fiber';
import { BakeShadows, Stars } from '@react-three/drei';
import { Suspense, useState } from 'react';
import Avatar from '@/components/Avatar';
import * as THREE from 'three';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Triceratops from '@/components/Triceratops';
import Cam from '@/components/Cam';

const Home: NextPage = () => {
    const [step, setStep] = useState('about');
    const handleStep = step => {
        setStep(step);
    };
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>Alexandre Prévot</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header handleStep={setStep} />
            <main
                className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"
                onScroll={() => console.log('scrolled')}>
                <section className=" top-0 left-0 h-screen w-screen">
                    <Canvas shadows id="#canvas-container">
                        <fog attach="fog" args={['black', 0, 20]} />
                        <Suspense fallback={<Loader />}>
                            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                            <Avatar visible={step === 'about' ? true : false} position={[0, 0, -0.65]} />
                            <Triceratops
                                visible={step === 'projects' ? true : false}
                                scale={0.2}
                                position={[0, 1, 0]}
                                rotation-x={0.35}
                                rotation-y={-0.45}
                                rotation-z={0.5}
                            />
                            <BakeShadows />
                            <Cam step={step} />
                        </Suspense>
                    </Canvas>
                </section>
                <div className="absolute top-0 right-0 h-screen w-1/2  py-28">
                    <div className="grid items-start justify-center gap-8">
                        <div className="group relative">
                            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div className="relative flex flex-col items-center gap-6 rounded-lg bg-black px-7 py-4 leading-none opacity-95">
                                {step === 'about' && (
                                    <>
                                        <h1 className="text-5xl ">Alexandre Prévot</h1>
                                        <div className="flex flex-col items-center gap-1">
                                            <h2 className="text-left text-2xl font-semibold text-pink-600">
                                                Certifications & diplomas
                                            </h2>
                                            <span>RNCP - Expert en Informatique et Système d'Information</span>
                                            <a
                                                href="https://www.credly.com/badges/057dcc62-adb3-45ed-83dc-2ea37a52b2af/linked_in?t=rac5kc"
                                                target="_blank">
                                                <span className="text-indigo-400 transition duration-200 hover:text-purple-600">
                                                    PSM1 - Professional Scrum Master
                                                </span>
                                            </a>
                                            <span>TOEIC (880 points)</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <h2 className="text-left text-2xl font-semibold text-pink-600">
                                                My vision
                                            </h2>
                                            <div className="max-w-[600px] text-justify text-lg italic leading-6">
                                                Passionate about new technologies, I make sure I am up to the challenges
                                                of tomorrow. I accompany clients in their digital transformation both in
                                                the deployment of new tools and in the continuous improvement of their
                                                processes.
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <h2 className="text-left text-2xl font-semibold text-pink-600">
                                                Other things to know
                                            </h2>
                                            <div className="max-w-[600px] text-justify text-lg  leading-6">
                                                If you don't find me behind my computer, working on personal projects or
                                                furthering my knowledge about technologies and management, then I'm
                                                probably working out at the gym. If not, it's because I'm spending time
                                                with my family or friends.
                                            </div>
                                        </div>
                                    </>
                                )}
                                {step === 'projects' && (
                                    <>
                                        <h1 className="text-5xl ">Tickeratops</h1>
                                        <p className="italic text-indigo-300">(Jan 2022 - Today)</p>
                                        <div className="flex flex-col items-center gap-1">
                                            <h2 className="text-left text-2xl font-semibold text-pink-600">Project</h2>
                                            <div className="max-w-[600px] text-justify text-lg italic leading-6">
                                                Development of a solution to interface the communication between Ops and
                                                developers, to manage requests and incidents through a real-time kanban.
                                                Tickeratops helps Ops by automating some of their tasks.
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <h2 className="text-left text-2xl font-semibold text-pink-600">Roles</h2>
                                            <span>Fullstack Developer</span>
                                            <span className="text-indigo-400 transition duration-200 hover:text-purple-600">
                                                Mentor
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <h2 className="text-left text-2xl font-semibold text-pink-600">
                                                Activities
                                            </h2>
                                            <div className="max-w-[600px] text-justify text-lg  leading-6">
                                                <p>
                                                    As a developer on the Scrum team, I contribute to the delivery of
                                                    high-value increments in each sprint iteration. I'm a driving force
                                                    in technologies, processes and work methods. I bring a critical eye
                                                    to maximize the whole process to deliver product focused on quality
                                                    to the customer.
                                                </p>
                                                <p className="mt-2">
                                                    I also contribute to the training of interns and alternates, both on
                                                    backend and frontend technologies, or on the adoption of the agile
                                                    methodology
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <h2 className="text-left text-2xl font-semibold text-pink-600">Stack</h2>
                                            <span>
                                                <b className="text-indigo-400">Frontend :</b> NextJS, TailwindCSS,
                                                GraphQL
                                            </span>
                                            <span>
                                                <b className="text-indigo-400">Backend :</b> NestJS, MongoDB, Mongoose
                                            </span>
                                            <span>
                                                <b className="text-indigo-400">Tests :</b> Gherkin (BDD), Cypress, Jest
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="group relative mx-auto mt-3 w-fit">
                            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 transition duration-300 group-hover:blur"></div>
                            <div className="relative flex cursor-pointer flex-col items-center rounded-lg bg-black px-7 py-4 text-3xl leading-none opacity-95">
                                HIRE ME
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
