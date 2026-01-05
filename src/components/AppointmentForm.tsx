import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Phone, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    // Create WhatsApp message
    const message = `*New Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Preferred Date:* ${formData.date || "Not specified"}%0A*Message:* ${formData.message || "No additional message"}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919110709110?text=${message}`, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
    
    // Reset form
    setFormData({ name: "", phone: "", date: "", message: "" });
  };

  return (
    <section className="section-padding bg-hospital-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-hospital-blue rounded-full blur-3xl" />
      </div>

      <div className="container-hospital relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-hospital-blue font-semibold text-sm uppercase tracking-wider">
              Book Your Visit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Schedule an Appointment
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Fill out the form and we'll get back to you on WhatsApp to confirm your appointment. Our team is available 24/7 for emergencies.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-hospital-blue/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-hospital-blue" />
                </div>
                <div>
                  <p className="text-sm text-white/60">24/7 Emergency</p>
                  <p className="font-semibold text-white">+91 91107 09110</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-hospital-blue/20 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-hospital-blue" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Consultation Hours</p>
                  <p className="font-semibold text-white">Mon - Sat: 10 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-hospital-navy mb-6">
                Request Appointment via WhatsApp
              </h3>

              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 h-12 border-border focus:border-hospital-blue"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 h-12 border-border focus:border-hospital-blue"
                    required
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="pl-10 h-12 border-border focus:border-hospital-blue"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Textarea
                    name="message"
                    placeholder="Describe your condition or reason for visit"
                    value={formData.message}
                    onChange={handleChange}
                    className="pl-10 min-h-[100px] border-border focus:border-hospital-blue resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to be contacted via WhatsApp for appointment confirmation.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
