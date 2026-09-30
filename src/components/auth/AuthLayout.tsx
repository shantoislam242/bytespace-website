import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import AuthIllustration from "./AuthIllustration";

type AuthLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <main data-layout="auth" className="bg-grid min-h-screen bg-primary-800 lg:h-[944px] lg:min-h-0">
      <div className="container-page relative flex flex-col gap-10 pt-[35px] pb-16 lg:block lg:h-full lg:p-0">
        <Link href="/" aria-label="Back to home" className="self-start lg:absolute lg:top-[35px] lg:left-[22px]">
          <Image src="/logo-mark.svg" alt="ByteSpace" width={29} height={32} preload />
        </Link>

        <div className="flex max-w-[475px] flex-col gap-4 text-neutral-50 lg:absolute lg:top-[120px] lg:left-[22px]">
          <h1 className="font-heading text-heading-xs font-semibold">{title}</h1>
          <p className="text-body-l">{description}</p>
        </div>

        <div className="absolute top-[305px] left-[-3px] hidden lg:block">
          <AuthIllustration />
        </div>

        <div className="rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:pt-[61px] lg:absolute lg:top-[120px] lg:right-5 lg:h-[784px] lg:w-[579px] lg:pb-10">
          {children}
        </div>
      </div>
    </main>
  );
}
