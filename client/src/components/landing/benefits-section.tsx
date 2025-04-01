import { 
  DollarSign, 
  Gauge, 
  Maximize, 
  BarChart2, 
  Truck, 
  Clock,
  Shield,
  TrendingUp,
  Map,
  CheckCircle
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
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Enhanced Security",
    description: "Full transparency with secure tracking, documentation, and payment processing that protects all parties involved.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Competitive Advantage",
    description: "Stay ahead of the competition with AI-powered forecasting and predictive pricing models built on real-time data.",
  },
  {
    icon: <Map className="h-5 w-5" />,
    title: "Dynamic Route Optimization",
    description: "Real-time route adjustments based on traffic, weather conditions, and delivery windows to ensure on-time performance.",
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Compliance Assurance",
    description: "Built-in tools to help maintain regulatory compliance with automatically generated and stored documentation.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Benefits For Your Business</h2>
          <p className="text-lg text-primary-100">Our AI-powered platform delivers meaningful advantages for both carriers and shippers, revolutionizing how logistics operations function in today's competitive market.</p>
        </div>
        
        <div className="mb-16 text-center animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <div className="inline-block px-6 py-3 rounded-full bg-white/10 border border-white/20 mb-6">
            <p className="text-xl font-medium text-amber-300">Up to 85% improvement in matching efficiency</p>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Transform Your Logistics Operations</h3>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">FreightMate AI gives you the competitive edge with industry-leading technology that delivers measurable results and superior performance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 border border-primary-100 hover:shadow-lg transition-all animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${Math.min(index * 50, 500)}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-white mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">{benefit.title}</h3>
              <p className="text-slate-800">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-lg bg-amber-500 hover:bg-amber-600 transition-colors animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out cursor-pointer">
            <p className="text-lg font-semibold text-black">See how customers increased revenue by 27%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
