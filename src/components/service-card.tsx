
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  gradient,
}: ServiceCardProps) {
  return (
    <motion.div
      className={`service-card ${gradient} group h-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-lg p-6 h-full flex flex-col">
        <div className="mb-4 p-2 bg-white/10 backdrop-blur-sm rounded-lg w-12 h-12 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
        <div className="mt-auto pt-4">
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
  );
}
