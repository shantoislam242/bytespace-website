import Button from "@/components/ui/Button";
import Shape from "@/components/ui/Shape";

export default function CreatorCta() {
  return (
    <section className="bg-grid relative overflow-hidden bg-primary-800 lg:h-[488px]">
      <div className="container-page relative flex flex-col items-center gap-10 py-20 text-center lg:pt-[85px] lg:pb-0">
        <h2 className="max-w-[710px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-50 sm:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] text-body-m text-neutral-50 sm:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button href="/register">Join as Creator</Button>
      </div>

      <div className="hidden lg:block">
        <Shape name="cone-lime" className="top-0 left-[calc(50%+358px)] w-[190px]" />
        <Shape name="spring-lime" className="top-[289px] left-[calc(50%+387px)] w-[334px]" />
        <Shape name="squiggle-lime" className="top-[-162px] left-[calc(50%-840px)] w-[389px]" />
        <Shape name="squiggle-white" className="top-[5px] left-[calc(50%-542px)] w-[177px]" />
        <Shape name="cone-white-alt" className="top-[225px] left-[calc(50%-770px)] w-[190px]" />
        <Shape name="torus-lime" className="top-[298px] left-[calc(50%-704px)] w-[346px]" />
        <Shape name="cylinder-white" className="top-[5px] left-[calc(50%+502px)] w-[374px]" />
      </div>
    </section>
  );
}
