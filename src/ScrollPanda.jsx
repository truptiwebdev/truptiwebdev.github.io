import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function ScrollPanda() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Panda moves from top (0%) to bottom (100%) of the tree as you scroll
  const pandaY = useTransform(scrollYProgress, [0, 1], ["8%", "82%"]);

  // Slight 3D tilt that changes with scroll
  const rotateY = useTransform(scrollYProgress, [0, 1], [12, -8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [6, -4]);

  if (reduce) return null; // respect reduced motion

  return (
    <div className="fixed right-4 md:right-8 top-0 bottom-0 w-20 md:w-28 pointer-events-none z-40 hidden sm:block">
      {/* Tree trunk */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[6%] bottom-[8%] w-3 md:w-4 rounded-full bg-gradient-to-b from-[#8B5E3C] via-[#6B4226] to-[#4A2F1A] shadow-[4px_0_12px_rgba(0,0,0,0.15)]" />

      {/* Tree branches (simple decorative) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[12%] w-10 h-1.5 bg-[#6B4226] rounded-full -rotate-12 origin-left" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[28%] w-8 h-1.5 bg-[#6B4226] rounded-full rotate-12 origin-left" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[48%] w-11 h-1.5 bg-[#6B4226] rounded-full -rotate-6 origin-left" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[68%] w-9 h-1.5 bg-[#6B4226] rounded-full rotate-8 origin-left" />

      {/* Leaves at top */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[4%] text-3xl md:text-4xl">
        🌿
      </div>

      {/* Cute Panda that moves with scroll */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-4xl md:text-5xl select-none"
        style={{
          top: pandaY,
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
      >
        <span className="drop-shadow-md">🐼</span>
      </motion.div>

      {/* Ground / base of tree */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[5%] w-10 h-3 bg-[#5C4033] rounded-full opacity-70" />
    </div>
  );
}