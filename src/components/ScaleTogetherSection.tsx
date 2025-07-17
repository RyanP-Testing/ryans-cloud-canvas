import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Rocket, CheckCircle, Package, Users, DollarSign, Zap } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  building: z.string().min(10, "Please tell us more about what you're building"),
  helpWith: z.array(z.string()).min(1, "Please select at least one option"),
});

const ScaleTogetherSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      building: "",
      helpWith: [],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  const helpOptions = [
    { id: "devops-audit", label: "DevOps Audit" },
    { id: "saas-infra", label: "SaaS Infra Setup" },
    { id: "fractional-cto", label: "Fractional CTO" },
    { id: "cost-optimization", label: "Cost Optimization" },
    { id: "something-else", label: "Something Else" },
  ];

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
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Scale Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your startup's infrastructure? Let's build something incredible together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Lead Magnet */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 h-full">
              <CardContent className="p-8">
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  <Package className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold font-heading mb-4">
                  Steal My <span className="text-primary">DevOps Growth Stack</span>
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Get my personal blueprint used to scale startups from 0 to ₹12Cr+ in savings, 
                  10x deployment velocity, and founder peace of mind.
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold mb-3">📦 Download: "Ryan's Startup Infra Kit"</h4>
                  
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">DevOps architecture diagram (AWS/GCP)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">MVP-ready CI/CD pipeline setup</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">SaaS infra cost calculator</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Founder cheat sheet (infra tools vs business stage)</span>
                    </div>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-xl shadow-elegant"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download the Stack
                  </Button>
                </motion.div>

                <p className="text-sm text-muted-foreground text-center mt-4 italic">
                  No spam. No BS. Just field-tested resources from real projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold font-heading mb-6">
                      Ready to Collaborate?
                    </h3>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your full name" 
                                  className="h-12 text-base" 
                                  autoFocus
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="your@email.com" 
                                  className="h-12 text-base"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company / Startup Name (Optional)</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your company name" 
                                  className="h-12 text-base"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="building"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>What Are You Building?</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="e.g., I'm building an AI SaaS and need MVP infra"
                                  className="min-h-[100px] text-base"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="helpWith"
                          render={() => (
                            <FormItem>
                              <FormLabel>How Can I Help? (Select all that apply)</FormLabel>
                              <div className="grid grid-cols-1 gap-3">
                                {helpOptions.map((option) => (
                                  <FormField
                                    key={option.id}
                                    control={form.control}
                                    name="helpWith"
                                    render={({ field }) => {
                                      return (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value?.includes(option.id)}
                                              onCheckedChange={(checked) => {
                                                return checked
                                                  ? field.onChange([...field.value, option.id])
                                                  : field.onChange(
                                                      field.value?.filter(
                                                        (value) => value !== option.id
                                                      )
                                                    )
                                              }}
                                            />
                                          </FormControl>
                                          <FormLabel className="text-sm font-normal">
                                            {option.label}
                                          </FormLabel>
                                        </FormItem>
                                      )
                                    }}
                                  />
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300"
                          >
                            Let's Collaborate
                            <Rocket className="ml-2 w-5 h-5" />
                          </Button>
                        </motion.div>
                      </form>
                    </Form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Awesome — you're in!</h3>
                    <p className="text-lg text-muted-foreground">
                      I'll reach out personally within 24 hours.
                    </p>
                  </motion.div>
                )}

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground">
                    Or just shoot me an email directly at{" "}
                    <a 
                      href="mailto:ryan@yourdomain.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      ryan@yourdomain.com
                    </a>
                    {" "}— I read every one.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScaleTogetherSection;