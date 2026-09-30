import type { Metadata } from "next";
import CourseSearch from "@/components/courses/CourseSearch";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CourseCard from "@/components/ui/CourseCard";
import FilterBar from "@/components/ui/FilterBar";
import Pagination from "@/components/ui/Pagination";
import TopicTabs from "@/components/ui/TopicTabs";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Find Your Next Course | ByteSpace",
};

const searchTopics = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"],
];

// The design shows the same six courses three times as a full results page
const results = [...courses, ...courses, ...courses].map((course, index) => ({ ...course, id: index + 1 }));

export default function CoursesPage() {
  return (
    <>
      <PageHeader className="lg:h-[360px]">
        <div className="container-page flex flex-col items-center gap-8 pt-6 pb-16 lg:pt-11 lg:pb-0">
          <h1 className="text-center font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-50 sm:text-heading-s">
            Find Your Next Course
          </h1>
          <CourseSearch />
        </div>
      </PageHeader>

      <main className="container-page pt-[72px] pb-[72px]">
        <FilterBar />
        <div className="mt-8">
          <TopicTabs rows={searchTopics} rowClassName="justify-center lg:justify-between" />
        </div>

        <div className="mt-[77px] grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {results.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-[72px]">
          <Pagination totalPages={5} />
        </div>
      </main>

      <Footer />
    </>
  );
}
