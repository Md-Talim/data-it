import { Logo } from "@/components/logo";
import { footerLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => (
  <footer className="mx-auto max-w-28 space-y-14">
    <Logo variant="dark" />

    <ul className="flex items-center gap-7">
      {footerLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.url}>
            <Image src={link.icon} alt="icon" height={20} width={20} />
          </Link>
        </li>
      ))}
    </ul>
  </footer>
);
