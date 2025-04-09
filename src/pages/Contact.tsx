
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ContactForm } from "@/components/contact-form";
import Map from "@/components/map";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
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
              <h1 className="heading-xl mb-6">Get In Touch</h1>
              <div className="line-gradient mx-auto mb-6" />
              <p className="text-lg text-muted-foreground">
                Have questions or ready to start your project? We're here to help you grow your digital presence.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Details */}
        <section className="py-8 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Phone, title: "Call Us", detail: "+1 (123) 456-7890" },
                { icon: Mail, title: "Email Us", detail: "info@adgrowmedia.com" },
                { icon: MapPin, title: "Visit Us", detail: "123 Marketing St, NY 10001" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Map and Form Section */}
        <section className="py-12 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <Map height="500px" className="rounded-lg shadow-lg" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-6 bg-primary/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h2 
                className="heading-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Frequently Asked Questions
              </motion.h2>
              <div className="line-gradient mx-auto mb-6" />
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[
                { 
                  question: "What services do you offer?",
                  answer: "We offer a comprehensive suite of digital marketing services including social media marketing, WhatsApp marketing, data analytics, YouTube ads, website and app development, SEO, PPC, and more."
                },
                {
                  question: "How long does it take to see results?",
                  answer: "Results vary depending on the service and your goals. Some campaigns like PPC can show immediate results, while SEO and content marketing typically take 3-6 months to show significant impact."
                },
                {
                  question: "Do you work with small businesses?",
                  answer: "Yes! We work with businesses of all sizes, from startups to enterprise organizations. We tailor our strategies to fit your specific needs and budget."
                },
                {
                  question: "What industries do you specialize in?",
                  answer: "While we have experience across many industries, we have particular expertise in e-commerce, SaaS, healthcare, education, and professional services."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="mb-4 bg-card shadow-sm rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between p-4 text-lg font-medium">
                      {item.question}
                      <svg
                        className="h-5 w-5 transition-transform group-open:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="p-4 pt-0">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
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
