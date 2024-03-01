import ActionSection from "@/components/homepage/ActionSection";
import ContactForm from "@/components/homepage/ContactForm";
import FeatureSection from "@/components/homepage/FeatureSection";
import BannerSection from "@/components/homepage/HomeBanner";
import TestimonialSection from "@/components/homepage/TestimonailSection";
import Image from "next/image";


export default function Home() {
  return (
   <div>
    {/* Banner Section */}

    <BannerSection/>
    <FeatureSection/>
    <ActionSection/>
    <TestimonialSection/>
    <ContactForm/>

   </div>
  );
}
