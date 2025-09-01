import { useState, useEffect } from "react";
import chumbakMascot from "@/assets/chumbak2.webp";

const FloatingMascot = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Hide mascot when scrolling fast or at very bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 100;
      
      setIsVisible(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate mascot position based on scroll
  const mascotY = Math.min(scrollY * 0.3, window.innerHeight * 0.6);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed left-4 z-40 pointer-events-none transition-all duration-300"
      style={{ 
        top: `${Math.max(100, mascotY)}px`,
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    >
      <div className="float-mascot">
        <img
          src={chumbakMascot}
          alt="Chumbak Mascot"
          className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ pointerEvents: 'auto' }}
        />
        
        {/* Speech bubble that appears on hover */}
        <div className="absolute -right-2 -top-8 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-lg whitespace-nowrap">
            Back to top!
          </div>
          <div className="w-2 h-2 bg-primary transform rotate-45 absolute left-4 -bottom-1"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingMascot;