import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoSource from "../../../public/brand-name.svg";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="w-full items-center flex-wrap font-serif">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="p-2">
          <Link href="/">
            <Image src={LogoSource} alt="Simply Scrawled" width={200} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row text-xl font-medium">
          <Link
            className={`${
              router.pathname === "/about" ? "font-bold underline" : ""
            } p-2 hover:underline`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`${
              router.pathname === "/mywork" ? "font-bold underline" : ""
            } p-2 hover:underline`}
            href="/mywork"
          >
            My Work
          </Link>
          <Link
            className={`${
              router.pathname === "/contact" ? "font-bold underline" : ""
            } p-2 hover:underline`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
