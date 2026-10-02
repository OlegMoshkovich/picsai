"use client";

import Link from "next/link";
import PicsaiLogo from "./PicsaiLogo";
import { onHomeSectionLinkClick } from "../lib/home-section-navigation";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#F05025] text-black px-6 sm:px-6 lg:px-8 pt-30 pb-10 sm:py-24 flex min-h-screen flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 sm:gap-20 flex-1">
          <div className="space-y-8 sm:space-y-10">
            <div className="md:hidden">
              <PicsaiLogo size={80} />
            </div>
            <div className="hidden md:block">
              <PicsaiLogo size={160} />
            </div>

            <p className="max-w-xl text-sm sm:text-base leading-relaxed font-serif mt-10">
              PICSAI gathers researchers and artists each year to work on the foundations of machine intelligence, work that comes from uninterrupted time together and from creating art side by side.
            </p>
          </div>

          <div className="text-left md:text-right font-serif flex flex-col justify-between mt-0 sm:mt-10 md:mt-30">
            <div className="space-y-2 text-sm sm:text-base">
              <Link href="/#edition-2024" onClick={(event) => onHomeSectionLinkClick(event, "/#edition-2024")} className="block hover:underline">First Edition</Link>
              <Link href="/#edition-2025" onClick={(event) => onHomeSectionLinkClick(event, "/#edition-2025")} className="block hover:underline">Second Edition</Link>
              <Link href="/#edition-2026" onClick={(event) => onHomeSectionLinkClick(event, "/#edition-2026")} className="block hover:underline">Third Edition</Link>
            </div>

            <div className="text-sm sm:text-base mt-24 sm:mt-12">
              237A Caledonian Road
              <br />
              London N1 1ED
            </div>
          </div>
        </div>

        <div className="mt-auto pt-10 pb-8 sm:pt-12 text-xs sm:text-sm text-left md:text-right font-serif">
          <a href="https://theairlab.science" className="hover:underline">
            © The AI Research Lab, 2026
          </a>
        </div>
      </div>
    </footer>
  );
}
