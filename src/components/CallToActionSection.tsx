import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  ArrowRight, 
  Calendar, 
  MessageCircle,
  Sparkles
} from "lucide-react";

const CallToActionSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, hsl(var(--primary)) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, hsl(var(--accent)) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, hsl(var(--primary)) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-elegant overflow-hidden">
            <CardContent className="p-12 lg:p-16">
              {/* Floating icons */}
              <div className="relative mb-8">
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity },
                    rotate: { duration: 8, repeat: Infinity }
                  }}
                >
                  <Sparkles className="w-6 h-6 text-accent" />
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    y: { duration: 2.5, repeat: Infinity },
                    rotate: { duration: 6, repeat: Infinity }
                  }}
                >
                  <Zap className="w-5 h-5 text-primary" />
                </motion.div>

                <motion.h2
                  className="text-4xl lg:text-6xl font-bold font-heading mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Let's scale your{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    infrastructure
                  </span>
                  ,<br />
                  your{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    startup
                  </span>
                  , or your{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    team
                  </span>{" "}
                  — together.
                </motion.h2>
              </div>

              <motion.p
                className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Whether you need to optimize costs, automate deployments, or build from scratch—
                I'm here to turn your infrastructure challenges into competitive advantages.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book a Discovery Call
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Calendar className="w-5 h-5" />
                      </motion.div>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="group px-8 py-4 rounded-2xl font-semibold text-lg border-2 hover:bg-card hover:border-primary/50 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      Start a Conversation
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="mt-12 pt-8 border-t border-border/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold font-heading text-primary mb-1">24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold font-heading text-accent mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold font-heading text-primary mb-1">8+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;