
import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

export default function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Optional: Add any initialization for the animation here
    const background = backgroundRef.current;
    if (!background) return;
    
    // Animation is primarily handled by CSS, but we could add dynamic effects here
  }, []);

  return (
    <div 
      ref={backgroundRef}
      className={`absolute inset-0 -z-10 overflow-hidden ${className || ''}`}
      aria-hidden="true"
    >
      {/* Gradient orbs */}
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="gradient-orb gradient-orb-2"></div>
      <div className="gradient-orb gradient-orb-3"></div>
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[100px]"></div>
    </div>
  );
}
