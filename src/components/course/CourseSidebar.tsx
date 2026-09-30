import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CertificateIcon, ConsultationIcon, FolderIcon, VideoIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import type { CourseDetails } from "@/data/courseDetails";

const includeIcons: ReactNode[] = [<FolderIcon key="folder" />, <VideoIcon key="video" />, <CertificateIcon key="certificate" />, <ConsultationIcon key="consultation" />];

const cta = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

export default function CourseSidebar({ course }: { course: CourseDetails }) {
  return (
    <aside className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-[39px]">
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-heading-xs font-semibold text-neutral-950">
          {course.totalLessons} Lessons ({course.totalHours} hours)
        </h2>
        <ol className="flex flex-col gap-3">
          {course.lessons.map((lesson, index) => (
            <li key={lesson.title} className="flex items-start gap-2 text-label-m font-medium text-neutral-950">
              <span className="w-6 shrink-0">{String(index + 1).padStart(2, "0")}</span>
              <span className="max-w-[198px]">{lesson.title}</span>
              <span className="ml-auto shrink-0 text-body-m font-normal text-primary-800">{lesson.duration}</span>
            </li>
          ))}
          <li className="text-body-m text-neutral-700">{course.moreVideos} more videos</li>
        </ol>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-body-m text-neutral-700">{cta}</p>
        <p className="flex items-end">
          <span className="font-heading text-4xl leading-[1.05] font-semibold tracking-[-0.01em] text-primary-800">
            ${course.price}
          </span>
          <span className="text-body-m text-neutral-700">/lifetime</span>
        </p>
        <Button className="w-full">Enroll Now</Button>
      </div>

      <h2 className="font-heading text-heading-xs font-semibold text-neutral-950">This course include</h2>
      <ul className="flex flex-col gap-3">
        {course.includes.map((item, index) => (
          <li key={item} className="flex items-start gap-2 text-body-m text-neutral-700">
            <span className="text-primary-800">{includeIcons[index]}</span>
            {item}
          </li>
        ))}
      </ul>

      <hr className="border-line" />

      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-3">
          <Image
            src={course.creator.avatar}
            alt={course.creator.name}
            width={52}
            height={52}
            className="size-[52px] rounded-full object-cover"
          />
          <div>
            <p className="text-label-l font-medium text-neutral-950">{course.creator.name}</p>
            <p className="text-body-m text-neutral-700">{course.creator.role}</p>
          </div>
        </div>
        <p className="text-body-m text-neutral-700">{cta}</p>
        <Link
          href={course.creator.profileUrl}
          className="self-start rounded-3xl border border-neutral-200 px-4 py-2 text-label-m font-medium text-neutral-700 transition-colors hover:border-primary-800"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
