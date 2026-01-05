import { motion } from "framer-motion";
import hospitalInterior1 from "@/assets/hospital-interior-1.jpeg";
import hospitalInterior2 from "@/assets/hospital-interior-2.jpeg";

const HospitalGallery = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-hospital">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-hospital-blue font-semibold text-sm uppercase tracking-wider">
            Our Facilities
          </span>
          <h2 className="section-title mt-2">Inside Our Hospital</h2>
          <p className="section-subtitle mx-auto">
            State-of-the-art facilities designed for your comfort and care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={hospitalInterior1} 
              alt="Mehetrey Hospital Reception Area" 
              className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-xl font-bold">Reception & Waiting Area</h3>
                <p className="text-white/80 text-sm mt-1">Comfortable and welcoming environment for patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={hospitalInterior2} 
              alt="Mehetrey Hospital Waiting Area" 
              className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-xl font-bold">Modern Infrastructure</h3>
                <p className="text-white/80 text-sm mt-1">World-class facilities for quality healthcare</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HospitalGallery;
