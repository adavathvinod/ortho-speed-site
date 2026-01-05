import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImage from "@/assets/doctor-profile.jpeg";

const DoctorSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-hospital">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hospital-lg">
              <img
                src={doctorImage}
                alt="Dr. Ravinder Mehetrey - Orthopaedic Surgeon"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years Exp.</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-hospital-blue font-semibold text-sm uppercase tracking-wider">
              Meet Our Expert
            </span>
            <h2 className="section-title">Dr. Ravinder Mehetrey</h2>
            <p className="text-muted-foreground text-lg font-medium">
              Consultant Orthopaedic & Joint Replacement Surgeon
            </p>

            {/* Qualifications */}
            <div className="space-y-4 py-4">
              {[
                { icon: GraduationCap, text: "MBBS" },
                { icon: Award, text: "DNB ORTHO" },
                { icon: Award, text: "MNAMS ORTHO" },
                { icon: Stethoscope, text: "Fellowship in Arthroscopy & Arthroplasty (Mumbai)" },
              ].map((qual, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <qual.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{qual.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience in orthopaedic surgery, Dr. Mehetrey specializes 
              in advanced arthroscopic and joint replacement procedures. His expertise spans 
              from minimally invasive surgeries to complex trauma cases, ensuring patients 
              receive world-class care.
            </p>

            <Link to="/specialist">
              <Button className="btn-primary-hospital group mt-4">
                View Full Profile
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
