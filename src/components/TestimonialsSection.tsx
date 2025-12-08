import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Low cost and excellent doctor. Dr. Mehetrey treated my knee pain with great care. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sunitha Reddy",
    text: "Quality of work is exceptional. The hospital staff is very supportive and the facilities are top-notch.",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    text: "Had my spine surgery here. Dr. Mehetrey is very skilled and the recovery was smooth. Thank you!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-hospital-navy to-hospital-navy-light text-primary-foreground">
      <div className="container-hospital">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-hospital-sky font-semibold text-sm uppercase tracking-wider">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Patients Say</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-hospital-gold text-hospital-gold" />
              ))}
            </div>
            <span className="text-xl font-bold">4.9</span>
            <span className="opacity-80">| 160+ Google Reviews</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Quote className="h-10 w-10 text-hospital-sky/30 absolute top-4 right-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-hospital-gold text-hospital-gold" />
                ))}
              </div>
              
              <p className="text-lg opacity-90 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-hospital-sky/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm opacity-70">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.google.com/maps/place/MEHETREY+HOSPITAL+-+ADVANCED+ORTHOPAEDIC+%26+TRAUMA+CENTER/@17.3373,78.6019,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-hospital-sky hover:text-hospital-sky/80 font-medium transition-colors"
          >
            Read all reviews on Google
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
