
import Navigation from '../components/Navigation';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "Welcome!",
      description: "Thanks for getting started with our platform.",
    });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 md:pt-40 md:pb-24"
        aria-label="Hero section"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary animate-fade-up">
              Build Something Amazing
            </h1>
            <p className="mt-6 text-lg text-gray-600 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Create extraordinary experiences with our premium development tools and intuitive interface.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <button 
                className="button-primary"
                onClick={handleGetStarted}
                aria-label="Get started with our platform"
              >
                Get Started
              </button>
              <button 
                className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                aria-label="Learn more about our features"
              >
                Learn More
                <ArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        className="section-padding bg-secondary"
        aria-label="Features section"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Premium Quality",
                description: "Built with attention to detail and premium materials."
              },
              {
                icon: Shield,
                title: "Secure by Default",
                description: "Enterprise-grade security built into every feature."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance for the best user experience."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl animate-scale-in hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.2}s` }}
                role="article"
                aria-label={feature.title}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="section-padding"
        aria-label="Contact section"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions? We'd love to hear from you.
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-red-500">*</span>
                </div>
              </div>
              <button 
                type="submit" 
                className="button-primary w-full hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" role="contentinfo">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              © 2024 Your Company. All rights reserved.
            </p>
            <nav aria-label="Footer navigation" className="flex items-center space-x-6">
              <a href="#" className="nav-link" aria-label="Privacy policy">Privacy</a>
              <a href="#" className="nav-link" aria-label="Terms of service">Terms</a>
              <a href="#" className="nav-link" aria-label="Contact us">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
