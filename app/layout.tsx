"use client";

import { Manrope, Pacifico } from "@next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnalyticsWrapper } from "./(components)/analytics";

import "@tremor/react/dist/esm/tremor.css";
import "styles/globals.css";

const pacifico = Pacifico({
  variable: "--pacifico",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--manrope",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html className={manrope.className} lang="en">
      <head />
      <body>
        <div className="flex flex-col w-full max-w-screen-xl min-h-screen mx-auto">
          <header className="flex gap-5 px-8 my-5 sm:px-16">
            <Link href="/" className={`text-gray-200 text-xl h-min group ${pacifico.className}`}>
              perhp.
            </Link>
            <nav className="flex items-center justify-end flex-grow gap-3 text-sm">
              <Link
                href="/"
                className={`relative flex items-center h-10 cursor-pointer hover:text-slate-300 ${
                  pathname === "/" && "text-sky-200 hover:text-sky-300"
                }`}
              >
                home.
              </Link>
              <Link
                href="/projects"
                className={`relative flex items-center h-10 cursor-pointer hover:text-slate-300 ${
                  pathname === "/projects" && "text-sky-300 hover:text-sky-300"
                }`}
              >
                projects.
              </Link>
              <Link
                href="/sleep"
                className={`relative flex items-center h-10 cursor-pointer hover:text-slate-300 ${
                  pathname === "/sleep" && "text-sky-300 hover:text-sky-300"
                }`}
              >
                sleep.
              </Link>
              <Link
                href="/books"
                className={`relative flex items-center h-10 cursor-pointer hover:text-slate-300 ${
                  pathname === "/books" && "text-sky-300 hover:text-sky-300"
                }`}
              >
                books.
              </Link>
            </nav>
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
