import Link from "next/link";
import { useRouter } from "next/router";
import { ReactChild } from "react";

function DefaultLayout({ children }: { children: ReactChild }) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex">
        <Link href="/">
          <a
            className="relative flex items-center justify-center w-16 h-16 text-2xl font-extrabold text-white bg-gray-800 md:w-20 md:h-20 md:text-4xl lg:h-28 lg:w-28 group sm:ml-10 md:ml-16 lg:ml-0"
            style={{ fontFamily: '"Pacifico", cursive' }}
          >
            ph
            <div className="absolute hidden w-full h-full transition-all border-2 border-gray-800 pointer-events-none lg:block -right-2 -bottom-2 group-hover:bottom-0 group-hover:right-0"></div>
          </a>
        </Link>
        <nav className="flex items-center justify-end flex-grow gap-3 pr-5 sm:pr-10 md:pr-16 lg:pr-28 md:text-base">
          <Link href="/">
            <a
              className={`relative flex items-center h-10 font-bold cursor-pointer transition-colors hover:text-blue-500 ${
                router.pathname === "/" && "text-blue-500"
              }`}
            >
              home.
            </a>
          </Link>
          <a
            href="https://playground.perhp.com"
            target="_blank"
            rel="noreferrer"
            className={`relative flex items-center h-10 font-bold cursor-pointer transition-colors hover:text-yellow-500`}
          >
            playground.
          </a>
        </nav>
      </header>
      <main className="flex flex-grow sm:px-10 md:px-16 lg:px-28 md:pt-0">
        <div className="flex flex-col flex-grow bg-white">{children}</div>
      </main>
      <footer className="flex items-center px-10 py-8 bg-blue-50 lg:px-28 sm:mx-10 md:mx-16 lg:mx-28">
        <div className="flex flex-col">
          <span className="text-sm font-bold">Pekkel</span>
          <span className="text-xs font-medium text-gray-500">DK-37106666</span>
        </div>
        <div className="flex items-center gap-5 ml-auto text-sm font-bold">
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
        </div>
      </footer>
    </div>
  );
}
export default DefaultLayout;
