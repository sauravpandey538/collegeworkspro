import FeaturedCourse from "@/components/featuredCourse";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/heroSection";
import Offer from "@/components/ui/offer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  overflow-x-hidden ">

      <HeroSection />
      <FeaturedCourse />
      <Footer />
      <Offer />

    </main>
  );
}
