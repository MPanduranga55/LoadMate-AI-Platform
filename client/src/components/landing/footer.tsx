import FreightIcon from "@/components/ui/freight-icon";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Investors", href: "#" },
  ];
  
  const resourceLinks = [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "API References", href: "#" },
  ];
  
  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR Compliance", href: "#" },
    { label: "Security", href: "#" },
  ];
  
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FreightIcon className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold text-white">FreightMate AI</span>
            </div>
            <p className="mb-4">Revolutionizing logistics through AI-powered freight matching and route optimization.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {currentYear} FreightMate AI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
