import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import FollowButton from "@/components/creator/FollowButton";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CourseCard from "@/components/ui/CourseCard";
import FilterBar from "@/components/ui/FilterBar";
import { courses } from "@/data/courses";
import { creators, getCreator } from "@/data/creators";

export const dynamicParams = false;

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({ params }: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${getCreator(slug)?.name ?? "Creator"} | ByteSpace` };
}

export default async function CreatorPage({ params }: PageProps<"/creators/[slug]">) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  const stats = [
    { value: creator.products, label: "Products" },
    { value: creator.followers, label: "Followers" },
  ];

  return (
    <>
      <PageHeader className="lg:h-[592px]">
        <div className="container-page flex flex-col gap-10 pt-6 pb-16 text-neutral-50 lg:pt-[52px] lg:pb-0 lg:pl-[22px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={96}
                height={96}
                preload
                className="size-24 rounded-3xl object-cover"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-start gap-2">
                  <h1 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-heading-s">
                    {creator.name}
                  </h1>
                  <span className="rounded-3xl bg-secondary-400 px-6 py-2 text-label-m font-medium text-neutral-950">
                    Creator
                  </span>
                </div>
                <p className="text-body-l">{creator.headline}</p>
              </div>
            </div>
            <div className="text-body-l">
              {creator.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="flex items-center gap-2 rounded-3xl bg-white px-6 py-3 text-label-l font-medium text-neutral-950"
                >
                  <span className="text-primary-800">{stat.value}</span>
                  {stat.label}
                </span>
              ))}
            </div>
            <FollowButton />
          </div>
        </div>
      </PageHeader>

      <main className="container-page flex flex-col gap-10 pt-[62px] pb-[61px]">
        <FilterBar />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
