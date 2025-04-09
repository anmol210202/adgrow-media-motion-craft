
import { useEffect, useRef, useState } from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

export default function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate the mouse position relative to the center of the screen
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      
      setMousePosition({ x, y });
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const { clientX, clientY } = e.touches[0];
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX / innerWidth) * 2 - 1;
        const y = (clientY / innerHeight) * 2 - 1;
        
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div 
      ref={backgroundRef}
      className={`interactive-bg absolute inset-0 -z-10 overflow-hidden ${className || ''}`}
      aria-hidden="true"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Interactive gradient orbs that follow mouse/touch */}
      <div 
        className="gradient-orb gradient-orb-1" 
        style={{ 
          transform: `translate3d(${mousePosition.x * -30}px, ${mousePosition.y * -30}px, 0) scale(${1 + Math.abs(mousePosition.x) * 0.1})` 
        }}
      />
      <div 
        className="gradient-orb gradient-orb-2" 
        style={{ 
          transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0) scale(${1 + Math.abs(mousePosition.y) * 0.1})` 
        }}
      />
      <div 
        className="gradient-orb gradient-orb-3" 
        style={{ 
          transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0) rotate(${mousePosition.x * 5}deg)` 
        }}
      />
      
      {/* Parallax grid lines for depth effect */}
      <div className="absolute inset-0 grid-lines" style={{ 
        transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0)` 
      }}></div>
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[100px]"></div>
    </div>
  );
}
