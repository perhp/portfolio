import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingTemplate, landingMetadata } from "../../../_components/landing-template";
import { industries } from "../../../_data/industries";
import { getLandingPage, landingPages, proofItems } from "../../../_data/landing";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return landingPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  return page ? landingMetadata(page, "/services") : {};
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const related = page.related
    .map(getLandingPage)
    .filter((p) => p !== undefined)
    .map((p) => ({ href: `/services/${p.slug}`, label: p.label, intent: p.intent }));

  const crossLinks = {
    title: "By industry",
    items: industries.filter((i) => i.services.includes(page.slug)).slice(0, 3).map((i) => ({ href: `/industries/${i.slug}`, label: i.label, intent: i.intent })),
  };

  return (
    <LandingTemplate
      page={page}
      basePath="/services"
      indexLabel="Services"
      proof={proofItems(page)}
      related={related}
      crossLinks={crossLinks.items.length ? crossLinks : undefined}
    />
  );
}
