import { Palette, Heart, Truck, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Palette,
      title: "Custom Designs",
      description: "Each magnet is carefully crafted to represent authentic Indian culture and artistry"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every piece is created with passion and dedication to quality craftsmanship"
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "We deliver your cultural memories worldwide, bringing India to your doorstep"
    },
    {
      icon: Shield,
      title: "Quality Promise",
      description: "Durable materials ensure your magnets stay vibrant and secure for years"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="text-gradient">Chumbak Story</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just magnets – we're keepers of culture, creators of memories, 
            and connectors of hearts across the globe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-chumbak p-6 text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Product Highlights */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Celebrating India's Rich Heritage
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Cultural Icons:</strong> From the Taj Mahal to traditional patterns, 
                  each design tells a story of India's magnificent heritage.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Vibrant Colors:</strong> Using authentic color palettes that 
                  reflect the warmth and vibrancy of Indian culture.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Personal Connection:</strong> Every magnet serves as a bridge 
                  between your roots and your current home.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-chumbak p-8 bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Our Mission
                </h4>
                <p className="text-muted-foreground italic">
                  "To ensure that no matter where you are in the world, 
                  you always have a piece of India close to your heart – 
                  right there on your fridge, reminding you of home every single day."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;