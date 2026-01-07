import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import spineIcon from "@/assets/spine-icon.jpeg";
import arthroscopyIcon from "@/assets/arthroscopy-icon.png";
import jointReplacementIcon from "@/assets/joint-replacement-icon.png";

const specialtiesData = [
  {
    id: "spine",
    name: "Spine Surgery",
    image: spineIcon,
    description: "Comprehensive spine care for conditions affecting the cervical, thoracic, and lumbar spine.",
    treatments: [
      "Disc Replacement Surgery",
      "Spinal Fusion",
      "Minimally Invasive Spine Surgery",
      "Scoliosis Correction",
      "Spinal Decompression",
      "Vertebroplasty",
    ],
    conditions: ["Herniated Disc", "Spinal Stenosis", "Degenerative Disc Disease", "Sciatica", "Spondylolisthesis"],
  },
  {
    id: "shoulder",
    name: "Shoulder",
    icon: "💪",
    description: "Expert treatment for shoulder injuries, arthritis, and sports-related conditions.",
    treatments: [
      "Rotator Cuff Repair",
      "Shoulder Replacement",
      "Shoulder Arthroscopy",
      "Bankart Repair",
      "SLAP Tear Repair",
      "Frozen Shoulder Treatment",
    ],
    conditions: ["Rotator Cuff Tears", "Shoulder Dislocation", "Frozen Shoulder", "Shoulder Impingement", "Arthritis"],
  },
  {
    id: "hip",
    name: "Hip",
    icon: "🦵",
    description: "Advanced hip surgery including replacement and fracture management.",
    treatments: [
      "Total Hip Replacement",
      "Partial Hip Replacement",
      "Hip Resurfacing",
      "Hip Arthroscopy",
      "Fracture Fixation",
      "Hip Preservation Surgery",
    ],
    conditions: ["Hip Arthritis", "Hip Fractures", "Avascular Necrosis", "Hip Dysplasia", "Labral Tears"],
  },
  {
    id: "knee",
    name: "Knee",
    icon: "🦿",
    description: "State-of-the-art knee treatments from arthroscopy to total joint replacement.",
    treatments: [
      "Total Knee Replacement",
      "Partial Knee Replacement",
      "ACL Reconstruction",
      "PCL Reconstruction",
      "Meniscus Repair",
      "Knee Arthroscopy",
    ],
    conditions: ["Knee Osteoarthritis", "ACL/PCL Injuries", "Meniscus Tears", "Patella Disorders", "Knee Instability"],
  },
  {
    id: "foot-ankle",
    name: "Foot & Ankle",
    icon: "🦶",
    description: "Specialized care for complex foot and ankle conditions.",
    treatments: [
      "Ankle Replacement",
      "Ankle Arthroscopy",
      "Bunion Correction",
      "Achilles Tendon Repair",
      "Plantar Fasciitis Treatment",
      "Fracture Fixation",
    ],
    conditions: ["Ankle Arthritis", "Achilles Tendonitis", "Plantar Fasciitis", "Bunions", "Ankle Sprains"],
  },
  {
    id: "hand",
    name: "Hand Surgery",
    icon: "✋",
    description: "Expert hand and wrist surgery for injuries and degenerative conditions.",
    treatments: [
      "Carpal Tunnel Release",
      "Trigger Finger Release",
      "Tendon Repair",
      "Fracture Fixation",
      "Dupuytren's Contracture",
      "Ganglion Cyst Removal",
    ],
    conditions: ["Carpal Tunnel Syndrome", "Trigger Finger", "De Quervain's", "Hand Fractures", "Arthritis"],
  },
  {
    id: "arthroscopy",
    name: "Arthroscopy",
    image: arthroscopyIcon,
    description: "Minimally invasive keyhole surgery for faster recovery and less pain.",
    treatments: [
      "Knee Arthroscopy",
      "Shoulder Arthroscopy",
      "Hip Arthroscopy",
      "Ankle Arthroscopy",
      "Elbow Arthroscopy",
      "Wrist Arthroscopy",
    ],
    conditions: ["Ligament Tears", "Cartilage Damage", "Loose Bodies", "Synovitis", "Impingement Syndromes"],
  },
  {
    id: "joint-replacement",
    name: "Joint Replacement",
    image: jointReplacementIcon,
    description: "Advanced arthroplasty procedures for hip, knee, and shoulder joints.",
    treatments: [
      "Total Hip Replacement",
      "Total Knee Replacement",
      "Partial Knee Replacement",
      "Shoulder Replacement",
      "Revision Surgery",
      "Computer-Assisted Surgery",
    ],
    conditions: ["Severe Arthritis", "Joint Degeneration", "Post-Traumatic Arthritis", "Rheumatoid Arthritis", "Failed Prior Surgery"],
  },
];

const Specialities = () => {
  return (
    <>
      <Helmet>
        <title>Clinical Specialities - Orthopaedic Services | Mehetrey Hospital</title>
        <meta 
          name="description" 
          content="Comprehensive orthopaedic specialities at Mehetrey Hospital: Spine Surgery, Joint Replacement, Arthroscopy, Knee, Hip, Shoulder, Hand surgery. Expert treatment in Hyderabad." 
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Banner */}
          <section className="bg-gradient-to-br from-primary to-hospital-navy-light text-primary-foreground py-16">
            <div className="container-hospital">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Clinical Specialities</h1>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Complete solution for bones & joints. Expert diagnosis and treatment for all orthopaedic conditions.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Specialities List */}
          <section className="section-padding bg-muted">
            <div className="container-hospital">
              <div className="space-y-12">
                {specialtiesData.map((specialty, index) => (
                  <motion.div
                    key={specialty.id}
                    id={specialty.id}
                    className="bg-card rounded-2xl shadow-hospital overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Header */}
                      <div className="bg-gradient-to-br from-primary to-hospital-navy-light text-primary-foreground p-8 flex flex-col justify-center">
                        {'image' in specialty ? (
                          <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-white/20 flex items-center justify-center p-2">
                            <img 
                              src={specialty.image} 
                              alt={specialty.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <span className="text-5xl mb-4">{specialty.icon}</span>
                        )}
                        <h2 className="text-2xl font-bold mb-2">{specialty.name}</h2>
                        <p className="opacity-90 text-sm">{specialty.description}</p>
                      </div>

                      {/* Treatments */}
                      <div className="p-8 border-r border-border">
                        <h3 className="text-lg font-bold text-primary mb-4">Treatments Offered</h3>
                        <ul className="space-y-2">
                          {specialty.treatments.map((treatment, i) => (
                            <li key={i} className="flex items-start gap-2 text-foreground">
                              <CheckCircle className="h-5 w-5 text-hospital-success flex-shrink-0 mt-0.5" />
                              <span>{treatment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Conditions */}
                      <div className="p-8 bg-muted/50">
                        <h3 className="text-lg font-bold text-primary mb-4">Conditions Treated</h3>
                        <ul className="space-y-2">
                          {specialty.conditions.map((condition, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{condition}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-muted-foreground mb-6">
                  Need expert consultation for your orthopaedic condition?
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact">
                    <Button className="btn-primary-hospital">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Consultation
                    </Button>
                  </Link>
                  <a href="tel:+919110709110">
                    <Button className="btn-emergency">
                      <Phone className="mr-2 h-5 w-5" />
                      24 HR Emergency
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Specialities;
