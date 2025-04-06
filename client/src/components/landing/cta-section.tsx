import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Freight Operations?</h2>
          <p className="text-xl text-primary-100 mb-8">Join thousands of logistics professionals who are reducing costs, saving time, and growing their business with LoadMate AI.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="text-base px-8 py-6 bg-amber-500 hover:bg-amber-600 text-white">
              Request a Demo
            </Button>
            <Button 
              variant="outline" 
              className="text-base px-8 py-6 bg-white text-primary-800 hover:bg-primary-50 border-white"
            >
              Start Free Trial
            </Button>
          </div>
          <p className="mt-6 text-primary-200 text-sm">No credit card required. 14-day free trial.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
