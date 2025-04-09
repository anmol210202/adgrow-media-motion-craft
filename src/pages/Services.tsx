
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { ServiceCard } from "@/components/service-card";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, BadgeCheck, BarChart3, Video, Globe, TrendingUp, Activity, Target, Users, MessageSquare } from "lucide-react";

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
  },
  {
    icon: Activity,
    title: "PPC & SEM",
    description: "Targeted pay-per-click campaigns that drive qualified traffic and leads.",
    gradient: "from-violet-600 to-purple-600"
  },
  {
    icon: Target,
    title: "SEO Services",
    description: "Optimize your online presence to rank higher in search engine results.",
    gradient: "from-green-600 to-emerald-500"
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Partner with key industry voices to extend your reach and credibility.",
    gradient: "from-red-600 to-rose-500"
  },
  {
    icon: MessageSquare,
    title: "Content Marketing",
    description: "Create valuable content that resonates with your audience and drives engagement.",
    gradient: "from-blue-600 to-indigo-600"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
              <h1 className="heading-xl mb-6">Our Services</h1>
              <div className="line-gradient mx-auto mb-6" />
              <p className="text-lg text-muted-foreground">
                We offer a comprehensive suite of digital marketing services to help your business grow and succeed online.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-12 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  gradient={`bg-gradient-to-r ${service.gradient}`}
                />
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Process Section */}
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
                Our Process
              </motion.h2>
              <div className="line-gradient mx-auto mb-6" />
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We follow a structured approach to ensure your marketing campaigns deliver results.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "01", title: "Discovery", description: "Understanding your business goals and target audience" },
                { number: "02", title: "Strategy", description: "Developing a tailored marketing plan to achieve your objectives" },
                { number: "03", title: "Execution", description: "Implementing campaigns with precision and creativity" },
                { number: "04", title: "Optimization", description: "Continuous monitoring and refinement for optimal results" }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  )}
                </motion.div>
              ))}
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
                Ready to transform your digital presence?
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our team of experts is ready to help you achieve your marketing goals and drive real business results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get Started Now
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
