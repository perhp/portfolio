import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import { AnalyticsWrapper } from "./_components/analytics";
import { NavLink } from "./_components/nav-link";

import "./_styles/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={GeistSans.className} lang="en">
      <head />
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="w-full border-b border-white/10">
            <header className="flex flex-col max-w-screen-xl px-8 mx-auto sm:px-16">
              <nav className="flex items-center justify-center flex-grow gap-5">
                <NavLink href="/">home.</NavLink>
                <NavLink href="/projects">projects.</NavLink>
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
        <SpeedInsights />
      </body>
    </html>
  );
}
