import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Container, 
  Settings, 
  Zap, 
  Award,
  Users,
  Target,
  Lightbulb
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Kubernetes", icon: Container, color: "bg-blue-500" },
    { name: "Terraform", icon: Settings, color: "bg-purple-500" },
    { name: "AWS", icon: Cloud, color: "bg-orange-500" },
    { name: "CI/CD", icon: Zap, color: "bg-green-500" },
    { name: "Docker", icon: Container, color: "bg-blue-600" },
    { name: "GCP", icon: Cloud, color: "bg-red-500" },
    { name: "DevOps", icon: Settings, color: "bg-indigo-500" },
    { name: "SaaS", icon: Lightbulb, color: "bg-yellow-500" },
  ];

  const certs = [
    "AWS Solutions Architect Professional",
    "Google Cloud Professional Architect", 
    "DevOps Foundation Certified",
    "Kubernetes Administrator (CKA)"
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate technologist who bridges the gap between complex infrastructure 
              and business success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Who I Am */}
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading">Who I Am</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A DevOps engineer with 8+ years of experience scaling infrastructure for startups 
                    and enterprises. I transform chaotic systems into smooth, automated machines that 
                    founders can rely on as they scale from 0 to millions of users.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* What I Believe */}
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading">What I Believe</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      "Tech isn't just about uptime. It's about outcomes. I believe infrastructure should drive revenue, not just reliability."
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      "I bridge the gap between DevOps and business growth — helping founders and CTOs make tech decisions that serve revenue."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold font-heading text-center mb-8">
              Tech Stack & Expertise
            </h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-glow hover:border-primary/20 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      <div className={`w-12 h-12 ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors">
                        {skill.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-primary/5 backdrop-blur-sm border border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Certifications</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {certs.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-sm py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {cert}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;