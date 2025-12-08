import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = [
  {
    name: "Spine",
    icon: "🦴",
    description: "Comprehensive spine care including disc replacement and spinal fusion",
  },
  {
    name: "Shoulder",
    icon: "💪",
    description: "Rotator cuff repairs, shoulder replacement, and sports injuries",
  },
  {
    name: "Hip",
    icon: "🦵",
    description: "Hip replacement surgery and fracture management",
  },
  {
    name: "Knee",
    icon: "🦿",
    description: "Total knee replacement, ligament reconstruction, and arthroscopy",
  },
  {
    name: "Foot & Ankle",
    icon: "🦶",
    description: "Ankle reconstruction, bunion correction, and sports injuries",
  },
  {
    name: "Hand",
    icon: "✋",
    description: "Carpal tunnel, trigger finger, and fracture treatments",
  },
  {
    name: "Arthroscopy",
    icon: "🔬",
    description: "Minimally invasive keyhole surgery for faster recovery",
  },
  {
    name: "Joint Replacement",
    icon: "⚙️",
    description: "Advanced arthroplasty for hip, knee, and shoulder joints",
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-hospital">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-hospital-blue font-semibold text-sm uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="section-title mt-2">Clinical Specialities</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive orthopaedic care covering all aspects of bone and joint health
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              className="card-specialty group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{specialty.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-hospital-blue transition-colors">
                {specialty.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {specialty.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/specialities">
            <Button className="btn-primary-hospital group">
              View All Specialities
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
