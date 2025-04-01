import { 
  DollarSign, 
  Gauge, 
  Maximize, 
  BarChart2, 
  Truck, 
  Clock 
} from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "Cost Reduction",
    description: "Decrease empty miles by up to 30% and optimize routes to significantly reduce fuel costs and environmental impact.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Increased Efficiency",
    description: "Automate time-consuming tasks like load matching, booking, and documentation to focus on growing your business.",
  },
  {
    icon: <Maximize className="h-5 w-5" />,
    title: "Market Expansion",
    description: "Connect with new carriers and shippers to expand your network and discover lucrative opportunities nationwide.",
  },
  {
    icon: <BarChart2 className="h-5 w-5" />,
    title: "Data-Driven Insights",
    description: "Leverage advanced analytics to optimize pricing strategies, identify market trends, and make informed decisions.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Carrier Reliability",
    description: "Work with vetted carriers with proven track records, ensuring on-time deliveries and reducing service failures.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Time Savings",
    description: "Reduce load matching time from hours to minutes with instant AI-powered recommendations and automated processes.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits For Your Business</h2>
          <p className="text-lg text-primary-100">Our platform delivers tangible results for both carriers and shippers, transforming logistics operations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-colors animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-white mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-primary-100">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
