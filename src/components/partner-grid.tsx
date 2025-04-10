
import React from "react";
import { motion } from "framer-motion";

type Partner = {
  id: number;
  name: string;
  logo: string;
  industry: string;
};

interface PartnerGridProps {
  partners: Partner[];
  className?: string;
}

export const PartnerGrid = ({ partners, className = "" }: PartnerGridProps) => {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ${className}`}>
      {partners.map((partner, index) => (
        <PartnerLogo key={partner.id} partner={partner} index={index} />
      ))}
    </div>
  );
};

const PartnerLogo = ({ partner, index }: { partner: Partner; index: number }) => {
  return (
    <motion.div 
      className="p-5 bg-background/50 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
      whileHover={{ y: -5, scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-20 h-20 flex items-center justify-center overflow-hidden grayscale transition-all duration-500 hover:grayscale-0 hover:filter-none">
          <img 
            src={partner.logo} 
            alt={`${partner.name} logo`} 
            className="w-full h-full object-contain" 
          />
        </div>
        <div className="text-center">
          <p className="font-medium text-sm">{partner.name}</p>
          <p className="text-xs text-muted-foreground">{partner.industry}</p>
        </div>
      </div>
    </motion.div>
  );
};
