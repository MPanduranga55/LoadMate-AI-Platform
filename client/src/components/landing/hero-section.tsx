import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 to-primary-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              <span className="text-primary-800">AI-Powered</span> Freight Matching Platform
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 mb-8">
              Revolutionize your logistics operations with intelligent freight matching. Our AI-powered platform connects shippers with carriers in real-time, optimizing routes and reducing empty miles.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex -space-x-2">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-300"></div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-300"></div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-300"></div>
              </div>
              <div className="text-sm text-slate-600">
                <span className="font-medium text-slate-900">500+</span> companies trust our platform
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:ml-auto relative"
          >
            <div className="relative rounded-lg shadow-xl overflow-hidden bg-white p-1">
              <img
                className="w-full h-auto rounded"
                src="https://images.unsplash.com/photo-1585155784229-aff921ccfa10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                alt="AI Freight Matching Dashboard"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-800/90 to-primary-800/20 p-6 text-white">
                <p className="font-medium">AI-powered route optimization dashboard</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default HeroSection;
