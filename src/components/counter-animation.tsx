
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ end, suffix = "", duration = 2.5 }: CounterProps) {
  const countUpRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number | null = null;
      let animationFrame: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <div ref={sectionRef} className="text-center">
      <span
        ref={countUpRef}
        className="text-4xl md:text-5xl font-bold text-primary mb-2"
      >
        {count}{suffix}
      </span>
      <div className="line-gradient mt-2 mx-auto w-16" />
    </div>
  );
}
