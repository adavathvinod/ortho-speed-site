import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-hospital py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">MEHETREY HOSPITAL</h3>
                <p className="text-sm opacity-80">Orthopaedic & Trauma Center</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Complete Solution for Bones & Joints. Expert orthopaedic care with advanced 
              surgical techniques and compassionate treatment.
            </p>
            <div className="flex items-center gap-2 text-hospital-gold">
              <span className="text-lg font-bold">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-hospital-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm opacity-80">(160+ Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Our Specialist", path: "/specialist" },
                { name: "Clinical Specialities", path: "/specialities" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-hospital-sky transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Specialities</h4>
            <ul className="space-y-3">
              {["Spine Surgery", "Joint Replacement", "Arthroscopy", "Trauma Care", "Sports Medicine", "Hand Surgery"].map((item) => (
                <li key={item}>
                  <Link 
                    to="/specialities" 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-hospital-sky transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Emergency Helpline</p>
                  <a href="tel:+919110709110" className="text-sm opacity-80 hover:text-hospital-sky">
                    +91 91107 09110
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm opacity-80">
                    No 2, Plot No 5, Kolan Shiva Reddy Nagar Road No 2, Hayatnagar, Hyderabad, Telangana 501505
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:mehetrey.hospital@gmail.com" className="text-sm opacity-80 hover:text-hospital-sky">
                    mehetrey.hospital@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-sm opacity-80">24/7 Emergency Services</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Mehetrey Hospital. All Rights Reserved. | Designed for Excellence in Orthopaedic Care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
