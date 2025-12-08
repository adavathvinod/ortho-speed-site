import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-hospital">
        <motion.div 
          className="bg-gradient-to-r from-primary to-hospital-navy-light rounded-2xl p-8 md:p-12 text-primary-foreground text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Expert Orthopaedic Care?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards a pain-free life. 
            Our team is ready to help you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-base px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </Link>
            <a href="tel:+919110709110">
              <Button size="lg" className="btn-emergency text-base px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm opacity-80">
            <MapPin className="h-4 w-4" />
            <span>Hayatnagar, Hyderabad | Open 24/7</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
