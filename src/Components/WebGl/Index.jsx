import React from "react";
import { Canvas } from "@react-three/fiber";
import Links from "./Links";

export default function Index() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <Canvas camera={{ fov: 75, near: 0.1, far: 80, position: [0, 0, 5] }}>
        <ambientLight intensity={1} color={"#ffffff"} />
        <Links />
      </Canvas>
    </div>
  );
}
