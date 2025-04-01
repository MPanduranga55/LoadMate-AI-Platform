import { 
  Brain, 
  Route, 
  LineChart, 
  ListChecks, 
  Smartphone, 
  RefreshCw 
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-5 w-5" />,
    title: "AI-Powered Matching",
    description: "Advanced algorithms analyze thousands of variables to find optimal matches between carriers and shippers.",
  },
  {
    icon: <Route className="h-5 w-5" />,
    title: "Dynamic Route Optimization",
    description: "Real-time route planning that considers traffic, weather, and other factors to optimize delivery schedules.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Predictive Analytics",
    description: "Forecast freight demand trends with machine learning models to stay ahead of market changes.",
  },
  {
    icon: <ListChecks className="h-5 w-5" />,
    title: "Automated Load Management",
    description: "Streamline operations with automated load booking, tracking, and documentation.",
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Mobile Integration",
    description: "Manage your freight operations on the go with our powerful mobile application for both carriers and shippers.",
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Seamless Integration",
    description: "Connect with existing TMS, ERP, and supply chain systems through our open API architecture.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Intelligent Features That Drive Results</h2>
          <p className="text-lg text-slate-600">Our AI platform transforms freight management from start to finish with powerful tools designed for the modern logistics industry.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-100 text-primary-800 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
