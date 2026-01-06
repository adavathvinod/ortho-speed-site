import { motion } from "framer-motion";
import galleryWard from "@/assets/gallery-ward.jpeg";
import galleryOperationTheater from "@/assets/gallery-operation-theater.jpeg";
import galleryDiagnostic from "@/assets/gallery-diagnostic.jpeg";
import galleryOTRoom from "@/assets/gallery-ot-room.jpeg";
import galleryPharmacy from "@/assets/gallery-pharmacy.jpeg";
import galleryPrivateRoom from "@/assets/gallery-private-room.jpeg";
import galleryRecoveryRoom from "@/assets/gallery-recovery-room.jpeg";

const galleryImages = [
  {
    src: galleryOperationTheater,
    alt: "Operation Theater",
    title: "Modern Operation Theater",
    description: "State-of-the-art surgical facility"
  },
  {
    src: galleryOTRoom,
    alt: "OT Room",
    title: "Advanced OT Equipment",
    description: "Latest surgical instruments and technology"
  },
  {
    src: galleryWard,
    alt: "Patient Ward",
    title: "Patient Ward",
    description: "Comfortable and well-equipped ward"
  },
  {
    src: galleryPrivateRoom,
    alt: "Private Room",
    title: "Private Patient Rooms",
    description: "Spacious rooms with modern amenities"
  },
  {
    src: galleryRecoveryRoom,
    alt: "Recovery Room",
    title: "Recovery Ward",
    description: "Post-operative care facility"
  },
  {
    src: galleryPharmacy,
    alt: "Pharmacy",
    title: "In-House Pharmacy",
    description: "Fully stocked medical supplies"
  },
  {
    src: galleryDiagnostic,
    alt: "Diagnostic Center",
    title: "Diagnostic Center",
    description: "Advanced diagnostic equipment"
  }
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              className={`relative overflow-hidden rounded-2xl shadow-lg group ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  index === 0 ? 'h-[300px] sm:h-[400px] lg:h-full' : 'h-[200px] sm:h-[220px]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy/80 to-transparent flex items-end p-4 sm:p-6">
                <div>
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalGallery;