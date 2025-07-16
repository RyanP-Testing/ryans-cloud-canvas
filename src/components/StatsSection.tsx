import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building, 
  Users, 
  Rocket, 
  IndianRupee 
} from "lucide-react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const stats = [
    {
      id: 1,
      number: 5,
      suffix: "+",
      label: "SaaS Startups Scaled",
      description: "From MVP to enterprise success",
      icon: Rocket,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 2,
      number: 20,
      suffix: "+",
      label: "Founder Clients Served",
      description: "CTOs and CEOs scaled",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 3,
      number: 12,
      suffix: "Cr",
      label: "Infra + Ops Spend Saved",
      description: "Business-first DevOps ROI",
      icon: IndianRupee,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      id: 4,
      number: 3,
      suffix: "",
      label: "Fractional CTO Ventures",
      description: "High-growth partnerships",
      icon: Building,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Impact in <span className="bg-gradient-primary bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real projects. Here's how I've helped businesses scale their 
            infrastructure and teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    id: number;
    number: number;
    suffix: string;
    label: string;
    description: string;
    icon: any;
    color: string;
    bgColor: string;
  };
  index: number;
  isInView: boolean;
}

const StatCard = ({ stat, index, isInView }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const timer = setTimeout(() => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const incrementTime = duration / end;

      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(counter);
        }
      }, incrementTime);

      return () => clearInterval(counter);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [isInView, stat.number, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300 group">
        <CardContent className="p-8 text-center">
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 5 }}
          >
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
          </motion.div>

          {/* Number */}
          <motion.div className="mb-2">
            <span className="text-4xl lg:text-5xl font-bold font-heading">
              {stat.id === 4 ? "₹" : ""}{count}
            </span>
            <span className={`text-2xl font-bold ${stat.color}`}>
              {stat.suffix}
            </span>
          </motion.div>

          {/* Label */}
          <h3 className="text-xl font-semibold font-heading mb-2">
            {stat.label}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {stat.description}
          </p>

          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"
            initial={false}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatsSection;