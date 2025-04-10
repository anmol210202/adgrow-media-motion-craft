import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, MessageCircle } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
        // Close mobile menu when scrolling
        if (isOpen) {
          setIsOpen(false);
        }
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 polished ${
        scrolled ? "scrolled py-3 bg-background/95 backdrop-blur-md shadow-md" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Go to homepage"
        >
          <motion.span 
            className="text-xl font-bold text-gradient"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            AdGrow Media
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link relative text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "active text-primary"
                    : "text-foreground/80"
                }`}
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  {item.name}
                </motion.span>
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6E42CA] to-[#2DD4BF]"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
          </div>
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ThemeToggle />
            <Button size="sm" className="bg-gradient-to-r from-[#6E42CA] to-[#2DD4BF] hover:opacity-90" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation using Sheet component for better UI */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative z-50"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-16 h-screen bg-background/95 backdrop-blur-lg border-none">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-xl font-medium nav-link ${
                        location.pathname === item.path
                          ? "active text-primary"
                          : "text-foreground/80"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Button className="bg-gradient-to-r from-[#6E42CA] to-[#2DD4BF] hover:opacity-90" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
