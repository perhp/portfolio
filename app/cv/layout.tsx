import type { Metadata } from "next";
import { site } from "../_data/site";

const title = `CV | ${site.name}, ${site.role.toLowerCase()}`;
const description = `Printable CV for ${site.name}, senior freelance web and mobile developer based in Denmark. 10+ years with React, Next.js, Vue, Expo / React Native, Node.js and TypeScript. Every engagement with years, stack, languages and contact details.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cv" },
  openGraph: { type: "profile", url: "/cv", title, description, siteName: site.name, locale: "en_US" },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-canvas print:bg-white print:min-h-0">{children}</div>;
}
