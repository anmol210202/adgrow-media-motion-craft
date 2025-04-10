
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

type Client = {
  id: number;
  name: string;
  logo: string;
  industry: string;
};

const clients: Client[] = [
  { id: 1, name: "TechCorp", logo: "/placeholder.svg", industry: "Technology" },
  { id: 2, name: "FinanceHub", logo: "/placeholder.svg", industry: "Finance" },
  { id: 3, name: "RetailPro", logo: "/placeholder.svg", industry: "Retail" },
  { id: 4, name: "HealthLife", logo: "/placeholder.svg", industry: "Healthcare" },
  { id: 5, name: "EduLearn", logo: "/placeholder.svg", industry: "Education" },
  { id: 6, name: "FoodDelite", logo: "/placeholder.svg", industry: "Food & Beverage" },
];

export const ClientCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });
  
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-scroll logic
  useEffect(() => {
    if (!emblaApi) return;
    
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // Scroll every 3 seconds
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [emblaApi, isPaused]);
  
  // Pause on hover handlers
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="py-16 px-4 md:px-6 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.div 
            className="line-gradient mx-auto w-24 mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
        
        <Carousel
          ref={emblaRef}
          className="w-full"
        >
          <CarouselContent>
            {clients.map((client) => (
              <CarouselItem key={client.id} className="md:basis-1/3 lg:basis-1/4">
                <ClientLogo client={client} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
            <CarouselNext className="relative static right-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

const ClientLogo = ({ client }: { client: Client }) => {
  return (
    <motion.div 
      className="h-40 p-6 mx-2 rounded-lg border border-border/50 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm"
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        filter: "grayscale(0)",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      initial={{ filter: "grayscale(100%)" }}
      style={{ 
        filter: "grayscale(100%)",
        transition: "filter 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease"
      }}
    >
      <div className="relative w-20 h-20 mb-3 flex items-center justify-center overflow-hidden">
        <img 
          src={client.logo} 
          alt={`${client.name} logo`} 
          className="w-full h-full object-contain" 
        />
      </div>
      <p className="font-medium text-sm">{client.name}</p>
      <p className="text-xs text-muted-foreground">{client.industry}</p>
    </motion.div>
  );
};
