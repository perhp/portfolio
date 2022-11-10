import "@tremor/react/dist/esm/tremor.css";
import "styles/globals.css";

import Link from "next/link";
import { AnalyticsWrapper } from "./(components)/analytics";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = "" as any;

  return (
    <html>
      <head />
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="flex">
            <Link
              href="/"
              className="relative flex items-center justify-center w-20 h-20 text-2xl font-extrabold text-white bg-gray-800 md:text-4xl lg:h-28 lg:w-28 group sm:ml-10 md:ml-16 lg:ml-0"
              style={{ fontFamily: '"Pacifico", cursive' }}
            >
              ph
              <div className="absolute hidden w-full h-full transition-all border-2 border-gray-800 pointer-events-none lg:block -right-2 -bottom-2 group-hover:bottom-0 group-hover:right-0"></div>
            </Link>
            <nav className="flex items-center justify-end flex-grow gap-3 pr-5 sm:pr-10 md:pr-16 lg:pr-28 md:text-base">
              <Link
                href="/"
                className={`relative flex items-center h-10 font-bold cursor-pointer transition-colors hover:text-blue-500 ${
                  pathname === "/" && "text-blue-500"
                }`}
              >
                home.
              </Link>
              <Link
                href="/projects"
                className={`relative flex items-center h-10 font-bold cursor-pointer transition-colors hover:text-emerald-500 ${
                  pathname === "/projects" && "text-emerald-500"
                }`}
              >
                projects.
              </Link>
            </nav>
          </header>
          <main className="flex flex-grow sm:px-10 md:px-16 lg:px-28 md:pt-0">
            <div className="flex flex-col flex-grow bg-white">{children}</div>
          </main>
          <footer className="flex flex-col items-center px-10 py-8 sm:flex-row bg-blue-50 lg:px-28 sm:mx-10 md:mx-16 lg:mx-28">
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-sm font-bold">Pekkel</span>
              <span className="text-xs font-medium text-gray-500">DK-37106666</span>
            </div>
            <div className="flex items-center gap-5 text-sm font-bold sm:ml-auto">
              <a
                href="https://github.com/perhp"
                target="_blank"
                rel="noreferrer"
                className="relative flex items-center h-10 font-bold transition-colors cursor-pointer hover:text-gray-500"
              >
                github.
              </a>
              <a
                href="https://www.linkedin.com/in/per-hansen-38498711a/"
                target="_blank"
                rel="noreferrer"
                className="relative flex items-center h-10 font-bold transition-colors cursor-pointer hover:text-gray-500"
              >
                linkedin.
              </a>
              <a
                href="https://playground.perhp.com"
                target="_blank"
                rel="noreferrer"
                className="relative flex items-center h-10 font-bold transition-colors cursor-pointer hover:text-gray-500"
              >
                playground.
              </a>
            </div>
          </footer>
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
