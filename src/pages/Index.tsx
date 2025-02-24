
import Navigation from '../components/Navigation';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary animate-fade-up">
              Build Something Amazing
            </h1>
            <p className="mt-6 text-lg text-gray-600 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Create extraordinary experiences with our premium development tools and intuitive interface.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <button className="button-primary">
                Get Started
              </button>
              <button className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                Learn More
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-secondary">
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
                className="glass-card p-6 rounded-xl animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
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
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions? We'd love to hear from you.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button type="submit" className="button-primary w-full">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="nav-link">Privacy</a>
              <a href="#" className="nav-link">Terms</a>
              <a href="#" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
