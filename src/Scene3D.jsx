import { motion, useReducedMotion } from "framer-motion";

/* =====================================================================
   Pure-CSS 3D background. No WebGL, no three.js, no GPU dependency —
   this renders identically in every browser. Uses real CSS 3D space
   (perspective + preserve-3d + translateZ) so panels have genuine
   depth and parallax as they drift, not just flat rotation.
===================================================================== */

const panels = [
  {
    w: 640, h: 480, top: "-10%", left: "-20%",
    bg: "#d1d5db", border: "1px solid #9ca3af", radius: 44,
    shadow: "0 60px 120px -20px rgba(0,0,0,0.22), 26px 26px 0 0 #9ca3af",
    base: "rotateY(34deg) rotateX(16deg) translateZ(-140px)",
    wobble: "rotateY(29deg) rotateX(11deg) translateZ(-90px)",
    duration: 20, delay: 0,
  },
  {
    w: 580, h: 520, top: "-2%", right: "-22%",
    bg: "#cbd5e1", border: "1px solid #94a3b8", radius: 48,
    shadow: "0 70px 140px -24px rgba(0,0,0,0.20), -28px 28px 0 0 #94a3b8",
    base: "rotateY(-40deg) rotateX(12deg) translateZ(-80px)",
    wobble: "rotateY(-35deg) rotateX(7deg) translateZ(-30px)",
    duration: 24, delay: 1.5,
  },
  {
    w: 420, h: 340, top: "26%", left: "-2%",
    bg: "#e2e8f0", border: "1px solid #94a3b8", radius: 34,
    shadow: "0 45px 90px -14px rgba(0,0,0,0.18), 20px 20px 0 0 #94a3b8",
    base: "rotateY(24deg) rotateX(-10deg) translateZ(150px)",
    wobble: "rotateY(19deg) rotateX(-5deg) translateZ(200px)",
    duration: 16, delay: 0.8,
  },
  {
    w: 340, h: 280, bottom: "14%", right: "3%",
    bg: "#94a3b8", border: "1px solid #64748b", radius: 30,
    shadow: "0 40px 80px -12px rgba(100,116,139,0.35), -18px 18px 0 0 #64748b",
    base: "rotateY(-28deg) rotateX(14deg) translateZ(110px)",
    wobble: "rotateY(-22deg) rotateX(9deg) translateZ(160px)",
    duration: 14, delay: 2.2,
  },
  {
    w: 230, h: 230, top: "54%", left: "45%",
    bg: "#e2e8f0", border: "1px solid #94a3b8", radius: 26,
    shadow: "0 34px 68px -10px rgba(0,0,0,0.16), 16px 16px 0 0 #94a3b8",
    base: "rotateY(42deg) rotateX(-20deg) translateZ(220px)",
    wobble: "rotateY(36deg) rotateX(-13deg) translateZ(270px)",
    duration: 12, delay: 0.4,
  },
  {
    w: 260, h: 200, top: "5%", left: "33%",
    bg: "#64748b", border: "1px solid #475569", radius: 22,
    shadow: "0 28px 56px -8px rgba(71,85,105,0.3), 14px 14px 0 0 #475569",
    base: "rotateY(16deg) rotateX(18deg) translateZ(90px)",
    wobble: "rotateY(10deg) rotateX(12deg) translateZ(130px)",
    duration: 18, delay: 3,
  },
  {
    w: 760, h: 220, bottom: "-60px", left: "5%",
    bg: "#d1d5db", border: "1px solid #9ca3af", radius: 30,
    shadow: "0 26px 52px -8px rgba(0,0,0,0.14)",
    base: "rotateX(60deg) translateZ(-20px)",
    wobble: "rotateX(55deg) translateZ(20px)",
    duration: 22, delay: 0.2,
  },
];

export default function Scene3D() {
  const reduce = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0"
        style={{ perspective: "1400px", perspectiveOrigin: "50% 30%" }}
      >
        {panels.map((p, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: p.w,
              height: p.h,
              top: p.top,
              left: p.left,
              right: p.right,
              bottom: p.bottom,
              background: p.bg,
              border: p.border,
              borderRadius: p.radius,
              transformStyle: "preserve-3d",
              boxShadow: p.shadow,
              willChange: "transform",
              transform: p.base,
            }}
            animate={reduce ? { transform: p.base } : { transform: [p.base, p.wobble, p.base] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 78%, rgba(255,255,255,0.6) 100%)",
        }}
      />
    </div>
  );
}