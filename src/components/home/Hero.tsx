import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import HappyStudentsCard from "@/components/ui/HappyStudentsCard";
import ProgressCard from "@/components/ui/ProgressCard";
import Shape from "@/components/ui/Shape";
import SearchBar from "./SearchBar";

// Offsets below are measured from the center of the 1440px frame in Figma,
// so the composition stays centered on wider and narrower screens.
export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden bg-primary-800 lg:h-[1024px]">
      <Navbar />

      <div className="container-page relative z-10 flex flex-col items-center pt-6 text-center lg:pt-[49px]">
        <h1 className="max-w-[935px] font-heading text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-5xl lg:text-heading-l">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-6 max-w-[819px] text-body-m text-neutral-100 sm:text-body-l lg:mt-8">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <SearchBar className="mt-10 lg:mt-[60px]" />
      </div>

      <div className="relative mt-12 h-[380px] sm:h-[480px] lg:static lg:mt-0 lg:h-auto">
        <div className="absolute top-[140px] left-1/2 size-[680px] -translate-x-1/2 rounded-full border-[170px] border-secondary-500 sm:top-[170px] sm:size-[860px] sm:border-[240px] lg:top-[582px] lg:left-[calc(50%-575px)] lg:size-[1149px] lg:translate-x-0 lg:border-[320px]" />

        <Image
          src="/images/hero-student.webp"
          alt="Smiling student with headphones holding a laptop"
          width={1444}
          height={1378}
          preload
          sizes="(min-width: 1024px) 722px, 500px"
          className="absolute top-0 left-1/2 w-[400px] max-w-none -translate-x-1/2 sm:w-[500px] lg:top-[509px] lg:left-[calc(50%-310px)] lg:w-[722px] lg:translate-x-0"
        />

        <div className="absolute top-[639px] left-[calc(50%-316px)] z-20 hidden w-[208px] rounded-2xl bg-white p-4 text-left lg:block">
          <p className="text-label-m font-medium text-neutral-950">UI/UX Design</p>
          <p className="flex items-center gap-2 text-body-xs text-neutral-400">
            <span>200 Courses</span>
            <span className="text-[10px] leading-[1.5]">•</span>
            <span>1000+ Students</span>
          </p>
        </div>

        <ProgressCard value={55} className="absolute top-[651px] left-[calc(50%+122px)] hidden lg:block" />
        <HappyStudentsCard className="absolute top-[837px] left-[calc(50%-392px)] hidden lg:block" />

        <div className="hidden lg:block">
          <Shape name="squiggle-lime" className="top-[221px] left-[calc(50%-840px)] w-[389px]" />
          <Shape name="squiggle-white" className="top-[477px] left-[calc(50%-537px)] w-[177px]" />
          <Shape name="torus-white" className="top-[681px] left-[calc(50%-706px)] w-[346px]" />
          <Shape name="cylinder-lime" className="top-[220px] left-[calc(50%+507px)] w-[374px]" />
          <Shape name="cone-white" className="top-[464px] left-[calc(50%+384px)] w-[190px]" />
          <Shape name="spring-white" className="top-[672px] left-[calc(50%+404px)] w-[334px]" />
        </div>
      </div>
    </section>
  );
}
