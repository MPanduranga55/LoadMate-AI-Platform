import { Button } from "@/components/ui/button";
import { Users, Building } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About FreightMate AI</h2>
            <p className="text-lg text-slate-600 mb-6">
              Founded in 2019, FreightMate AI is revolutionizing the logistics industry by combining cutting-edge artificial intelligence with deep transportation expertise.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Our mission is to eliminate inefficiencies in freight transportation by creating intelligent connections between shippers and carriers, reducing empty miles, and optimizing the entire logistics ecosystem.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              With a team of logistics experts, data scientists, and software engineers, we've built a platform that learns and improves with every shipment, delivering increasingly valuable insights and matches.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="outline" className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" /> Meet Our Team
              </Button>
              <Button variant="outline" className="inline-flex items-center gap-2">
                <Building className="h-4 w-4" /> Company History
              </Button>
            </div>
          </div>
          <div className="relative animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden p-2">
              <img 
                className="w-full h-auto rounded"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                alt="FreightMate AI Team" 
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl bg-primary-500/20 -z-10 transform rotate-6"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-xl bg-amber-500/20 -z-10 transform -rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
