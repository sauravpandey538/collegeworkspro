import FeaturedCourse from "@/components/featuredCourse";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:p-12 ">
    
     <HeroSection/>
     <FeaturedCourse/>
     <Footer/>
     
    </main>
  );
}
