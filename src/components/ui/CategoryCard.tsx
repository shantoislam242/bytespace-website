import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  name: string;
  icon: string;
};

export default function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <Link
      href="#courses"
      className="flex h-[167px] flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-200 transition-colors hover:border-primary-800 lg:w-[167px]"
    >
      <span className="flex size-[60px] items-center justify-center rounded-full bg-secondary-400">
        <Image src={icon} alt="" width={36} height={36} />
      </span>
      <span className="text-xl leading-[1.2] font-medium whitespace-nowrap text-neutral-950">{name}</span>
    </Link>
  );
}
