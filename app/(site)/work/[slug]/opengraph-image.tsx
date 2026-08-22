import { ogContentType, ogImage, ogSize } from "../../../_components/og";
import { caseSlug, cases, getCase } from "../../../_data/cases";
import { site } from "../../../_data/site";

type Params = { slug: string };

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams(): Params[] {
  return cases.map((c) => ({ slug: caseSlug(c.client) }));
}

export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getCase(slug);
  return page ? ogImage({ title: page.client, eyebrow: "Case study", sub: page.tagline }) : ogImage({ title: site.role });
}
