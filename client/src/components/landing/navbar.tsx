import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FreightIcon from "@/components/ui/freight-icon";
import { useLocation } from "wouter";
import LoginModal from "@/components/auth/login-modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [_, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleGetStartedClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="flex items-center space-x-2">
              <FreightIcon className="w-8 h-8 text-primary-800" />
              <span className="text-xl font-bold text-primary-800">LoadMate AI</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <a
                  href="#features"
                  className="text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#freight-matcher"
                  className="text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
                >
                  Try It
                </a>
                <a
                  href="#benefits"
                  className="text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
                >
                  Benefits
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
                >
                  Contact
                </a>
              </nav>

              <div className="flex items-center space-x-4">
                <Button variant="outline" onClick={handleLoginClick}>Log In</Button>
                <Button onClick={handleGetStartedClick}>Get Started</Button>
              </div>
            </div>

            <button
              className="md:hidden text-slate-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white border-t border-slate-200`}
        >
          <nav className="flex flex-col px-4 py-2">
            <a
              href="#features"
              className="py-2 text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="py-2 text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#freight-matcher"
              className="py-2 text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Try It
            </a>
            <a
              href="#benefits"
              className="py-2 text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#about"
              className="py-2 text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="py-2 text-sm font-medium text-slate-800 hover:text-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-slate-200 mt-2">
              <Button variant="outline" className="w-full" onClick={handleLoginClick}>
                Log In
              </Button>
              <Button className="w-full" onClick={handleGetStartedClick}>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </>
  );
};

export default Navbar;
