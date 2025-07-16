import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Scaling Kubernetes Like a Boss on ₹0 Budget",
      excerpt: "How I helped a startup scale their K8s infrastructure from 10 to 10,000 users without increasing costs. The strategies that actually work.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
      category: "Infrastructure",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      tags: ["Kubernetes", "Cost Optimization", "Scaling"]
    },
    {
      id: 2,
      title: "Why DevOps Fails in Startups (And How to Fix It)",
      excerpt: "The brutal truth about why 80% of startups waste money on DevOps. Plus the 3-step framework that actually works for early-stage companies.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      category: "Strategy",
      readTime: "12 min read",
      publishDate: "Dec 10, 2024",
      tags: ["DevOps", "Startups", "Strategy"]
    },
    {
      id: 3,
      title: "SaaS Infrastructure for Founders Who Hate Infra",
      excerpt: "A founder's guide to building bulletproof infrastructure without becoming a DevOps expert. The tools and patterns that just work.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "SaaS",
      readTime: "10 min read",
      publishDate: "Dec 5, 2024",
      tags: ["SaaS", "Infrastructure", "Founders"]
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
            Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical insights on DevOps, cloud architecture, and scaling strategies. 
            No fluff—just actionable advice from the trenches.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
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
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground hover:bg-primary">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                    >
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading mb-3 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-muted/80 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read more link */}
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View all posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want more insights on scaling infrastructure and building SaaS?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="px-8 py-4 rounded-2xl font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;