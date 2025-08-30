import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FloatingMascot from "@/components/FloatingMascot";
import Story from "@/components/Story";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingMascot />
      <Hero />
      <Story />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
