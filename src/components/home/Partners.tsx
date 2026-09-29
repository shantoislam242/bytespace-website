import Image from "next/image";

const partners = [
  { src: "/images/partners/logoipsum-1.svg", width: 167, height: 41 },
  { src: "/images/partners/logoipsum-2.svg", width: 168, height: 41 },
  { src: "/images/partners/logoipsum-3.svg", width: 170, height: 41 },
  { src: "/images/partners/logoipsum-4.svg", width: 170, height: 41 },
  { src: "/images/partners/logoipsum-5.svg", width: 169, height: 42 },
];

export default function Partners() {
  return (
    <section aria-label="Our partners" className="bg-neutral-50">
      <div className="container-page flex flex-wrap items-end justify-center gap-x-[72px] gap-y-8 py-14 lg:h-[202px] lg:flex-nowrap lg:pt-20 lg:pb-0">
        {partners.map((partner, index) => (
          <Image
            key={partner.src}
            src={partner.src}
            alt={`Partner logo ${index + 1}`}
            width={partner.width}
            height={partner.height}
            className="h-auto w-32 sm:w-auto"
          />
        ))}
      </div>
    </section>
  );
}
