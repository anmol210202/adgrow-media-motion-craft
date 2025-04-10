
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AutoCarouselProps {
  children: React.ReactNode[];
  autoplaySpeed?: number; // in milliseconds
  className?: string;
  itemWidth?: string; // tailwind class for width
}

export const AutoCarousel = ({
  children,
  autoplaySpeed = 5000,
  className,
  itemWidth = "w-full md:w-[400px]",
}: AutoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = children.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % maxIndex);
      }, autoplaySpeed);
    }
  };

  useEffect(() => {
    resetTimer();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, maxIndex, autoplaySpeed]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % maxIndex);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + maxIndex) % maxIndex);
    resetTimer();
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    resetTimer();
  };

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrev}
          className="mr-4 rounded-full hover:bg-primary/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div className="overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children.map((child, index) => (
              <div key={index} className={cn("flex-shrink-0", itemWidth)}>
                {child}
              </div>
            ))}
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext}
          className="ml-4 rounded-full hover:bg-primary/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex justify-center mt-4 gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              resetTimer();
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "w-6 bg-primary" 
                : "w-2 bg-muted"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
