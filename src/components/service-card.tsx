
import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  longDescription?: string;
  features?: string[];
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  gradient,
  longDescription = "This service helps businesses grow their online presence through strategic planning and implementation.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`service-card ${gradient} group h-full cursor-pointer`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-lg p-6 h-full flex flex-col">
          <div className="mb-4 p-2 bg-white/10 backdrop-blur-sm rounded-lg w-12 h-12 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
          <div className="mt-auto pt-4 flex items-center">
            <span className="text-white/80 text-sm mr-2">Learn more</span>
            <motion.div
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${gradient} text-white`}>
                <Icon className="w-6 h-6" />
              </div>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
            </div>
            <div className="line-gradient w-16 my-3" />
            <DialogDescription className="text-lg text-foreground">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-4">
            <p className="text-muted-foreground">{longDescription}</p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Key Features</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#6E42CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="mt-4 w-full" onClick={() => setIsOpen(false)}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
