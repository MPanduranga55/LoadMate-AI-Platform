import { Star } from "lucide-react";

const testimonials = [
  {
    text: "FreightMate AI has transformed our logistics operations. We've reduced empty miles by 28% and improved our carrier matching efficiency by over 40%. The real-time tracking gives us complete visibility into our supply chain.",
    author: "Michael Rodriguez",
    position: "Logistics Director, Transcorp Shipping",
    rating: 5
  },
  {
    text: "As a small carrier, finding consistent freight was always challenging. With FreightMate AI, we've increased our load volume by 35% and significantly reduced deadhead miles. The platform is intuitive and the support team is outstanding.",
    author: "Sarah Johnson",
    position: "Owner, Johnson Trucking LLC",
    rating: 5
  },
  {
    text: "We've tried several freight matching platforms, but FreightMate AI's technology is truly revolutionary. The predictive analytics have helped us anticipate market changes and adjust our strategy accordingly. Integration was seamless with our existing systems.",
    author: "David Chen",
    position: "COO, Pacific Freight Solutions",
    rating: 4.5
  }
];

const TestimonialSection = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="h-5 w-5 fill-amber-500 text-amber-500" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-5 w-5 text-amber-500" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-5 w-5 text-amber-500" />
      );
    }
    
    return stars;
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-600">Companies across the logistics industry are achieving remarkable results with our AI-powered platform.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-lg p-6 border border-slate-200 shadow-sm animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-amber-500 flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <blockquote className="text-slate-700 mb-6">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-3 bg-slate-300"></div>
                <div>
                  <p className="font-medium text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
