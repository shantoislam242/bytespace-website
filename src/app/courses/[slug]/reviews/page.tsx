import type { Metadata } from "next";
import Image from "next/image";
import CourseTabs from "@/components/course/CourseTabs";
import ReviewFilters from "@/components/course/ReviewFilters";
import StarRating from "@/components/course/StarRating";
import TabHeading from "@/components/course/TabHeading";
import { courseDetails } from "@/data/courseDetails";

export const metadata: Metadata = {
  title: `Reviews - ${courseDetails.title} | ByteSpace`,
};

export default function CourseReviewsPage() {
  const course = courseDetails;

  return (
    <div className="flex flex-col gap-10 pt-16 pb-16 xl:pt-[78px] xl:pb-[91px]">
      <CourseTabs slug={course.slug} />

      <div className="flex max-w-[723px] flex-col gap-6 text-body-m text-neutral-700">
        <TabHeading>What Learners Are Saying</TabHeading>
        <p>
          Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive
          Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of
          mastering digital asset creation.
        </p>

        <div className="flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-white p-6 sm:flex-row sm:p-[39px]">
          <div className="flex h-[140px] w-[129px] shrink-0 flex-col items-center justify-center rounded-lg bg-secondary-400 text-neutral-950">
            <p className="text-label-s font-medium">Ratings</p>
            <p className="font-heading text-heading-s font-semibold">{course.averageRating}</p>
          </div>

          <ul className="flex w-full flex-col gap-1">
            {course.ratingBreakdown.map((row) => (
              <li key={row.stars} aria-label={`${row.stars} star: ${row.count} reviews`} className="flex items-center gap-4">
                <div className="h-2 flex-1 overflow-hidden rounded-3xl bg-neutral-100">
                  <div className="h-full rounded-3xl bg-secondary-400" style={{ width: `${row.percent}%` }} />
                </div>
                <span aria-hidden="true" className="max-sm:hidden">
                  <StarRating value={5} />
                </span>
                <span className="w-10 text-right">{row.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <TabHeading>Individual Reviews:</TabHeading>
        <ReviewFilters />

        {course.reviews.map((review) => (
          <article key={review.name} className="flex flex-col gap-6 rounded-3xl border border-neutral-200 p-6 sm:p-[39px]">
            <div className="flex justify-between gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={52}
                    height={52}
                    className="size-[52px] rounded-full object-cover"
                  />
                  <div>
                    <p className="text-label-l font-medium text-neutral-950">{review.name}</p>
                    <p>{review.role}</p>
                  </div>
                </div>
                <StarRating value={review.rating} />
              </div>
              <p className="shrink-0">{review.date}</p>
            </div>
            <p>{review.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
