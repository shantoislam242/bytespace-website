import CourseCard from "@/components/ui/CourseCard";
import HappyStudentsCard from "@/components/ui/HappyStudentsCard";
import Shape from "@/components/ui/Shape";
import { courses } from "@/data/courses";

const [, digitalAsset, bigData] = courses;

export default function AuthIllustration() {
  return (
    <div className="relative h-[585px] w-[548px]" aria-hidden="true">
      <CourseCard course={digitalAsset} variant="showcase" className="absolute top-[89px] left-[25px] w-[373px]" />
      <CourseCard course={bigData} variant="showcase" className="absolute top-0 left-[136px] w-[373px]" />
      <HappyStudentsCard variant="lime" compact className="absolute top-[435px] left-[251px]" />
      <Shape name="squiggle-white" className="top-[321px] left-[373px] w-[177px]" />
      <Shape name="torus-lime" className="top-[15px] left-[52px] w-[148px]" />
      <Shape name="cone-lime" className="top-[397px] left-[-2px] w-[190px]" />
    </div>
  );
}
