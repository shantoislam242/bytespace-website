import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export default function TestimonialCard({ name, role, avatar, quote }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
      <Image src={avatar} alt={name} width={80} height={80} className="size-20 rounded-full object-cover" />
      <figcaption>
        <p className="font-heading text-heading-xs leading-7 font-semibold text-black">{name}</p>
        <p className="text-body-l text-primary-800">{role}</p>
      </figcaption>
      <blockquote className="text-body-l text-body">&quot;{quote}&quot;</blockquote>
    </figure>
  );
}
