import type { Metadata } from "next";
import { site } from "../_data/site";

export const metadata: Metadata = {
  title: `CV | ${site.name}`,
  description: `Curriculum vitae for ${site.name}, ${site.role.toLowerCase()} based in Denmark.`,
  robots: { index: false, follow: true },
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-canvas print:bg-white print:min-h-0">{children}</div>;
}
