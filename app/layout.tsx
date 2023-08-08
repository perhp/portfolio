"use client";

import { Manrope } from "@next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnalyticsWrapper } from "./_components/analytics";

import "@tremor/react/dist/esm/tremor.css";
import "styles/globals.css";

const manrope = Manrope({
  variable: "--manrope",
  weight: ["200", "400", "500", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={manrope.className} lang="en">
      <head />
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="w-full border-b border-white/10">
            <header className="flex flex-col max-w-screen-xl px-8 mx-auto sm:px-16">
              <nav className="flex items-center justify-center flex-grow gap-5">
                <NavLink href="/">home.</NavLink>
                <NavLink href="/projects">projects.</NavLink>
                <NavLink href="/sleep">sleep.</NavLink>
                <NavLink href="/books">books.</NavLink>
              </nav>
              <div className="h-px -mb-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
            </header>
          </div>
          <div className="flex flex-col w-full max-w-screen-xl mx-auto">
            <main className="flex flex-grow">
              <div className="flex flex-col flex-grow">{children}</div>
            </main>
          </div>
          <footer className="py-8 mt-auto bg-white/5">
            <div className="flex flex-col items-center w-full max-w-screen-xl mx-auto sm:px-16 sm:flex-row">
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-sm font-bold">Pekkel</span>
                <span className="text-xs font-medium">DK-37106666</span>
              </div>
              <div className="flex items-center gap-5 text-sm font-bold sm:ml-auto">
                <a
                  href="https://github.com/perhp/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex items-center h-10 cursor-pointer hover:text-slate-300"
                >
                  github.
                </a>
                <a
                  href="https://www.linkedin.com/in/per-hansen-38498711a/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative flex items-center h-10 cursor-pointer hover:text-slate-300"
                >
                  linkedin.
                </a>
              </div>
            </div>
          </footer>
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`relative flex items-center h-14 cursor-pointer text-white/60 hover:text-white text-sm font-light tracking-wider ${
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
