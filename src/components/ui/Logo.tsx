import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={`inline-flex ${className}`}>
      <Image src={`/logo-${variant}.svg`} alt="ByteSpace" width={171} height={35} preload />
    </Link>
  );
}
