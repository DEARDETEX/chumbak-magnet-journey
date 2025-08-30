import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              The Chumbak Story
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              Bringing the vibrant colors and rich heritage of India to your home, 
              one custom magnet at a time. Celebrating culture, creating memories.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/chumbakstory" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@chumbakstory.com"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-background/80 hover:text-primary transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-background/80 hover:text-primary transition-colors duration-200">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-primary transition-colors duration-200">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80">hello@chumbakstory.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-background/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © {currentYear} The Chumbak Story. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
              Shipping Info
            </a>
          </div>
        </div>

        {/* Cultural Note */}
        <div className="mt-8 text-center">
          <p className="text-background/40 text-sm italic">
            "Proudly celebrating Indian heritage, one magnet at a time" 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;