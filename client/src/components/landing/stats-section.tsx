const stats = [
  { number: "98%", text: "Load match accuracy" },
  { number: "30%", text: "Reduction in empty miles" },
  { number: "24/7", text: "Real-time matching" },
  { number: "3.5M+", text: "Loads matched annually" },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl md:text-4xl font-semibold text-primary-800">{stat.number}</p>
              <p className="text-sm md:text-base text-slate-600 mt-2">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
