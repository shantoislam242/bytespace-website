import CourseCard from "@/components/ui/CourseCard";
import SectionHeading from "@/components/ui/SectionHeading";
import TopicTabs from "@/components/ui/TopicTabs";
import { courses, courseTopics } from "@/data/courses";

export default function Courses() {
  return (
    <section id="courses" className="container-page scroll-mt-10 pt-[72px]">
      <SectionHeading
        title={
          <>
            Discover Your Passion, <br className="hidden sm:block" />
            Build Your Skills
          </>
        }
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      <div className="mt-[42px]">
        <TopicTabs rows={courseTopics} showMore />
      </div>

      <div className="mt-[77px] grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
