import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "London, UK",
      text: "Finally, magnets that represent my culture! Every time I open my fridge, I'm reminded of home. The quality is amazing and the designs are so authentic.",
      rating: 5,
      image: "🇮🇳"
    },
    {
      name: "Raj Patel",
      location: "Toronto, Canada",
      text: "The Chumbak Story magnets are conversation starters! My friends always ask about them. It's wonderful to have something that celebrates Indian heritage so beautifully.",
      rating: 5,
      image: "🏠"
    },
    {
      name: "Anita Gupta",
      location: "San Francisco, USA",
      text: "I ordered a complete set for my new apartment. Each magnet is a work of art. The colors are vibrant and they've maintained their quality for over a year now.",
      rating: 5,
      image: "✨"
    },
    {
      name: "Vikram Singh",
      location: "Sydney, Australia",
      text: "As someone living far from India, these magnets bring me so much joy. My kitchen feels more like home with these beautiful pieces decorating my fridge.",
      rating: 5,
      image: "❤️"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of happy customers who've brought a piece of India into their homes
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="card-chumbak p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background quote decoration */}
            <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/10" />
            <Quote className="absolute bottom-4 right-4 w-12 h-12 text-primary/10 rotate-180" />
            
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">{currentTestimonial.image}</div>
              <div className="text-left">
                <div className="font-semibold text-foreground text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonial.location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
              className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9⭐</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex justify-center items-center">
          <Button 
            className="btn-hero px-8 py-3 text-lg"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=918368420841&text&type=phone_number&app_absent=0', '_blank')}
          >
            Make My Magnet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;