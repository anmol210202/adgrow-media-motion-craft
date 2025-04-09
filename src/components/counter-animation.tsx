
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "countup.js";

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

  useEffect(() => {
    if (isInView && !hasAnimated && countUpRef.current) {
      const countUp = new CountUp(countUpRef.current, end, {
        duration: duration,
        suffix: suffix,
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
      });
      
      if (!countUp.error) {
        countUp.start();
        setHasAnimated(true);
      } else {
        console.error(countUp.error);
      }
    }
  }, [isInView, end, suffix, duration, hasAnimated]);

  return (
    <div ref={sectionRef} className="text-center">
      <span
        ref={countUpRef}
        className="text-4xl md:text-5xl font-bold text-primary mb-2"
      >
        0
      </span>
      <div className="line-gradient mt-2 mx-auto w-16" />
    </div>
  );
}
