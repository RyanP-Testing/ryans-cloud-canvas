import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Rocket, 
  Heart, 
  Zap 
} from "lucide-react";

const WhyWorkWithMeSection = () => {
  const reasons = [
    {
      id: 1,
      title: "One-Stop Tech + Biz Brain",
      description: "I'm not just another DevOps engineer. I speak business. I help founders, CTOs, and CEOs make tech decisions that serve revenue.",
      icon: Brain,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 2,
      title: "Strategy Meets Scale",
      description: "From MVP to enterprise infra — I architect systems that are lean, scalable, and built to grow with your business vision.",
      icon: Rocket,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      id: 3,
      title: "Founder-Friendly",
      description: "I work fast, think lean, and talk results. No fluff. Just automation, optimization, and GTM acceleration that matters.",
      icon: Heart,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 4,
      title: "Flexible Engagements",
      description: "Available for fractional CTO roles, project-based consulting, or long-term growth partnerships. Whatever fits your needs.",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Why <span className="bg-gradient-primary bg-clip-text text-transparent">Work With Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The founder's secret weapon — part CTO, part strategist, full throttle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${reason.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <reason.icon className={`w-8 h-8 ${reason.color}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    initial={false}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <Badge variant="outline" className="text-sm py-2 px-4 border-primary/20 text-primary">
            Fractional CTO Available
          </Badge>
          <Badge variant="outline" className="text-sm py-2 px-4 border-accent/20 text-accent">
            Fast Turnaround
          </Badge>
          <Badge variant="outline" className="text-sm py-2 px-4 border-secondary/20 text-secondary-foreground">
            Revenue-Focused
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;