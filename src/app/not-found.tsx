import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found | ByteSpace",
};

export default function NotFound() {
  return (
    <>
      <PageHeader className="overflow-hidden lg:h-[957px]">
        <main className="container-page relative flex flex-col items-center pt-10 pb-20 text-center lg:pt-[401px] lg:pb-0">
          <p
            aria-hidden="true"
            className="bg-linear-to-b from-secondary-400 via-secondary-400/80 to-white/0 bg-clip-text font-heading text-[180px] leading-none font-semibold tracking-[-0.01em] text-transparent select-none sm:text-[300px] lg:absolute lg:top-10 lg:left-1/2 lg:-translate-x-1/2 lg:text-[480px]"
          >
            404
          </p>
          <div className="relative flex max-w-[935px] flex-col items-center gap-8">
            <h1 className="font-heading text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-5xl lg:text-heading-l">
              The page you are looking for doesn&rsquo;t exist
            </h1>
            <p className="text-body-l text-neutral-100">Try to use a correct url or go back to homepage to start again</p>
            <Button href="/">Back to Home</Button>
          </div>
        </main>
      </PageHeader>
      <div className="mt-[3px]">
        <Footer />
      </div>
    </>
  );
}
