import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Gift, ArrowRight } from "lucide-react";
import { useState } from "react";

const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 overflow-hidden">
            <CardContent className="p-12 text-center">
              {/* Icon */}
              <motion.div
                className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                whileHover={{ rotate: 5 }}
              >
                <Gift className="w-10 h-10 text-primary" />
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-3xl lg:text-4xl font-bold font-heading mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Need a <span className="bg-gradient-primary bg-clip-text text-transparent">DevOps Blueprint</span> for Growth?
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Get my free <strong>"Startup Infra Toolkit"</strong> — Scale Smart from Day 1. 
                Everything you need to build infrastructure that grows with your business.
              </motion.p>

              {/* Benefits */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-10 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Cost Optimization</h4>
                    <p className="text-sm text-muted-foreground">Save 60% on cloud costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Scaling Frameworks</h4>
                    <p className="text-sm text-muted-foreground">From MVP to enterprise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Security Checklists</h4>
                    <p className="text-sm text-muted-foreground">Enterprise-grade setup</p>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex-1">
                  <Label htmlFor="email" className="sr-only">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 px-4 text-base border-border/50 focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-elegant whitespace-nowrap"
                >
                  Grab It Free
                  <Download className="ml-2 w-4 h-4" />
                </Button>
              </motion.form>

              {/* Trust indicators */}
              <motion.p
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                🔒 No spam. Unsubscribe anytime. Used by 500+ founders.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;