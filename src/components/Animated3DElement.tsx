"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Lock, Key, Terminal, Code, FileCode } from "lucide-react";

export default function Animated3DElement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 20;
      const y = (e.clientY - rect.top - rect.height / 2) / 20;
      
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [
    { Icon: Terminal, delay: 0, orbit: 1 },
    { Icon: Code, delay: 1, orbit: 2 },
    { Icon: FileCode, delay: 2, orbit: 3 },
    { Icon: Key, delay: 3, orbit: 4 },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] flex items-center justify-center"
      style={{
        transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
        transition: "transform 0.1s ease-out"
      }}
    >
      {/* Main Shield - Center */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 animate-pulse-slow">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
        </div>

        {/* Rotating Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 border border-primary/20 rounded-full animate-spin-reverse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[420px] h-[420px] border border-primary/10 rounded-full animate-spin-slow-delayed"></div>
        </div>

        {/* Central Shield */}
        <div className="relative z-10 cyber-card rounded-3xl p-12 bg-card/50 backdrop-blur-xl border-2 border-primary/30 shadow-2xl shadow-primary/20">
          <div className="relative">
            {/* Shield Icon */}
            <Shield className="w-40 h-40 text-primary animate-float" strokeWidth={1.5} />
            
            {/* Lock Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Lock className="w-16 h-16 text-primary animate-pulse" />
            </div>

            {/* Binary Rain Effect */}
            <div className="absolute -inset-4 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-xs font-mono text-primary animate-binary-fall"
                  style={{
                    left: `${i * 12}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </div>
              ))}
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/50"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/50"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/50"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/50"></div>
        </div>

        {/* Floating Icons Around Shield */}
        {floatingIcons.map(({ Icon, delay, orbit }, index) => (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center animate-orbit"
            style={{
              animationDelay: `${delay}s`,
              animationDuration: `${8 + orbit}s`
            }}
          >
            <div className="absolute" style={{ top: `-${orbit * 40}px` }}>
              <div className="cyber-card p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-lg">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        ))}

        {/* Data Streams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-data-stream"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Particle Dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Scanning Line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-horizontal"></div>
      </div>

      {/* Text Labels */}
      <div className="absolute top-0 left-0 right-0 text-center">
        <div className="inline-block cyber-border rounded-full px-4 py-2 bg-card/80 backdrop-blur-sm">
          <span className="text-xs font-mono text-primary">SECURE</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <div className="inline-block cyber-border rounded-full px-4 py-2 bg-card/80 backdrop-blur-sm">
          <span className="text-xs font-mono text-muted-foreground">PROTECTED</span>
        </div>
      </div>
    </div>
  );
}
