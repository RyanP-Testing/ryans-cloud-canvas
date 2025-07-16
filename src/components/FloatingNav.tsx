import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  BarChart3, 
  Briefcase, 
  MessageSquare, 
  FileText, 
  Mail,
  Menu,
  X
} from "lucide-react";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
    
    // Update active section based on scroll position
    const sections = ["hero", "about", "stats", "projects", "blog", "contact"];
    const sectionElements = sections.map(id => document.getElementById(id));
    
    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const element = sectionElements[i];
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  });

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "stats", label: "Stats", icon: BarChart3 },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "blog", label: "Blog", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -20 }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
      >
        <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-3 shadow-elegant">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    layoutId="activeNavItem"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="fixed top-6 right-6 z-50 lg:hidden"
      >
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          size="sm"
          className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur-md border border-border/50 hover:bg-card/90 text-foreground"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-14 right-0 w-48 bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl shadow-elegant p-2"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingNav;