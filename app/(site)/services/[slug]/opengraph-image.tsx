import { ogContentType, ogImage, ogSize } from "../../../_components/og";
import { getLandingPage, landingPages } from "../../../_data/landing";
import { site } from "../../../_data/site";

type Params = { slug: string };

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams(): Params[] {
  return landingPages.map(({ slug }) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  return page ? ogImage({ title: page.headline.join(" "), eyebrow: page.intent, sub: page.description }) : ogImage({ title: site.role });
}
