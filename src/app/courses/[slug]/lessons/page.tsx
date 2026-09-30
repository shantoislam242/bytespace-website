import type { Metadata } from "next";
import CourseTabs from "@/components/course/CourseTabs";
import TabHeading from "@/components/course/TabHeading";
import { VideoIcon } from "@/components/icons";
import { courseDetails } from "@/data/courseDetails";

export const metadata: Metadata = {
  title: `Lessons - ${courseDetails.title} | ByteSpace`,
};

const progress = 55;

export default function CourseLessonsPage() {
  const course = courseDetails;

  return (
    <div className="flex flex-col gap-10 pt-16 pb-16 xl:pt-[78px] xl:pb-[83px]">
      <CourseTabs slug={course.slug} />

      <div className="flex max-w-[723px] flex-col gap-6 text-body-m text-neutral-700">
        <TabHeading>Explore the Modules</TabHeading>
        <p>
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing
          practical insights and hands-on experiences.
        </p>

        <TabHeading>Lesson List</TabHeading>
        {course.modules.map((module) => (
          <div key={module.title} className="flex items-center gap-[13px]">
            <span className="flex size-[72px] shrink-0 items-center justify-center rounded-3xl bg-secondary-400 text-neutral-950">
              <VideoIcon className="size-10" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-label-m font-medium text-neutral-950">{module.title}</h3>
              <p>{module.summary}</p>
            </div>
          </div>
        ))}

        <TabHeading>Lesson Content</TabHeading>
        <p>
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive
          elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>

        <TabHeading>Lesson Progress Tracking</TabHeading>
        <p>
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through
          your learning journey.
        </p>
        <div className="rounded-2xl border border-neutral-200 bg-white p-[15px]">
          <p className="text-label-s font-medium text-neutral-950">Learning Progress</p>
          <p className="mt-2 font-heading text-heading-s font-semibold text-neutral-950">{progress}%</p>
          <div
            role="progressbar"
            aria-label="Learning progress"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="mt-2 h-2 overflow-hidden rounded-3xl bg-neutral-100"
          >
            <div className="h-full rounded-3xl bg-secondary-400" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
