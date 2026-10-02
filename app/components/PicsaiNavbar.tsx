"use client";

import { useState } from "react";
import Link from "next/link";
import SiteLogo from "./PicsaiLogo";
import { onHomeSectionLinkClick } from "../lib/home-section-navigation";

const NAV_LINKS = [
  { href: "/#edition-2026", label: "Third Edition" },
  { href: "/#edition-2025", label: "Second Edition" },
  { href: "/#edition-2024", label: "First Edition" },
] as const;

interface SiteNavbarProps {
  logoAnimating?: boolean;
  navLinks?: ReadonlyArray<{ href: string; label: string }>;
}

export default function SiteNavbar(_props: SiteNavbarProps) {
  const { logoAnimating = false, navLinks } = _props;
  const [, setMounted] = useState(false);

  return (
    <nav className="w-full bg-[#E9E8DE] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 md:items-start md:py-4">
          <div className="md:hidden">
            <SiteLogo size={80} animating={logoAnimating} />
          </div>
          <div className="hidden md:block">
            <SiteLogo size={160} animating={logoAnimating} />
          </div>

          <div className="flex flex-col items-end space-y-1 pt-1">
            {(navLinks ?? NAV_LINKS).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => onHomeSectionLinkClick(event, link.href)}
                className="text-gray-800 hover:text-gray-600 font-semibold text-right text-sm md:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
