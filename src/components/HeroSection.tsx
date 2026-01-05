import { Link } from "react-router-dom";
import { Phone, Calendar, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import hospitalImage from "@/assets/hospital-building.jpeg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-hospital-navy to-hospital-navy-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-hospital relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[85vh] py-12">
          {/* Content */}
          <motion.div 
            className="text-primary-foreground space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-hospital-gold text-hospital-gold" />
                <span className="font-bold">4.9</span>
              </div>
              <span className="text-sm opacity-90">| 160+ Google Reviews</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Move Freely,<br />
              <span className="text-hospital-sky">Embrace The Joy</span><br />
              Of Orthopedic Care
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-xl">
              Complete Solution for Bones & Joints. Expert diagnosis, advanced treatment, 
              and compassionate care at Mehetrey Hospital.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 py-2">
              {[
                { icon: Shield, text: "Expert Surgeon" },
                { icon: Clock, text: "24/7 Available" },
                { icon: Star, text: "Quality Care" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm opacity-90">
                  <item.icon className="h-5 w-5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-base px-8">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </Link>
              <a href="tel:+919110709110">
                <Button size="lg" className="btn-emergency text-base px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  24 HR EMERGENCY
                </Button>
              </a>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { number: "10+", label: "Years Experience" },
                { number: "5000+", label: "Happy Patients" },
                { number: "24/7", label: "Emergency Care" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-hospital-sky">{stat.number}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={hospitalImage}
                alt="Mehetrey Hospital Building"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              
              {/* Floating Card */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Emergency Helpline</p>
                    <p className="font-bold text-primary text-lg">+91 91107 09110</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
