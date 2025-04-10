
import React from "react";
import { motion } from "framer-motion";
import { Users, MessageSquare } from "lucide-react";
import Navbar from "@/components/navbar";
import AnimatedBackground from "@/components/animated-bg";
import { PartnerGrid } from "@/components/partner-grid";
import { AutoCarousel } from "@/components/auto-carousel";
import { TestimonialCard, type Testimonial } from "@/components/testimonial-card";
import { ClientCarousel } from "@/components/client-carousel";

// Data for trusted partners
const partners = [
  { id: 1, name: "TechCorp", logo: "/placeholder.svg", industry: "Technology" },
  { id: 2, name: "FinanceHub", logo: "/placeholder.svg", industry: "Finance" },
  { id: 3, name: "RetailPro", logo: "/placeholder.svg", industry: "Retail" },
  { id: 4, name: "HealthLife", logo: "/placeholder.svg", industry: "Healthcare" },
  { id: 5, name: "EduLearn", logo: "/placeholder.svg", industry: "Education" },
  { id: 6, name: "FoodDelite", logo: "/placeholder.svg", industry: "Food & Beverage" },
  { id: 7, name: "TravelEase", logo: "/placeholder.svg", industry: "Travel" },
  { id: 8, name: "MediaWorld", logo: "/placeholder.svg", industry: "Media" },
  { id: 9, name: "SportsFit", logo: "/placeholder.svg", industry: "Sports" },
  { id: 10, name: "AutoDrive", logo: "/placeholder.svg", industry: "Automotive" },
];

// Data for testimonials
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
  {
    id: 5,
    name: "David Kim",
    position: "Sales Director",
    company: "SportsFit",
    avatar: "/placeholder.svg",
    content: "AdGrow Media's email marketing strategies have revolutionized our customer retention. The personalized campaigns they created resulted in a 25% increase in repeat purchases within just three months.",
    rating: 5
  },
  {
    id: 6,
    name: "Lisa Patel",
    position: "E-commerce Manager",
    company: "RetailPro",
    avatar: "/placeholder.svg",
    content: "The PPC campaign management by AdGrow Media delivered an impressive ROI. Their continuous optimization and strategic keyword targeting reduced our cost per acquisition by 30% while increasing conversions.",
    rating: 4
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatedBackground className="" />
      
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.h1 
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our <span className="text-gradient">Portfolio</span>
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
              Discover our successful partnerships and client success stories that showcase our expertise in digital marketing.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Trusted Leaders Grid */}
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
          
          <PartnerGrid partners={partners} />
        </div>
      </section>
      
      {/* Auto-Scroll Client Carousel */}
      <section className="py-16 px-4 md:px-6 bg-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-4">Our Clients</h2>
            <div className="line-gradient mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              We've had the pleasure of working with amazing brands across various industries.
            </p>
          </div>
          
          <ClientCarousel />
        </div>
      </section>
      
      {/* Testimonials Auto Carousel */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <MessageSquare className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Client Testimonials</h2>
            </motion.div>
            <motion.div 
              className="line-gradient mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: '6rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <AutoCarousel 
            autoplaySpeed={4000} 
            itemWidth="w-full md:w-[400px] px-2"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </AutoCarousel>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-gradient">Transform</span> Your Digital Presence?
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join our growing list of satisfied clients and experience the difference our targeted marketing strategies can make for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-md bg-gradient-to-r from-[#6E42CA] to-[#2DD4BF] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </a>
          </motion.div>
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
                    <a href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                      Portfolio
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
