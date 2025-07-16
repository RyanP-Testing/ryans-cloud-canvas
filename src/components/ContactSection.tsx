import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Calendar,
  Send,
  Zap
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to scale your infrastructure, optimize your costs, or build your next SaaS? 
            Let's discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading">Send a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">What can I help you with?</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                      >
                        <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="infrastructure">Infrastructure Optimization</SelectItem>
                          <SelectItem value="devops">DevOps Consulting</SelectItem>
                          <SelectItem value="saas">SaaS Development</SelectItem>
                          <SelectItem value="mentoring">Technical Mentoring</SelectItem>
                          <SelectItem value="speaking">Speaking Opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project, challenges, or what you're looking to achieve..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                        required
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Send Message
                          <motion.div
                            animate={{ rotate: [0, 45, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Send className="w-4 h-4" />
                          </motion.div>
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={false}
                        />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Info & Quick Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Contact Options */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold font-heading">Quick Connect</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group"
                    >
                      <Calendar className="w-4 h-4 mr-3 group-hover:text-primary transition-colors" />
                      Book a Discovery Call
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="w-full justify-start hover:bg-accent/5 hover:border-accent/20 transition-all duration-300 group"
                    >
                      <MessageCircle className="w-4 h-4 mr-3 group-hover:text-accent transition-colors" />
                      Message on Discord
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-4">Connect Online</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="w-full justify-start hover:bg-blue-500/5 hover:border-blue-500/20 hover:text-blue-500 transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="w-full justify-start hover:bg-gray-800/5 hover:border-gray-800/20 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="w-full justify-start hover:bg-red-500/5 hover:border-red-500/20 hover:text-red-500 transition-all duration-300 col-span-2"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        ryan@cloudcanvas.dev
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Response Time */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-primary/5 backdrop-blur-sm border border-primary/20">
                <CardContent className="p-6 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Zap className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold font-heading mb-2">Fast Response</h3>
                  <p className="text-muted-foreground text-sm">
                    I typically respond within 24 hours. For urgent infrastructure issues, 
                    I'm available for emergency consultations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;