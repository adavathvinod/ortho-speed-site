import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConditionsSection from "@/components/ConditionsSection";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mehetrey Hospital - Orthopaedic & Trauma Center | Hyderabad</title>
        <meta 
          name="description" 
          content="Mehetrey Hospital is a leading orthopaedic and trauma center in Hyderabad. Expert care for spine, joint replacement, fractures & accidents. 24/7 emergency services. Call +91 91107 09110" 
        />
        <meta name="keywords" content="orthopaedic hospital hyderabad, bone specialist hayatnagar, joint replacement surgery, trauma center, spine surgery, knee replacement" />
        <link rel="canonical" href="https://mehethreyhospital.com" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <SpecialtiesSection />
          <DoctorSection />
          <ConditionsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
