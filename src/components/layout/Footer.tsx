import Link from "next/link";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { footerColumns, legalLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-950">
      <div className="container-page pt-14 pb-12 lg:pt-[70px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-[92px]">
          <div className="flex max-w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo variant="dark" className="mt-[7px] self-start" />
              <p className="text-body-s">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <form action="/" className="flex max-w-[504px] flex-col gap-6">
              <div className="flex items-start gap-3 sm:gap-6">
                <label className="flex h-[52px] min-w-0 flex-1 items-center rounded-full border border-neutral-200 px-6 sm:max-w-[376px]">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full min-w-0 bg-transparent text-body-m outline-none placeholder:text-neutral-950"
                  />
                </label>
                <Button type="submit">Search</Button>
              </div>
              <p className="text-body-xs">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:w-[580px]">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="sr-only">{column.title}</h3>
                <ul className="flex flex-col gap-4 lg:pt-12">
                  {column.links.map((link) => (
                    <li key={link} className="text-body-s">
                      <Link href="#" className="hover:text-primary-800">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-200 pt-[22px] sm:flex-row sm:justify-between lg:mt-[130px]">
          <p className="text-body-xs">@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link} className="text-body-xs">
                <Link href="#" className="hover:text-primary-800">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
