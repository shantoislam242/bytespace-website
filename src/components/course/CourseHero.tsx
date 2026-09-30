import Image from "next/image";
import type { ReactNode } from "react";
import { PlayCircleIcon, ShareIcon, SignalIcon, StarRoundedIcon, StudentsIcon } from "@/components/icons";
import PageHeader from "@/components/layout/PageHeader";
import type { CourseDetails } from "@/data/courseDetails";

function InfoPill({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="flex items-center gap-2 rounded-3xl bg-white px-6 py-2 text-label-m font-medium text-neutral-950">
      <span className="text-primary-800">{icon}</span>
      {children}
    </span>
  );
}

export default function CourseHero({ course }: { course: CourseDetails }) {
  return (
    <PageHeader className="xl:h-[957px]">
      <div className="container-page relative flex flex-col gap-10 pt-6 pb-16 xl:block xl:pt-[52px] xl:pb-0">
        <div className="flex max-w-[769px] flex-col gap-6 text-neutral-50 xl:ml-0.5">
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-heading-s xl:whitespace-nowrap">
              {course.title}
            </h1>
            <p className="font-heading text-heading-xs font-semibold">{course.subtitle}</p>
          </div>
          <p className="text-label-l font-medium">
            by <span className="text-secondary-400">{course.author}</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <InfoPill icon={<SignalIcon className="size-6" />}>{course.level}</InfoPill>
            <InfoPill icon={<StarRoundedIcon />}>
              {course.rating} ({course.reviewCount} reviews)
            </InfoPill>
            <InfoPill icon={<StudentsIcon />}>{course.studentCount} Students</InfoPill>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 self-start rounded-3xl bg-secondary-400 px-6 py-2 text-base leading-6 font-medium text-neutral-950 transition-colors hover:bg-secondary-300 xl:absolute xl:top-[52px] xl:left-[1183px]"
        >
          <ShareIcon />
          Share
        </button>

        <div className="relative aspect-[720/479] w-full max-w-[720px] overflow-hidden rounded-3xl bg-[#443131] xl:mt-[59px] xl:ml-[5px] xl:h-[479px]">
          <Image
            src={course.preview}
            alt={`${course.title} preview`}
            fill
            preload
            sizes="(min-width: 1800px) 900px, (min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
          <button
            type="button"
            aria-label="Play course preview"
            className="absolute top-1/2 left-1/2 flex size-[104px] -translate-1/2 items-center justify-center rounded-3xl border border-body bg-[#3d3d3d]/24 p-4 text-[#f5f2ff] backdrop-blur-[40px] max-sm:scale-75 xl:top-[204px] xl:left-[324px] xl:translate-0"
          >
            <PlayCircleIcon />
          </button>
        </div>
      </div>
    </PageHeader>
  );
}
