"use client";

import { Manrope } from "@next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnalyticsWrapper } from "./(components)/analytics";

import "@tremor/react/dist/esm/tremor.css";
import "styles/globals.css";

const manrope = Manrope({
  variable: "--manrope",
  weight: ["200", "400", "500", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html className={manrope.className} lang="en">
      <head />
      <body>
        <div className="flex flex-col w-full max-w-screen-xl min-h-screen mx-auto">
          <header className="flex flex-col px-8 my-5 sm:px-16">
            <nav className="flex items-center justify-center flex-grow gap-3 text-sm">
              <NavLink href="/">home.</NavLink>
              <NavLink href="/projects">projects.</NavLink>
              <NavLink href="/sleep">sleep.</NavLink>
              <NavLink href="/books">books.</NavLink>
            </nav>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </header>
          <main className="flex flex-grow">
            <div className="flex flex-col flex-grow">{children}</div>
          </main>
        </div>
        <footer className="py-8 mt-5 bg-white/5">
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
      className={`relative flex items-center h-10 cursor-pointer text-white/30 hover:text-white text-xs font-light ${
        pathname === href && "!text-white"
      }`}
    >
      {children}
    </Link>
  );
}
