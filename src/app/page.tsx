import Footer from "@/components/layout/Footer";
import Courses from "@/components/home/Courses";
import CreatorCta from "@/components/home/CreatorCta";
import Growth from "@/components/home/Growth";
import Hero from "@/components/home/Hero";
import LearningPaths from "@/components/home/LearningPaths";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <Courses />
        <LearningPaths />
        <Growth />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
