import { ogContentType, ogImage, ogSize } from "../../../_components/og";
import { getIndustry, industries } from "../../../_data/industries";
import { site } from "../../../_data/site";

type Params = { slug: string };

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams(): Params[] {
  return industries.map(({ slug }) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getIndustry(slug);
  return page ? ogImage({ title: page.headline.join(" "), eyebrow: page.intent, sub: page.description }) : ogImage({ title: site.role });
}
