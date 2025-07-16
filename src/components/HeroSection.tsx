import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import ryanHero from "@/assets/ryan-hero.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0 }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={textVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                👋 Available for Projects
              </span>
            </motion.div>

            <motion.h1
              variants={textVariants}
              className="text-5xl lg:text-7xl font-bold font-heading mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ryan
              </span>
            </motion.h1>

            <motion.h2
              variants={textVariants}
              className="text-2xl lg:text-3xl font-heading font-semibold mb-4 text-muted-foreground"
            >
              DevOps Engineer, Cloud Architect,{" "}
              <span className="text-accent">SaaS Entrepreneur</span>
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              I scale cloud infrastructure and businesses. From Kubernetes clusters to startup strategy — I help companies build smarter, faster, and leaner.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Scale Your Business
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-4 rounded-2xl font-semibold border-2 hover:bg-card hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Work With Me
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              animate={floatingAnimation}
            >
              <div className="relative z-10">
                <motion.img
                  src={ryanHero}
                  alt="Ryan - DevOps Engineer and Business Strategist"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-elegant"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-glass rounded-3xl backdrop-blur-glass border border-white/20" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/30 flex items-center justify-center"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30 flex items-center justify-center"
                animate={{
                  rotate: -360,
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <span className="text-xl">☁️</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center text-muted-foreground cursor-pointer group"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ y: -5 }}
          >
            <span className="text-sm mb-2 group-hover:text-foreground transition-colors">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 group-hover:text-accent transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;