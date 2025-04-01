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
    description: "Both parties receive match recommendations with transparent pricing and details for quick decision-making.",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    alt: "Review and confirm interface",
  },
  {
    number: 4,
    title: "Track and Manage",
    description: "Monitor shipments in real-time with GPS tracking, automated status updates, and digital documentation.",
    image: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    alt: "Track and manage interface",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600">Our AI-powered platform simplifies freight matching with a straightforward process that saves time and maximizes efficiency.</p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative md:grid md:grid-cols-2 md:gap-8 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out ${index > 0 ? 'mt-12 md:mt-0' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  {/* Left side - for odd steps on mobile and even steps on desktop */}
                  <div className={`${isEven ? 'md:text-right md:pr-12 flex md:block flex-row-reverse md:flex-row items-start' : 'md:pl-12 md:order-first md:block hidden'}`}>
                    {isEven && (
                      <>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.number}. {step.title}</h3>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                        <div className="hidden md:flex md:absolute md:right-0 md:top-0 items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-500 text-white transform md:translate-x-1/2">
                          <span className="font-bold">{step.number}</span>
                        </div>
                        <div className="flex md:hidden items-center justify-center w-8 h-8 mr-4 rounded-full bg-primary-500 text-white">
                          <span className="font-bold text-sm">{step.number}</span>
                        </div>
                      </>
                    )}
                    {!isEven && (
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <img 
                          src={step.image} 
                          alt={step.alt} 
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Right side - for even steps on mobile and odd steps on desktop */}
                  <div className={`${!isEven ? 'md:text-left md:pl-12 flex md:block items-start' : 'md:pl-12 mt-3 md:mt-0'}`}>
                    {!isEven ? (
                      <>
                        <div className="hidden md:flex md:absolute md:left-0 md:top-0 items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-500 text-white transform md:translate-x-1/2">
                          <span className="font-bold">{step.number}</span>
                        </div>
                        <div className="flex md:hidden items-center justify-center w-8 h-8 mr-4 rounded-full bg-primary-500 text-white">
                          <span className="font-bold text-sm">{step.number}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.number}. {step.title}</h3>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                      </>
                    ) : (
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <img 
                          src={step.image} 
                          alt={step.alt} 
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Additional mobile image for odd steps */}
                  {!isEven && (
                    <div className="md:pl-12 mt-3 md:mt-0 md:hidden">
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
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
      </div>
    </section>
  );
};

export default HowItWorksSection;
