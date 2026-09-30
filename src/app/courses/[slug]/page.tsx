import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons";
import CourseTabs from "@/components/course/CourseTabs";
import TabHeading from "@/components/course/TabHeading";
import { courseDetails } from "@/data/courseDetails";

export const metadata: Metadata = {
  title: `${courseDetails.title} | ByteSpace`,
};

export default function CourseAboutPage() {
  const course = courseDetails;

  return (
    <div className="flex flex-col gap-10 pt-16 pb-16 xl:pt-[63px] xl:pb-[62px]">
      <CourseTabs slug={course.slug} />

      <div className="flex flex-col gap-6">
        <TabHeading>Description</TabHeading>
        <div className="flex max-w-[723px] flex-col gap-[25.6px] text-body-m text-neutral-700">
          {course.description.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>

        <TabHeading>Sneak Peak</TabHeading>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-[19px]">
          {course.sneakPeek.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Course preview ${index + 1}`}
              width={167}
              height={125}
              sizes="(min-width: 640px) 167px, 50vw"
              className="aspect-[167/125] h-auto w-full rounded-2xl object-cover"
            />
          ))}
        </div>

        <TabHeading>Key Points</TabHeading>
        <ul className="flex flex-col gap-3">
          {course.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-body-m text-neutral-700">
              <CheckCircleIcon className="shrink-0 text-primary-800" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
