
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, Smartphone, BarChart3, Video, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Navbar from "@/components/navbar";
import AnimatedBackground from "@/components/animated-bg";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientCarousel } from "@/components/client-carousel";

const services = [
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Strategic campaigns across platforms to engage your audience and drive conversions.",
    gradient: "from-indigo-700 to-blue-600"
  },
  {
    icon: BadgeCheck,
    title: "WhatsApp Marketing",
    description: "Direct messaging strategies that connect with customers on their preferred platform.",
    gradient: "from-emerald-600 to-teal-500"
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "In-depth analytics to track performance and optimize your marketing strategies.",
    gradient: "from-purple-600 to-indigo-600"
  },
  {
    icon: Video,
    title: "YouTube Ads",
    description: "Compelling video campaigns that capture attention and drive brand awareness.",
    gradient: "from-rose-600 to-pink-600"
  },
  {
    icon: Globe,
    title: "Website & App Development",
    description: "Custom digital solutions that engage users and represent your brand.",
    gradient: "from-amber-600 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Comprehensive planning to accelerate your business growth and market presence.",
    gradient: "from-sky-600 to-cyan-500"
  }
];

export default function Index() {
  const targetRef = useRef(null);
  const titleRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  useEffect(() => {
    if (titleRef.current) {
      const title = titleRef.current;
      gsap.fromTo(
        title.querySelectorAll("span"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
          delay: 0.5
        }
      );
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <motion.section
          ref={targetRef}
          className="relative h-screen flex items-center"
          style={{ opacity, scale }}
        >
          <AnimatedBackground className="" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                className="mb-6 inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-foreground"
              >
                Next-Gen Digital Marketing Agency
              </motion.div>
              
              <h1 ref={titleRef} className="hero-text mb-6 overflow-hidden">
                <span className="inline-block">Turn </span>
                <span className="inline-block text-gradient">Ideas </span>
                <span className="inline-block">into </span>
                <span className="inline-block text-gradient">Growth </span>
                <span className="inline-block">with Digital Excellence</span>
              </h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                We craft strategic digital marketing solutions that drive real business results, connecting your brand with audiences that matter.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <Button size="lg" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-50"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Services Section Preview */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-xl mb-4">Our Services</h2>
              <div className="line-gradient mx-auto mb-6" />
              <p className="text-muted-foreground">
                Comprehensive digital marketing solutions tailored to your business goals. Explore our range of services designed to amplify your online presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  gradient={`bg-gradient-to-r ${service.gradient}`}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Client Carousel Section */}
        <ClientCarousel />
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-primary/5">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1">
                <motion.h2 
                  className="heading-lg mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to boost your <span className="text-gradient">digital presence</span>?
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Whether you're looking to increase brand awareness, drive website traffic, or boost conversions, our team of experts is here to help you achieve your goals.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <div className="flex-1">
                <motion.div 
                  className="relative aspect-video rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
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
                      <Link to="/works" className="text-muted-foreground hover:text-foreground transition-colors">
                        Our Works
                      </Link>
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
