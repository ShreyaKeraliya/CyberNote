"use client";

import { useEffect, useState } from "react";
import {
  Shield,
  Zap,
  Globe,
  Cloud,
  Lock,
  Bug,
  Server,
  Radar,
  Cpu,
} from "lucide-react";

export default function CyberGlobeIllustration() {
  const [rotation, setRotation] = useState(0);
  const [attacks, setAttacks] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [dataTransfers, setDataTransfers] = useState<Array<{ id: number; from: number; to: number }>>([]);

  const connectionPoints = [
    { x: 0, y: -80 },
    { x: 60, y: -40 },
    { x: 80, y: 20 },
    { x: -70, y: 30 },
    { x: -50, y: -60 },
    { x: 30, y: 70 },
  ];


const floatingIcons = [
  { Icon: Shield, color: "text-emerald-400", top: "12%", left: "-2%", x: 14, y: 18, dur: 18 },
  { Icon: Zap, color: "text-yellow-400", bottom: "28%", left: "6%", x: -16, y: 14, dur: 10 },
  { Icon: Globe, color: "text-primary", top: "18%", right: "-1%", x: 12, y: -18, dur: 12 },
  { Icon: Cloud, color: "text-sky-400", bottom: "18%", right: "-1%", x: -14, y: -16, dur: 19 },

  { Icon: Lock, color: "text-green-400", top: "-5%", left: "32%", x: 18, y: 10, dur: 14 },
  { Icon: Bug, color: "text-red-400", top: "42%", right: "-4%", x: -12, y: 16, dur: 11 },
  { Icon: Server, color: "text-indigo-400", bottom: "49%", left: "-2%", x: 16, y: -12, dur: 13 },
  { Icon: Cpu, color: "text-cyan-400", top: "-8%", right: "20%", x: -18, y: 12, dur: 16 },
];


const randomFloat = () => ({
  animationDuration: `${6 + Math.random() * 4}s`, // faster than before
  animationDelay: `${Math.random() * 2}s`,
  transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
});


  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    const attackInterval = setInterval(() => {
      const newAttack = {
        id: Date.now(),
        x: Math.random() * 360,
        y: Math.random() * 180 - 90,
      };
      setAttacks((prev) => [...prev.slice(-5), newAttack]);
    }, 1500);

    // Data transfer animation between points
    const transferInterval = setInterval(() => {
      const from = Math.floor(Math.random() * connectionPoints.length);
      let to = Math.floor(Math.random() * connectionPoints.length);
      while (to === from) {
        to = Math.floor(Math.random() * connectionPoints.length);
      }
      
      const newTransfer = {
        id: Date.now(),
        from,
        to,
      };
      setDataTransfers((prev) => [...prev.slice(-3), newTransfer]);

      // Remove transfer after animation completes
      setTimeout(() => {
        setDataTransfers((prev) => prev.filter(t => t.id !== newTransfer.id));
      }, 2000);
    }, 1200);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(attackInterval);
      clearInterval(transferInterval);
    };
  }, []);

  const getPointPosition = (point: { x: number; y: number }) => {
    const angle = (rotation * Math.PI) / 180;
    const x = 200 + point.x * Math.cos(angle) - point.y * Math.sin(angle);
    const y = 200 + point.x * Math.sin(angle) + point.y * Math.cos(angle);
    return { x, y };
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-pulse-slow"></div>
      </div>

      <svg viewBox="0 0 400 400" className="w-full h-full max-w-lg">
        <defs>
          <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
          </linearGradient>
          
          <radialGradient id="glowGradient">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Globe Glow */}
        <circle cx="200" cy="200" r="130" fill="url(#glowGradient)" opacity="0.5" />

        {/* Globe Base */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="url(#globeGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />

        {/* Latitude Lines */}
        {[-60, -30, 0, 30, 60].map((lat, i) => (
          <ellipse
            key={`lat-${i}`}
            cx="200"
            cy="200"
            rx="100"
            ry={Math.abs(100 * Math.cos((lat * Math.PI) / 180))}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}

        {/* Longitude Lines */}
        {[0, 30, 60, 90, 120, 150].map((lon, i) => (
          <ellipse
            key={`lon-${i}`}
            cx="200"
            cy="200"
            rx={Math.abs(100 * Math.cos(((lon - rotation) * Math.PI) / 180))}
            ry="100"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            opacity="0.3"
            transform={`rotate(${rotation} 200 200)`}
          />
        ))}

        {/* Connection Lines (Static) */}
        {connectionPoints.map((fromPoint, i) => {
          const from = getPointPosition(fromPoint);
          return connectionPoints.slice(i + 1).map((toPoint, j) => {
            const to = getPointPosition(toPoint);
            return (
              <line
                key={`connection-${i}-${j}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                opacity="0.15"
                strokeDasharray="2 3"
              />
            );
          });
        })}

        {/* Data Transfer Lines (Animated) */}
        {dataTransfers.map((transfer) => {
          const from = getPointPosition(connectionPoints[transfer.from]);
          const to = getPointPosition(connectionPoints[transfer.to]);
          
          return (
            <g key={transfer.id}>
              {/* Connection line glow */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.6"
                filter="url(#glow)"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.6;0"
                  dur="2s"
                  fill="freeze"
                />
              </line>
              
              {/* Moving data packet */}
              <circle r="3" fill="hsl(var(--primary))" filter="url(#glow)">
                <animateMotion
                  dur="2s"
                  fill="freeze"
                  path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                />
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Connection Points */}
        {connectionPoints.map((point, i) => {
          const pos = getPointPosition(point);
          const isActiveTransfer = dataTransfers.some(
            t => t.from === i || t.to === i
          );
          
          return (
            <g key={i}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r="4"
                fill="hsl(var(--primary))"
                filter="url(#glow)"
                opacity={isActiveTransfer ? 1 : 0.7}
              >
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={pos.x}
                cy={pos.y}
                r="8"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity={isActiveTransfer ? 0.5 : 0.3}
              >
                <animate
                  attributeName="r"
                  values="8;16;8"
                  dur="2s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0;0.3"
                  dur="2s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Attack Visualizations */}
        {attacks.map((attack) => {
          const angle = ((attack.x - rotation) * Math.PI) / 180;
          const distance = Math.abs(Math.cos((attack.y * Math.PI) / 180)) * 100;
          const x = 200 + distance * Math.cos(angle);
          const y = 200 + distance * Math.sin(angle);
          
          return (
            <g key={attack.id}>
              <circle
                cx={x}
                cy={y}
                r="0"
                fill="hsl(var(--accent))"
                opacity="0.8"
              >
                <animate
                  attributeName="r"
                  from="0"
                  to="20"
                  dur="1s"
                  fill="freeze"
                />
                <animate
                  attributeName="opacity"
                  from="0.8"
                  to="0"
                  dur="1s"
                  fill="freeze"
                />
              </circle>
              <line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="hsl(var(--accent))"
                strokeWidth="1"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="1s"
                  fill="freeze"
                />
              </line>
            </g>
          );
        })}

        {/* Orbital Rings */}
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.2"
          strokeDasharray="5 10"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          opacity="0.15"
          strokeDasharray="3 8"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 200 200"
            to="0 200 200"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Center Cloud Container */}
        <circle cx="200" cy="200" r="35" fill="hsl(var(--card))" opacity="0.9" />
        <circle 
          cx="200" 
          cy="200" 
          r="35" 
          fill="none" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2"
          opacity="0.5"
        >
          <animate
            attributeName="r"
            values="35;37;35"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Cloud Icon SVG Path */}
        <g transform="translate(200, 200)">
          {/* Cloud shape */}
          <path
            d="M -12 -2 Q -12 -8 -6 -8 Q -4 -12 2 -12 Q 8 -12 10 -8 Q 16 -8 16 -2 Q 16 2 12 4 L -8 4 Q -12 2 -12 -2 Z"
            fill="hsl(var(--primary))"
            opacity="0.8"
          />
          
          {/* Upload/Download arrows inside cloud */}
          <g opacity="0.9">
            {/* Upload arrow */}
            <path
              d="M -4 2 L -4 -4 M -4 -4 L -6 -2 M -4 -4 L -2 -2"
              stroke="hsl(var(--background))"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* Download arrow */}
            <path
              d="M 4 -4 L 4 2 M 4 2 L 2 0 M 4 2 L 6 0"
              stroke="hsl(var(--background))"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {/* Data particles around cloud */}
          {[0, 90, 180, 270].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const radius = 45;
            return (
              <circle
                key={i}
                cx={Math.cos(rad) * radius}
                cy={Math.sin(rad) * radius}
                r="1.5"
                fill="hsl(var(--primary))"
                opacity="0.6"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 0 0`}
                  to={`360 0 0`}
                  dur="8s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="2s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>
      </svg>

{/* Floating Micro Icons */}
{floatingIcons.map(({ Icon, color, x, y, dur, ...pos }, i) => (
  <div
    key={i}
    className="absolute pointer-events-none"
    style={{
      ...pos,
      animation: `slow-drift ${dur}s ease-in-out infinite`,
      ["--x"]: `${x}px`,
      ["--y"]: `${y}px`,
    }}
  >
    <div className="cyber-card p-3 rounded-lg bg-card/80 backdrop-blur-md border border-primary/30 shadow-lg">
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
  </div>
))}




      {/* Center Cloud Icon (React component overlay) */}
      {/* Center Secure Core */}
<g transform="translate(200, 200)">
  {/* Hexagon */}
  <polygon
    points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11"
    fill="hsl(var(--card))"
    stroke="hsl(var(--primary))"
    strokeWidth="2"
    opacity="0.9"
  >
    <animate
      attributeName="opacity"
      values="0.7;1;0.7"
      dur="3s"
      repeatCount="indefinite"
    />
  </polygon>

  {/* Inner Shield */}
  <path
    d="M 0 -10 L 8 -6 V 2 C 8 6 0 10 0 10 C 0 10 -8 6 -8 2 V -6 Z"
    fill="hsl(var(--primary))"
    opacity="0.85"
  />

  {/* Pulse ring */}
  <circle
    r="26"
    fill="none"
    stroke="hsl(var(--primary))"
    strokeWidth="1"
    opacity="0.4"
  >
    <animate
      attributeName="r"
      values="26;40"
      dur="2.5s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="opacity"
      values="0.4;0"
      dur="2.5s"
      repeatCount="indefinite"
    />
  </circle>
</g>


      {/* Stats */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-green-500/30">
          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-green-500" />
            <span className="text-xs font-mono text-green-500">PROTECTED</span>
          </div>
        </div>
        <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30">
          <div className="flex items-center gap-2">
            <Cloud className="w-3 h-3 text-primary" />
            <span className="text-xs font-mono text-primary">CLOUD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
