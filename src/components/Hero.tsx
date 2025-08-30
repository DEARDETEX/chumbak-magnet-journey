import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import chumbakMascot from "@/assets/chumbak-mascot.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the pop animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full float-gentle"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-primary/30 rounded-full float-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/25 rounded-full float-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-40 w-5 h-5 bg-primary/20 rounded-full float-gentle" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated Mascot */}
        <div className="mb-8">
          <img
            src={chumbakMascot}
            alt="Chumbak Mascot"
            className={`w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl ${
              isLoaded ? 'magnet-pop' : 'opacity-0'
            }`}
          />
        </div>

        {/* Hero Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            The{' '}
            <span className="text-gradient font-black">
              Chumbak
            </span>{' '}
            Story
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            They made custom fridge magnets for you
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the journey of bringing Indian culture to your kitchen, one magnet at a time. 
            Each piece tells a story, celebrates a memory, and adds a touch of home to your space.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="btn-hero px-8 py-3 text-lg"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=918368420841&text&type=phone_number&app_absent=0', '_blank')}
          >
            Make My Magnet
          </Button>
          
          <Button 
            variant="outline"
            className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => scrollToSection('about')}
          >
            Our Story
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;