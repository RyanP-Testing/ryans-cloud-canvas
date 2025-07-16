import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectHr from "@/assets/project-hr.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI HR Co-Pilot",
      description: "Built to streamline hiring for growing teams. From CV parsing to retention, it's HR on autopilot. Full-stack SaaS platform with AI-powered candidate screening and automated workflows.",
      image: projectHr,
      tech: ["React", "Node.js", "AWS", "Docker", "Terraform"],
      outcome: "60% faster hiring process",
      impact: "Reduced time-to-hire from 45 to 18 days",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Microsite SaaS Platform",
      description: "Turn cold outreach into high-converting landing pages. Ideal for founders, recruiters, and closers. Scalable infrastructure handling millions of personalized microsites.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["Next.js", "PostgreSQL", "Kubernetes", "Redis", "GCP"],
      outcome: "300% increase in response rates",
      impact: "Generated $2M+ in qualified leads",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Cloud Cost Optimization",
      description: "Saved ₹12Cr+ in wasted infra spend. Business-first DevOps = serious ROI. Complete infrastructure audit and optimization for a fintech startup.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      tech: ["Kubernetes", "Terraform", "Prometheus", "Grafana", "AWS"],
      outcome: "₹12Cr cloud costs saved",
      impact: "99.9% uptime achieved",
      link: "#",
      github: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real solutions that drive business impact. From infrastructure optimization 
            to full-stack applications, here's how I help companies scale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project links overlay */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Github className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Outcome:</span>
                      <span className="font-semibold text-accent">{project.outcome}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.impact}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-6">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      View Project
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="px-3"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see how I can help scale your infrastructure?
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;