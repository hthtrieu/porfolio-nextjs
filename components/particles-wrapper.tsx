"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesContainer = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: { value: 60 },
          size: { value: 1 },
          opacity: { value: 0.4 },
          move: { enable: true, speed: 0.4 },
        },
      }}
    />
  );
};

export default ParticlesContainer;
