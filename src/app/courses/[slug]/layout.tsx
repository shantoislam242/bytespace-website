import { notFound } from "next/navigation";
import CourseHero from "@/components/course/CourseHero";
import CourseSidebar from "@/components/course/CourseSidebar";
import Footer from "@/components/layout/Footer";
import { courseDetails } from "@/data/courseDetails";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: courseDetails.slug }];
}

export default async function CourseLayout({ children, params }: LayoutProps<"/courses/[slug]">) {
  const { slug } = await params;
  if (slug !== courseDetails.slug) notFound();

  return (
    <>
      <div className="relative">
        <CourseHero course={courseDetails} />

        {/* On large screens the sidebar card overlaps the hero, like in the design */}
        <div className="container-page pointer-events-none mt-10 xl:absolute xl:inset-x-0 xl:top-[416px] xl:mt-0">
          <div className="pointer-events-auto xl:ml-auto xl:w-[412px]">
            <CourseSidebar course={courseDetails} />
          </div>
        </div>

        <main className="container-page">
          <div className="xl:max-w-[725px]">{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
}
