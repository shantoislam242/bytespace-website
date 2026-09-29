import Image from "next/image";
import { SignalIcon, StarRoundedIcon, StarSharpIcon } from "@/components/icons";
import type { Course } from "@/data/courses";
import { enrolledAvatars } from "@/data/people";
import AvatarStack from "./AvatarStack";

type CourseCardProps = {
  course: Course;
  // "showcase" is the slightly roomier version used in illustrations (growth section, auth pages)
  variant?: "default" | "showcase";
  className?: string;
};

export default function CourseCard({ course, variant = "default", className = "" }: CourseCardProps) {
  const isShowcase = variant === "showcase";
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article className={`relative rounded-3xl border border-neutral-200 bg-white p-[15px] pb-5 ${className}`}>
      <div className="relative h-[195px] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 768px) 45vw, 90vw"
          className="object-cover"
        />
        <ul className="absolute top-[150px] left-3 flex gap-3">
          {meta.map((item) => (
            <li
              key={item}
              className={`rounded-3xl bg-[#f6f6f6]/60 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-body backdrop-blur-[8px] ${
                isShowcase ? "leading-5" : "leading-[1.2]"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[21px] flex flex-col gap-4">
        <div>
          <h3
            className={`max-w-[280px] truncate font-heading text-heading-xs font-semibold text-black ${
              isShowcase ? "leading-7" : ""
            }`}
          >
            {course.title}
          </h3>
          <p className={`text-xs text-body ${isShowcase ? "leading-5" : "leading-[1.6]"}`}>
            by <span className="text-primary-800">{course.author}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-neutral-50 px-3 py-1.5 text-label-xs font-medium text-neutral-700">
            <SignalIcon />
            {course.level}
          </span>
          <AvatarStack
            avatars={enrolledAvatars}
            total={course.students}
            size={32}
            overlap={-8}
            totalClassName={`font-medium ${isShowcase ? "bg-black text-white" : "bg-secondary-400 text-neutral-950"}`}
          />
        </div>

        <p className="flex items-end">
          <span
            className={`font-heading text-heading-xs font-semibold ${isShowcase ? "text-[#300b6a]" : "text-primary-800"}`}
          >
            ${course.price}
          </span>
          <span className="text-body-xs text-body">/lifetime</span>
        </p>
      </div>

      <p
        aria-label={`Rated ${course.rating} out of 5`}
        className="absolute top-[231px] right-4 flex items-center text-lg text-body"
      >
        <span className={isShowcase ? "leading-7 font-medium" : "leading-[1.6]"}>{course.rating}</span>
        &nbsp;
        {isShowcase ? (
          <StarSharpIcon className="text-secondary-400" />
        ) : (
          <StarRoundedIcon className="text-neutral-200" />
        )}
      </p>
    </article>
  );
}
