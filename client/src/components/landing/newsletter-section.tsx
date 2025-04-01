import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const NewsletterSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/newsletter", data);
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Industry Insights</h2>
            <p className="text-slate-300">Subscribe to our newsletter for the latest freight trends, technology updates, and logistics best practices.</p>
          </div>
          <div className="md:col-span-2 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          type="email" 
                          {...field} 
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="whitespace-nowrap bg-amber-500 hover:bg-amber-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
            <p className="text-sm text-slate-400 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
