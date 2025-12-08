import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Mehetrey Hospital | Book Appointment</title>
        <meta 
          name="description" 
          content="Contact Mehetrey Hospital - Orthopaedic & Trauma Center in Hayatnagar, Hyderabad. Call +91 91107 09110 for appointments. 24/7 emergency services available." 
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg opacity-90">Get in touch for consultations and emergency care</p>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-background">
            <div className="container-hospital">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="text-muted-foreground text-lg">
                      We're here to help you with all your orthopaedic needs. 
                      Reach out to us for consultations, appointments, or emergency care.
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    {/* Emergency */}
                    <div className="bg-emergency/10 border border-emergency/20 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-emergency rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="h-7 w-7 text-emergency-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-emergency">24 Hour Emergency</h3>
                          <a 
                            href="tel:+919110709110" 
                            className="text-2xl font-bold text-foreground hover:text-primary block mt-1"
                          >
                            +91 91107 09110
                          </a>
                          <p className="text-sm text-muted-foreground mt-2">
                            Available round the clock for orthopaedic emergencies
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-muted rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground">WhatsApp</h3>
                          <a 
                            href="https://wa.me/919110709110?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-primary hover:text-hospital-blue block mt-1"
                          >
                            Chat with us on WhatsApp
                          </a>
                          <p className="text-sm text-muted-foreground mt-2">
                            Quick responses for appointment booking
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="bg-muted rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground">Hospital Address</h3>
                          <p className="text-foreground mt-1">
                            No 2, Plot No 5,<br />
                            Kolan Shiva Reddy Nagar Road No 2,<br />
                            Hayatnagar, Hyderabad,<br />
                            Telangana 501505
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-muted rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground">Working Hours</h3>
                          <div className="mt-2 space-y-1 text-foreground">
                            <p><span className="font-medium">OPD:</span> 9:00 AM - 9:00 PM</p>
                            <p><span className="font-medium">Emergency:</span> 24/7 Available</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:+919110709110">
                      <Button size="lg" className="btn-emergency">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </Button>
                    </a>
                    <a 
                      href="https://wa.me/919110709110?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </motion.div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-muted rounded-2xl p-4 h-full min-h-[500px]">
                    <div className="rounded-xl overflow-hidden h-full shadow-hospital">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.4!2d78.5996!3d17.3373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba3e3ab8f2c0d%3A0x4b1e5a1e5b5d5e5f!2sKolan%20Shiva%20Reddy%20Nagar%2C%20Hayatnagar%2C%20Hyderabad%2C%20Telangana%20501505!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "480px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mehetrey Hospital Location - Hayatnagar, Hyderabad"
                        className="rounded-xl"
                      />
                    </div>
                    
                    {/* Directions Button */}
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=No+2+Plot+No+5+Kolan+Shiva+Reddy+Nagar+Road+No+2+Hayatnagar+Hyderabad+Telangana+501505"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block"
                    >
                      <Button className="w-full btn-primary-hospital">
                        <MapPin className="mr-2 h-5 w-5" />
                        Get Directions on Google Maps
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

export default Contact;
