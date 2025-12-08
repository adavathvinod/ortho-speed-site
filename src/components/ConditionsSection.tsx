import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const conditions = [
  "Low Back Pain",
  "Fractures & Accidents",
  "Slip Disc & Sciatica",
  "Neck Pain",
  "Shoulder Pain",
  "Knee Pain & Arthritis",
  "Hip Pain",
  "Sports Injuries",
  "Osteoporosis",
  "Joint Stiffness",
  "Ligament Injuries",
  "Bone Tumors",
];

const ConditionsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-hospital">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-hospital-blue font-semibold text-sm uppercase tracking-wider">
              Comprehensive Care
            </span>
            <h2 className="section-title mt-2">Conditions We Treat</h2>
            <p className="text-muted-foreground text-lg mb-8">
              From common orthopaedic issues to complex trauma cases, our expert team 
              provides specialized treatment for a wide range of conditions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <motion.div
                  key={condition}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle className="h-5 w-5 text-hospital-success flex-shrink-0" />
                  <span className="text-foreground">{condition}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary to-hospital-navy-light rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">24/7 Emergency Care</h3>
              <p className="text-lg opacity-90 mb-6">
                Immediate medical attention for orthopaedic emergencies, accidents, 
                and trauma cases. Our dedicated team is available round the clock.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-primary-foreground/10 p-4 rounded-lg">
                  <div className="w-14 h-14 bg-emergency rounded-full flex items-center justify-center animate-pulse-subtle">
                    <span className="text-2xl">🚨</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Emergency Helpline</p>
                    <a href="tel:+919110709110" className="text-2xl font-bold hover:text-hospital-sky">
                      +91 91107 09110
                    </a>
                  </div>
                </div>

                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Immediate trauma assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Emergency surgery facilities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Advanced diagnostic imaging
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
