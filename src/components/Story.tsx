import { CheckCircle, Heart, Globe, Users } from "lucide-react";

const Story = () => {
  const timelineItems = [
    {
      year: "2015",
      title: "The Inspiration",
      description: "A couple noticed the lack of Indian culture in fridge magnets worldwide",
      icon: Heart,
      color: "text-primary"
    },
    {
      year: "2016",
      title: "First Collection",
      description: "Launched with iconic Indian symbols and vibrant cultural designs",
      icon: CheckCircle,
      color: "text-primary"
    },
    {
      year: "2018",
      title: "Going Global",
      description: "Expanded to serve customers across different countries",
      icon: Globe,
      color: "text-primary"
    },
    {
      year: "2024",
      title: "Community Impact",
      description: "Thousands of customers now celebrate their heritage daily",
      icon: Users,
      color: "text-primary"
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a simple observation to a global movement celebrating culture through custom magnets
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={item.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="card-chumbak p-6 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <item.icon className={`w-8 h-8 ${item.color} mr-3`} />
                      <span className="text-2xl font-bold text-primary">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-2 md:w-4 md:h-4 bg-primary rounded-full mx-4 my-4 md:my-0 flex-shrink-0 hidden md:block"></div>

                {/* Spacer for alternating layout */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Story highlight */}
        <div className="mt-20 text-center">
          <div className="card-chumbak p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Missing Piece
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "We realized that while our fridges were covered with magnets from Thailand, USA, France, and Egypt, 
              there was nothing celebrating India's incredible cultural heritage. That's when we knew we had to 
              create something special – magnets that would make every Indian feel proud of their roots, 
              no matter where they were in the world."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;