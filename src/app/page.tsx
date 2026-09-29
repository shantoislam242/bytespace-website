import Courses from "@/components/home/Courses";
import Growth from "@/components/home/Growth";
import Hero from "@/components/home/Hero";
import LearningPaths from "@/components/home/LearningPaths";
import Partners from "@/components/home/Partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Courses />
      <LearningPaths />
      <Growth />
    </main>
  );
}
