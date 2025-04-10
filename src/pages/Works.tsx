
import React from "react";
import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedBackground from "@/components/animated-bg";

type Client = {
  id: number;
  name: string;
  logo: string;
  industry: string;
};

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
};

const clients: Client[] = [
  { id: 1, name: "TechCorp", logo: "/placeholder.svg", industry: "Technology" },
  { id: 2, name: "FinanceHub", logo: "/placeholder.svg", industry: "Finance" },
  { id: 3, name: "RetailPro", logo: "/placeholder.svg", industry: "Retail" },
  { id: 4, name: "HealthLife", logo: "/placeholder.svg", industry: "Healthcare" },
  { id: 5, name: "EduLearn", logo: "/placeholder.svg", industry: "Education" },
  { id: 6, name: "FoodDelite", logo: "/placeholder.svg", industry: "Food & Beverage" },
  { id: 7, name: "TravelEase", logo: "/placeholder.svg", industry: "Travel" },
  { id: 8, name: "MediaWorld", logo: "/placeholder.svg", industry: "Media" },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Marketing Director",
    company: "TechCorp",
    avatar: "/placeholder.svg",
    content: "Working with AdGrow has transformed our digital presence. Their strategic approach to social media marketing has significantly increased our engagement rates and conversion metrics.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "CEO",
    company: "FinanceHub",
    avatar: "/placeholder.svg",
    content: "The team at AdGrow Media delivered exceptional results for our WhatsApp marketing campaign. Their personalized approach and data-driven strategies helped us achieve a 40% increase in customer response rates.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Head of Digital",
    company: "RetailPro",
    avatar: "/placeholder.svg",
    content: "AdGrow's analytics insights have been invaluable for our business decision-making. Their detailed reporting and actionable recommendations have helped us optimize our marketing spend significantly.",
    rating: 4
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    position: "Brand Manager",
    company: "HealthLife",
    avatar: "/placeholder.svg",
    content: "The YouTube campaign created by AdGrow exceeded all our expectations. The video content was engaging and perfectly aligned with our brand voice, driving both awareness and conversions.",
    rating: 5
  },
];

const ClientLogo = ({ client }: { client: Client }) => {
  return (
    <motion.div 
      className="p-6 bg-background/50 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-24 h-24 flex items-center justify-center overflow-hidden grayscale transition-all duration-500 hover:grayscale-0 hover:filter-none">
          <img 
            src={client.logo} 
            alt={`${client.name} logo`} 
            className="w-full h-full object-contain" 
          />
        </div>
        <div className="text-center">
          <p className="font-medium">{client.name}</p>
          <p className="text-sm text-muted-foreground">{client.industry}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div 
      className="p-6 bg-background rounded-lg border border-border shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-muted-foreground">{testimonial.content}</p>
    </motion.div>
  );
};

export default function Works() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatedBackground className="" />
      
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our <span className="text-gradient">Clients</span> & Success Stories
            </motion.h1>
            <motion.div 
              className="line-gradient mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              We've helped businesses across various industries achieve remarkable growth through strategic digital marketing solutions.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Clients Grid */}
      <section className="py-10 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 mb-8"
          >
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Trusted by Industry Leaders</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <ClientLogo key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 bg-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Client Testimonials</h2>
            <div className="line-gradient mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold text-gradient mb-4">AdGrow Media</h3>
              <p className="text-muted-foreground max-w-xs">
                Transforming businesses through innovative digital marketing solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/works" className="text-muted-foreground hover:text-foreground transition-colors">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                      Get in Touch
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@adgrowmedia.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      info@adgrowmedia.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+11234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} AdGrow Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
