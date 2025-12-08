import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919110709110?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <MessageCircle className="h-7 w-7" />
      </motion.a>

      {/* Emergency Call Button */}
      <motion.a
        href="tel:+919110709110"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-emergency text-emergency-foreground shadow-emergency animate-pulse-subtle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Emergency Call"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Phone className="h-7 w-7" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
