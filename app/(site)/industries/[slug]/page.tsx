import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingTemplate, landingMetadata } from "../../../_components/landing-template";
import { getIndustry, industries, industryProof } from "../../../_data/industries";
import { getLandingPage } from "../../../_data/landing";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustry(slug);
  return page ? landingMetadata(page, "/industries") : {};
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getIndustry(slug);
  if (!page) notFound();

  const related = page.related
    .map(getIndustry)
    .filter((p) => p !== undefined)
    .map((p) => ({ href: `/industries/${p.slug}`, label: p.label, intent: p.intent }));

  const services = page.services
    .map(getLandingPage)
    .filter((p) => p !== undefined)
    .map((p) => ({ href: `/services/${p.slug}`, label: p.label, intent: p.intent }));

  return (
    <LandingTemplate
      page={page}
      basePath="/industries"
      indexLabel="Industries"
      proof={industryProof(page)}
      related={related}
      crossLinks={{ title: "Relevant services", items: services }}
      copy={{
        fitIntro: "I would rather tell you no on the first call than waste your budget. Here is what a good match looks like in this sector.",
        deliverablesTitle: "What I typically build in this sector",
        relatedTitle: "Other industries I work in",
      }}
    />
  );
}
