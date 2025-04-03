import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadAll } from "@tsparticles/all";
// import type { Engine } from "tsparticles-engine"; 

const ConfettiBurst = ({ trigger }: { trigger: boolean }) => {
  const particlesInit = useCallback(async (engine: unknown) => {
    await loadAll(engine as any);
  }, []);
  if (!trigger) return null;

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: false,
        particles: {
          number: { value: 0 },
          shape: {
            type: "char",
            character: [
              { value: "⭐️", font: "Verdana", style: "", weight: "400" },
              { value: "🏆", font: "Verdana", style: "", weight: "400" },
              { value: "🎉", font: "Verdana", style: "", weight: "400" },
              { value: "✨", font: "Verdana", style: "", weight: "400" },
            ],
          },
          size: { value: 16 },
          move: {
            enable: true,
            speed: 10,
            direction: "none",
            outModes: { default: "destroy" },
          },
          opacity: { value: 1 },
        },
        emitters: {
          direction: "top",
          rate: { quantity: 10, delay: 0 },
          size: { width: 0, height: 0 },
          position: { x: 50, y: 50 },
          life: { duration: 0.2, count: 1 },
        },
      }}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};

export default ConfettiBurst;
