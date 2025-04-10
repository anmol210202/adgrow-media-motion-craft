
import React from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export const TestimonialCard = ({ testimonial, className = "" }: TestimonialCardProps) => {
  return (
    <Card className={`mx-2 h-full ${className} hover:shadow-md transition-shadow duration-300`}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-primary/20">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
};
