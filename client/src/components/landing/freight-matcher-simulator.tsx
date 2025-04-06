import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  BarChart4 
} from "lucide-react";
import { motion } from "framer-motion";

interface FreightMatch {
  id: number;
  carrierName: string;
  distance: number;
  rate: number;
  deliveryTime: string;
  rating: number;
  matchScore: number;
}

const FreightMatcherSimulator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [origin, setOrigin] = useState("Madurai");
  const [destination, setDestination] = useState("Chennai");
  const [loadType, setLoadType] = useState("dry-van");
  const [weight, setWeight] = useState([15000]);
  const [matches, setMatches] = useState<FreightMatch[]>([]);
  const [showMatches, setShowMatches] = useState(false);

  const generateMatches = () => {
    setIsLoading(true);
    setShowMatches(false);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const dummyCarriers = [
        "FastFreight Logistics", 
        "Summit Transport", 
        "Horizon Carriers", 
        "Elite Shipping Co.", 
        "Prime Route Logistics",
        "Velocity Freight",
        "Pinnacle Transport"
      ];
      
      // Generate 5 random matches
      const newMatches: FreightMatch[] = [];
      for (let i = 0; i < 5; i++) {
        const carrierIndex = Math.floor(Math.random() * dummyCarriers.length);
        const matchScore = Math.floor(85 + Math.random() * 15); // 85-100
        const days = Math.floor(1 + Math.random() * 2);
        
        newMatches.push({
          id: i + 1,
          carrierName: dummyCarriers[carrierIndex],
          distance: Math.floor(900 + Math.random() * 300), // 900-1200 miles
          rate: Math.floor(2200 + Math.random() * 800), // $2200-$3000
          deliveryTime: days + " days",
          rating: Math.floor(35 + Math.random() * 15) / 10, // 3.5-5.0
          matchScore: matchScore
        });
      }
      
      // Sort by match score
      newMatches.sort((a, b) => b.matchScore - a.matchScore);
      
      setMatches(newMatches);
      setIsLoading(false);
      setShowMatches(true);
    }, 1500);
  };

  return (
    <section id="freight-matcher" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Try Our Freight Matcher</h2>
          <p className="text-lg text-slate-600">Experience how our AI-powered system matches your freight with the perfect carriers in seconds.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Freight Input Form */}
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 shadow-sm animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Enter Your Shipment Details</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input 
                      id="origin" 
                      placeholder="Origin city"
                      className="pl-9"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input 
                      id="destination" 
                      placeholder="Destination city"
                      className="pl-9"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="load-type">Equipment Type</Label>
                <Select value={loadType} onValueChange={setLoadType}>
                  <SelectTrigger id="load-type" className="w-full">
                    <div className="flex items-center">
                      <Truck className="mr-2 h-4 w-4 text-slate-400" />
                      <SelectValue placeholder="Select equipment type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dry-van">Dry Van</SelectItem>
                    <SelectItem value="reefer">Refrigerated</SelectItem>
                    <SelectItem value="flatbed">Flatbed</SelectItem>
                    <SelectItem value="tanker">Tanker</SelectItem>
                    <SelectItem value="container">Container</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label htmlFor="weight-range">Freight Weight (lbs)</Label>
                  <span className="text-sm text-slate-600 font-medium">{weight[0].toLocaleString()}</span>
                </div>
                <Slider
                  id="weight-range"
                  min={5000}
                  max={45000}
                  step={1000}
                  value={weight}
                  onValueChange={setWeight}
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>5,000</span>
                  <span>45,000</span>
                </div>
              </div>
              
              <Button 
                onClick={generateMatches} 
                disabled={isLoading}
                className="w-full py-2.5"
              >
                {isLoading ? "Finding Matches..." : "Find Carriers"}
              </Button>
            </div>
          </div>
          
          {/* Results Display */}
          <div className="relative min-h-[400px] animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out">
            {!showMatches && !isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <Package className="h-16 w-16 text-slate-300 mb-4" />
                <h3 className="text-xl font-medium text-slate-700 mb-2">Enter your shipment details</h3>
                <p className="text-slate-500">Our AI will instantly match you with the best carriers.</p>
              </div>
            )}
            
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="h-12 w-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
                <h3 className="text-xl font-medium text-slate-700 mb-2">AI Matching in Progress</h3>
                <p className="text-slate-500">Analyzing routes, carrier performance, and pricing...</p>
              </div>
            )}
            
            {showMatches && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">AI-Recommended Matches</h3>
                <p className="text-sm text-slate-600 mb-4">Based on performance, pricing, and availability</p>
                
                {matches.map((match, index) => (
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={match.id}
                    className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <Truck className="h-5 w-5 text-primary-800" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">{match.carrierName}</h4>
                          <div className="flex items-center text-xs text-slate-500">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>Est. delivery: {match.deliveryTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-slate-900">${match.rate}</div>
                        <div className="text-xs text-slate-500">{match.distance} miles</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-xs font-medium bg-amber-100 text-amber-800 rounded-full px-2 py-0.5 flex items-center">
                          <BarChart4 className="h-3 w-3 mr-1" />
                          {match.rating} Rating
                        </div>
                      </div>
                      <div>
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                          {match.matchScore}% Match
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                <div className="pt-4 flex justify-center">
                  <Button variant="outline" size="sm">See More Options</Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreightMatcherSimulator;