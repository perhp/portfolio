import { ReactChild } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function DefaultLayout({ children }: { children: ReactChild }) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex">
        <Link href="/">
          <a
            className="relative flex items-center justify-center text-4xl font-extrabold text-white bg-gray-800 w-28 h-28 group"
            style={{ fontFamily: '"Pacifico", cursive' }}
          >
            ph
            <div className="absolute w-full h-full transition-all border-2 border-gray-800 pointer-events-none -right-2 -bottom-2 group-hover:bottom-0 group-hover:right-0"></div>
          </a>
        </Link>
        <nav className="flex items-center justify-end flex-grow pr-28">
          <Link href="/">
            <a
              className={`relative flex items-center h-10 px-5 font-medium cursor-pointer ${
                router.pathname === "/" && "border-b-4 border-blue-100 -mb-1"
              }`}
            >
              home.
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`relative flex items-center h-10 px-5 font-medium cursor-pointer ${
                router.pathname === "/projects" &&
                "border-b-4 border-blue-100 -mb-1"
              }`}
            >
              projects.
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={`relative flex items-center h-10 px-5 ml-5 font-medium text-white bg-gray-800 cursor-pointer ${
                router.pathname === "/contact" &&
                "border-b-4 border-blue-100 -mb-1"
              }`}
            >
              contact.
            </a>
          </Link>
        </nav>
      </header>
      <main className="flex flex-grow px-28">
        <div className="flex flex-grow bg-white">{children}</div>
      </main>
    </div>
  );
}
export default DefaultLayout;
