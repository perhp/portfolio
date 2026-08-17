import { Footer } from "../_components/footer";
import { Header } from "../_components/header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-ink focus:text-white"
      >
        Skip to content
      </a>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
