import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Heart,
  Coffee,
  Container,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Resume", href: "#resume", icon: Download },
    { name: "Projects", href: "#projects", icon: Container },
    { name: "Blog", href: "#blog", icon: Mail },
    { name: "Contact", href: "#contact", icon: Mail }
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github, color: "hover:text-gray-800 dark:hover:text-gray-200" },
    { name: "LinkedIn", href: "#", icon: Linkedin, color: "hover:text-blue-500" },
    { name: "Email", href: "mailto:ryan@cloudcanvas.dev", icon: Mail, color: "hover:text-red-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <motion.div
                className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Container className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold font-heading">Ryan</h3>
                <p className="text-sm text-muted-foreground">Cloud Canvas</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              DevOps Engineer, Cloud Architect, and Business Strategist helping 
              startups and enterprises scale their infrastructure and teams.
            </p>

            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <span>Built by Ryan. Fueled by</span>
              <Coffee className="w-4 h-4 text-amber-500" />
              <span>& containers</span>
              <Container className="w-4 h-4 text-primary" />
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-bold font-heading mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <link.icon className="w-4 h-4 mr-3 group-hover:text-primary transition-colors" />
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-bold font-heading mb-6">Let's Connect</h4>
            
            <div className="space-y-4 mb-6">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={social.href}
                    className={`flex items-center text-muted-foreground transition-colors group ${social.color}`}
                  >
                    <social.icon className="w-4 h-4 mr-3" />
                    {social.name}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="p-4 bg-primary/5 rounded-xl border border-primary/10"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Available for projects</span>
                <br />
                Looking for DevOps expertise or SaaS development? Let's talk!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/50 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© 2024 Ryan. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>for the DevOps community</span>
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Back to top
                  <ArrowUp className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer;