import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons";
import CourseCard from "@/components/ui/CourseCard";
import HappyStudentsCard from "@/components/ui/HappyStudentsCard";
import ProgressCard from "@/components/ui/ProgressCard";
import Shape from "@/components/ui/Shape";
import { courses } from "@/data/courses";
import { blob } from "@/lib/blob";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorPerks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

const background = [
  blob({ color: "lime", x: -671, y: 1282, radius: 336, opacity: 0.6 }),
  blob({ color: "blue", x: 660, y: 111, radius: 568.5, opacity: 0.08 }),
  blob({ color: "blue", x: -660, y: 752, radius: 568.5, opacity: 0.16 }),
  blob({ color: "lime", x: -304, y: 103, radius: 568.5, opacity: 0.4 }),
  blob({ color: "blue", x: 571, y: 1357, radius: 568.5, opacity: 0.24 }),
].join(", ");

type EarningsCardProps = {
  title: string;
  period: string;
  amount: string;
  showProgress?: boolean;
  className?: string;
};

function EarningsCard({ title, period, amount, showProgress = false, className = "" }: EarningsCardProps) {
  const badge = (
    <span className="rounded-3xl bg-secondary-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-neutral-950">
      +12$
    </span>
  );

  return (
    <div className={`flex flex-col items-start gap-2 rounded-2xl bg-primary-800 p-4 text-neutral-50 ${className}`}>
      <div>
        <p className="text-label-m font-medium">{title}</p>
        <p className="text-[10px] leading-[1.2]">{period}</p>
      </div>
      {showProgress ? (
        <>
          <div className="flex w-full items-center justify-between">
            <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
            {badge}
          </div>
          <div className="h-2 w-full overflow-hidden rounded-3xl bg-white">
            <div className="h-full w-[56%] rounded-3xl bg-secondary-400" />
          </div>
        </>
      ) : (
        <>
          <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
          {badge}
        </>
      )}
    </div>
  );
}

export default function Growth() {
  return (
    <section id="creators" className="relative overflow-hidden bg-surface" style={{ backgroundImage: background }}>
      <div className="container-page flex flex-col gap-[72px] py-20 lg:py-[120px]">
        <div className="flex flex-col items-center gap-12 lg:h-[552px] lg:flex-row lg:gap-[63px]">
          {/* Figma lets the illustration overflow the 1200px grid by ~58px on the right */}
          <div className="flex w-full max-w-[574px] flex-col gap-10 lg:w-[460px] lg:shrink-0 lg:pl-px xl:w-[574px]">
            <h2 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-heading-m">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] text-body-l text-neutral-700">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="flex gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-body-l text-neutral-700">{stat.label}</dt>
                  <dd className="font-heading text-4xl leading-11 font-medium tracking-[-0.01em] text-primary-800">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative h-[552px] w-[621px] shrink-0 max-sm:[zoom:0.56] sm:max-lg:[zoom:0.9] lg:max-xl:[zoom:0.8]">
            <CourseCard course={courses[0]} variant="showcase" className="w-[373px]" />
            <Image
              src="/images/growth-student.webp"
              alt="Student learning online with a laptop"
              width={1442}
              height={1376}
              sizes="(min-width: 1800px) 1010px, 721px"
              className="absolute top-[9px] left-[-21px] w-[721px] max-w-none"
            />
            <ProgressCard value={55} relaxed className="absolute top-[213px] left-[345px]" />
            <Shape name="spring-lime" className="top-[67px] left-[404px] w-[217px]" />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-12 lg:h-[596px] lg:flex-row lg:gap-[79px]">
          <div className="relative h-[596px] w-[541px] shrink-0 max-sm:[zoom:0.64] sm:max-lg:[zoom:0.9]">
            <EarningsCard
              title="Total Revenue"
              period="July 1-28"
              amount="$120.29"
              showProgress
              className="absolute top-11 left-0 w-[232px]"
            />
            <EarningsCard title="Year to Date" period="2023" amount="$1,200.38" className="absolute top-[194px] left-0" />
            <Image
              src="/images/creator.webp"
              alt="Course creator holding a tablet"
              width={1158}
              height={1488}
              sizes="(min-width: 1800px) 811px, 579px"
              className="absolute top-[-3px] left-[7px] w-[579px] max-w-none"
            />
            <HappyStudentsCard compact className="absolute top-[413px] left-[283px]" />
            <Shape name="squiggle-lime" className="top-[114px] left-[303px] w-[217px]" />
          </div>

          <div className="flex w-full max-w-[580px] flex-col gap-10">
            <h2 className="max-w-[391px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-heading-m">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="text-lg leading-7 text-neutral-700">
              <strong className="font-bold text-neutral-950">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorPerks.map((perk) => (
                <li key={perk} className="flex items-end gap-2 text-label-l font-medium text-neutral-950">
                  <CheckCircleIcon className="shrink-0 text-primary-800" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
