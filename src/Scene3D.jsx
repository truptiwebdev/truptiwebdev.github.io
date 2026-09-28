
import { motion, useReducedMotion } from "framer-motion";

function BlossomBranch({ mirror = false }) {
  return (
    <svg
      viewBox="0 0 220 300"
      className={`blossom-branch ${mirror ? "branch-mirror" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="#655344"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 295 C48 238 75 198 93 143 C107 104 134 65 172 22" />
        <path d="M60 225 C42 187 27 161 12 133" />
        <path d="M75 195 C119 186 151 162 190 133" />
        <path d="M92 151 C65 123 49 102 44 73" />
        <path d="M117 101 C146 105 173 93 198 70" />
        <path d="M42 176 C24 172 15 162 8 151" />
        <path d="M143 162 C135 138 134 122 140 106" />
        <path d="M170 146 C180 121 190 111 207 103" />
        <path d="M155 45 C144 33 138 21 140 10" />
        <path d="M108 118 C112 94 107 79 96 62" />
      </g>

      {[
        [12, 133],
        [27, 151],
        [44, 73],
        [53, 101],
        [60, 121],
        [75, 195],
        [100, 185],
        [120, 178],
        [151, 162],
        [190, 133],
        [198, 70],
        [173, 93],
        [140, 106],
        [140, 10],
        [155, 45],
        [96, 62],
        [108, 118],
        [207, 103],
        [170, 146],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle
            r={3.5 + (i % 3)}
            fill={i % 2 ? "#f7eee4" : "#e8d3bb"}
            stroke="#cbb49a"
            strokeWidth=".45"
          />
          <circle
            cx="3"
            cy="-3"
            r="2"
            fill="#fffaf2"
            opacity=".9"
          />
          <circle
            cx="-3"
            cy="3"
            r="1.5"
            fill="#bba48c"
            opacity=".65"
          />
        </g>
      ))}
    </svg>
  );
}

function Arch({ side = "left" }) {
  const isLeft = side === "left";
  const ribs = Array.from({ length: 10 });

  return (
    <div className={`arch-scene ${isLeft ? "arch-scene-left" : "arch-scene-right"}`}>
      {/* Outer architectural arch */}
      <div className={`arch-outer ${isLeft ? "peach-arch" : "blue-arch"}`}>
        {/* Inner opening */}
        <div className="arch-inner">
          <div className="arch-pillars">
            {ribs.map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Large outer white border */}
      <div className="arch-border" />

      {/* Curved background panels */}
      <div className={`arch-back-panel ${isLeft ? "back-peach" : "back-blue"}`} />
      <div className="arch-back-inner" />

      {/* Decorative curved trim */}
      <div className="arch-trim" />
    </div>
  );
}

function Platform({ side = "left" }) {
  return (
    <motion.div
      className={`scene-platform platform-${side}`}
      animate={{ y: [0, -3, 0] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="platform-surface" />
      <div className="platform-body" />
      <div className="platform-bottom-trim" />
    </motion.div>
  );
}

function Sphere({ side = "left", small = false }) {
  return (
    <motion.div
      className={`scene-sphere sphere-${side} ${small ? "sphere-small" : ""}`}
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: small ? 4 : 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Scene3D() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="portfolio-scene">
        {/* Background */}
        <div className="scene-background" />

        {/* LEFT ARCHITECTURE */}
        <Arch side="left" />

        {/* RIGHT ARCHITECTURE */}
        <Arch side="right" />

        {/* Flowering branches */}
        <div className="branch-container branch-left">
          <BlossomBranch />
        </div>

        <div className="branch-container branch-right">
          <BlossomBranch mirror />
        </div>

        {/* Centre curved layers */}
        <div className="scene-wave wave-left-back" />
        <div className="scene-wave wave-left-front" />

        <div className="scene-wave wave-right-back" />
        <div className="scene-wave wave-right-front" />

        {/* Floor */}
        <div className="scene-floor">
          <div className="floor-light" />
          <div className="floor-reflection floor-peach" />
          <div className="floor-reflection floor-blue" />
        </div>

        {/* Side platforms */}
        <Platform side="left" />
        <Platform side="right" />

        {/* Decorative spheres */}
        <Sphere side="left" />
        <Sphere side="left" small />

        <Sphere side="right" />
        <Sphere side="right" small />

        {/* Soft centre fade */}
        <div className="scene-centre-fade" />
      </div>

      <style>{`
        /* =========================================
           FULL SCREEN SCENE
        ========================================= */

        .portfolio-scene {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          pointer-events: none;
          isolation: isolate;
          z-index: 0;
          background: #f9f7f6;
          perspective: 1500px;
        }

        .scene-background {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse at 50% 42%,
              #fffdfb 0%,
              #faf8f7 55%,
              #e8eaf0 100%
            );
        }

        /* =========================================
           ARCHITECTURE
        ========================================= */

        .arch-scene {
          position: absolute;
          top: -5%;
          height: 91%;
          width: 34vw;
          max-width: 580px;
          min-width: 380px;
          z-index: 2;
          transform-style: preserve-3d;
        }

        .arch-scene-left {
          left: 0;
        }

        .arch-scene-right {
          right: 0;
        }

        .arch-outer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 49% 49% 0 0 / 30% 30% 0 0;
          border: 1px solid rgba(255,255,255,.85);
          box-shadow:
            inset 8px 0 18px rgba(255,255,255,.7),
            inset -10px 0 22px rgba(90,90,110,.1),
            0 10px 30px rgba(70,70,90,.05);
        }

        .peach-arch {
          background: linear-gradient(
            90deg,
            #f1d7cb 0%,
            #e8cec4 55%,
            #f8e5dc 100%
          );
        }

        .blue-arch {
          background: linear-gradient(
            90deg,
            #9faabd 0%,
            #aeb9cb 50%,
            #d1d9e4 100%
          );
        }

        .arch-inner {
          position: absolute;
          top: 10%;
          bottom: 0;
          width: 66%;
          overflow: hidden;
          border-radius: 49% 49% 0 0 / 30% 30% 0 0;
          box-shadow:
            inset 8px 0 16px rgba(255,255,255,.6),
            inset -8px 0 15px rgba(80,80,100,.08);
        }

        .arch-scene-left .arch-inner {
          right: 0;
          background: linear-gradient(
            90deg,
            #f8e9e1,
            #fffaf6 55%,
            #eedbd3
          );
        }

        .arch-scene-right .arch-inner {
          left: 0;
          background: linear-gradient(
            90deg,
            #dce2eb,
            #aeb9ca 55%,
            #e0e5ed
          );
        }

        /* Pillars */

        .arch-pillars {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: space-evenly;
          padding-top: 8%;
        }

        .arch-pillars span {
          width: 5%;
          height: 100%;
          flex-shrink: 0;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,.78),
            rgba(180,160,155,.12),
            rgba(255,255,255,.7)
          );
          border-left: 1px solid rgba(255,255,255,.65);
          border-right: 1px solid rgba(130,120,130,.12);
          box-shadow: 2px 0 6px rgba(255,255,255,.15);
        }

        /* Outer white architectural border */

        .arch-border {
          position: absolute;
          top: -5%;
          bottom: 0;
          width: 20%;
          border-radius: 50% 50% 0 0 / 30% 30% 0 0;
          border: 2px solid rgba(255,255,255,.95);
          border-bottom: 0;
          background: linear-gradient(
            90deg,
            #fffefa,
            #f9f7f5 70%,
            rgba(255,255,255,.5)
          );
          box-shadow:
            inset 5px 0 8px rgba(255,255,255,.9),
            4px 0 12px rgba(100,100,120,.04);
        }

        .arch-scene-left .arch-border {
          right: 0;
        }

        .arch-scene-right .arch-border {
          left: 0;
        }

        /* =========================================
           CURVED BACK PANELS
        ========================================= */

        .arch-back-panel {
          position: absolute;
          top: 28%;
          width: 78%;
          height: 72%;
          border-top: 2px solid rgba(255,255,255,.9);
          box-shadow: inset 0 8px 15px rgba(255,255,255,.3);
        }

        .arch-scene-left .arch-back-panel {
          left: 45%;
          border-radius: 0 95% 0 0;
        }

        .arch-scene-right .arch-back-panel {
          right: 45%;
          border-radius: 95% 0 0 0;
        }

        .back-peach {
          background: linear-gradient(
            155deg,
            #f8f2ef,
            #dcdde3 55%,
            #aeb9ca
          );
        }

        .back-blue {
          background: linear-gradient(
            205deg,
            #e0e5ec,
            #b0bdcf 55%,
            #f2e5df
          );
        }

        .arch-back-inner {
          position: absolute;
          top: 48%;
          width: 100%;
          height: 52%;
          background: linear-gradient(
            160deg,
            rgba(255,255,255,.94),
            #e7e6e9 70%,
            #c4ccd8
          );
          border-top: 2px solid rgba(255,255,255,.95);
        }

        .arch-scene-left .arch-back-inner {
          left: 40%;
          border-radius: 0 90% 0 0;
        }

        .arch-scene-right .arch-back-inner {
          right: 40%;
          border-radius: 90% 0 0 0;
        }

        .arch-trim {
          position: absolute;
          top: 29%;
          width: 70%;
          height: 65%;
          border-top: 2px solid rgba(218,171,148,.85);
          border-radius: 0 90% 0 0;
          filter: drop-shadow(0 1px 1px rgba(255,255,255,.9));
        }

        .arch-scene-left .arch-trim {
          left: 35%;
        }

        .arch-scene-right .arch-trim {
          right: 35%;
          transform: scaleX(-1);
        }

        /* =========================================
           FLOWERING BRANCHES
        ========================================= */

        .branch-container {
          position: absolute;
          z-index: 5;
          width: clamp(150px, 17vw, 270px);
          height: clamp(210px, 28vw, 380px);
          bottom: 25%;
          opacity: .95;
        }

        .branch-left {
          left: -1%;
        }

        .branch-right {
          right: -1%;
        }

        .blossom-branch {
          width: 100%;
          height: 100%;
          overflow: visible;
          filter: drop-shadow(1px 2px 1px rgba(90,70,50,.12));
        }

        .branch-mirror {
          transform: scaleX(-1);
        }

        /* =========================================
           SIDE PLATFORMS
        ========================================= */

        .scene-platform {
          position: absolute;
          bottom: 7%;
          width: clamp(250px, 31vw, 530px);
          height: clamp(100px, 13vw, 190px);
          z-index: 6;
          transform-style: preserve-3d;
        }

        .platform-left {
          left: -1%;
        }

        .platform-right {
          right: -1%;
        }

        .platform-surface {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 44%;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.98);
          background: linear-gradient(
            180deg,
            #fffefa 0%,
            #f9f6f3 70%,
            #eae8e9 100%
          );
          box-shadow:
            inset 0 5px 10px rgba(255,255,255,.9),
            0 5px 12px rgba(80,80,100,.08);
          z-index: 2;
        }

        .platform-body {
          position: absolute;
          top: 20%;
          left: 0;
          width: 100%;
          height: 60%;
          background: linear-gradient(
            180deg,
            #d9dbe2,
            #aeb5c3 75%,
            #9ca5b5
          );
          border-radius: 0 0 7px 7px;
          box-shadow:
            inset 0 -5px 12px rgba(80,80,100,.12),
            0 12px 20px rgba(80,80,100,.08);
        }

        .platform-bottom-trim {
          position: absolute;
          left: 0;
          bottom: 17%;
          width: 100%;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(
            90deg,
            #e7b39f,
            #fff4e7,
            #e8b5a4
          );
          filter: blur(1px);
        }

        /* =========================================
           GLOSSY SPHERES
        ========================================= */

        .scene-sphere {
          position: absolute;
          width: clamp(100px, 13vw, 220px);
          height: clamp(100px, 13vw, 220px);
          border-radius: 50%;
          z-index: 8;
          background: radial-gradient(
            circle at 30% 25%,
            #fff 0%,
            #fff9f2 15%,
            #f1ddd6 47%,
            #d0c3c8 78%,
            #a8aab5 100%
          );
          box-shadow:
            inset -10px -12px 24px rgba(70,65,80,.18),
            inset 5px 5px 12px rgba(255,255,255,.85),
            0 15px 22px rgba(65,65,80,.12);
        }

        .sphere-left {
          left: 0;
          bottom: 15%;
        }

        .sphere-right {
          right: 0;
          bottom: 15%;
        }

        .scene-sphere.sphere-small {
          width: clamp(28px, 3vw, 50px);
          height: clamp(28px, 3vw, 50px);
          bottom: 15%;
        }

        .sphere-left.sphere-small {
          left: 15%;
        }

        .sphere-right.sphere-small {
          right: 15%;
          background: radial-gradient(
            circle at 30% 25%,
            #fff,
            #f2d0d0 50%,
            #b6a1aa
          );
        }

        /* =========================================
           FLOOR
        ========================================= */

        .scene-floor {
          position: absolute;
          bottom: 0;
          left: -5%;
          width: 110%;
          height: 17%;
          z-index: 4;
          background: linear-gradient(
            180deg,
            #fffdfa,
            #f4f2f4 55%,
            #e4e5ea
          );
          border-top: 2px solid rgba(255,255,255,.95);
          box-shadow:
            inset 0 8px 20px rgba(255,255,255,.85),
            0 -5px 20px rgba(100,100,120,.04);
        }

        .floor-light {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 90%;
          height: 20%;
          border-radius: 50%;
          background: rgba(255,255,255,.8);
          filter: blur(15px);
        }

        .floor-reflection {
          position: absolute;
          top: 35%;
          width: 35%;
          height: 30%;
          border-radius: 50%;
          filter: blur(20px);
          opacity: .45;
        }

        .floor-peach {
          left: 0;
          background: rgba(234,190,174,.28);
        }

        .floor-blue {
          right: 0;
          background: rgba(164,180,204,.28);
        }

        /* =========================================
           CENTRE - KEEP CLEAR
        ========================================= */

        .scene-centre-fade {
          position: absolute;
          inset: 0;
          z-index: 9;
          background: radial-gradient(
            ellipse at center,
            rgba(255,255,255,.20) 0%,
            rgba(255,255,255,.06) 38%,
            transparent 65%
          );
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1100px) {
          .arch-scene {
            width: 39vw;
            min-width: 0;
          }

          .branch-container {
            width: 17vw;
            height: 27vw;
          }

          .scene-platform {
            width: 34vw;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {
          .arch-scene {
            width: 43vw;
            height: 70%;
            top: 0;
          }

          .arch-scene-left {
            left: 0;
          }

          .arch-scene-right {
            right: 0;
          }

          .arch-inner {
            width: 70%;
          }

          .arch-back-panel {
            width: 75%;
            height: 50%;
          }

          .arch-back-inner {
            top: 48%;
            height: 35%;
          }

          .branch-container {
            width: 26vw;
            height: 36vw;
            bottom: 25%;
          }

          .branch-left {
            left: -4%;
          }

          .branch-right {
            right: -4%;
          }

          .scene-platform {
            width: 46vw;
            height: 90px;
            bottom: 8%;
          }

          .platform-left {
            left: -5%;
          }

          .platform-right {
            right: -5%;
          }

          .scene-sphere {
            width: 95px;
            height: 95px;
          }

          .sphere-left {
            left: -2%;
            bottom: 16%;
          }

          .sphere-right {
            right: -2%;
            bottom: 16%;
          }

          .scene-sphere.sphere-small {
            width: 30px;
            height: 30px;
          }

          .sphere-left.sphere-small {
            left: 17%;
          }

          .sphere-right.sphere-small {
            right: 17%;
          }

          .scene-floor {
            height: 17%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-scene *,
          .portfolio-scene *::before,
          .portfolio-scene *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}