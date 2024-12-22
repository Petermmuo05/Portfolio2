"use client";

import Image from "next/image";
import Link from "next/link";
// import Work from "/briefcase.svg";
import Work from  "./../../public/briefcase.svg";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPage = usePathname();
  return (
    <ul className="w-fit gap-4 max-800:gap-3 mx-auto flex flex-row px-4 rounded-[40px] responsive-text text-[#f7f7e8] py-2 text-sm max-800:text-[11px] frosted-bar ">
      <Link
        href="/"
        className={`flex ${
          currentPage != "/about" ? "bg-[#9dad7f] shadow-sm" : ""
        } flex-row gap-2 colorlink items-center justify-center rounded-[40px] px-5 py-2 max-800:px-4 max-800:py-[6px]`}
      >
        <span>Work</span>
        <Image src={Work} alt="briefcase" className="max-sm:w-4" />
      </Link>
      <Link
        href="about"
        className={`flex          ${
          currentPage === "/about" ? "bg-[#9dad7f] shadow-sm" : ""
        }
 items-center justify-center colorlink rounded-[40px]  px-5 py-2 max-800:px-4 max-800:py-[0px]`}
      >
        About
      </Link>
      <a
        href="#footer"
        className="flex items-center justify-center bg-[] rounded-[40px] px-5 py-2 max-800:px-4 max-800:py-[6px]"
      >
        Contact
      </a>
    </ul>
  );
}
