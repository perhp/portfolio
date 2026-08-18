import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import { AnalyticsWrapper } from "./_components/analytics";
import { site } from "./_data/site";

import "./global.css";

const display = Familjen_Grotesk({ subsets: ["latin"], variable: "--font-familjen", display: "swap" });

const title = `${site.name} | ${site.role}`;
const description =
  "Freelance full-stack web and mobile developer from Denmark with 10+ years of experience. React, Next.js, Expo (iOS, iPadOS, Android), Vue, Node.js and TypeScript for fintech, biotech, climate tech and SaaS companies. Available for new projects.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: ["freelance web developer", "Next.js developer", "React developer", "Expo developer", "React Native developer", "mobile app developer", "full-stack developer", "Denmark", "Per Hansen"],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable} ${display.variable}`} lang="en">
      <body>
        {children}
        <AnalyticsWrapper />
        <SpeedInsights />
      </body>
    </html>
  );
}
