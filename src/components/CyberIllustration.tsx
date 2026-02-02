"use client";

import { useEffect, useState } from "react";

export default function CyberIllustration() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 30px rgba(var(--primary-rgb), 0.3))" }}
      >
        {/* Outer Ring */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeDasharray="10 5"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center",
          }}
        />

        {/* Middle Ring */}
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          strokeDasharray="8 4"
          style={{
            transform: `rotate(${-rotation * 1.5}deg)`,
            transformOrigin: "center",
          }}
        />

        {/* Inner Glow Circle */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="url(#radialGlow)"
          opacity="0.3"
        />

        {/* Shield Shape */}
        <path
          d="M 200 80 L 260 100 L 260 180 Q 260 240 200 280 Q 140 240 140 180 L 140 100 Z"
          fill="url(#shieldGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          style={{
            filter: "drop-shadow(0 0 10px rgba(var(--primary-rgb), 0.5))",
          }}
        />

        {/* Lock Icon */}
        <rect
          x="180"
          y="170"
          width="40"
          height="50"
          rx="5"
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        <path
          d="M 185 170 L 185 155 Q 185 140 200 140 Q 215 140 215 155 L 215 170"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        <circle cx="200" cy="195" r="5" fill="hsl(var(--primary))" />

        {/* Orbiting Dots */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const orbitAngle = (rotation + angle) * (Math.PI / 180);
          const x = 200 + Math.cos(orbitAngle) * 120;
          const y = 200 + Math.sin(orbitAngle) * 120;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="hsl(var(--primary))"
              opacity="0.8"
            >
              <animate
                attributeName="r"
                values="4;6;4"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* Binary Code Streams */}
        {[30, 90, 150, 210, 270, 330].map((angle, i) => (
          <text
            key={i}
            x={200 + Math.cos((angle * Math.PI) / 180) * 150}
            y={200 + Math.sin((angle * Math.PI) / 180) * 150}
            fill="hsl(var(--primary))"
            fontSize="12"
            fontFamily="monospace"
            opacity="0.5"
            style={{
              transform: `rotate(${rotation * 0.5}deg)`,
              transformOrigin: "center",
            }}
          >
            {Math.random() > 0.5 ? "01" : "10"}
          </text>
        ))}

        {/* Corner Brackets */}
        <path
          d="M 50 50 L 70 50 L 70 70"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 350 50 L 330 50 L 330 70"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 50 350 L 70 350 L 70 330"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 350 350 L 330 350 L 330 330"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--card))" stopOpacity="0.8" />
          </linearGradient>

          <radialGradient id="radialGlow">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Floating Labels */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30">
          <span className="text-xs font-mono text-primary">ENCRYPTED</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30">
          <span className="text-xs font-mono text-muted-foreground">SECURED</span>
        </div>
      </div>
    </div>
  );
}
