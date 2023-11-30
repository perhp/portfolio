"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`relative flex items-center h-14 cursor-pointer text-white/60 hover:text-white text-xs md:text-sm font-light tracking-wider ${
        pathname === href && "!text-white"
      }`}
    >
      {children}
      {pathname === href && (
        <div className="absolute bottom-0 w-16 h-px transform -translate-x-1/2 translate-y-full left-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      )}
    </Link>
  );
}
