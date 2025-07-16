import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Ryan transformed our infrastructure from a nightmare into a dream. Our deployment time went from 2 hours to 5 minutes, and we haven't had a single outage since.",
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "Working with Ryan was a game-changer for our startup. His strategic approach to DevOps helped us scale from 1K to 100K users without breaking the bank.",
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "GrowthLabs",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      quote: "Ryan doesn't just solve technical problems—he understands business. His infrastructure optimization saved us ₹8Cr annually while improving performance.",
      name: "Priya Sharma",
      role: "VP Engineering",
      company: "FinScale Inc",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
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
            What <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from real founders, CTOs, and engineering leaders who've 
            scaled their infrastructure with me.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-elegant">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start mb-6">
                  <Quote className="w-8 h-8 text-accent mr-4 flex-shrink-0 mt-1" />
                  <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <motion.img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <div className="font-semibold text-lg font-heading">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail testimonials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                <Card className="bg-card/30 backdrop-blur-sm border border-border/30 hover:shadow-glass transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;