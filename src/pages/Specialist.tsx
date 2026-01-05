import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import { Award, GraduationCap, Stethoscope, Users, Calendar, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import doctorImage from "@/assets/doctor-profile.jpeg";
import { Helmet } from "react-helmet-async";

const Specialist = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Ravinder Mehetrey - Orthopaedic Surgeon | Mehetrey Hospital</title>
        <meta 
          name="description" 
          content="Dr. Ravinder Mehetrey - Consultant Orthopaedic & Joint Replacement Surgeon with 10+ years experience. MBBS, DNB ORTHO, MNAMS ORTHO. Fellowship in Arthroscopy & Arthroplasty." 
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Specialist</h1>
                <p className="text-lg opacity-90">Expert Orthopaedic Care You Can Trust</p>
              </motion.div>
            </div>
          </section>

          {/* Doctor Profile */}
          <section className="section-padding bg-background">
            <div className="container-hospital">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="sticky top-32">
                    <div className="relative rounded-2xl overflow-hidden shadow-hospital-lg">
                      <img
                        src={doctorImage}
                        alt="Dr. Ravinder Mehetrey"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    
                    {/* Stats Card */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {[
                        { icon: Calendar, number: "10+", label: "Years Exp." },
                        { icon: Users, number: "5000+", label: "Patients" },
                        { icon: Star, number: "4.9", label: "Rating" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-muted rounded-xl p-4 text-center">
                          <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                          <p className="text-xl font-bold text-primary">{stat.number}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div>
                    <span className="text-hospital-blue font-semibold text-sm uppercase tracking-wider">
                      Lead Surgeon
                    </span>
                    <h2 className="text-4xl font-bold text-primary mt-2">Dr. Ravinder Mehetrey</h2>
                    <p className="text-xl text-muted-foreground mt-2">
                      Consultant Orthopaedic & Joint Replacement Surgeon
                    </p>
                  </div>

                  {/* Qualifications */}
                  <div className="bg-muted rounded-xl p-6">
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Qualifications & Training
                    </h3>
                    <div className="space-y-3">
                      {[
                        { icon: Award, text: "MBBS - Bachelor of Medicine and Surgery" },
                        { icon: Award, text: "DNB ORTHO - Diplomate of National Board (Orthopaedics)" },
                        { icon: Award, text: "MNAMS ORTHO - Member of National Academy of Medical Sciences" },
                        { icon: Stethoscope, text: "Fellowship in Arthroscopy & Arthroplasty (Mumbai)" },
                      ].map((qual, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <qual.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{qual.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">About Dr. Mehetrey</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Dr. Ravinder Mehetrey is a highly skilled orthopaedic surgeon with over a decade 
                        of experience in treating bone and joint disorders. His expertise encompasses 
                        a wide range of orthopaedic procedures, from minimally invasive arthroscopic 
                        surgeries to complex joint replacement operations.
                      </p>
                      <p>
                        Having completed his fellowship in Arthroscopy & Arthroplasty from a prestigious 
                        institute in Mumbai, Dr. Mehetrey brings advanced surgical techniques and 
                        cutting-edge medical knowledge to his practice at Mehetrey Hospital.
                      </p>
                      <p>
                        His patient-centered approach, combined with his technical expertise, has earned 
                        him the trust of thousands of patients. Dr. Mehetrey is committed to providing 
                        personalized care and ensuring optimal outcomes for every patient.
                      </p>
                    </div>
                  </div>

                  {/* Areas of Expertise */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Areas of Expertise</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Joint Replacement Surgery",
                        "Arthroscopic Surgery",
                        "Spine Surgery",
                        "Trauma & Fracture Care",
                        "Sports Medicine",
                        "Ligament Reconstruction",
                        "Shoulder Surgery",
                        "Hip Replacement",
                      ].map((area, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-hospital-success flex-shrink-0" />
                          <span className="text-foreground">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/contact">
                      <Button className="btn-primary-hospital">
                        <Calendar className="mr-2 h-5 w-5" />
                        Book Appointment
                      </Button>
                    </Link>
                    <a href="tel:+919110709110">
                      <Button className="btn-emergency">
                        Call for Consultation
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Specialist;
