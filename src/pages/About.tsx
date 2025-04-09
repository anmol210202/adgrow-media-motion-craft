
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/navbar";
import { Counter } from "@/components/counter-animation";
import { ThemeProvider } from "@/components/theme-provider";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  const eyeRef = useRef(null);
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: false, margin: "-100px" });

  // Eye-following animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;
      
      const eye = eyeRef.current;
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;
      
      const maxMovement = 15;
      
      // Calculate angle between mouse and eye center
      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;
      
      // Calculate distance for limiting movement
      const distance = Math.min(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 50,
        1
      );
      
      // Calculate pupil position
      const pupilX = (deltaX / 50) * maxMovement * distance;
      const pupilY = (deltaY / 50) * maxMovement * distance;
      
      gsap.to(eye.querySelector(".pupil"), {
        x: pupilX,
        y: pupilY,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Navbar />
        
        {/* Header */}
        <section className="pt-32 pb-16 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-xl mb-6">About Us</h1>
              <div className="line-gradient mx-auto mb-6" />
              <p className="text-lg text-muted-foreground">
                We're a team of creative strategists, data analysts, and digital innovators passionate about helping brands succeed.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-12 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="heading-lg mb-6">Our Story</h2>
                <div className="line-gradient mb-6 w-24" />
                <p className="text-muted-foreground mb-4">
                  Founded in 2015, AdGrow Media began with a simple mission: to help businesses grow through effective digital marketing strategies.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small team of three passionate marketers has grown into a full-service digital agency with over 50 experts spanning strategy, creative, data analytics, and development.
                </p>
                <p className="text-muted-foreground mb-6">
                  Today, we've helped hundreds of businesses across industries achieve their growth objectives through innovative, data-driven marketing solutions that deliver measurable results.
                </p>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div ref={eyeRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full flex items-center justify-center">
                      <div className="pupil w-16 h-16 bg-agency-dark rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full relative -top-2 -left-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Stats/Counter Section */}
        <section className="py-20 px-4 md:px-6 bg-primary/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="heading-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Achievements
              </motion.h2>
              <div className="line-gradient mx-auto mb-6" />
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Numbers that tell our success story and the impact we've made for our clients.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <Counter end={250} suffix="+" />
                <h3 className="text-lg font-medium mt-4">Clients Served</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Across various industries and markets
                </p>
              </div>
              <div>
                <Counter end={500} suffix="+" />
                <h3 className="text-lg font-medium mt-4">Projects Completed</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  All delivered on time and on budget
                </p>
              </div>
              <div>
                <Counter end={85} suffix="%" />
                <h3 className="text-lg font-medium mt-4">Client Retention</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Long-term partnerships with satisfied clients
                </p>
              </div>
              <div>
                <Counter end={12} suffix="M+" />
                <h3 className="text-lg font-medium mt-4">Ad Spend Managed</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  With an average 3.5x ROAS
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 px-4 md:px-6" ref={teamRef}>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="heading-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Meet Our Team
              </motion.h2>
              <div className="line-gradient mx-auto mb-6" />
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The talented individuals who make AdGrow Media a success.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Sarah Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" },
                { name: "David Chen", role: "Creative Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" },
                { name: "Emily Rodriguez", role: "Head of Strategy", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" },
                { name: "Michael Thompson", role: "Tech Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  className="relative rounded-lg overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg font-medium">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Want to join our team? We're always looking for talented individuals.
              </p>
              <Button variant="outline">
                View Career Opportunities
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="heading-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Start your digital journey with us
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Let's work together to achieve your business goals through innovative digital marketing strategies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Footer (same as index) */}
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
                      <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                        Services
                      </Link>
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
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                      <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                        Get in Touch
                      </Link>
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
    </ThemeProvider>
  );
}
