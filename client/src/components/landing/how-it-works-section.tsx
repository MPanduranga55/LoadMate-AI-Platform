const steps = [
  {
    number: 1,
    title: "List Your Freight or Capacity",
    description: "Shippers post load details while carriers share their available capacity and preferences in minutes.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    alt: "Freight listing interface",
  },
  {
    number: 2,
    title: "AI-Powered Matching",
    description: "Our algorithms analyze route efficiency, equipment requirements, pricing, and historical performance to find optimal matches.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    alt: "AI Matching visualization",
  },
  {
    number: 3,
    title: "Review and Confirm",
    description: "Both parties receive match recommendations with transparent pricing and details for quick decision-making. Complete the entire booking process with digital documentation and instant confirmation.",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    alt: "Review and confirm interface",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">Simple 3-Step Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How LoadMate AI Works</h2>
          <p className="text-lg text-slate-600">Our AI-powered platform simplifies freight matching with a straightforward process that saves time and maximizes efficiency for both shippers and carriers.</p>
        </div>
        
        <div className="relative mb-16">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative md:grid md:grid-cols-2 md:gap-12 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out ${index > 0 ? 'mt-16 md:mt-24' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  {/* Left side - for odd steps on mobile and even steps on desktop */}
                  <div className={`${isEven ? 'md:text-right md:pr-12 flex md:block flex-row-reverse md:flex-row items-start' : 'md:pl-12 md:order-first md:block hidden'}`}>
                    {isEven && (
                      <>
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">Step {step.number}</div>
                          <h3 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                          <p className="text-slate-600 mb-4">{step.description}</p>
                          {index === 0 && (
                            <ul className="space-y-2 text-slate-600 list-disc list-inside text-sm md:text-base">
                              <li>Less than 2 minutes to list a load or update capacity</li>
                              <li>Intelligent form with route suggestions</li>
                              <li>Custom preferences for recurring shipments</li>
                            </ul>
                          )}
                          {index === 1 && (
                            <ul className="space-y-2 text-slate-600 list-disc list-inside text-sm md:text-base">
                              <li>Proprietary matching algorithms based on 20+ factors</li>
                              <li>Learns from successful matches to improve over time</li>
                              <li>Customizable matching parameters for your business needs</li>
                            </ul>
                          )}
                          {index === 2 && (
                            <ul className="space-y-2 text-slate-600 list-disc list-inside text-sm md:text-base">
                              <li>Digital documentation and secure e-signatures</li>
                              <li>Automated notifications to all stakeholders</li>
                              <li>Real-time GPS tracking and status updates</li>
                            </ul>
                          )}
                        </div>
                        <div className="hidden md:flex md:absolute md:right-0 md:top-0 items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary-600 text-white transform md:translate-x-1/2 shadow-lg">
                          <span className="font-bold text-lg">{step.number}</span>
                        </div>
                        <div className="flex md:hidden items-center justify-center w-10 h-10 mr-4 rounded-full bg-primary-600 text-white shadow-md">
                          <span className="font-bold">{step.number}</span>
                        </div>
                      </>
                    )}
                    {!isEven && (
                      <div className="bg-white rounded-lg p-2 border border-slate-200 shadow-lg">
                        <img 
                          src={step.image} 
                          alt={step.alt} 
                          className="w-full h-auto rounded-md"
                        />
                        <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-primary-100 rounded-full -z-10 opacity-70"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Right side - for even steps on mobile and odd steps on desktop */}
                  <div className={`${!isEven ? 'md:text-left md:pl-12 flex md:block items-start' : 'md:pl-12 mt-6 md:mt-0'}`}>
                    {!isEven ? (
                      <>
                        <div className="hidden md:flex md:absolute md:left-0 md:top-0 items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary-600 text-white transform md:translate-x-1/2 shadow-lg">
                          <span className="font-bold text-lg">{step.number}</span>
                        </div>
                        <div className="flex md:hidden items-center justify-center w-10 h-10 mr-4 rounded-full bg-primary-600 text-white shadow-md">
                          <span className="font-bold">{step.number}</span>
                        </div>
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">Step {step.number}</div>
                          <h3 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                          <p className="text-slate-600 mb-4">{step.description}</p>
                          {index === 0 && (
                            <ul className="space-y-2 text-slate-600 list-disc list-inside text-sm md:text-base">
                              <li>Less than 2 minutes to list a load or update capacity</li>
                              <li>Intelligent form with route suggestions</li>
                              <li>Custom preferences for recurring shipments</li>
                            </ul>
                          )}
                          {index === 1 && (
                            <ul className="space-y-2 text-slate-600 list-disc list-inside text-sm md:text-base">
                              <li>Proprietary matching algorithms based on 20+ factors</li>
                              <li>Learns from successful matches to improve over time</li>
                              <li>Customizable matching parameters for your business needs</li>
                            </ul>
                          )}
                          {index === 2 && (
                            <ul className="space-y-2 text-slate-600 list-disc list-inside text-sm md:text-base">
                              <li>Digital documentation and secure e-signatures</li>
                              <li>Automated notifications to all stakeholders</li>
                              <li>Real-time GPS tracking and status updates</li>
                            </ul>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="bg-white rounded-lg p-2 border border-slate-200 shadow-lg">
                        <img 
                          src={step.image} 
                          alt={step.alt} 
                          className="w-full h-auto rounded-md"
                        />
                        <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-amber-100 rounded-full -z-10 opacity-70"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Additional mobile image for odd steps */}
                  {!isEven && (
                    <div className="md:pl-12 mt-6 md:mt-0 md:hidden">
                      <div className="bg-white rounded-lg p-2 border border-slate-200 shadow-lg">
                        <img 
                          src={step.image} 
                          alt={step.alt} 
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center max-w-xl mx-auto mt-16 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 shadow-md mb-6">
            <p className="text-xl font-semibold text-amber-900">
              "LoadMate AI reduced our empty miles by 27% and increased our carrier network by over 400% in just six months."
            </p>
            <div className="mt-4 text-amber-800 font-medium">
              — James Wilson, Operations Director, Global Transit Inc.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
