import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaTruck, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaChartLine, FaUserTie } from "react-icons/fa";
import { MdSecurity, MdHealthAndSafety } from "react-icons/md";
import { motion } from "framer-motion";

const TruckDriverSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={toggleExpand} 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-lg"
            >
              {isExpanded ? "Close Driver Portal" : "Open Truck Driver Portal"}
            </Button>
          </motion.div>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                Truck Driver Opportunities
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                Join our network of professional drivers and gain access to consistent freight, better rates, and the support you need to succeed on the road.
              </p>
            </div>

            <Tabs defaultValue="benefits" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="benefits">Driver Benefits</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="apply">How to Apply</TabsTrigger>
                <TabsTrigger value="testimonials">Driver Stories</TabsTrigger>
              </TabsList>

              <TabsContent value="benefits" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <FaMoneyBillWave className="text-green-500 text-3xl mb-4" />,
                      title: "Competitive Pay",
                      description: "Earn more with our industry-leading rates and transparent payment structure."
                    },
                    {
                      icon: <FaClock className="text-blue-500 text-3xl mb-4" />,
                      title: "Flexible Schedule",
                      description: "Choose loads that fit your desired hours and home time requirements."
                    },
                    {
                      icon: <FaChartLine className="text-purple-500 text-3xl mb-4" />,
                      title: "Growth Opportunities",
                      description: "Access to dedicated freight and long-term partnerships with major shippers."
                    },
                    {
                      icon: <MdSecurity className="text-red-500 text-3xl mb-4" />,
                      title: "Job Security",
                      description: "Consistent freight availability through our AI matching system."
                    },
                    {
                      icon: <FaTruck className="text-amber-500 text-3xl mb-4" />,
                      title: "Equipment Support",
                      description: "Discounts on maintenance, parts, and new equipment through our partners."
                    },
                    {
                      icon: <MdHealthAndSafety className="text-teal-500 text-3xl mb-4" />,
                      title: "Health Benefits",
                      description: "Access to health insurance options and wellness programs."
                    },
                    {
                      icon: <FaMapMarkerAlt className="text-indigo-500 text-3xl mb-4" />,
                      title: "Route Optimization",
                      description: "Minimize deadhead miles with our smart routing technology."
                    },
                    {
                      icon: <FaUserTie className="text-slate-500 text-3xl mb-4" />,
                      title: "Professional Development",
                      description: "Access to training and certifications to enhance your career."
                    }
                  ].map((benefit, index) => (
                    <Card key={index} className="border border-slate-200 hover:shadow-md transition-shadow overflow-hidden">
                      <CardHeader className="pb-2">
                        {benefit.icon}
                        <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-600">{benefit.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="requirements" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Driver Requirements</CardTitle>
                    <CardDescription>
                      All drivers must meet the following qualifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 list-disc pl-6">
                      <li className="text-slate-700">Valid CDL-A license with at least 1 year of verifiable OTR experience</li>
                      <li className="text-slate-700">Clean driving record (no major violations in the past 3 years)</li>
                      <li className="text-slate-700">21 years of age or older</li>
                      <li className="text-slate-700">Pass DOT physical and drug screening</li>
                      <li className="text-slate-700">Ability to pass background check</li>
                      <li className="text-slate-700">Reliable equipment (for owner-operators) or willingness to use company equipment</li>
                      <li className="text-slate-700">Smartphone with data plan for our driver app</li>
                      <li className="text-slate-700">Professional attitude and commitment to customer service</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="apply" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Application Process</CardTitle>
                    <CardDescription>
                      Follow these simple steps to join our driver network
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4 list-decimal pl-6">
                      <li className="text-slate-700">
                        <span className="font-semibold">Complete online application:</span> Fill out our simple online form with your basic information and qualifications.
                      </li>
                      <li className="text-slate-700">
                        <span className="font-semibold">Document submission:</span> Upload copies of your CDL, medical card, and proof of insurance.
                      </li>
                      <li className="text-slate-700">
                        <span className="font-semibold">Background verification:</span> We'll verify your driving history and experience.
                      </li>
                      <li className="text-slate-700">
                        <span className="font-semibold">Orientation:</span> Complete our virtual orientation program to learn about our platform.
                      </li>
                      <li className="text-slate-700">
                        <span className="font-semibold">Download driver app:</span> Set up your profile and preferences in our driver app.
                      </li>
                      <li className="text-slate-700">
                        <span className="font-semibold">Start hauling:</span> Begin receiving AI-matched freight opportunities that fit your preferences.
                      </li>
                    </ol>
                    <Button 
                      className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800"
                      size="lg"
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testimonials" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Michael Johnson",
                      role: "Owner-Operator • 7 years",
                      quote: "Since joining the platform, I've increased my loaded miles by 15% and reduced deadhead by almost 30%. The AI matching is truly revolutionary.",
                      rating: 5
                    },
                    {
                      name: "Sarah Williams",
                      role: "Company Driver • 3 years",
                      quote: "I love having more control over my schedule. The app lets me set my preferences, and I get matched with freight that gets me home when I need to be.",
                      rating: 5
                    },
                    {
                      name: "Robert Garcia",
                      role: "Team Driver • 5 years",
                      quote: "The consistency of freight has been game-changing for us. We're able to plan ahead better and maximize our earnings potential.",
                      rating: 4
                    },
                    {
                      name: "Jennifer Thomas",
                      role: "Owner-Operator • 10 years",
                      quote: "After 10 years in the industry, I've never seen technology make such a positive difference. Better loads, better rates, and better support.",
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <Card key={index} className="border border-slate-200 hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          {Array(testimonial.rating).fill(0).map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TruckDriverSection;