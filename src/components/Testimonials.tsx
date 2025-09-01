import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import magnet1 from "@/assets/magnet-1.jpg";
import magnet2 from "@/assets/magnet-2.jpg";
import magnet3 from "@/assets/magnet-3.jpg";
import magnet4 from "@/assets/magnet-4.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "London, UK",
      text: "Finally, magnets that represent my culture! Every time I open my fridge, I'm reminded of home. The quality is amazing and the designs are so authentic.",
      rating: 5,
      customerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      magnetPhoto: magnet1
    },
    {
      name: "Raj Patel",
      location: "Toronto, Canada",
      text: "The Chumbak Story magnets are conversation starters! My friends always ask about them. It's wonderful to have something that celebrates Indian heritage so beautifully.",
      rating: 5,
      customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      magnetPhoto: magnet2
    },
    {
      name: "Anita Gupta",
      location: "San Francisco, USA",
      text: "I ordered a complete set for my new apartment. Each magnet is a work of art. The colors are vibrant and they've maintained their quality for over a year now.",
      rating: 5,
      customerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      magnetPhoto: magnet3
    },
    {
      name: "Vikram Singh",
      location: "Sydney, Australia",
      text: "As someone living far from India, these magnets bring me so much joy. My kitchen feels more like home with these beautiful pieces decorating my fridge.",
      rating: 5,
      customerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      magnetPhoto: magnet4
    },
    {
      name: "Meera Shah",
      location: "Mumbai, India",
      text: "These magnets perfectly capture the essence of Indian art. The attention to detail is incredible and they make perfect gifts for my overseas friends!",
      rating: 5,
      customerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      magnetPhoto: magnet1
    },
    {
      name: "Arjun Mehta",
      location: "Dubai, UAE",
      text: "Outstanding quality and beautiful designs! Every magnet tells a story. My collection keeps growing because I can't resist ordering more.",
      rating: 5,
      customerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      magnetPhoto: magnet2
    }
  ];

  // Auto-play carousel on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Create circle positions for desktop layout
  const getCirclePosition = (index: number, total: number) => {
    const angle = (index * 360) / total;
    const radius = 250; // Circle radius
    const centerX = 50; // Center X percentage
    const centerY = 50; // Center Y percentage
    
    const x = centerX + (radius * Math.cos((angle - 90) * Math.PI / 180)) / 10;
    const y = centerY + (radius * Math.sin((angle - 90) * Math.PI / 180)) / 10;
    
    return { left: `${x}%`, top: `${y}%` };
  };

  return (
    <section 
      ref={sectionRef} 
      id="testimonials" 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--chumbak-beige)) 0%, hsl(var(--secondary)) 50%, hsl(var(--background)) 100%)'
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/50 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent rounded-full animate-bounce" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-display">
            What Our <span className="text-gradient">Happy Customers</span> Say! ✨
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium">
            Join thousands of delighted families who've brought the magic of India into their homes! 🏠💕
          </p>
        </div>

        {/* Mobile Carousel View */}
        <div className="block lg:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card bg-card rounded-3xl p-8 shadow-2xl border-4 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                    {/* Customer & Product Photos */}
                    <div className="flex items-center justify-center space-x-6 mb-6">
                      <img 
                        src={testimonial.customerAvatar} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-primary shadow-lg transition-transform duration-300 hover:rotate-12"
                      />
                      <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-accent shadow-lg">
                        <img 
                          src={testimonial.magnetPhoto} 
                          alt="Magnet"
                          className="w-full h-full object-cover transition-transform duration-300 hover:rotate-12 hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-4 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic font-medium text-center">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="text-center">
                      <div className="font-bold text-foreground text-xl mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        📍 {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-primary/30 hover:bg-primary/60'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Circle Layout */}
        <div className="hidden lg:block">
          <div className="relative h-[800px] max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => {
              const position = getCirclePosition(index, testimonials.length);
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={index}
                  className="testimonial-card absolute w-80 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-10"
                  style={{
                    ...position,
                    transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.1) translateY(-10px)' : 'scale(1)'}`,
                    zIndex: isHovered ? 50 : 10
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bg-card rounded-3xl p-6 shadow-2xl border-4 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm">
                    {/* Customer & Product Photos */}
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <img 
                        src={testimonial.customerAvatar} 
                        alt={testimonial.name}
                        className={`w-16 h-16 rounded-full border-4 border-primary shadow-lg transition-transform duration-500 ${
                          isHovered ? 'rotate-12 scale-110' : ''
                        }`}
                      />
                      <div className={`w-16 h-16 rounded-2xl overflow-hidden border-4 border-accent shadow-lg transition-transform duration-500 ${
                        isHovered ? '-rotate-12 scale-110' : ''
                      }`}>
                        <img 
                          src={testimonial.magnetPhoto} 
                          alt="Magnet"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-3 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-sm text-foreground leading-relaxed mb-4 italic font-medium text-center line-clamp-4">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="text-center">
                      <div className="font-bold text-foreground text-lg mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-sm font-medium">
                        📍 {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Center Decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Quote className="w-12 h-12 text-white" />
              </div>
              <p className="text-2xl font-bold text-primary mt-4">✨ Customer Love ✨</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center testimonial-card">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-display">10,000+</div>
            <div className="text-lg text-foreground font-semibold">Happy Customers 😊</div>
          </div>
          <div className="text-center testimonial-card">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-display">50+</div>
            <div className="text-lg text-foreground font-semibold">Countries Served 🌍</div>
          </div>
          <div className="text-center testimonial-card">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-display">4.9⭐</div>
            <div className="text-lg text-foreground font-semibold">Average Rating ⭐</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center testimonial-card">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-display">
            Ready to add some <span className="text-gradient">Indian magic</span> to your home? ✨
          </p>
          <Button 
            className="btn-hero px-12 py-4 text-xl font-bold rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=918368420841&text&type=phone_number&app_absent=0', '_blank')}
          >
            🎨 Create My Magnet Now! 🎨
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;