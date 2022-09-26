import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Face from "../components/Face";
import { PresentationControls } from "@react-three/drei";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Hermansson</title>
        <meta
          name="description"
          content="Adam Hermansson, software developer, portfolio site"
        />
        <link rel="icon" href="/logo192.png" />
      </Head>

      <Layout>
        <h1 className="text-3xl font-bold text-center">Hi, I&apos;m Adam</h1>
        <div className="bg-zinc-800 h-64 rounded-lg self-center touch-none">
          <Suspense fallback={null}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <PresentationControls
                global
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 4, tension: 1500 }}
                rotation={[0, 0.3, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              >
                <Face position={[0, -8, 0]} scale={14} />
              </PresentationControls>
            </Canvas>
          </Suspense>
        </div>
        <div className="self-center m-4 lg:w-1/2">
          <p className="text-zinc-400 font-thin">psst... drag my face</p>

          <p className="text-xl font-medium">
            Welcome to my corner of cyberspace! I&apos;m a swedish software
            developer, amateur drummer and pickle enjoyer.
          </p>
        </div>

        {/* {new Array(50).fill(1).map((e, i) => (
          <div key={i}>
            <h1 className="text-3xl font-bold underline">Hello world {i}!</h1>
          </div>
        ))} */}
      </Layout>
    </>
  );
}
